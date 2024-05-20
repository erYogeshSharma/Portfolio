import { Paper, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper sx={{ borderRadius: 0, height: 50 }}>
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Typography textAlign="center" variant="subtitle2" fontWeight={400}>
          "Always deliver more than expected." ~ Larry Page
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Footer;
