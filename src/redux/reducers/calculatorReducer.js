const calculatorReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_CALCULATOR':
          return [...action.payload];
      default:
          return state;
  }
}

export default calculatorReducer;