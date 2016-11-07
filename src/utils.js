

function lb2kg(lb) {
  return lb / 2.2046;
}

function kg2lbs(lb) {
  return lb * 2.2046;
}

function in2M(inches) {
  return inches / 0.39370 / 100;
}

function in2cm(inches) {
  return inches / 0.39370;
}

function cm2in(cm) {
  return cm * 0.39370;// 2.54000508001;
}

function roundN(x, n) {
  return Math.round(x/n) *n ;
}


export { lb2kg, kg2lbs, in2M, in2cm, cm2in, roundN };
