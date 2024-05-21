import { techLogos } from "./techStack";
import video from "../assets/vid/replyrocket.mp4";
const projects = [
  {
    video: video,
    name: "Reply Rocket",
    icon: "https://lh3.googleusercontent.com/-P1UVEjdUsYfp2MrGT81qBrdOFbG-2WfpJ3-Y3s7oE9KDLyyJtTvPqiiGpuDu5gyo4RaLO8KpDi3p91FJryvXrQiaw=s120",
    url: "https://chromewebstore.google.com/detail/replyrocket/lagclghgckajeoincabkhkajfdpnjnaa",
    description:
      "Driven by my fascination with Chrome extensions, I created ReplyRocket, a dynamic tool designed to supercharge LinkedIn engagement with the help of AI. This homegrown extension empowers users to network more efficiently by automating the creation of personalized and impactful responses",
    stack: [
      {
        name: "React",
        icon: techLogos.react,
      },
      {
        name: "Node",
        icon: techLogos.node,
      },
      {
        name: "MongoDB",
        icon: techLogos.mongo,
      },
      {
        name: "Typescript",
        icon: techLogos.typescript,
      },
      {
        name: "EC2",
        icon: techLogos.aws,
      },
      {
        name: "Github Actions",
        icon: techLogos.githubActions,
      },
    ],
  },
];
export default projects;

export type Project = (typeof projects)[0];
