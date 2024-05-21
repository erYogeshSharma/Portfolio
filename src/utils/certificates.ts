import jsFCC from "../assets/certificates/jsFCC.png";
import dsFCC from "../assets/certificates/dsFCC.png";
import rHC from "../assets/certificates/rHC.png";
import jHC from "../assets/certificates/jsHR.png";

const certificates = [
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/erYogeshSharma/back-end-development-and-apis",
    issueData: "Jan 2023",
    image: jsFCC,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/erYogeshSharma/javascript-algorithms-and-data-structures",
    issueData: "April 2023",
    image: dsFCC,
  },
  {
    title: "Javascript",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/3d1dac5acfbc",
    issueData: "March 2023",
    image: jHC,
  },

  {
    title: "React",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/fa429e3b0d94",
    issueData: "April 2023",
    image: rHC,
  },
];

export default certificates;
export type Certificate = (typeof certificates)[0];
