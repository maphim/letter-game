import React from "react";
import { connect } from "react-redux";

import Timer from "./Timer";

const BoardInfo = ({ game, dispatch }) => {
  return (
    <div className="wrap-info">
      <div className="box__info box_info--level">
        <div>
          <span className="label"> Level: </span>
          <span className="value">{game.level}</span>
        </div>
      </div>
      <div className="box__info box_info--time">
        <div>
          <span className="label"> Time: </span>
          <span className="value">
            <Timer/>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(BoardInfo);
