import React, { createContext, useState, useRef, useContext } from 'react';
import audioFile from '../assets/AC_AudioSitio.mp3'; // Renombrado para evitar conflicto

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  
  const [playing, setPlaying] = useState(false);
  
  const audioRef = useRef(new Audio(audioFile)); 

  const playFromStart = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
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

// 3. Crear un Hook personalizado para facilitar el uso
export const useAudio = () => {
  return useContext(AudioContext);
};