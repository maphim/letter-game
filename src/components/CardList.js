import React from "react";
import { connect } from "react-redux";
import { gameActions, cardActions } from "../actions";

import Card from "./Card";

const CardList = ({ game, cards, pickCard }) => {

  let { cardPicked } = game;

  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          {...card}
          onClick={() => pickCard(cardPicked, card)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

  pickCard: (cardPicked, card) => {

    let [cardPrev, cardNext] = cardPicked;

    // khong kiem tra chinh no
    if (cardPrev && cardPrev.id === card.id) {
      return;
    }

    // cardNext: la the thu 3
    if (!cardNext) {
      dispatch(cardActions.active(card.id, true));
      dispatch(gameActions.addCardToTemp(card));
    } else {
      return;
    }

    // ton tai the truoc do ma giong gia tri thi an 2 the di
    // ton tai the truoc do ma khac gia tri thi up 2 the xuong
    if (cardPrev) {
      setTimeout(() => {
        if (cardPrev.value === card.value) {
          dispatch(cardActions.hide(cardPrev.id, true));
          dispatch(cardActions.hide(card.id, true));
        } else {
          dispatch(cardActions.active(cardPrev.id, false));
          dispatch(cardActions.active(card.id, false));
        }
      }, 400)
      dispatch(gameActions.resetTempCard());
    }

  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
