import * as React from 'react';
import styled from 'styled-components';
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
}

interface CardState {
  visible: boolean;
}

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

    return isBlack ? '#555555' : '#EA5656';
  }

  private getCorner(inverted = false) {
    const abbreviation = isNaN(parseInt(this.props.rank))
      ? this.props.rank[0]
      : this.props.rank;
    const transform = inverted ? 'rotate(180, 164, 255)' : '';

    return (
      <>
        <text
          x="30"
          y="48"
          textAnchor="middle"
          fill={this.color}
          transform={transform}
        >
          {abbreviation}
        </text>
        <image
          x="17"
          textAnchor="middle"
          y="58"
          width="24"
          height="24"
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
        <text
          x="164"
          y="220"
          textAnchor="middle"
          fill={this.color}
          style={{ fontWeight: 400 }}
        >
          {this.props.rank} of
        </text>
        <text
          x="164"
          y="260"
          textAnchor="middle"
          fill={this.color}
          style={{ fontWeight: 600 }}
        >
          {`${this.props.suit}s`}
        </text>
      </>
    );
  }
}

const CardBase = styled.div`
  display: inline-block;
  background: #fff;
  border-radius: 3%;
  width: 200px;
`;

const SvgBase = styled.svg`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  width: 100%;
`;
