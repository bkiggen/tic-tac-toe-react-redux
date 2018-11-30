import historyReducer from './../../src/reducers/history-reducer';

describe('historyReducer', () => {

  let action;
  const sampleState = {history: [{
    squares: Array(9).fill(null),
  }],
   xIsNext: false,
   stepNumber: 1
 };

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

  test('Should alternate xIsNext between true and false values', () => {
    const { history, xIsNext, stepNumber } = sampleState;

    action = {
      type: 'UPDATE_HISTORY',
      history: history,
      xIsNext: xIsNext,
      stepNumber: stepNumber
    }
    expect(historyReducer(sampleState, action)).toEqual({
      history: [{
        squares: Array(9).fill(null),
      }],
       xIsNext: false,
       stepNumber: 1
    });
  })

});
