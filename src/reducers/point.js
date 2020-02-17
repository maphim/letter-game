const point = (
    state = {
        wonNumber: 0,
        lossNumber: 0,
        bestTime: {}
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
            if (state.bestTime[action.level] > action.time) {
                
                let bestTime = {};
                bestTime[action.level] = action.time;

                return {
                    ...state,
                    bestTime
                };
            } else {
                return state;
            }

        default:
            return state;

    }
};

export default point;
