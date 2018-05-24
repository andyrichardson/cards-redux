import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Card, Deck } from './components';
import { DeckStore, ThemeStore } from './stores';
import { Rank, Suit } from './typings';

const stores = {
  deckStore: new DeckStore(),
  themeStore: new ThemeStore(),
};

@observer
class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <>
          <Deck />
          <Card rank={Rank.EIGHT} suit={Suit.HEART} />
        </>
      </Provider>
    );
  }
}

export default App;
