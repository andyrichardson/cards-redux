import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { ThemeStore } from '../stores';
import { Rank, Suit } from '../typings';

const SuitImages = {
  Club: require('../images/club.svg'),
  Diamond: require('../images/diamond.svg'),
  Heart: require('../images/heart.svg'),
  Spade: require('../images/spade.svg'),
};

interface CardProps {
  rank: Rank;
  suit: Suit;
  themeStore?: ThemeStore;
}

interface CardState {
  visible: boolean;
}

@inject('themeStore')
@observer
export class Card extends React.Component<CardProps, CardState> {
  public props: CardProps;
  public state: CardState;

  public render() {
    return (
      <CardBase>
        <SvgBase xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 328, 510">
          {this.getCorner()}
          {this.getDescription()}
          {this.getCorner(true)}
        </SvgBase>
      </CardBase>
    );
  }

  private get color() {
    const isBlack =
      this.props.suit === Suit.CLUB || this.props.suit === Suit.SPADE;

    const color = isBlack ? 'black' : 'red';
    return this.props.themeStore.color[color];
  }

  private getCorner(inverted = false) {
    const abbreviation = isNaN(parseInt(this.props.rank))
      ? this.props.rank[0]
      : this.props.rank;
    const transform = inverted ? 'rotate(180, 164, 255)' : '';

    return (
      <>
        <text x="5" y="35" fill={this.color} transform={transform}>
          {abbreviation}
        </text>
        <image
          x="0"
          y="45"
          width="32"
          height="32"
          xlinkHref={SuitImages[this.props.suit]}
          fill="red"
          transform={transform}
        />
      </>
    );
  }

  private getDescription() {
    return (
      <>
        <text x="164" y="220" textAnchor="middle" fill={this.color}>
          {this.props.rank} of
        </text>
        <text x="164" y="260" textAnchor="middle" fill={this.color}>
          {`${this.props.suit}s`}
        </text>
      </>
    );
  }
}

const CardBase = styled.div`
  display: inline-block;
  background: #aaa;
  border-radius: 7px;
  padding: 20px;

  min-width: 200px;
`;

const SvgBase = styled.svg`
  background: #aaa;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  width: 100%;
`;
