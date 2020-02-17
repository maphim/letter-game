import React from "react";
import { connect } from "react-redux";
import { initApp, clearGameInApp } from "../actions";

import Message from "../components/Message";
import Board from "../components/Board";
import BoardInfo from "../components/BoardInfo";

const PlayGame = ({ app, goBack }) => {
  if (!app.game || !app.game.cards) return null;

  return (
    <div className="wrap-gameplay">
      <Message />
      <div className="game-info">
        <span onClick={() => goBack(app)} className="go-back">
          {"<"} Back
        </span>
        <BoardInfo />
      </div>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state -> ", state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  goBack: ({ game }) => {
    dispatch(initApp({}));
    dispatch(clearGameInApp(game));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayGame);
