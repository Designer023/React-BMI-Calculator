
import { BMI_UPDATE_WEIGHT_UNITS, BMI_UPDATE_HEIGHT_UNITS, BMI_UPDATE_HEIGHT_VALUE, BMI_UPDATE_WEIGHT_VALUE, BMI_RESET_VALUES } from '../actions';

const initialState =  {
    weight: 170,
    height: 70,
    displayMetricHeight: false,
    displayMetricWeight: false,
    tableRange: 6,
    metric: false
};

export default function bmi(state = initialState, action) {

  switch (action.type) {
    case BMI_UPDATE_WEIGHT_UNITS:
      return {
        ...state, displayMetricWeight: action.metric
      };
    case BMI_UPDATE_HEIGHT_UNITS:
      return {
        ...state, displayMetricHeight: action.metric
      };
    case BMI_UPDATE_HEIGHT_VALUE:
      return {
        ...state, height:action.height
      };
    case BMI_UPDATE_WEIGHT_VALUE:
      return {
        ...state, weight:action.weight
      };
    case BMI_RESET_VALUES:
      return {
        ...state, weight: initialState.weight, height: initialState.height
      };
    default:
      return state;
  }
}
