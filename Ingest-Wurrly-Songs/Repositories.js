class ArtistRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS artists (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT)`;
        return this.dao.run(sql);
    }

    create(id, name) {
        return this.dao.run(
            'INSERT INTO artists (id, name) VALUES (?,?)',
            [id, name]);
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM artists WHERE id = ?`,
            [id])
    }
}

class SongRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS songs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          imagePath TEXT,
          available INTEGER DEFAULT 0,
          wurrlyCount INTEGER,
          artistId INTEGER,
          CONSTRAINT song_fk_artistId FOREIGN KEY (artistId)
            REFERENCES artists(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
        return this.dao.run(sql);
    }

    create(id, title, imagePath, available, wurrlyCount, artist) {
        return this.dao.run(
            'INSERT INTO songs (id, title, imagePath, available, wurrlyCount, artistId) VALUES (?,?,?,?,?,?)',
            [id, title, imagePath, available, wurrlyCount, artist.id]);
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM songs WHERE id = ?`,
            [id])
    }

}

module.exports = {
    ArtistRepository,
    SongRepository
};
