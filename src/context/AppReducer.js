const getNews = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,
          newsList: action.payload,
          
        };
      default:
        return state;
    }
  };
  export default getNews;