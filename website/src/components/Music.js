import React from 'react';
import PropTypes from 'prop-types';

const chordNotes = {
  C: ['C', 'E', 'G'],
  Cm: ['C', 'Eb', 'G'],
  C7: ['C', 'E', 'G', 'Bb'],
  Cm7: ['C', 'Eb', 'G', 'Bb'],
  // Add more chords as needed
};

const Music = ({ chord }) => {
  const notes = chordNotes[chord] || [];

  return (
    <div>
      <h2>{chord} chord</h2>
      <div>
        {notes.length ? (
          <div>
            <p>Notes: {notes.join(' - ')}</p>
            <div className="piano">
              {['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'].map((note, index) => (
                <div
                  key={index}
                  className={`key ${notes.includes(note) ? 'active' : ''}`}
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: note.length === 1 ? '80px' : '60px',
                    background: notes.includes(note) ? 'red' : 'white',
                    border: '1px solid black',
                    margin: '1px',
                  }}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Chord not found</p>
        )}
      </div>
    </div>
  );
};

Music.propTypes = {
  chord: PropTypes.string.isRequired,
};

export default Music;