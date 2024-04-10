import axios from "axios";
import { serverport } from "../../../constants.jsx";

const url = `http://localhost:${ serverport }/posts`

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost)
