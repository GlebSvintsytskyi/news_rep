const ADD_NEWS = 'ADD_NEWS';
const SET_NEWS = 'SET_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';
const PUT_NEWS = 'PUT_NEWS';

const defolteState = {
   news: [],
   isLoaded: false
};
  
  export const newsReducer = (state = defolteState, action) => {
    switch (action.type) {
      case ADD_NEWS:{
        const uniqNews = [...state.news, ...action.payload].reduce((acc, news) => {
          acc[news.id] = news;
          return acc;
        }, {});
        return {...state, news: Object.values(uniqNews), isLoaded: true };} 

      case SET_NEWS:
        return {...state, news: [...state.news, action.payload], isLoaded: false};

      case DELETE_NEWS:
        const deleteNews = [...state.news].filter((news) => {
          return news.id !== action.payload;
        });
        return {...state, news: [...deleteNews], isLoaded: false};

      case PUT_NEWS:
        const news  = [...(state.news || [])];
        const newsIndex = news.findIndex((el) => {
          return el.id === action.payload.id;
        })
        news[newsIndex] = action.payload;
        return {...state, news, isLoaded: false};

      default:
        return state;
    }
  }
  export const addNews = (news) => ({type: ADD_NEWS, payload: news});
  export const pushNews = (news) => ({type: SET_NEWS, payload: news});
  export const deleteNew = (id) => ({type: DELETE_NEWS, payload: id});
  export const putNews = (news) => ({type: PUT_NEWS, payload: news});