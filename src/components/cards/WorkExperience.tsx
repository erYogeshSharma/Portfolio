import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
export default function WorkExperience() {
  return (
    <Stack>
      <Typography variant="h5" fontWeight={600}>
        Work Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Jan 2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ background: (theme) => theme.palette.background.paper }}
            >
              <Avatar
                src="https://www.skill.zapilio.com/assets/logo-edfeb7aa.svg"
                sx={{ p: 0.3, height: 30, width: 30 }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Zapilio
            </Typography>
            <Typography>Full Stack Developer</Typography>
            <Stack>
              <Typography variant="caption">
                <b>Responsibilities:</b>&nbsp;Developing and maintaining
                applications, writing clean code, and debugging issues.
              </Typography>
              <Typography variant="caption">
                <b>Technologies:</b>&nbsp;React, Node, Express, MongoDB, etc.
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Mar 2019 - Jan 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Freelance
            </Typography>
            <Typography>MERN Stack Developer</Typography>
            <Stack>
              <Typography variant="caption">
                <b>Responsibilities:</b>&nbsp;Developing and maintaining
                applications, writing clean code, and debugging issues.
              </Typography>
              <Typography variant="caption">
                <b>Technologies:</b>&nbsp;React, Node, Express, MongoDB, etc.
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}
