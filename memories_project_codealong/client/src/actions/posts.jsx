import * as api from "../api";

//Action Creators - functions that returns actions (type, payload)
export const getPosts = () => async (dispatch) => {
  try {
    // const url = "http://localhost:5001/posts";
    // await axios.get(url);

    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
    //   const action = { type: "FETCH_ALL", payload: [] };
    //   dispatch(action) ;
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
