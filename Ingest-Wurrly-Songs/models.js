class Artist {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Song {
    constructor(id, title, artist, imagePath, available, wurrlyCount) {
        this.id = id;
        this.title = title;
        this.artist = new Artist(artist.id, artist.name);
        this.imagePath = imagePath;
        this.available = available;
        this.wurrlyCount = wurrlyCount;
    }
}

module.exports = {
    Artist,
    Song
};
