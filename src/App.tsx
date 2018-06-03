import * as React from 'react';
import styled from 'styled-components';
import { Deck, Table } from './containers';

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Deck />
        <Table />
      </AppContainer>
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

export default App;
