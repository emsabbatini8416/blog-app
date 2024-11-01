import styled from "@emotion/styled";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Author from "../author";
import { useCallback } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    //backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

export default function Post({ post, onSelect }: any) {
  const handleOnClick = () => {
    onSelect(post);
  };

  return (
    <Grid size={{ xs: 12, sm: 6 }} onClick={handleOnClick}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
          height: "100%",
        }}
      >
        <Typography gutterBottom variant="caption" component="div">
          Engineering
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TitleTypography variant="h6" tabIndex={0}>
            {post.title}
          </TitleTypography>
          <IconButton aria-label="delete" onClick={handleOnClick}>
            <EditIcon />
          </IconButton>
        </Box>
        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
          {post.content}
        </StyledTypography>
        <Author user={post.user} date={post.createdAt} />
      </Box>
    </Grid>
  );
}
