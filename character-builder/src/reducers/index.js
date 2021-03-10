import formVisibleReducer from './form-visible-reducer';
import characterListReducer from './character-list-reducer';
import { combineReducers } from 'redux';
import selectCharacterReducer from './select-character-reducer';
import editingReducer from './editing-reducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCharacterList: characterListReducer,
  editingVisibleOnPage: editingReducer,
  selectedCharacter: selectCharacterReducer,
  firestore: firestoreReducer
});

export default rootReducer;