import React, { useState } from 'react';
import Layout from '@theme/Layout';

// Mock data for songs
const songs = [
    { title: 'Clair de Lune', artist: 'Claude Debussy', genre: 'Classical' },
    { title: 'Fur Elise', artist: 'Ludwig van Beethoven', genre: 'Classical' },
    { title: 'Nocturne Op. 9 No. 2', artist: 'Frédéric Chopin', genre: 'Classical' },
    { title: 'Canon in D', artist: 'Johann Pachelbel', genre: 'Classical' },
    { title: 'The Four Seasons - Spring', artist: 'Antonio Vivaldi', genre: 'Classical' },
];

// Component for displaying the song list
export default function MusicList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const songsPerPage = 10;

    // Filter songs based on search and genre
    const filteredSongs = songs.filter(song => {
        const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre ? song.genre === selectedGenre : true;
        return matchesSearch && matchesGenre;
    });

    // Paginate songs
    const totalPages = Math.ceil(filteredSongs.length / songsPerPage);
    const paginatedSongs = filteredSongs.slice(
        (currentPage - 1) * songsPerPage,
        currentPage * songsPerPage
    );

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleGenreChange = (e) => setSelectedGenre(e.target.value);
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Layout title="Music List" description="Search and filter through a list of songs">
            <main className="min-h-screen bg-gray-50 py-8 px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Music List</h1>

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

                {/* Song List */}
                <ul className="max-w-4xl mx-auto bg-white rounded-lg shadow-md divide-y divide-gray-200">
                    {paginatedSongs.map(song => (
                        <li key={song.id} className="p-4 hover:bg-gray-100">
                            <strong className="text-lg text-gray-800">{song.title}</strong> 
                            <span className="text-gray-600"> by {song.artist}</span>
                            <span className="ml-2 inline-block text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1">
                                {song.genre}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`mx-1 px-4 py-2 border rounded-lg ${
                                currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </main>
        </Layout>
    );
}