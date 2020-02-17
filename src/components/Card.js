import React from "react";
import { connect } from "react-redux";

const Card = ({ game, value, onClick, isHidden, isActive }) => {

  const style = {
    width: `${100 / game.numInRow}%`,
    height: `${100 / game.numInRow}%`
  }

  const contentClass = (() => {
    let className = "card__content";
    if (isHidden) {
      return `${className} hidden`;
    }
    if (isActive) {
      return `${className} active`;
    }
    return className;
  })();

  return (
    <div className="card" style={style} onClick={onClick}>
      <div className={contentClass}>
        <div className="card__face card__face--front" />
        <div className="card__face card__face--back">{value}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Card);
