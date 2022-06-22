const defolteState = {
  isAuth: false,
  user: {}
};

export const authReducer = (state = defolteState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {...state, isAuth: action.payload};

      case 'SET_USER':
        return {...state, user: action.payload};
      
      case 'GET_AUTH':
        return {...state};
    
      case 'GET_USER':
        return {...state};

    default:
      return state;
  }
}