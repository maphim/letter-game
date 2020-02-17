const game = (state = {}, action) => {
    switch (action.type) {

        case "game:init":
            return {
                ...state,
                time: action.time,
                level: action.level,
                duration: action.duration,
                numInRow: action.numInRow,
                cardPicked: action.cardPicked || [],
                status: action.status
            };

        case "game:update_duration":
            return { ...state, duration: action.duration };

        case "game:update_status":
            return { ...state, status: action.status };

        case "game:add_card_to_temp":
            return { ...state, cardPicked: [...state.cardPicked, action.card] };

        case "game:reset_card_in_temp":
            return { ...state, cardPicked: [] };

        default:
            return state;
    }
};

export default game;