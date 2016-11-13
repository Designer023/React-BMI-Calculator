export const BMI_UPDATE_WEIGHT_UNITS = 'BMI_UPDATE_WEIGHT_UNITS';

export function requestBMIWeightUnit(metric = null) {
  return {
    type: BMI_UPDATE_WEIGHT_UNITS,
    metric
  }
}

export const BMI_UPDATE_HEIGHT_UNITS = 'BMI_UPDATE_HEIGHT_UNITS';

export function requestBMIHeightUnit(metric = null) {
  return {
    type: BMI_UPDATE_HEIGHT_UNITS,
    metric
  }
}

export const BMI_UPDATE_HEIGHT_VALUE = 'BMI_UPDATE_HEIGHT_VALUE';

export function updateBMIHeight(height = null) {
  return {
    type: BMI_UPDATE_HEIGHT_VALUE,
    height
  }
}

export const BMI_UPDATE_WEIGHT_VALUE = 'BMI_UPDATE_WEIGHT_VALUE';

export function updateBMIWeight(weight = null) {
  return {
    type: BMI_UPDATE_WEIGHT_VALUE,
    weight
  }
}

export const BMI_RESET_VALUES = 'BMI_RESET_VALUES';

export function resetValues() {
  return {
    type: BMI_RESET_VALUES
  }
}
