
const AppDAO = require('../dao');


const should = require('should');
const ArtistRepository = require('../Repositories').ArtistRepository;
const SongRepository = require('../Repositories').SongRepository;

let artistRepo, songRepo;

describe('repository', () => {
    describe('daos', () => {
        before((done) => {
            const dao = new AppDAO();
            artistRepo = new ArtistRepository(dao);
            songRepo = new SongRepository(dao);

            artistRepo.createTable().then(() => {
                songRepo.createTable();
                done();
            })
            .catch((err) => {
                done(err);
            });
        });

        it('adds an artist', async() => {
            await artistRepo.create(1, 'sri');

            const artist = await artistRepo.getById(1);
            should.exist(artist);
            should(artist.id).equal(1);
        });
    });
});
