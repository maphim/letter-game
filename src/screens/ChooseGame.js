import React from "react";
import { connect } from "react-redux";
import { levelGame } from "../common/entity";
import { addGame, addGameToApp, addCardList } from "../actions";

const ChooseGame = ({ app, chooseLevel }) => {
  if (app.game && app.game.cards) return null;

  const statistics = (
    <div className="statistics">
      <span>Win: 5</span>
      <span>Loss: 12</span>
      <span>
        Best time:
        <u>12s (Easy)</u>,<u>10 (Normal)</u>,<u>12s (Hard)</u>
      </span>
    </div>
  );

  return (
    <div className="game-choose">
      <div className="wrap-levels">
        <h1>Letter Matching Game</h1>
        {statistics}
        <div
          className="btn btn-choose-game"
          onClick={() => chooseLevel("easy")}
        >
          Easy
        </div>
        <div
          className="btn btn-choose-game"
          onClick={() => chooseLevel("normal")}
        >
          Normal
        </div>
        <div
          className="btn btn-choose-game"
          onClick={() => chooseLevel("hard")}
        >
          Hard
        </div>
      </div>
    </div>
  );
};

// xáo danh sách con số như xáo tú lơ khơ
const shuffle = (Arr, num) => {
  let length = Arr.length,
    i = 0;

  if (num > length) {
    num = length;
  }

  do {
    i++;
    let position = Math.floor(Math.random() * length);
    let randValue = Arr[position];
    if (randValue) {
      Arr.splice(position, 1);
      Arr.unshift(randValue);
    }
  } while (i < num);

  return Arr;
};

// tạo danh sách ký tự trong khoảng [0-9A-Z] không trung nhau
const renderCards = ({ numCard }) => {
  let cardValues = [];

  const style = {
    width: `${100 / numCard}%`,
    height: `${100 / numCard}%`
  };

  const maxCardInGrid = Math.pow(numCard, 2);
  const maxCardValue = maxCardInGrid / 2;

  do {
    let text = Math.random()
      .toString(36)
      .substr(3, 1);
    text = text.toUpperCase();
    if (!cardValues.includes(text)) {
      cardValues.push(text);
    }
  } while (cardValues.length < maxCardValue);

  cardValues = shuffle([...cardValues, ...cardValues], 10);

  return cardValues.map((value, i) => ({
    id: i,
    text: value,
    isActive: false,
    isHidden: false,
    style
  }));
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  chooseLevel: level => {
    const levelPicked = levelGame[level];
    dispatch(addGame(levelPicked));
    dispatch(addGameToApp(levelPicked));

    const cards = renderCards(levelPicked);
    dispatch(addCardList(cards));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseGame);
