import mongoLogo from "../assets/icons/mongo.png";
import reactLogo from "../assets/icons/react.png";
import typescriptLogo from "../assets/icons/typescript.png";
import tailwindLogo from "../assets/icons/tailwindCSS.png";
import nodeLogo from "../assets/icons/nodejs.png";
import nextJsLogo from "../assets/icons/nextjs.png";
import materialUiLogo from "../assets/icons/materialUI.png";
import awsLogo from "../assets/icons/aws.png";
import githubActions from "../assets/icons/githubActions.png";

export const techLogos = {
  mongo: mongoLogo,
  react: reactLogo,
  typescript: typescriptLogo,
  tailwind: tailwindLogo,
  node: nodeLogo,
  nextJs: nextJsLogo,
  mui: materialUiLogo,
  aws: awsLogo,
  githubActions: githubActions,
};

const technologies = [
  {
    title: "TypeScript",
    image: typescriptLogo,
    experience: "3 years",
    percent: 80,
    description:
      "A strongly typed superset of JavaScript, improving code reliability.",
  },
  {
    title: "React",
    image: reactLogo,
    experience: "4 years",
    percent: 90,
    description:
      "A popular library for building user interfaces using components.",
  },
  {
    title: "Material-UI",
    image: materialUiLogo,
    experience: "4 years",
    percent: 90,
    description:
      "A UI framework with pre-built components following Material Design.",
  },
  {
    title: "TailwindCSS",
    image: tailwindLogo,
    experience: "2 years",
    percent: 80,
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    title: "MongoDB",
    image: mongoLogo,
    experience: "3 years",
    percent: 80,
    description: "A NoSQL database known for its scalability and flexibility.",
  },
  {
    title: "NodeJS",
    image: nodeLogo,
    experience: "3 years",
    percent: 80,
    description:
      "JavaScript runtime built on Chrome's V8 engine for server-side development.",
  },
  {
    title: "NextJS",
    image: nextJsLogo,
    experience: "1.5 years",
    percent: 70,
    description:
      "A React framework for server-side rendering and static site generation.",
  },
  {
    title: "AWS",
    image: awsLogo,
    experience: "1 year",
    percent: 50,
    description:
      "A comprehensive cloud computing platform offering various services.",
  },
];

export default technologies;
