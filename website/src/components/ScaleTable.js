import React, { useState, useEffect } from 'react';
import abcjs from 'abcjs';
import NoteC4File from '@site/static/audios/note-c4.mp3';
import NoteD4File from '@site/static/audios/note-d4.mp3';
import NoteE4File from '@site/static/audios/note-e4.mp3';
import NoteF4File from '@site/static/audios/note-f4.mp3';
import NoteG4File from '@site/static/audios/note-g4.mp3';
import NoteA4File from '@site/static/audios/note-a4.mp3';
import NoteB4File from '@site/static/audios/note-b4.mp3';
import NoteC3File from '@site/static/audios/note-c3.mp3';

const ScaleTable = () => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const abcNotation = `
X:1
T:C Major Scale
M:C
K:C
L:1/4
C4 D4 E4 F4 | G4 A4 B4 c4 | c4 B4 A4 G4 | F4 E4 D4 C4 |]
  `;

  const steps = [
    { step: 0, noteFile: NoteC4File, interval: 'Root', abbreviation: '', symbol: '🔵', value: '' },
    { step: 1, noteFile: NoteD4File, interval: 'Whole Step', abbreviation: 'W', symbol: '🟢', value: '1' },
    { step: 2, noteFile: NoteE4File, interval: 'Whole Step', abbreviation: 'W', symbol: '🟢', value: '1' },
    { step: 3, noteFile: NoteF4File, interval: 'Half Step', abbreviation: 'H', symbol: '🔴', value: '1/2' },
    { step: 4, noteFile: NoteG4File, interval: 'Whole Step', abbreviation: 'W', symbol: '🟢', value: '1' },
    { step: 5, noteFile: NoteA4File, interval: 'Whole Step', abbreviation: 'W', symbol: '🟢', value: '1' },
    { step: 6, noteFile: NoteB4File, interval: 'Whole Step', abbreviation: 'W', symbol: '🟢', value: '1' },
    { step: 7, noteFile: NoteC3File, interval: 'Half Step', abbreviation: 'H', symbol: '🔴', value: '1/2' }
  ];

  useEffect(() => {
    const tuneObject = abcjs.renderAbc('abc-render', abcNotation);
    const notes = tuneObject[0].lines.map(line => line.staff[0].voices[0].map(note => note.note ? note.note[0].pitch : null)).flat();
  }, []);

  const handleClick = (noteFile) => {
    const newAudio = new Audio(noteFile);
    if (currentAudio) {
      currentAudio.pause();
    }
    newAudio.play();
    setCurrentAudio(newAudio);
  };

  const playAllNotes = () => {
    let currentStepIndex = 0;

    const playNextNote = () => {
      if (currentStepIndex < steps.length) {
        const audio = new Audio(steps[currentStepIndex].noteFile);
        audio.play();
        setTimeout(() => {
          // audio.pause();
          currentStepIndex++;
          playNextNote();
        }, 600); // Play each note for 550 ms
      }
    };

    playNextNote();
  };

  return (
    <div>
      <div id="abc-render"></div>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <tbody>
          <tr>
            {steps.map((step) => (
              <td key={`step-${step.step}`}>{step.step}</td>
            ))}
            <td>All</td>
          </tr>
          <tr>
            {steps.map((step) => (
              <td key={`interval-${step.step}`}>{step.interval}</td>
            ))}
            <td></td>
          </tr>
          <tr>
            {steps.map((step) => (
              <td key={`abbreviation-${step.step}`}>{step.abbreviation}</td>
            ))}
            <td></td>
          </tr>
          <tr>
            {steps.map((step) => (
              <td key={`value-${step.step}`}>{step.value}</td>
            ))}
            <td></td>
          </tr>
          <tr>
            {steps.map((step) => (
              <td key={`symbol-${step.step}`}>
                <span onClick={() => handleClick(step.noteFile)} style={{ cursor: 'pointer' }}>
                  {step.symbol}
                </span>
              </td>
            ))}
            <td>
              <span onClick={playAllNotes} style={{ cursor: 'pointer' }}>
                🎵
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScaleTable;