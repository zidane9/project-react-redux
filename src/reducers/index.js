import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  user: loginReducer
});

export default rootReducer;
