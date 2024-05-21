import { LoadingButton } from "@mui/lab";
import { Alert, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const EnquiryForm = () => {
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSaving(true);
      await fetch("https://api.zapminds.com/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowSuccess(true);
      setSaving(false);
      // Clear form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSaving(false);
    }
  }

  return (
    <Paper variant="outlined" id="contact">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} p={2}>
          <Typography variant="h5" fontWeight={600}>
            Get in touch
          </Typography>
          <Stack spacing={2}>
            <TextField
              size="small"
              type="text"
              required
              name="name"
              label="Your Name"
              placeholder="Eg: Jack singh"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              size="small"
              type="email"
              required
              name="email"
              label="Your Email"
              placeholder="Eg: Jack@go.com"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              size="small"
              required
              name="message"
              variant="outlined"
              type="text"
              label="Your Message"
              placeholder="Hi...."
              fullWidth
              multiline
              minRows={4}
              maxRows={6}
              value={formData.message}
              onChange={handleChange}
            />
            {showSuccess && (
              <Alert severity="success">Message sent successfully!</Alert>
            )}
            <Stack alignItems="center">
              <LoadingButton
                loading={saving}
                type="submit"
                variant="contained"
                size="large"
              >
                <Typography variant="h6">Send</Typography>
              </LoadingButton>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default EnquiryForm;
