import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiRoute } from "../../services/utils";
import {
  addPostApi,
  deletePostApi,
  editPostApi,
  getPostListApi,
} from "../../services";

export const usePostListQuery = () => {
  const queryResult = useQuery({
    queryKey: [`${ApiRoute.GET_POSTS}`],
    queryFn: () => getPostListApi(),
  });

  return { ...queryResult };
};

export const useCreatePostMutation = ({ handleSuccess }: any) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload: any) => addPostApi(payload),
    onSuccess: () => {
      debugger;
      queryClient.invalidateQueries({ queryKey: [`${ApiRoute.GET_POSTS}`] });
      handleSuccess();
    },
  });

  const handleCreatePost = (payload: any) => {
    mutation.mutate(payload);
  };

  return {
    handleCreatePost,
  };
};

export const useEditPostMutation = ({ handleSuccess }: any) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (postId: string, payload: any) => editPostApi(postId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${ApiRoute.GET_POSTS}`] });
      handleSuccess();
    },
  });

  const handleEditPost = (postId: string, payload: any) => {
    mutation.mutate(postId, payload);
  };

  return {
    handleEditPost,
  };
};

export const useDeletePostMutation = ({ handleSuccess }: any) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (postId: string) => deletePostApi(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${ApiRoute.GET_POSTS}`] });
      handleSuccess();
    },
  });

  const handleDeletePost = (postId: string) => {
    mutation.mutate(postId);
  };

  return {
    handleDeletePost,
  };
};
