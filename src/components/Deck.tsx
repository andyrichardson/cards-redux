import * as React from 'react';
import styled from 'styled-components';

export class Deck extends React.Component<any> {
  public render() {
    return (
      <>
        <DeckImage
          src={require('../images/deck.svg')}
          onClick={this.props.drawCard}
        />
        <ButtonContainer>
          <Button
            src={require('../images/shuffle.svg')}
            onClick={this.props.shuffleDeck}
          />
          <Button
            src={require('../images/reset.svg')}
            onClick={this.props.resetDeck}
          />
        </ButtonContainer>
      </>
    );
  }
}

const DeckImage = styled.img`
  width: 200px;
`;

const ButtonContainer = styled.div``;

const Button = styled.img`
  opacity: 0.7;
  padding: 20px;
  transition: opacity 250ms;
  width: 40px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &.disabled {
    opacity: 0.2;
  }
`;
