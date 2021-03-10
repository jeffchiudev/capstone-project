import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import characterListReducer from '../../reducers/character-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('should return default state if no type recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterCharacterList: {},
      formVisibleOnPage: false
    });
  });

  test('check that initial state of characterlistreducer matches root reducer', () => {
    expect(store.getState().masterCharacterList).toEqual(characterListReducer(undefined, { type:null }));
  });

  test('check that initial state of formvisiblereducer matches root', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('check that ADD_CHARACTER action works for characterlistReducer and root reducer', () => {
    const action = {
      type: 'ADD_CHARACTER',
      name: 'Robin Daggertooth',
      characterClass: 'thief',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterCharacterList).toEqual(characterListReducer(undefined, action));
  });

  test('check that TOGGLE_FORM action works for formvisiblereducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});