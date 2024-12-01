import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { PlayIcon, PauseIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

// Lab data
const labs = [
    { id: 1, term: "C Major Scale", description: "A major scale with the notes C, D, E, F, G, A, and B.", cover: "c-major.jpg", audio: "c-major.mp3" },
    { id: 2, term: "Chord Progression", description: "A sequence of chords played in a specific order to establish a harmonic foundation.", cover: "chord-progression.jpg", audio: "../audios/chord_progression.mp3" },
    { id: 3, term: "Scale", description: "A series of notes arranged by ascending or descending pitch, often forming the basis for melodies and harmonies.", cover: "../images/scale.jpg", audio: "../audios/scale.mp3" },
    { id: 4, term: "Arpeggio", description: "Notes of a chord played sequentially rather than simultaneously.", cover: "../images/arpeggio.jpg", audio: "../audios/arpeggio.mp3" },
    { id: 5, term: "Interval", description: "The distance between two musical notes.", cover: "../images/interval.jpg", audio: "../audios/interval.mp3" },
];

// LabCard component
function LabCard({ lab, onPlay, onPause, nowPlaying }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const isPlaying = nowPlaying?.id === lab.id && nowPlaying.isPlaying;

    const handleTogglePlay = () => {
        if (isPlaying) {
            onPause();
        } else {
            onPlay(lab.audio, lab);
        }
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                key={lab.id}
                className="group relative bg-gradient-to-r from-white via-gray-100 to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
                <div className="relative rounded-t-xl overflow-hidden">
                    <img
                        src={`../images/${lab.cover}`}
                        alt={lab.term}
                        className="w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
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
                        className="absolute top-3 right-3 p-2 rounded-full shadow-md bg-gray-800 bg-opacity-10 hover:bg-red-500 hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                        aria-label="More Info"
                    >
                        <InformationCircleIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">{lab.term}</h2>
                    <p className="text-gray-700 mt-1 truncate">{lab.description}</p>
                </div>
            </div>
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
                >
                    <div className="relative bg-white w-11/12 max-w-xl p-6 rounded-xl shadow-xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-red-700 transition duration-200"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <img
                            src={`../images/${lab.cover}`}
                            alt={lab.term}
                            className="w-full h-60 object-cover rounded-xl mb-4"
                        />
                        <h2 className="text-3xl font-bold text-gray-900">{lab.term}</h2>
                        <p className="text-gray-700 mt-4">{lab.description}</p>
                        <audio controls className="w-full mt-6">
                            <source src={`../audios/${lab.audio}`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            )}
        </>
    );
}

// Main MusicLab component
export default function MusicLab() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentAudio, setCurrentAudio] = useState(null);
    const [nowPlaying, setNowPlaying] = useState(null);

    const filteredLabs = labs.filter((lab) =>
        lab.term.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const playAudio = (audioUrl, lab) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const audio = new Audio(`../audios/${audioUrl}`);
        setCurrentAudio(audio);
        setNowPlaying({ ...lab, isPlaying: true });
        audio.play();
    };

    const pauseAudio = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        setNowPlaying((prev) => ({ ...prev, isPlaying: false }));
    };

    return (
        <Layout title="Labs" description="Music Labs">
            <main className="min-h-screen bg-gray-50 py-8 px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-16">
                    Music Labs
                </h1>
                <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search musical labs..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="flex-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {filteredLabs.map((lab) => (
                        <LabCard
                            key={lab.id}
                            lab={lab}
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