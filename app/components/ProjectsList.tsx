import { enigmathique, starace, Project } from "@/app/models/Projects";
import GradientBackground from "./GradientBackground";
import styles from "./ProjectsLists.module.css";
import Link from "next/link";
import { BasePathImage } from "./BasePathImage";

function ProjectItem({
  project,
  coverPerc = 3,
}: {
  project: Project;
  coverPerc?: number;
}) {
  return (
    <div className="row w-100 h-100 shadow-lg">
      <div className={`col-lg-${coverPerc} p-0`}>
        <BasePathImage
          src={project.cover}
          alt={project.name}
          className="object-fit-cover w-100 h-100"
        />
      </div>
      <div
        className={`col-lg-${
          12 - coverPerc
        } d-flex flex-column justify-content-between p-3 rounded-end position-relative`}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <GradientBackground
            color="#111111ff"
            count={6}
            zIndex={-10}
            scale={1.2}
            colCoef={2}
            rotationCoef={7}
          />
        </div>
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="d-flex flex-column justify-content-between h-100">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              href={`/projects/${project.name.toLowerCase()}`}
              className="btn btn-outline-light z-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <div className="w-100 h-100 position-relative" id="projects">
      <div className="overflow-hidden">
        <GradientBackground
          color="#000000ff"
          count={3}
          zIndex={-10}
          scale={1.2}
          colCoef={1}
          rotationCoef={1.3}
          mirror={true}
        />
      </div>
      <div className="container mt-3 text-white" style={{ minHeight: "100vh" }}>
        <h2>Mes projets</h2>
        <div className={styles.parent}>
          <div>
            <ProjectItem project={enigmathique} />
          </div>
          <div>
            <ProjectItem project={enigmathique} />
          </div>
          <div>
            <ProjectItem project={starace} coverPerc={5} />
          </div>
          <div>
            <ProjectItem project={enigmathique} />
          </div>
        </div>
      </div>
    </div>
  );
}
