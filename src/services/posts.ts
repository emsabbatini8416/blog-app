import { ApiRoute, defaultHeaders } from "./utils";

export const getPostListApi = async () => {
  const response = await fetch(ApiRoute.GET_POSTS, {
    method: "GET",
  });

  const json = await response.json();

  const payload = { ...json };

  return payload;
};

export const addPostApi = async (payloadRequest: any) => {
  const response = await fetch(ApiRoute.ADD_POST, {
    method: "POST",
    body: JSON.stringify(payloadRequest),
    headers: {
      ...defaultHeaders,
    },
  });

  const json = await response.json();

  const payload = { ...json };

  return payload;
};

export const editPostApi = async (postId: string, payloadRequest: any) => {
  const response = await fetch(ApiRoute.UPDATE_POST(postId), {
    method: "PATCH",
    body: JSON.stringify(payloadRequest),
    headers: {
      ...defaultHeaders,
    },
  });

  const json = await response.json();

  const payload = { ...json };

  return payload;
};

export const deletePostApi = async (postId: string) => {
  const response = await fetch(ApiRoute.DELETE_POST(postId), {
    method: "DELETE",
  });

  const json = await response.json();

  const payload = { ...json };

  return payload;
};
