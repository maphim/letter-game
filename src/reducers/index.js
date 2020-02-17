import { combineReducers } from "redux";

import matchs from "./matchs";
import game from './game';
import cards from './cards';
import point from "./point";

export default combineReducers({
  matchs,
  game,
  cards,
  point
});
