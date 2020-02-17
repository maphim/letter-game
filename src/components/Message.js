import React from "react";
import { connect } from "react-redux";
import { gameActions, cardActions, matchsActions } from "../actions";

const Message = ({ game, resetGame }) => {

  let { status } = game;

  if (status === 0) return null;

  let remainTime = (<div><small>Remain time : {game.duration}s</small></div>);

  let message = `You are losser!`;
  if (game.status === 1) {
    message = `Congratulations! you are the winner`;
  }

  return (
    <div className="wrap-message">
      <div className="message">
        {message}
        {game.status === 1 ? remainTime : null}
        <div className="btn-restart" onClick={() => resetGame(game)}>
          Restart Game
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  resetGame: (game) => {
    dispatch(matchsActions.add(game));
    dispatch(gameActions.reset())
    dispatch(cardActions.resetList())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
