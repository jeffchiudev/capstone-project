import characterListReducer from '../../reducers/character-list-reducer';

describe('characterListReducer', () => {
  
  let action;
  const characterData = {
    name: 'Buttercup Bronzebark',
    characterClass: 'warrior',
    id: 1
  };
  const currentState = {
    1: {
      name: 'Robin Daggertooth',
      characterClass: 'thief',
      id: 1
    },
    2: {
      name: 'Presto Sparktail',
      characterClass: 'wizard',
      id: 2
    }
  }

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

  test('should delete a character from roster', () => {
    action = {
      type: 'DELETE_CHARACTER',
      id: 1
    };

    expect(characterListReducer(currentState, action)).toEqual({
      2: {
        name: 'Presto Sparktail',
        characterClass: 'wizard',
        id: 2
      }
    });
  });

});