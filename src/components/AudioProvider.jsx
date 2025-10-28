import React, { useState, useRef } from 'react';
// Importa el Contexto que creaste en el otro archivo
import { AudioContext } from './AudioContext';
import audioFile from '../assets/AC_AudioSitio.mp3';

export const AudioProvider = ({ children }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioFile));

    audioRef.current.loop = true;

    const playFromStart = () => {
        const audio = audioRef.current;
        audio.currentTime = 0; // Reinicia al inicio
        audio.play();
        setPlaying(true);
    }

    const togglePlay = () => {
        const audio = audioRef.current;
        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    };

    // Objeto de valor que se pasará al contexto
    const contextValue = {
        playing,
        togglePlay,
        playFromStart
    };

    return (
        <AudioContext.Provider value={contextValue}>
            {children}
        </AudioContext.Provider>
    );
};