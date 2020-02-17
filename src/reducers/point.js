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
            if (
                (!state.bestTime[action.level] && action.time)
                || (state.bestTime[action.level] && state.bestTime[action.level] > action.time)
            ) {
                let bestTime = state.bestTime;
                bestTime[action.level] = action.time;
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
