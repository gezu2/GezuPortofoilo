import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a
            href="https://hayatmedicalcollege.edu.et/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group">
            <ProjectsCard
              title="commercial Website"
              category="hayat Medical college"
              image={workImgThree}
            />
          </a>

          <a
            href=" https://evangadi-forum-clone-gezu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group">
            <ProjectsCard
              title="clone Website"
              category="evangadi page"
              image={workImgOne}
            />
          </a>



          <a
            href=" https://leanconsulting.gezugudisa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group">
            <ProjectsCard
              title="coming soon"
              category="Lean Consulting Plc"
              image={workImgTwo}
            />
          </a>
         

          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>

        <div className="px-6">
          <a
            href="https://hayathospital.gezugudisa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group">
            <ProjectsCard
              title="Responsive Website"
              category="hayat Hospital"
              image={workImgFour}
            />
          </a>

          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard title=" Logo" category="Logo" image={workImgSeven} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
