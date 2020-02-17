import React from "react";
import { connect } from "react-redux";
import { updateDurationGame, updateStatusGame } from "../actions";

const Timer = ({ app, dispatch }) => {
  if (!app.game) return null;

  const formatTime = num => {
    let len = num.toString().length;
    if (len === 1) return `0${num}`;
    else return num;
  };

  let { duration } = app.game;

  let min = formatTime(Math.floor(duration / 60));
  let second = formatTime(duration % 60);

  if (duration > 1) {
    setTimeout(function() {
      dispatch(updateDurationGame(duration - 1));
    }, 1000);
  } else {
    setTimeout(function() {
      dispatch(updateDurationGame(0));
      dispatch(updateStatusGame(1));
    }, 1000);
  }

  return (
    <span>
      <span>{min}</span>:<span>{second}</span>
    </span>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Timer);
