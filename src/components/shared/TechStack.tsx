import mongoLogo from "../../assets/icons/mongo.png";
import reactLogo from "../../assets/icons/react.png";
import typescriptLogo from "../../assets/icons/typescript.png";
import tailwindLogo from "../../assets/icons/tailwindCSS.png";
import nodeLogo from "../../assets/icons/nodejs.png";
import nextJsLogo from "../../assets/icons/nextjs.png";
import materialUiLogo from "../../assets/icons/materialUI.png";
import awsLogo from "../../assets/icons/aws.png";
import { Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
const technologies = [
  {
    title: "TypeScript",
    image: typescriptLogo,
    experience: "3 years",
  },
  {
    title: "React",
    image: reactLogo,
    experience: "4 years",
  },
  {
    title: "Material-UI",
    image: materialUiLogo,
    experience: "4 years",
  },
  {
    title: "TailwindCSS",
    image: tailwindLogo,
    experience: "2 years",
  },
  {
    title: "MongoDB",
    image: mongoLogo,
    experience: "3 years",
  },
  {
    title: "NodeJS",
    image: nodeLogo,
    experience: "3 years",
  },

  {
    title: "NextJS",
    image: nextJsLogo,
    experience: "1.5 years",
  },

  {
    title: "AWS",
    image: awsLogo,
    experience: "1 year",
  },
];
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
