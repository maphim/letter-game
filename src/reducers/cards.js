const cards = (state = [], action) => {
    switch (action.type) {

        case "card:init":
            return [...action.cards];

        case "card:add":
            state.push(action.card);
            return state;

        case "card:hidden":
            return state.map(card =>
                card.id === action.id ?
                    { ...card, isHidden: action.isHidden } : card
            );

        case "card:active":
            return state.map(card =>
                card.id === action.id ?
                    { ...card, isActive: action.isActive } : card
            );

        default:
            return state;
    }
};

export default cards;