import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { Card, Deck } from './components';
import { DeckStore, ThemeStore } from './stores';

const stores = {
  deckStore: new DeckStore(),
  themeStore: new ThemeStore(),
};

@observer
class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <AppContainer>
          <DeckContainer>
            <Deck />
          </DeckContainer>
          <Table className="table">
            {stores.deckStore.table.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit} />
            ))}
          </Table>
        </AppContainer>
      </Provider>
    );
  }
}

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const DeckContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: 400px;
  padding: 200px 0;
`;

const Table = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin: 10px;
  }
`;

export default App;
