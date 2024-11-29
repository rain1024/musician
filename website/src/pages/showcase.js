import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import songs from '@site/src/components/MusicData';
import { PlayIcon, PauseIcon, XMarkIcon } from '@heroicons/react/24/solid';

// SongCard Component
function SongCard({ song, onPlay, onPause, nowPlaying }) {
    const isPlaying = nowPlaying?.id === song.id && nowPlaying.isPlaying;

    const handleTogglePlay = () => {
        if (isPlaying) {
            onPause();
        } else {
            onPlay(song.audio, song);
        }
    };

    return (
        <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={`../images/${song.cover}`}
                    alt={song.title}
                    className="w-full h-60 object-cover"
                />
                <button
                    onClick={handleTogglePlay}
                    className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold ${
                        isPlaying ? 'opacity-100' : 'opacity-0'
                    } hover:opacity-100 transition-opacity duration-300`}
                >
                    {isPlaying ? (
                        <PauseIcon className="h-8 w-8" />
                    ) : (
                        <PlayIcon className="h-8 w-8" />
                    )}
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{song.title}</h2>
                <p className="text-gray-600">by {song.artist}</p>
                {song.composer && (
                    <p className="text-gray-500">Composer: {song.composer}</p>
                )}
                <span className="inline-block text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1">
                    {song.genre}
                </span>
            </div>
        </div>
    );
}

// Main MusicList Component
export default function MusicList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentAudio, setCurrentAudio] = useState(null);
    const [nowPlaying, setNowPlaying] = useState(null);
    const [showAudioBar, setShowAudioBar] = useState(false);

    const filteredSongs = songs.filter((song) => {
        const query = searchQuery.toLowerCase();
        const matchesTitle = song.title.toLowerCase().includes(query);
        const matchesArtist = song.artist?.toLowerCase().includes(query);
        const matchesGenre = selectedGenre ? song.genre === selectedGenre : true;
        return (matchesTitle || matchesArtist) && matchesGenre;
    });

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleGenreChange = (e) => setSelectedGenre(e.target.value);

    const playAudio = (audioUrl, song) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const audio = new Audio(`../audios/${audioUrl}`);
        setCurrentAudio(audio);
        setNowPlaying({ ...song, isPlaying: true });
        setShowAudioBar(true);
        audio.play();
    };

    const pauseAudio = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        setNowPlaying((prev) => ({ ...prev, isPlaying: false }));
    };

    const playRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        playAudio(randomSong.audio, randomSong);
    };

    useEffect(() => {
        if (currentAudio) {
            const handleEnd = () => {
                setNowPlaying(null);
                setShowAudioBar(false);
            };

            currentAudio.addEventListener('ended', handleEnd);

            return () => {
                currentAudio.removeEventListener('ended', handleEnd);
            };
        }
    }, [currentAudio]);

    const toggleAudio = () => {
        if (currentAudio) {
            if (currentAudio.paused) {
                currentAudio.play();
                setNowPlaying((prev) => ({ ...prev, isPlaying: true }));
            } else {
                pauseAudio();
            }
        }
    };

    const closeAudioBar = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        setNowPlaying(null);
        setShowAudioBar(false);
    };

    return (
        <Layout title="Music List" description="Search and filter through a list of songs">
            <main className="min-h-screen bg-gray-50 py-8 px-4">
                {/* Fixed Audio Controller */}
                {showAudioBar && nowPlaying && (
                    <div
                        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4 flex items-center justify-between"
                        style={{ zIndex: 9999 }}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`../images/${nowPlaying.cover}`}
                                alt="Cover"
                                className="h-16 w-16 rounded-lg shadow-md"
                            />
                            <div>
                                <h4 className="font-bold text-lg">{nowPlaying.title}</h4>
                                <p className="text-sm text-gray-200">{nowPlaying.artist}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleAudio}
                                className="w-12 h-12 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:ring-2 focus:ring-blue-400"
                            >
                                {nowPlaying?.isPlaying ? (
                                    <PauseIcon className="h-6 w-6" />
                                ) : (
                                    <PlayIcon className="h-6 w-6" />
                                )}
                            </button>
                            <button
                                onClick={closeAudioBar}
                                className="w-9 h-9 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}

                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-16">
                    Music Showcase
                </h1>

                {/* Search and Filter */}
                <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search songs..."
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
                        <option value="Classical">Classical</option>
                        <option value="New Age">New Age</option>
                        <option value="Soundtrack">Soundtrack</option>
                    </select>
                    <button
                        onClick={playRandomSong}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-400"
                    >
                        Surprise Me
                    </button>
                </div>

                {/* Song Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {filteredSongs.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                            onPlay={playAudio}
                            onPause={pauseAudio}
                            nowPlaying={nowPlaying}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}