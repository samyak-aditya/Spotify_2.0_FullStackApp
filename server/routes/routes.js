import express from 'express';
import  fetchAlbumData  from '../spotifyCore/fetchAlbumData.js';
import fetchTrackData  from '../spotifyCore/fetchTrackData.js';
import  fetchArtistData  from '../spotifyCore/fetchArtistData.js';
import  fetchPlaylistData from '../spotifyCore/fetchPlaylistData.js';
import fetchGenreData from '../spotifyCore/fetchGenreData.js';

const router = express.Router();

router.get('/albums', async (req, res, next) => {
  try {
    const albumData = await fetchAlbumData();
    console.log(albumData);
    res.json(albumData);
  } catch (error) {
    next(error);
  }
});

router.get('/artists', async (req, res, next) => {
  try {
    const artistData = await fetchArtistData();
    console.log("++++++++++++++++");
    console.log(artistData);
    console.log("++++++++++++++++");
    res.json(artistData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/tracks', async (req, res, next) => {
  try {
    const trackData = await fetchTrackData();
    console.log("--------------------------------");
    console.log(trackData);
    console.log("--------------------------------");
    res.json(trackData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/playlists', async (req, res, next) => {
  try {
    const playlistData = await fetchPlaylistData();
    console.log("****************");
    console.log(playlistData);
    console.log("****************");
    res.json(playlistData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/genre', async (req, res, next) => {
  try {
    const genreData = await fetchGenreData();
    console.log("#################");
    console.log(genreData);
    console.log("#################");
    res.json(genreData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;