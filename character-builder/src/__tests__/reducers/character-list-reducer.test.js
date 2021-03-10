import characterListReducer from '../../reducers/character-list-reducer';

describe('characterListReducer', () => {
  
  let action;
  const characterData = {
    name: 'Buttercup',
    characterClass: 'warrior',
    id: 1
  };

  test('should return default state if no action passed into reducer', () => {
    expect(characterListReducer({}, { type: null })).toEqual({});
  });
  
  test('should successfully add new character to master character list', () => {
    const {name, characterClass, id } = characterData;
    action = {
      type: 'ADD_CHARACTER',
      name,
      characterClass,
      id,
    };

    expect(characterListReducer({}, action)).toEqual({
      [id] : {
        name,
        characterClass,
        id
      }
    });
  });
  
});