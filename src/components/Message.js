import React from "react";
import { connect } from "react-redux";
import { initApp } from "../actions";

const Message = ({ app, goBack }) => {
  if (app.game.status === 0) return null;

  let message = `You are losser!`;
  if (app.game.status === 1) {
    message = `Congratulations! you are the winner`;
  }

  return (
    <div className="wrap-message">
      <div className="message">
        {message}
        <div className="btn-restart" onClick={() => goBack()}>
          Restart Game
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(initApp({}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
