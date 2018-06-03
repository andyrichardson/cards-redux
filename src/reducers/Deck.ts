import { DRAW, SHUFFLE } from '../actions';
import { CardEntry, Rank, Suit } from '../typings';

interface ApplicationState {
  deck: CardEntry[];
  table: CardEntry[];
}

export const DeckReducer = (state: ApplicationState, action: any) => {
  if (state === undefined) {
    state = getInitialState();
  }

  switch (action.type) {
    case DRAW:
      return draw(state);

    case SHUFFLE:
      return shuffle(state);

    default:
      return state;
  }
};

/* INITIAL STATE */
function getInitialState() {
  let deck: CardEntry[] = [];
  const table: CardEntry[] = [];

  for (const suit in Suit) {
    // tslint:disable-next-line
    deck = [...deck, ...createSuitCards(Suit[suit] as Suit)];
  }

  return { deck, table };
}

function createSuitCards(suit: Suit) {
  const ranks = [];

  for (const rank in Rank) {
    // tslint:disable-next-line
    ranks.push({ suit, rank: Rank[rank] as Rank });
  }

  return ranks;
}

/* ACTIONS */
function draw(state: ApplicationState) {
  const deck = [...state.deck];
  const table = [...state.table];

  table.push(deck.pop());

  return { deck, table };
}

function shuffle(state: ApplicationState) {
  const deck = [];
  const hat = state.deck.slice(0);

  while (hat.length > 0) {
    const index = Math.round(Math.random() * (hat.length - 1));
    deck.push(hat.splice(index, 1)[0]);
  }

  return { deck, table: state.table };
}
