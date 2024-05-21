import { Box, Stack } from "@mui/material";
import TechCards from "../../components/layout/TechCards";

import EnquiryForm from "../../components/cards/EnquiryForm";
import AboutHeader from "../../components/cards/AboutHeader";
import WorkExperience from "../../components/cards/WorkExperience";
import Certificates from "../../components/layout/Certificates";

const About = () => {
  return (
    <Box>
      <Stack mt={1} spacing={4}>
        <AboutHeader />
        <WorkExperience />
        <Certificates />
        <TechCards />
        <EnquiryForm />
      </Stack>
    </Box>
  );
};

export default About;
