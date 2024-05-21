import {
  Avatar,
  Box,
  Button,
  Container,
  Grow,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image from "../../assets/yogesh.png";

import GradientSpan from "../../components/shared/GradientSpan";
import TechStack from "../../components/shared/TechStack";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box p={2}>
      <Container maxWidth="lg">
        <Stack alignItems="center" textAlign="center" spacing={2}>
          <Avatar
            src={image}
            sx={{
              height: isSmallScreen ? 100 : 200,
              width: isSmallScreen ? 100 : 200,
            }}
          />
          <Grow in timeout={2000}>
            <Typography variant="h3" fontWeight={600}>
              Hi, I am <GradientSpan>Yogesh Sharma</GradientSpan>.
            </Typography>
          </Grow>
          <Grow in timeout={1000}>
            <Typography variant="body1" color="text.secondary">
              {/* Welcome to my portfolio! I'm Yogesh, a seasoned full-stack
              software engineer with over 4 years of professional experience,
              specializing in backend development. My expertise lies in crafting
              robust and scalable SaaS architectures on the Amazon AWS platform.
              With a solid foundation in both front-end and back-end
              technologies, I am dedicated to building high-performance web
              applications. Explore my projects to see how I leverage modern
              technologies to create efficient and innovative solutions. Let’s
              collaborate and bring your vision to life! */}
              Welcome to my portfolio! I'm Yogesh, a full-stack software
              engineer with 4+ years of experience, specializing in backend
              development. I excel in building robust SaaS architectures on AWS
              and high-performance web applications. Explore my projects to see
              my work with modern technologies. Let’s collaborate and bring your
              vision to life!
            </Typography>
          </Grow>

          <TechStack />

          <Container maxWidth="sm">
            <Stack
              mt={2}
              width="100%"
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={2}
            >
              <Button
                onClick={() => navigate("about#contact")}
                size="large"
                fullWidth
                variant="contained"
              >
                Get in touch
              </Button>
              <Button
                href="https://drive.google.com/file/d/1IsZ-AlgfRufqw29Acm_D5JqVLFkwI0i8/view?usp=sharing"
                target="_blank"
                size="large"
                fullWidth
                variant="outlined"
              >
                Download Resume
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
