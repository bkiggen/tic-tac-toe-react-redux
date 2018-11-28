export default (state = {history: [{
        squares: Array(9).fill(null),
      }]}, action) => {
  switch(action.type) {
    default:
      console.log(state);
      return state;
  }
}
