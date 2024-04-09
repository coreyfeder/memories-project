const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH-ALL":
      return action.payload;
    case "CREATE":
      //logic
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer
