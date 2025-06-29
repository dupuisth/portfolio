"use client";

import { Project, ProjectTimeline } from "@/app/models/Projects";
import { Carousel } from "react-bootstrap";
import { BasePathImage } from "./BasePathImage";

export function TimelineItem({
  index,
  event,
}: {
  index: number;
  event: ProjectTimeline;
}) {
  return (
    <div className="mb-3" key={index}>
      <div>
        <div className="bg-dark text-bg-dark d-inline-block py-1 px-1 badge rounded-pill">
          {event.startDate.toLocaleDateString()} {event.endDate && " - "}
          {event.endDate?.toLocaleDateString()}
        </div>
        <div className="ps-2">
          <h2 className="h5 mb-0">{event.title}</h2>

          <ul>
            {event.bullets?.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Timeline({ project }: { project: Project }) {
  return (
    <div>
      {project.timeline?.map((event, index) => (
        <TimelineItem key={index} index={index} event={event} />
      ))}
    </div>
  );
}

export function ProjectCarousel({ project }: { project: Project }) {
  return (
    <Carousel fade interval={5000}>
      {project.images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="bg-dark-subtle">
            <BasePathImage
              src={image.src}
              alt={image.alt || ""}
              width={500}
              height={500}
              className={`d-block w-100 object-fit-${
                image.displayType ?? "cover"
              }`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export function ProjectStack({ project }: { project: Project }) {
  if (!project.stack) {
    return <></>;
  }

  return (
    <>
      <h2>Stack</h2>
      <div className="d-flex flex-row flex-wrap align-items-center gap-2">
        {project.stack.map((tech, index) => {
          if (tech.image) {
            return (
              <div
                title={tech.label}
                className="h-100 w-100"
                style={{ maxWidth: 60, maxHeight: 60 }}
                key={index}
              >
                <BasePathImage
                  src={tech.image}
                  alt={tech.label}
                  width={0}
                  height={0}
                  className="h-100 w-100"
                />
              </div>
            );
          } else {
            return <p key={index}>{tech.label}</p>;
          }
        })}
      </div>
    </>
  );
}
