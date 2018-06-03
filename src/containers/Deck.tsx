import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { drawCard, resetDeck, shuffleDeck } from '../actions';
import { Deck as DeckComponent } from '../components';
import { ApplicationState } from '../typings';

const mapStateToProps = (state: ApplicationState) => ({ cards: state.deck });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  drawCard: () => dispatch(drawCard()),
  resetDeck: () => dispatch(resetDeck()),
  shuffleDeck: () => dispatch(shuffleDeck()),
});

export const Deck = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckComponent);
