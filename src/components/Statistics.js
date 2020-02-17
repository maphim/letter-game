import React from "react";
import { connect } from "react-redux";

const Statistics = ({ point, dispatch }) => {
  return (
    <div className="wrap-statistics">
      <ul className="point">
        <li><span>Won: </span> {point.wonNumber}</li>
        <li><span>Loss: </span>{point.lossNumber}</li>
        <li>Best time in level : </li>
        <ul className="level">
          <li><span>Easy: </span> {point.bestTime.easy || 0} s</li>
          <li><span>Normal: </span> {point.bestTime.normal || 0} s</li>
          <li><span>Hard: </span> {point.bestTime.hard || 0} s</li>
        </ul>
      </ul>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(Statistics);
