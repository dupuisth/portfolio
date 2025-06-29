import { BasePathImage } from "@/app/components/BasePathImage";
import GradientBackground from "@/app/components/GradientBackground";
import {
  ProjectCarousel,
  ProjectStack,
  Timeline,
} from "@/app/components/Projects";
import projects, { Project, ProjectOrigin } from "@/app/models/Projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ name: project.id }));
}

function getProjectByName(name: string): Project | undefined {
  return projects.find((project) => project.id === name);
}

function ProjectOriginWidget({ origin }: { origin: ProjectOrigin }) {
  switch (origin) {
    case ProjectOrigin.ACADEMIC:
      return (
        <BasePathImage
          src="/images/logo-iut2.png"
          alt="IUT2"
          width={841 / 8}
          height={341 / 8}
        />
      );
    case ProjectOrigin.PERSONAL:
      return <span className="badge bg-success">Personnel</span>;
    case ProjectOrigin.WORK:
      return <span className="badge bg-warning text-dark">Pro</span>;
    default:
      return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const project = getProjectByName(name);

  if (!project) {
    return <div>404</div>;
  }
  return (
    <div>
      <div className="container d-flex flex-column mt-5 z-1 bg-white shadow-lg rounded">
        <div className="flex-grow">
          <div className="d-flex align-items-center">
            <h1 className="d-inline-block">{project.name}</h1>
            <div className="position-relative ms-3">
              <ProjectOriginWidget origin={project.origin} />
            </div>
          </div>
          <small className="d-block">{project.summary}</small>
        </div>
        <div className="shadow-lg overflow-hidden">
          <div className="row w-100">
            <div className="col-lg-8 p-0">
              <ProjectCarousel project={project} />
            </div>
            <div className="col-lg-4 mx-md-0 mx-2">
              <h2>Timeline du projet</h2>
              <Timeline project={project} />
            </div>
          </div>
          <div className="mt-1">
            <div className="row">
              <div className="col-lg-8 pe-5 mx-2 border-end">
                <h2>Présentation</h2>
                <p
                  style={{ textAlign: "justify", whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                {project.team ? (
                  <div>
                    <h2>Equipe</h2>
                    <ul>
                      {project.team.map((teamMember, index) => (
                        <li key={index}>{teamMember}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-lg-3">
                <ProjectStack project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden position-absolute top-0 w-100 h-100"
        style={{ zIndex: -100 }}
      >
        <GradientBackground
          color="#D0D0D0ff"
          count={8}
          zIndex={-100}
          scale={1.1}
          colCoef={1}
          rotationCoef={1}
          mirror={false}
        />
      </div>
    </div>
  );
}
