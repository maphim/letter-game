import React from "react";
import { connect } from "react-redux";
import { gameActions, cardActions } from '../actions';
import helper from '../common/helper';

import Message from '../components/Message';
import BoardInfo from '../components/BoardInfo';
import CardList from '../components/CardList';

const PlayGame = ({ game, cards, goBack, initCardList }) => {

    if (!game.level) {
        return null;
    }

    if (cards.length <= 0) {
        initCardList(game.numInRow);
    }

    return (
        <div className="wrap-gameplay">
            <Message />
            <div className="game-info">
                <span onClick={e => goBack()} className="go-back">
                    {"<"} Back
                </span>
                <BoardInfo />
            </div>
            <div className="game-board">
                <CardList />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    goBack: () => {
        dispatch(gameActions.reset())
        dispatch(cardActions.resetList())
    },
    initCardList: numInRow => {
        let cardList = helper.renderCards(numInRow);
        dispatch(cardActions.addList(cardList))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayGame);