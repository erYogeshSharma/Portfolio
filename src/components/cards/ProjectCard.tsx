import { useEffect, useRef } from "react";
import { IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { Project } from "../../utils/projects";
const ProjectCard = ({ project }: { project: Project }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      videoRef.current.play().catch((error: any) => {
        console.error("Error trying to play the video:", error);
      });
    }
  }, []);
  return (
    <Paper variant="outlined">
      <Stack p={2} spacing={2}>
        {project.isShowIframe ? (
          <iframe
            src={project.url}
            style={{
              width: "100%",
              borderRadius: "3px",
              border: "none",
              height: 208,
            }} // Adjust as needed
          />
        ) : (
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto", borderRadius: "3px" }} // Adjust as needed
          />
        )}

        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack height={50} alignItems="flex-start">
            <img
              src={project.icon}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </Stack>
          <Typography variant="h6" fontWeight={600}>
            {" "}
            {project.name}{" "}
          </Typography>
          <Tooltip title="Open in new tab" arrow>
            <IconButton size="small" href={project.url} target="_blank">
              <OpenInNew />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack height={{ xs: "auto", md: 240 }}>
          <Typography fontWeight={600} variant="caption">
            Description
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {" "}
            {project.description}{" "}
          </Typography>
        </Stack>
        <Stack mt={2} spacing={1} height={{ xs: "auto", md: 180 }}>
          <Typography fontWeight={600} variant="caption">
            Tech Used
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {project.stack.map((tech) => (
              <Stack
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 4,
                  background: (theme) => theme.palette.background.default,
                }}
                key={tech.name}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Tooltip arrow title={tech.name}>
                  <img
                    src={tech.icon}
                    style={{ maxHeight: 23, maxWidth: 23 }}
                  />
                </Tooltip>
                <Typography fontWeight={600} variant="caption">
                  {" "}
                  {tech.name}{" "}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
