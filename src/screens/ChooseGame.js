import React from "react";
import { connect } from "react-redux";
import { gameActions } from '../actions';

import Statistics from '../components/Statistics';

const ChooseGame = ({ game, chooseLevel }) => {
    
    if (game.level)
        return null;

    return (
        <div className="game-choose">
            <div className="wrap-levels">
                <h1>Letter Matching Game</h1>
                <Statistics/>
                <div className="btn btn-choose-game" onClick={e => chooseLevel("easy")}>
                    Easy
                </div>
                <div className="btn btn-choose-game" onClick={e => chooseLevel("normal")}>
                    Normal
                </div>
                <div className="btn btn-choose-game" onClick={e => chooseLevel("hard")}>
                    Hard
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    chooseLevel: name => dispatch(gameActions.init(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGame);