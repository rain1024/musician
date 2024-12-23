import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import songs from '@site/src/components/MusicData';
import { PlayIcon, PauseIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

// SongCard Component
import { useState } from "react";

function SongCard({ song, onPlay, onPause, nowPlaying }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const isPlaying = nowPlaying?.id === song.id && nowPlaying.isPlaying;

    const handleTogglePlay = () => {
        if (isPlaying) {
            onPause();
        } else {
            onPlay(song.audio, song);
        }
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                key={song.id}
                className="group relative bg-gradient-to-r from-white via-gray-100 to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
                <div className="relative rounded-t-xl overflow-hidden">
                    <img
                        src={`../images/${song.cover}`}
                        alt={song.title}
                        className="w-full h-60 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <button
                            onClick={handleTogglePlay}
                            className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-red-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <PauseIcon className="h-8 w-8 text-white" />
                            ) : (
                                <PlayIcon className="h-8 w-8 text-white" />
                            )}
                        </button>
                    </div>
                    <button
                        onClick={openModal}
                        className="absolute top-3 right-3 p-2 rounded-full shadow-md bg-gray-800 bg-opacity-10 hover:bg-red-500 hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex items-center space-x-2"
                        aria-label="More Info"
                    >
                        <InformationCircleIcon
                            className="h-4 w-4 text-white transition-transform duration-300 ease-in-out cursor-pointer"
                        />
                    </button>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">
                        {song.title}
                    </h2>
                    <p className="text-gray-700 mt-1 truncate">by {song.artist}</p>
                    {song.composer && (
                        <p className="text-sm text-gray-500 mt-1 truncate">
                            Composer: {song.composer}
                        </p>
                    )}
                    <div className="flex items-center mt-3">
                        <span className="inline-block text-xs font-medium text-gray-700 bg-gray-200 rounded-full px-3 py-1">
                            {song.genre}
                        </span>
                    </div>
                </div>
            </div>
            {isModalOpen && (
    <div
        className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-100 backdrop-blur-sm"
        style={{ zIndex: 99999 }}
    >
        <div className="relative bg-white bg-opacity-80 w-screen h-screen flex flex-col items-center justify-center p-8">
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-red-700 transition duration-200"
                aria-label="Close"
            >
                ✕
            </button>
            <div className="flex flex-col items-center h-full overflow-auto">
                <img
                    src={`../images/${song.cover}`}
                    alt={song.title}
                    className="w-full max-w-xl h-80 object-cover rounded-xl shadow-lg mb-6"
                />
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">{song.title}</h2>
                <p className="text-xl text-gray-700 text-center mb-4">by {song.artist}</p>
                {song.composer && (
                    <p className="text-lg text-gray-600 italic mb-4">Composer: {song.composer}</p>
                )}
                <p className="text-lg text-gray-700 mb-4">Genre: {song.genre}</p>
                <audio controls className="w-full max-w-xl">
                    <source src={`../audios/${song.audio}`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className="mt-6">
                    <button
                        onClick={closeModal}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
)}
        </>
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
        <Layout title="Music Showcase" description="Search and filter through a list of songs">
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
                        <option value="Pop">Pop</option>
                        <option value="New Age">New Age</option>
                        <option value="Soundtrack">Soundtrack</option>
                        <option value="K-Pop">K-Pop</option>
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