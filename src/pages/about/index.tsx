import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import TechCards from "../../components/layout/TechCards";
import { Cake, Mail, Phone } from "@mui/icons-material";
import EnquiryForm from "../../components/cards/EnquiryForm";

const HomeCard = () => {
  return (
    <Grid>
      <Paper variant="outlined">
        <Stack p={2}>
          <Stack>
            <Typography>About</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Welcome to my portfolio! I'm Yogesh, a seasoned full-stack
              software engineer with over 4 years of professional experience,
              specializing in backend development. My expertise lies in crafting
              robust and scalable SaaS architectures on the Amazon AWS platform.
              With a solid foundation in both front-end and back-end
              technologies, I am dedicated to building high-performance web
              applications. Explore my projects to see how I leverage modern
              technologies to create efficient and innovative solutions. Let’s
              collaborate and bring your vision to life!
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <Cake />
            <Typography variant="body2"> 30 October 2000</Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <Mail />
            <Typography variant="body2"> er.yogesh505@Outlook.com</Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <Phone />
            <Typography variant="body2">+91 8447996078</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

const About = () => {
  return (
    <Box>
      <Stack mt={1} spacing={4}>
        <HomeCard />
        <TechCards />
        <EnquiryForm />
      </Stack>
    </Box>
  );
};

export default About;
