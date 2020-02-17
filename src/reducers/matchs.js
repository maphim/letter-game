const matchs = (state = [], action) => {
  switch (action.type) {

    case "matchs:add":
      return [...state, action.game];

    case "matchs:reset":
      return state = [];

    default:
      return state;
  }
};

export default matchs;
