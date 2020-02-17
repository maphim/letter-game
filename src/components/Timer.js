import React from "react";
import { connect } from "react-redux";
import helper from '../common/helper';
import { gameActions, pointActions } from "../actions";

const Timer = ({ game, cards, tick, win, loss }) => {

  let {duration, status} = game;

  let min = helper.formatTime(Math.floor(duration / 60));
  let second = helper.formatTime(duration % 60);

  // tim danh sach card hidden
  let cardInList = cards.filter(card => card.isHidden === false);

  if (status === 0 && cardInList.length === 0 && duration > 0) {
    win(game);
  }

  if (status === 0 && duration === 0) {
    loss();
  }

  if (status === 0 && duration > 0) {
    setTimeout(() => {
      tick(game.duration)
    }, 1000)
  }

  return (
    <span>
      <span>{min}</span>:<span>{second}</span>
    </span>
  );

};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  tick: duration => {
    dispatch(gameActions.updateDuration(duration - 1))
  },
  win: game => {
    console.log('duration --> ', game.duration);
    dispatch(gameActions.updateStatus(1));
    dispatch(pointActions.increaseWin())
    dispatch(pointActions.setBestTime(game.level, game.duration))
    
  },
  loss: () => {
    dispatch(gameActions.updateStatus(2));
    dispatch(pointActions.increaseLoss())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
