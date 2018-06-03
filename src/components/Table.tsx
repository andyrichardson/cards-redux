import * as React from 'react';
import styled from 'styled-components';
import { CardEntry } from '../typings';
import { Card } from './Card';

interface TableProps {
  cards: CardEntry[];
}

export class Table extends React.Component<TableProps> {
  public render() {
    return (
      <TableContainer className="table">
        {this.props.cards.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} />
        ))}
      </TableContainer>
    );
  }
}

const TableContainer = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin: 10px;
  }
`;
