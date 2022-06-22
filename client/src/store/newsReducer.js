const defolteState = {
   news: [
    {id: "3", title: "sport", description: "Real winning La Liga"},
    {id: "18", title: "sporrrt", description: "Real winningdtds La Liga"},
    {id: "19", title: "sporrsfhart", description: "Real winningdtds La Ligfsga"}
   ] 
};
  
  export const newsReducer = (state = defolteState, action) => {
    switch (action.type) {
      case 'SET_NEWS':
        return {...state, news: [...state.news, action.payload]};
  
        case 'GET_NEWS':
          return {...state, news: [...state.news]}; 
  
      default:
        return state;
    }
  }