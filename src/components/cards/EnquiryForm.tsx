import { Paper, Stack, TextField, Typography } from "@mui/material";

const EnquiryForm = () => {
  return (
    <Paper variant="outlined">
      <Stack spacing={2} p={2}>
        <Typography variant="body1" fontWeight={600}>
          {" "}
          Send a message{" "}
        </Typography>
        <Stack spacing={2}>
          <TextField
            size="small"
            type="text"
            label="Your Name"
            placeholder="Eg: Jack singh"
            variant="filled"
            fullWidth
          />
          <TextField
            size="small"
            type="email"
            label="Your Email"
            placeholder="Eg: Jack@go.com"
            variant="filled"
            fullWidth
          />
          <TextField
            size="small"
            variant="filled"
            type="text"
            label="Your Message"
            placeholder="Hi...."
            fullWidth
            multiline
            minRows={4}
            maxRows={6}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default EnquiryForm;
