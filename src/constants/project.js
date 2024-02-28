import TechHubImg from "../media/TechHub.png";
import TwitterCloneImg from "../media/twitterclone.png"
import MonocleWebAppImg from  "../media/monoclewebapp.png"

export const projects = [
  {
    title: "Monocle Web App",
    description:
      "This web application for mainting states of large scale insurance collections and claims.",
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
    liveVersion: "https://warm-forest-21323.herokuapp.com/login",
    id: 1,
  },
  {
    title: "Twitter Clone (T3 stack)",
    description:
      "A Twitter clone built with the T3 stack lets you quickly create a social media app with features like user accounts, tweet creation, and basic interactions using modern web development tools.",
    image: TwitterCloneImg,
    tags: ["Prisma", "TypeScript", "Tailwind", "NextJS"],
    source: "https://github.com/chrisbchickin/twitter-clone",
    liveVersion: "https://twitter-clone-phi-jet.vercel.app/",
    id: 2,
  },
];