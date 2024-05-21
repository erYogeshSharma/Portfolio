import { Box, Grid, Stack, Typography } from "@mui/material";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../utils/projects";

const Projects = () => {
  return (
    <Box p={2}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={600}>
          My Personal Projects
        </Typography>
        <Stack>
          <Grid container spacing={2}>
            {projects.map((p) => (
              <Grid item xs={12} md={6}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
