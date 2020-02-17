const app = (state = {}, action) => {
  let cards;
  switch (action.type) {
    case "app:init":
      state = action.payload;
      return state;

    case "app:add_game":
      state.game = action.payload;
      return state;

    case "app:add_card_list_to_game":
      if (state.game) {
        state.game.cards = action.payload;
      }
      return state;

    case "app:hidden_card":
      cards = state.game.cards.map(card =>
        card.id === action.id ? { ...card, isHidden: action.isHidden } : card
      );
      return {
        ...state,
        game: {
          ...state.game,
          cards: cards
        }
      };

    case "app:active_card":
      cards = state.game.cards.map(card =>
        card.id === action.id ? { ...card, isActive: action.isActive } : card
      );
      return {
        ...state,
        game: {
          ...state.game,
          cards: cards
        }
      };

    case "app:add_card_to_temp":
      if (state.game) {
        state.game.cardPrev = action.payload;
      }
      return state;

    case "app:game_update_time":
      return {
        ...state,
        game: {
          ...state.game,
          duration: action.duration
        }
      };

    case "app:game_update_status":
      return {
        ...state,
        game: {
          ...state.game,
          status: action.status
        }
      };

    default:
      return state;
  }
};

export default app;
