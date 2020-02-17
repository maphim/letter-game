import React from "react";

const Card = ({ style, text, onClick, isHidden, isActive }) => {
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
        <div className="card__face card__face--back">{text}</div>
      </div>
    </div>
  );
};

export default Card;
