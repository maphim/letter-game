import React from "react";
import { connect } from "react-redux";
import { pushCardToTemp, activeCard, hiddenCard } from "../actions";

import Card from "./Card";

const Board = ({ cardPrev, cards, pickCard }) => {
  if (!cards) return null;

  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          {...card}
          onClick={() => pickCard(cardPrev, card)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cardPrev: state.app.game && state.app.game.cardPrev,
  cards: state.app.game && state.app.game.cards
});

const mapDispatchToProps = dispatch => ({
  pickCard: (cardPrev, card) => {
    if (!cardPrev) {
      dispatch(activeCard(card.id, true));
      return dispatch(pushCardToTemp(card));
    }

    if (cardPrev.id === card.id) {
      return;
    }

    dispatch(activeCard(card.id, true));

    setTimeout(() => {
      if (cardPrev.text === card.text) {
        dispatch(hiddenCard(cardPrev.id, true));
        dispatch(hiddenCard(card.id, true));
      } else {
        dispatch(activeCard(cardPrev.id, false));
        dispatch(activeCard(card.id, false));
      }

      dispatch(pushCardToTemp(null));
    }, 500);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
