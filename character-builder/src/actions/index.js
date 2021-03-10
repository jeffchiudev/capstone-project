import * as c from './ActionTypes';

export const addCharacter = (character) => {
  const {name, characterClass, id} = character;
  return {
    type: c.ADD_CHARACTER,
    name,
    characterClass,
    id,
  }
}

export const deleteCharacter = id => ({
  type: c.DELETE_CHARACTER,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectedCharacter = (character) => ({
  type: c.SELECT_CHARACTER,
  character
});

export const deselectCharacter = () => ({
  type: c.DELETE_CHARACTER
});