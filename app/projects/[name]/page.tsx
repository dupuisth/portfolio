import { BasePathImage } from "@/app/components/BasePathImage";
import { ProjectCarousel, Timeline } from "@/app/components/Projects";
import projects, { Project, ProjectOrigin } from "@/app/models/Projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ name: project.name.toLowerCase() }));
}

function getProjectByName(name: string): Project | undefined {
  return projects.find(
    (project) => project.name.toLowerCase() === name.toLowerCase()
  );
}

function ProjectOriginWidget({ origin }: { origin: ProjectOrigin }) {
  switch (origin) {
    case ProjectOrigin.ACADEMIC:
      return (
        <BasePathImage src="/images/logo-iut2.png" alt="IUT2" fill={true} />
      );
    case ProjectOrigin.PERSONAL:
      return <span className="badge bg-success">Personnel</span>;
    case ProjectOrigin.WORK:
      return <span className="badge bg-warning text-dark">Travail</span>;
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
    <div className="container d-flex flex-column mt-2">
      <div className="flex-grow-0">
        <div className="d-flex align-items-center">
          <h1 className="d-inline-block">{project.name}</h1>
          <div className="position-relative">
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
            <div className="col-lg-8 pe-5 mx-2">
              <p
                style={{ textAlign: "justify", whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
