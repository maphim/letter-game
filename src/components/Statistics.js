import React from "react";
import { connect } from "react-redux";

const Statistics = ({ point, dispatch }) => {
  return (
    <div className="wrap-statistics">
      <div className="point">
        <div className="box__statistic box__statistic--win">
          <span className="key">Win:</span>
          <span className="value">{point.wonNumber}</span>
        </div>
        <div className="box__statistic box__statistic--besttime">
          <span className="key">Easy</span>
          <span className="value">{point.bestTime.easy || 0} <span className="unit">s</span></span> 
        </div>
        <div className="box__statistic box__statistic--besttime">
          <span className="key">Normal</span><span className="value">{point.bestTime.normal || 0} <span className="unit">s</span></span>
        </div>
        <div className="box__statistic box__statistic--besttime">
          <span className="key">Hard</span><span className="value">{point.bestTime.hard || 0} <span className="unit">s</span></span>
        </div>
        <div className="box__statistic box__statistic--loss">
          <span className="key">Loss:</span>
          <span className="value">{point.lossNumber}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(Statistics);
