import TechHubImg from "../media/TechHub.png";
import MernProjectImg from "../media/LyricLibraryProject.png";
import GymTrackingImg from "../media/GymTrackingApp.png";

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
    title: "Gym Tracking App (MVC)",
    description:
      "A fun MVC style application built for gym users.",
    image: GymTrackingImg,
    tags: ["HandlebarJS", "JavaScript", "Bootstrap", "Sequilize", "Express"],
    source: "https://github.com/chrisbchickin/gym-homie",
    liveVersion: "https://powerful-sands-21433.herokuapp.com/",
    id: 2,
  },
];