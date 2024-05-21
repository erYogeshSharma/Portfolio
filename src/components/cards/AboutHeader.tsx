import {
  Avatar,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Cake,
  GitHub,
  LinkedIn,
  LocationCity,
  Mail,
  Phone,
} from "@mui/icons-material";
import avatar from "../../assets/yogesh.png";
const details = [
  {
    label: "Email",
    value: "er.yogesh505@outlook.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 - 8447996078",
    Icon: Phone,
  },
  {
    label: "Date of Birth",
    value: "30 October 2000",
    Icon: Cake,
  },
  {
    label: "Location",
    value: "Bangalore, India",
    Icon: LocationCity,
  },
];
const DetailsCard = ({ value, label, Icon }: (typeof details)[0]) => {
  return (
    <Stack
      p={1}
      sx={{
        border: 1,
        borderColor: (theme) => theme.palette.divider,
        borderRadius: 2,
      }}
    >
      <Typography variant="subtitle2" fontWeight={600}>
        {label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Icon sx={{ fontSize: 20 }} color="primary" />
        <Typography variant="caption" color="text.secondary">
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
};

const AboutHeader = () => {
  return (
    <Paper variant="outlined">
      <Stack p={2} spacing={2}>
        {/* PROFILE HEADER */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ height: 80, width: 80 }} src={avatar} />
          <Stack spacing={1}>
            <Typography fontWeight={600} variant="h4">
              Yogesh Sharma
            </Typography>
            <Stack alignItems="flex-start">
              <Typography
                variant="subtitle2"
                sx={{
                  background: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.primary.contrastText,
                  px: 1,
                  borderRadius: 2,
                }}
              >
                Full Stack Developer
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* PROFILE BODY */}
        <Stack>
          <Typography variant="body1" fontWeight={600}>
            About
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Welcome to my portfolio! I'm Yogesh, a seasoned full-stack software
            engineer with over 4 years of professional experience, specializing
            in backend development. My expertise lies in crafting robust and
            scalable SaaS architectures on the Amazon AWS platform. With a solid
            foundation in both front-end and back-end technologies, I am
            dedicated to building high-performance web applications. Explore my
            projects to see how I leverage modern technologies to create
            efficient and innovative solutions. Let’s collaborate and bring your
            vision to life!
          </Typography>
        </Stack>
        {/* CONNECT WITH ME ON */}
        <Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle2">Find me on :</Typography>
            <Tooltip arrow title="Go to my github">
              <IconButton
                href="https://github.com/erYogeshSharma"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Go to my LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/yogesh-sharma-470303190/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        {/* PROFILE FOOTER */}
        <Stack mt={2}>
          <Grid container spacing={2}>
            {details.map((detail) => (
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <DetailsCard
                  label={detail.label}
                  value={detail.value}
                  Icon={detail.Icon}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AboutHeader;
