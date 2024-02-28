import TechHubImg from "../media/TechHub.png";
import MernProjectImg from "../media/LyricLibraryProject.png";
import TwitterCloneImg from "../media/twitterclone.png"

export const projects = [
  {
    title: "Mern Project",
    description:
      "This web application resembles the design of the music streaming application Spotify.",
    image: MernProjectImg,
    tags: ["MongoDB", "Express", "React", "Node", "JavaScript", ],
    source: "https://github.com/moxamadfarax/lyric-library",
    liveVersion: "https://lyric-library.herokuapp.com/",
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