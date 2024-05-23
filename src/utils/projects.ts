import { techLogos } from "./techStack";
import video from "../assets/vid/replyrocket.mp4";
import photobooth from "../assets/icons/photobooth.png";
const projects = [
  {
    video: video,
    name: "Reply Rocket",
    icon: "https://lh3.googleusercontent.com/-P1UVEjdUsYfp2MrGT81qBrdOFbG-2WfpJ3-Y3s7oE9KDLyyJtTvPqiiGpuDu5gyo4RaLO8KpDi3p91FJryvXrQiaw=s120",
    url: "https://chromewebstore.google.com/detail/replyrocket/lagclghgckajeoincabkhkajfdpnjnaa",
    isShowIframe: false,
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
  {
    video: video,
    name: "The Photo Booth",
    icon: photobooth,
    isShowIframe: true,
    url: "https://thephotobooth.netlify.app/",
    description:
      "ThePhotobooth is a social media platform built with the MERN stack. Users can create profiles, share, and like photos, fostering community engagement. This project showcases my full-stack development skills, providing a seamless user experience with features like user authentication and photo management.",
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
    ],
  },
  {
    video: video,
    name: "ToDo",
    icon: photobooth,
    isShowIframe: true,
    url: "https://todo.yogeshh.me/",
    description:
      "ToDo is a simple task management app that helps users organize their daily activities. This project demonstrates my ability to create responsive web applications with a clean and intuitive user interface. Users can add, edit, and delete tasks, ensuring a seamless experience for organizing their day-to-day activities.",
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
