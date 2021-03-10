import formVisibleReducer from './form-visible-reducer';
import characterListReducer from './character-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCharacterList: characterListReducer
});

export default rootReducer;