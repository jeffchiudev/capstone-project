export default (state= null, action) => {
  // const {prompt, details, id} = action
  switch(action.type) {
    case 'SELECT_CHARACTER':
      return action.character;
    case 'DESELECT_CHARACTER':
      return null;
    default:
      return state; 
  }
}