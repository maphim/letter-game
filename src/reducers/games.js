const games = (state = [], action) => {
  switch (action.type) {
    case "game:add":
      return [
        ...state,
        {
          id: action.id,
          level: action.level,
          duration: action.duration,
          numCard: action.cards,
          status: 0 // 0: start, 1: win, 2: loss
        }
      ];

    case "game:update_status":
      return state.map(game =>
        game.id === action.id ? { ...game, status: action.status } : game
      );

    case "game:update_duration":
      return state.map(game =>
        game.id === action.id ? { ...game, duration: action.duration } : game
      );

    case "game:clear_game":
      return state.filter(game => {
        return game.id !== action.id;
      });

    default:
      return state;
  }
};

export default games;
