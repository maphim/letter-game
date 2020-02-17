let gameId = 0;

// App Actions
export const initApp = payload => ({
  type: "app:init",
  payload
});

export const addGameToApp = payload => ({
  type: "app:add_game",
  payload
});

export const addCardList = payload => ({
  type: "app:add_card_list_to_game",
  payload
});

export const pushCardToTemp = payload => ({
  type: "app:add_card_to_temp",
  payload
});

export const activeCard = (id, isActive) => ({
  type: "app:active_card",
  id,
  isActive
});

export const hiddenCard = (id, isHidden) => ({
  type: "app:hidden_card",
  id,
  isHidden
});

export const updateDurationGame = duration => ({
  type: "app:game_update_time",
  duration
});

export const updateStatusGame = status => ({
  type: "app:game_update_status",
  status
});

// GameStore Actions
export const addGame = ({ level, duration, cards }) => ({
  type: "game:add",
  id: gameId++,
  level,
  duration,
  cards,
  status: 0 // 0: start, 1: win, 2: loss
});

export const changeGameStatus = ({ id, status }) => ({
  type: "game:update_status",
  id,
  status
});

export const changeGameDuration = ({ id, duration }) => ({
  type: "game:update_duration",
  id,
  duration
});

export const clearGameInApp = ({ id }) => ({
  type: "game:clear_game",
  id
});
