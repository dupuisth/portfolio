export enum ProjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
  ARCHIVED = "ARCHIVED",
}

export enum ProjectOrigin {
  ACADEMIC = "ACADEMIC",
  PERSONAL = "PERSONAL",
  WORK = "WORK",
}

export enum ProjectTag {
  WEB = "WEB",
  MOBILE = "MOBILE",
  GAME = "GAME",
  DESKTOP = "DESKTOP",
  API = "API",
  DATABASE = "DATABASE",
  MACHINE_LEARNING = "MACHINE_LEARNING",
  EMBEDDED = "EMBEDDED",
  IOT = "IOT",
  MATH = "MATH",
}

export interface ProjectTimeline {
  startDate: Date;
  endDate?: Date;
  title: string;
  description?: string;
  bullets?: string[];
}

export interface ProjectImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  name: string;
  summary: string;
  description: string;
  cover: string;

  status: ProjectStatus;
  origin: ProjectOrigin;

  startDate: Date;
  endDate?: Date;

  team: string[];

  tags: string[];
  skills: string[];
  links: {
    website?: string;
    github?: string;
    gitlab?: string;
  };

  images: ProjectImage[];

  timeline?: ProjectTimeline[];
}

export const enigmathique: Project = {
  name: "Enigmathique",
  summary:
    "Plateforme ludo-éducative pour apprendre les mathématiques de manière ludique, à déstination des collégiens et lycéens.",
  description: `Enigmathique est une <b>plateforme ludo-éducative</b> pour apprendre les mathématiques de manière ludique, à déstination des <b>collégiens</b>. Le projet a été réalisé dans le cadre d'un projet académique au sein de l'IUT2 de Grenoble. Les enseignants créé un compte et renseignent les élèves dans la plateforme. Ils peuvent ensuite <b>créer des salles de jeux</b>, où <b>les élèves peuvent se connecter</b> à l'aide d'un code PIN, <b>former des équipes et resoudre ensemble des salles d'escape game</b>. Pendant la partie, l'enseignant peut suivre la progression des élèves via un tableau de bord pour voir les réponses, le temps restant, le nombre d'indices etc. ce qui lui permet de venir en aide aux élèves si besoin. Le projet est réalisé en <b>React</b> pour le front-end et <b>ExpessJs</b> pour le back-end.`,
  cover: "/images/enigmathique/reactor.png",

  status: ProjectStatus.COMPLETED,
  origin: ProjectOrigin.ACADEMIC,

  startDate: new Date("2023-10-20"),
  endDate: new Date("2024-01-22"),

  team: [
    "5 étudiants du parcours A (Réalisation)",
    "2 étudiants du parcours B (Infrastructure)",
  ],

  tags: [ProjectTag.WEB, ProjectTag.MATH],
  skills: ["React", "Node.js", "Express", "Websockets", "TailwindCSS"],
  links: {
    website: "https://enigmathique.com",
    github: undefined,
    gitlab: undefined,
  },

  images: [
    {
      src: "/images/enigmathique/reactor.png",
      alt: "Enigmathique Salle de jeu",
      caption: "Salle de jeu",
    },
    {
      src: "/images/enigmathique/laboratory.png",
      alt: "Enigmathique Salle de jeu",
      caption: "Salle de jeu",
    },
  ],

  timeline: [
    {
      startDate: new Date("2023-10-20"),
      endDate: new Date("2023-12-04"),
      title: "Gestion de projet",
      bullets: [
        "Analyse des besoins",
        "Recherche de l'existant",
        "Définition des risques et de leurs mitigations",
      ],
    },
    {
      startDate: new Date("2023-12-05"),
      endDate: new Date("2023-12-18"),
      title: "Recherche et conception",
      bullets: [
        "Choix des technologies",
        "Réalisation de maquettes",
        "Conception de la base de données",
      ],
    },
    {
      startDate: new Date("2024-01-08"),
      endDate: new Date("2024-01-22"),
      title: "Réalisation de la solution",
      bullets: [
        "Configuration de l'environnement de développement",
        "Développement de l'API",
        "Développement de l'application web",
      ],
    },
  ],
};

export const starace: Project = {
  name: "StaRace",
  summary:
    "Jeu-vidéo réalisé dans le cadre d'une GameJam à l'IUT2, prenant la forme d'une course dans l'espace",
  description: `StaRace est un jeu-vidéo réalisé dans le cadre d'une GameJam à l'IUT2. Le jeu prend la forme d'une course dans l'espace en multijoueur, chaque participant doit au péalable construire son vaisseau (avec malus s'il y a des ratés lors de cette dernière). `,
  cover: "/images/starace/jaquette.png",

  status: ProjectStatus.COMPLETED,
  origin: ProjectOrigin.ACADEMIC,

  startDate: new Date("2023-10-20"),
  endDate: new Date("2024-01-22"),

  team: [
    "6 étudiants",
  ],

  tags: [ProjectTag.WEB, ProjectTag.MATH],
  skills: ["Python"],
  links: {
    website: "https://enigmathique.com",
    github: undefined,
    gitlab: undefined,
  },

  images: [
    {
      src: "/images/enigmathique/reactor.png",
      alt: "Enigmathique Salle de jeu",
      caption: "Salle de jeu",
    },
    {
      src: "/images/enigmathique/laboratory.png",
      alt: "Enigmathique Salle de jeu",
      caption: "Salle de jeu",
    },
  ],

  timeline: [
    {
      startDate: new Date("2024-10-20"),
      endDate: new Date("2023-12-04"),
      title: "Gestion de projet",
      bullets: [
        "Recherche d'idée",
        "Recherche de solutions pour le multijoueur ",
        "Définition des risques et de leurs mitigations",
      ],
    },
    {
      startDate: new Date("2023-12-05"),
      endDate: new Date("2023-12-18"),
      title: "Recherche et conception",
      bullets: [
        "Choix des technologies",
        "Réalisation de maquettes",
        "Conception de la base de données",
      ],
    }
  ],
};

export const projects: Project[] = [enigmathique, starace];
export default projects;
