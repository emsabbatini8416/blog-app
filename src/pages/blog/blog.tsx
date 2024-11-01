import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

import Post from "./components/post";
import {
  useCreatePostMutation,
  useEditPostMutation,
  usePostListQuery,
} from "./blog.utils";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Drawer from "@mui/material/Drawer";
import PostForm from "./components/post-form";
import { useCallback, useState } from "react";

export default function Latest() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const { data, status, isLoading } = usePostListQuery();

  const handleSuccess = () => {
    setSelected(null);
    handleOnClose();
  };

  const { handleCreatePost } = useCreatePostMutation({ handleSuccess });
  const { handleEditPost } = useEditPostMutation({ handleSuccess });

  const handleOnOpen = () => setOpen(true);
  const handleOnClose = () => setOpen(false);

  const handleOnSave = useCallback(
    (payload: any) => {
      if (selected) handleEditPost(selected._id, payload);
      else handleCreatePost(payload);
    },
    [selected],
  );

  const handleOnSelect = (post: any) => {
    setSelected(post);
    handleOnOpen();
  };

  if (status === "error") return null;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Latest Articles
        </Typography>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={handleOnOpen}
        >
          <AddIcon />
        </Fab>
      </Box>
      {!isLoading && (
        <>
          <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
            {data.posts.map((post: any, index: number) => (
              <Post key={index} post={post} onSelect={handleOnSelect} />
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              pt: 4,
            }}
          >
            <Pagination
              hidePrevButton
              hideNextButton
              count={data.totalPages}
              boundaryCount={10}
            />
          </Box>
        </>
      )}
      <Drawer anchor="right" open={open} onClose={handleOnClose}>
        <PostForm
          post={selected}
          handleOnClose={handleSuccess}
          handleOnSave={handleOnSave}
        />
      </Drawer>
    </div>
  );
}
