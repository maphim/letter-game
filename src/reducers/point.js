import { levelGame } from '../common/entity';

const point = (
    state = {
        wonNumber: 0,
        lossNumber: 0,
        bestTime: {
        }
    },
    action
) => {

    switch (action.type) {

        case "point:increase_win":
            let wonNumber = state.wonNumber + 1;
            return { ...state, wonNumber };

        case "point:increase_loss":
            let lossNumber = state.lossNumber + 1;
            return { ...state, lossNumber };

        case "point:set_best_time":

            let level = levelGame[action.level];
            let duration = (level.duration - action.time);

            if (
                (!state.bestTime[action.level] && duration > 0)
                || (state.bestTime[action.level] && state.bestTime[action.level] > duration)
            ) {
                let bestTime = state.bestTime;
                bestTime[action.level] = duration;
                return {
                    ...state,
                    bestTime
                };
            }
            return state;


        default:
            return state;

    }
};

export default point;
