import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";

export default function Author({ user, date }: { user: string; date: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          <Avatar alt={user} src={undefined} sx={{ width: 24, height: 24 }} />
        </AvatarGroup>
        <Typography variant="caption">{user}</Typography>
      </Box>
      <Typography variant="caption">
        {format(new Date(date), "MMM do, yyyy")}
      </Typography>
    </Box>
  );
}
