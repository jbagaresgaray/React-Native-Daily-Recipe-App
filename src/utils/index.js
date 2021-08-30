import {ALPHABETS} from '../constants';

export const generateRandomLetter = () => {
  return ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
};
