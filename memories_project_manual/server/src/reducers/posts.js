
// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:  // R
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:  // C
      return [...posts, action.payload];
    case UPDATE:  // U
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:  // D
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
}
