import React, { useState } from 'react';
import Layout from '@theme/Layout';

const songs = [
    { id: 2, title: 'Fur Elise', artist: 'Ludwig van Beethoven', genre: 'Classical', cover: 'fur-elise.jpg', audio: 'fur-elise.mp3' },
    { id: 3, title: 'Nocturne Op. 9 No. 2', artist: 'Frédéric Chopin', genre: 'Classical', cover: 'nocturne-op-9-no-2.jpg', audio: 'nocturne-op-9-no-2.mp3' },
    { id: 4, title: 'Canon in D', artist: 'Johann Pachelbel', genre: 'Classical', cover: 'canon-in-d.jpg', audio: 'canon-in-d.mp3' },
    { id: 5, title: 'The Four Seasons - Spring', artist: 'Antonio Vivaldi', genre: 'Classical', cover: 'four-seasons-spring.jpg', audio: 'four-seasons-spring.mp3' },
    { id: 53, title: 'Clair de Lune', artist: 'Claude Debussy', genre: 'Classical', cover: 'clair-de-lune.jpg', audio: 'clair-de-lune.mp3' },
    { id: 724, title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven', genre: 'Classical', cover: 'moonlight-sonata.jpg', audio: 'moonlight-sonata.mp3' },
    { id: 12, title: 'Turkish March', artist: 'Wolfgang Amadeus Mozart', genre: 'Classical', cover: 'turkish-march.jpg', audio: 'turkish-march.mp3' },
    { id: 13, title: "Pirates of the Caribbean", artist: 'Klaus Badelt', genre: 'Soundtrack', cover: 'pirates-of-the-caribbean.jpg', audio: 'pirates-of-the-caribbean.mp3' },
];

export default function MusicList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentAudio, setCurrentAudio] = useState(null);

    const filteredSongs = songs.filter(song => {
        const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre ? song.genre === selectedGenre : true;
        return matchesSearch && matchesGenre;
    });

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleGenreChange = (e) => setSelectedGenre(e.target.value);

    const playAudio = (audioUrl) => {
        if (currentAudio) {
            currentAudio.pause(); // Pause any currently playing audio
        }
        const audio = new Audio(`../audios/${audioUrl}`);
        setCurrentAudio(audio);
        audio.play();
    };

    return (
        <Layout title="Music List" description="Search and filter through a list of songs">
            <main className="min-h-screen bg-gray-50 py-8 px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Music Showcase</h1>

                {/* Search and Filter */}
                <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search by song title"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="flex-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">All Genres</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Classical">Classical</option>
                    </select>
                </div>

                {/* Song Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {filteredSongs.map(song => (
                        <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img src={`../images/${song.cover}`} alt={song.title} className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800">{song.title}</h2>
                                <p className="text-gray-600">by {song.artist}</p>
                                <span className="inline-block text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1">
                                    {song.genre}
                                </span>
                            </div>
                            <button
                                onClick={() => playAudio(song.audio)}
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                            >
                                ▶ Play
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}