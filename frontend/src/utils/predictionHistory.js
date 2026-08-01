let history = [];

export const addPrediction = (prediction) => {
  history.unshift(prediction);

  if (history.length > 10) {
    history.pop();
  }
};

export const getPredictionHistory = () => {
  return history;
};