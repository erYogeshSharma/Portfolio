import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleTheme from "../shared/ToggleTheme";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: 0,
        }}
      >
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            fontWeight={600}
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            {`{YS}`}
          </Typography>
          <Stack direction="row">
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/about")}>About</Button>
            <Button onClick={() => navigate("/projects")}>Projects</Button>
            <ToggleTheme />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
