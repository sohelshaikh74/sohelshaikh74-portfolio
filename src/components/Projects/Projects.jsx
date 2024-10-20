import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

import youtube from "../../assets/youtube.svg";
import foodDelivery from "../../assets/food-delivery.svg";
import university from "../../assets/university.svg";
import googleGemini from "../../assets/google-gemini.svg";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube}
          link="https://github.com/sohelshaikh74/youtube-clone"
          h3="Youtube Clone"
          p="Streaming App"
        />
        <ProjectCard
          src={foodDelivery}
          link="https://github.com/sohelshaikh74/food-devlivery-app"
          h3="Food Delivery App"
          p="Globo Restaurant"
        />
        <ProjectCard
          src={university}
          link="https://github.com/sohelshaikh74/university-website"
          h3="university Website"
          p="Educational "
        />
        <ProjectCard
          src={googleGemini}
          link="https://github.com/sohelshaikh74/google-gemini-clone"
          h3="Google Gemini Clone"
          p=" Next-gen AI model."
        />
      </div>
    </section>
  );
}

export default Projects;
