export const DRAW = 'DRAW';
export const SHUFFLE = 'SHUFFLE';
export const RESET = 'RESET';

export const shuffleDeck = () => ({
  type: SHUFFLE,
});

export const drawCard = () => ({
  type: DRAW,
});

export const resetDeck = () => ({
  type: RESET,
});
