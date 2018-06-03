export const DRAW = 'DRAW';
export const SHUFFLE = 'SHUFFLE';

export const shuffleDeck = () => ({
  type: SHUFFLE,
});

export const drawCard = () => ({
  type: DRAW,
});
