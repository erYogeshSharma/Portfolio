import { Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import technologies from "../../utils/techStack";

const TechStack = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={600}>
        My Tech Stack
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
      >
        {technologies.map((tech, index) => (
          <Tooltip arrow title={tech.experience} key={index}>
            <img
              src={tech.image}
              alt={tech.title}
              style={{
                height: isSmallScreen ? 30 : 50,
                width: isSmallScreen ? 30 : 50,
              }}
            />
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
};

export default TechStack;
