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
          <BasePathImage
            src={image.src}
            alt={image.alt || ""}
            width={500}
            height={500}
            className="d-block w-100 object-fit-cover"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
