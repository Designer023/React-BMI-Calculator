export const REQUEST_GIFS = 'REQUEST_GIFS';

export function requestGifs(term = null) {
  console.log(term);
  return {
    type: REQUEST_GIFS,
    term
  }
}


export const BMI_UPDATE_WEIGHT_UNITS = 'BMI_UPDATE_WEIGHT_UNITS';

export function requestBMIWeightUnit(metric = null) {
  console.log("update weight metric to:", metric);
  return {
    type: BMI_UPDATE_WEIGHT_UNITS,
    metric
  }
}


export const BMI_UPDATE_HEIGHT_UNITS = 'BMI_UPDATE_HEIGHT_UNITS';

export function requestBMIHeightUnit(metric = null) {
  console.log("update height metric to:", metric);
  return {
    type: BMI_UPDATE_HEIGHT_UNITS,
    metric
  }
}


export const BMI_UPDATE_HEIGHT_VALUE = 'BMI_UPDATE_HEIGHT_VALUE';

export function updateBMIHeight(height = null) {
  console.log("Change the height value to:", height);
  return {
    type: BMI_UPDATE_HEIGHT_VALUE,
    height
  }
}


export const BMI_UPDATE_WEIGHT_VALUE = 'BMI_UPDATE_WEIGHT_VALUE';

export function updateBMIWeight(weight = null) {
  console.log("Change the weight value to:", weight);
  return {
    type: BMI_UPDATE_WEIGHT_VALUE,
    weight
  }
}
