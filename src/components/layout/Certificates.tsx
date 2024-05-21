import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import certificates from "../../utils/certificates";

const Certificates = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Certificates
      </Typography>
      <Stack>
        <Grid container spacing={2}>
          {certificates.map((c) => (
            <Grid item key={c.title} xs={12} md={6}>
              <Paper>
                <Stack p={1}>
                  <Stack>
                    <img
                      src={c.image}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        borderRadius: 4,
                      }}
                    />
                  </Stack>

                  <Typography variant="subtitle2"> {c.title} </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="caption" fontWeight={600}>
                      {" "}
                      {c.issuer}{" "}
                    </Typography>
                    <Typography variant="caption"> {c.issueData} </Typography>
                  </Stack>
                  <Link variant="caption" href={c.url} target="_blank">
                    Show Credentials{" "}
                  </Link>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Certificates;
