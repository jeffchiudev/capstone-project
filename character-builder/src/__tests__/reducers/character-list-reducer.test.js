import characterListReducer from '../../reducers/character-list-reducer';

describe('characterListReducer', () => {
  
  test('should return default state if no action passed into reducer', () => {
    expect(characterListReducer({}, { type: null })).toEqual({});
  });

});