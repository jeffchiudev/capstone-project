export default (state = {}, action) => {
  const { name, characterClass, id } = action;
  switch (action.type) {
    case 'ADD_CHARACTER':
      return Object.assign({}, state, {
        [id]: {
          name,
          characterClass,
          id
        }
      });
    case 'DELETE_CHARACTER':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};