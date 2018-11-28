import historyReducer from './../../src/reducers/history-reducer';

describe('historyReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

});
