import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDeletePostMutation } from "../../blog.utils";
import { useCallback, useEffect, useState } from "react";

export default function PostForm({
  post,
  handleOnClose,
  handleOnSave: onSave,
}: any) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    user: "",
  });
  const { handleDeletePost } = useDeletePostMutation({
    handleSuccess: handleOnClose,
  });

  const handleOnDelete = useCallback(() => {
    if (post?._id) {
      handleDeletePost(post._id);
    }
  }, [post?._id]);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSave = useCallback(() => {
    onSave(form);
  }, [form]);

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        content: post.content,
        user: post.user,
      });
    }
  }, [post]);

  return (
    <>
      <Box
        sx={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
          justifyContent: "space-between",
        }}
        role="presentation"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={form.title}
            onChange={handleOnChange}
          />
          <TextField
            name="content"
            label="Content"
            variant="outlined"
            value={form.content}
            onChange={handleOnChange}
          />
          <TextField
            name="user"
            label="Author"
            variant="outlined"
            value={form.user}
            onChange={handleOnChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            gap: 2,
          }}
        >
          <Button
            color="error"
            variant="contained"
            disabled={!post}
            onClick={handleOnDelete}
          >
            Delete
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button
              color="secondary"
              variant="outlined"
              onClick={handleOnClose}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleOnSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
