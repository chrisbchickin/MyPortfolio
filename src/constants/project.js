import TechHubImg from "../media/TechHub.png";
import TwitterCloneImg from "../media/twitterclone.png"
import MonocleWebAppImg from  "../media/monoclewebapp.png"

export const projects = [
  {
    title: "Monocle Web App",
    description:
      "A web application for mainting states of large scale insurance collections and claims.",
    image: MonocleWebAppImg,
    tags: ["CSS", "HTML", "TypeScript", "C#", "Docker"],
    source: "https://github.com/aarongbenjamin/monocle-webapp?tab=readme-ov-file",
    liveVersion: "https://purple-mushroom-035a32310.3.azurestaticapps.net/",
    id: 0,
  },
  {
    title: "Tech Blog (MVC)",
    description:
      "CMS-style blog site similar to a Wordpress site.",
    image: TechHubImg,
    tags: ["HandlebarJS", "JavaScript", "Bootstrap", "Sequilize", "Express"],
    source: "https://github.com/chrisbchickin/Tech-hub/",
    liveVersion: "https://chrisb-tech-hub-3697c30a9af3.herokuapp.com/",
    id: 1,
  },
  {
    title: "Twitter Clone (T3 stack)",
    description:
      "A Social Media App that lets you engage in online interactions in a user friendly way.",
    image: TwitterCloneImg,
    tags: ["Prisma", "TypeScript", "Tailwind", "NextJS", "Trpc"],
    source: "https://github.com/chrisbchickin/twitter-clone",
    liveVersion: "https://twitter-clone-phi-jet.vercel.app/",
    id: 2,
  },
];