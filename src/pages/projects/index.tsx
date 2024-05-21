import { Box, Grid } from "@mui/material";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../utils/projects";

const Projects = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid item xs={12} md={6}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
