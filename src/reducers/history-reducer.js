export default (state = {history: [{
  squares: Array(9).fill(null),
}], xIsNext: false, stepNumber: 1}, action) => {

  let newState;
  const { squares, stepNumber, xIsNext } = action;

  switch(action.type) {
  case 'UPDATE_HISTORY':
    let newHistory = Object.assign([], state.history, {
      [stepNumber]: {
        squares: squares
      }
    });
    newState = Object.assign({}, state, {
        history: newHistory,
        xIsNext: xIsNext
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
