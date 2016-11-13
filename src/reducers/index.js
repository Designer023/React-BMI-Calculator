import { combineReducers } from 'redux';
import BMIReducer from './bmi';

const rootReducer = combineReducers({
  bmi: BMIReducer
});

export default rootReducer;
