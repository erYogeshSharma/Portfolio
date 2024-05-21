import { Grid, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import technologies from "../../utils/techStack";

const TechCards = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        My Tech Stack
      </Typography>
      <Stack>
        <Grid container spacing={2}>
          {technologies.map((t) => (
            <Grid item xs={12} sm={6} md={4} key={t.description}>
              <Paper variant="outlined">
                <Stack p={2} spacing={1}>
                  <Stack spacing={1} textAlign="center" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Stack height={30}>
                        <img
                          src={t.image}
                          style={{ maxHeight: "100%", maxWidth: "100%" }}
                        />
                      </Stack>
                      <Typography variant="subtitle2">{t.title}</Typography>
                    </Stack>

                    <Typography
                      minHeight={{ xs: 10, sm: 70, md: 40, lg: 90 }}
                      variant="caption"
                      color="text.secondary"
                    >
                      {t.description}
                    </Typography>
                    <Stack width="100%">
                      <Stack alignItems="flex-end">
                        <Typography variant="caption" fontWeight={600}>
                          {t.percent}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        sx={{ height: { xs: 15, md: 25 }, borderRadius: 1 }}
                        variant="determinate"
                        value={t.percent}
                      />
                    </Stack>
                    <Typography variant="caption">
                      <b>Experience:</b>&nbsp;
                      {t.experience}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default TechCards;
