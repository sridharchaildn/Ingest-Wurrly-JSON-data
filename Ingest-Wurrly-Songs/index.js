require('dotenv').config();

const axios = require('axios');
const models = require('./models');
const logger = require('./logger');
const AppDAO = require('./dao');
const ArtistRepository = require('./Repositories').ArtistRepository;
const SongRepository = require('./Repositories').SongRepository;

// Configure the HTTP request
const http = axios.create({
    baseURL: process.env.SONGS_DATA_URL,
    timeout: process.env.HTTP_API_TIMEOUT,
    responseType: 'json',
});

function getSongs() {
    logger.info(`Getting songs from ${process.env.SONGS_DATA_URL}`);
    return http.get().then(response => {
        let songs = [];
        response.data.items.forEach(item => {
           songs.push(new models.Song(item.id, item.title, item.artist, item.imagePath, item.available, item.wurrlyCount));
        });
        return songs
    });
}

async function save(songs, artistRepo, songRepo) {
    for(i=0;i<songs.length;++i) {
        const song = songs[i];
        const artist = song.artist;

        const savedArtist = await artistRepo.getById(artist.id);
        if (!savedArtist) {
            await artistRepo.create(artist.id, artist.name);
        }
        await songRepo.create(song.id, song.title, song.imagePath, song.available, song.wurrlyCount, song.artist);
    }
}

async function main() {
    const dao = new AppDAO();
    const artistRepo = new ArtistRepository(dao);
    const songRepo = new SongRepository(dao);

    await artistRepo.createTable();
    await songRepo.createTable();

    const songs = await getSongs();

    await save(songs, artistRepo, songRepo);

    // On the fly test cases....
    const sa = await artistRepo.getById(435);
    logger.info(`Inserted artist by id 435 --> [${sa.id}, ${sa.name}]`);
    const ss = await songRepo.getById(1332);
    logger.info(`${ss.id}, ${ss.title}, ${ss.artistId}`);

    // At end close
    dao.close();
}

main();
