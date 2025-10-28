import { createContext, useContext } from 'react';

export const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  
  if (context === undefined) {
    throw new Error('useAudio debe ser usado dentro de un AudioProvider');
  }
  
  return context;
};