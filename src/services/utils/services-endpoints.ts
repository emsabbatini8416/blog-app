import { BASE_API } from "../../utils/constants";

export const ApiRoute = {
  GET_POSTS: `${BASE_API}/posts`,
  ADD_POST: `${BASE_API}/posts`,
  UPDATE_POST: (postId: string) => `${BASE_API}/posts/${postId}`,
  DELETE_POST: (postId: string) => `${BASE_API}/posts/${postId}`,
};
