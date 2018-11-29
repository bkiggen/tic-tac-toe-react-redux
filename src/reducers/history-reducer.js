export default (state = {history: [{
  squares: Array(9).fill(null),
}], xIsNext: false, stepNumber: 0}, action) => {

  let newState;
  const { squares, stepNumber, xIsNext } = action;

  switch(action.type) {
  case 'UPDATE_HISTORY':
    let newHistory = Object.assign([], state.history, {
      [stepNumber]: {
        squares: squares
      }
    });

    console.log(newHistory);

    newState = Object.assign({}, state, {
        history: newHistory,
        xIsNext: xIsNext,
        stepNumber: stepNumber
    });

    return newState;

    case 'JUMP_TO_STEP':
      newState = Object.assign({}, state, {
        stepNumber: stepNumber,
        xIsNext: xIsNext
      });

      return newState;

  default:
    return state;

  }
};
