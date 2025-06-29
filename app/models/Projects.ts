import {
  androidstudio,
  csharp,
  docker,
  expressjs,
  nodejs,
  openal,
  opengl,
  python,
  react,
  socketio,
  symfony,
  tailwindcss,
  Techno,
} from "./Tech";

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
  displayType?: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  cover: string;

  status: ProjectStatus;
  origin: ProjectOrigin;

  startDate: Date;
  endDate?: Date;

  team?: string[];

  tags: string[];
  skills: string[];
  stack?: Techno[];
  links: {
    website?: string;
    github?: string;
    gitlab?: string;
  };

  images: ProjectImage[];

  timeline?: ProjectTimeline[];
}

export const enigmathique: Project = {
  id: "enigmathique",
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
  stack: [nodejs, react, socketio, expressjs, tailwindcss],

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
    {
      src: "/images/enigmathique/home.jpg",
      alt: "Accueil",
      caption: "Accueil",
      displayType: "contain",
    },
    {
      src: "/images/enigmathique/dashboard.jpg",
      alt: "Tableau de bord",
      caption: "Tableau de bord",
      displayType: "contain",
    },
    {
      src: "/images/enigmathique/validation.jpg",
      alt: "Validation des équipes",
      caption: "Validation des équipes",
      displayType: "contain",
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
  id: "starace",
  name: "StaRace",
  summary:
    "Jeu-vidéo réalisé dans le cadre d'une GameJam à l'IUT2, prenant la forme d'une course dans l'espace",
  description: `<b>StaRace</b> est un <b>jeu-vidéo</b> réalisé dans le cadre d'une <b>GameJam</b> à l'IUT2. Le jeu prend la forme d'une <b>course</b> dans l'espace en <b>multijoueur</b>, chaque participant doit au péalable construire son vaisseau (avec malus s'il y a des ratés lors de cette dernière).`,
  cover: "/images/starace/jaquette.png",

  status: ProjectStatus.COMPLETED,
  origin: ProjectOrigin.ACADEMIC,

  startDate: new Date("2024-09-5"),
  endDate: new Date("2024-09-13"),

  team: ["6 étudiants"],

  tags: [ProjectTag.GAME],
  skills: ["Python"],
  stack: [python],

  links: {
    website: undefined,
    github: undefined,
    gitlab: undefined,
  },

  images: [
    {
      src: "/images/starace/jaquette.png",
      alt: "Jaquette de StaRace",
      caption: "Jaquette de StaRace",
      displayType: "contain",
    },
    {
      src: "/images/starace/selection.png",
      alt: "StaRace sélection de vaisseau",
      caption: "Sélection de vaisseau",
      displayType: "contain",
    },
    {
      src: "/images/starace/blackhole.png",
      alt: "StaRace course",
      caption: "Course",
      displayType: "contain",
    },
    {
      src: "/images/starace/whitehole.png",
      alt: "StaRace course",
      caption: "Course",
      displayType: "contain",
    },
  ],

  timeline: [
    {
      startDate: new Date("2024-09-05"),
      title: "Mise en place du projet",
      bullets: [
        "Recherche d'idées",
        "Recherche de solutions pour le multijoueur ",
      ],
    },
    {
      startDate: new Date("2024-09-06"),
      endDate: new Date("2024-09-13"),
      title: "Réalisation",
      bullets: [
        "Développement du jeu",
        "Intégration du multijoueur",
        "Réalisation des assets (textures, son)",
      ],
    },
  ],
};

export const daengine: Project = {
  id: "daengine",
  name: "DaEngine",
  summary: "Moteur de jeu que je réalise sur mon temps libre",
  description: `<b>DaEngine</b> est un moteur de jeu sur lequel je travaille sur mon temps libre depuis maintenant 2 ans. J'utilise <b>C#</b> pour un développement efficace (notamment en utilisant la <a target=_blank href="https://learn.microsoft.com/fr-fr/dotnet/fundamentals/reflection/reflection">réflexion</a>), avec principalement <b>OpenGL</b> permettant d'interragir avec les périphériques graphiques et ainsi de dessiner à l'écran. Pour l'audio, j'utilise la bibliothèque <b>OpenAL</b>. Actuellement, le moteur possède : un <b>système de scène</b> (avec chargement et sauvegarde), un <b>système d'entités composants</b>, des <b>outils de deboggage</b> (dont l'affichage de formes à chaud) et l'<b>éditeur de niveau</b> est en cours de développement.`,
  cover: "/images/daengine/demo_1.png",

  status: ProjectStatus.ON_HOLD,
  origin: ProjectOrigin.PERSONAL,

  startDate: new Date("2024-01-01"),

  tags: [ProjectTag.DESKTOP],
  skills: ["C#"],
  stack: [csharp, opengl, openal],

  links: {
    website: undefined,
    github: undefined,
    gitlab: undefined,
  },

  images: [
    {
      src: "/images/daengine/demo_1.png",
      alt: "Demo",
      caption: "Demo",
    },
    {
      src: "/images/daengine/demo_3.png",
      alt: "Demo",
      caption: "Demo",
    },
  ],

  timeline: [
    {
      startDate: new Date("2024-09-05"),
      title: "Réalisation",
      bullets: [
        "Réalisation d'une surcouche à OpenGL",
        "Intégration de OpenAL pour la gestion du son",
        "Réalisation d'un système de scène (avec sauvegarde et chargement)",
        "Début de réalisation d'un editeur de scène",
      ],
    },
  ],
};

export const carnetstage: Project = {
  id: "carnetstage",
  name: "Carnet de Stage",
  summary:
    "Reprise, analyse et amélioration d'une application de recherche de stage.",
  description: `Ce projet consiste à analyser puis améliorer une application existante. Cette application a pour but de <b>proposer</b> des <b>offres de stages</b> à des étudiants et de leur permettre de <b>candidater</b> avec un CV et une lettre de motivation. Cette application est composé de deux parties : un <b>back-office</b> réalisé en <b>Symfony</b> et une <b>application mobile</b> en <b>Android Studio</b> (<b>Java</b>).
  Dans un premier temps, une <b>analyse des performances</b> a été réalisé pour la partie mobile, qui a révélé plusieurs problèmes (nombre de requêtes trop élevés, ...). De plus, plusieurs problèmes <b>ergonomiques</b> ont été relevés, comme des pages qui ne s'affichaient pas correctement. Suite à l'analyse, ces problèmes ont été <b>traités</b> en modifiant la base de code. Pour les performances, un <b>système d'événement</b> a été mis en place pour réduire le nombre de requête. Pour l'ergonomie, des <b>maquettes</b> ont été réalisées sur <b>Figma</b> puis implémenté.`,
  cover: "/images/carnetstage/offres.jpg",

  team: ["6 étudiants en BUT Informatique (2ème année)"],

  status: ProjectStatus.COMPLETED,
  origin: ProjectOrigin.ACADEMIC,

  startDate: new Date("2024-01-01"),

  tags: [ProjectTag.DESKTOP],
  skills: [],
  stack: [symfony, androidstudio, docker],

  links: {
    website: undefined,
    github: undefined,
    gitlab: undefined,
  },

  images: [
    {
      src: "/images/carnetstage/home.jpg",
      alt: "Accueil",
      caption: "Accueil",
      displayType: "contain",
    },
    {
      src: "/images/carnetstage/apply.jpg",
      alt: "Candidature",
      caption: "Candidature",
      displayType: "contain",
    },
    {
      src: "/images/carnetstage/applies.jpg",
      alt: "Liste des candidatures",
      caption: "Liste des candidatures",
      displayType: "contain",
    },
    {
      src: "/images/carnetstage/dashboard.jpg",
      alt: "Tableau de bord",
      caption: "Tableau de bord",
      displayType: "contain",
    },
    {
      src: "/images/carnetstage/offres.jpg",
      alt: "Liste des offres",
      caption: "Liste des offres",
      displayType: "contain",
    },
    {
      src: "/images/carnetstage/offre.jpg",
      alt: "Une offre",
      caption: "Une offre",
      displayType: "contain",
    },
  ],

  timeline: [
    {
      startDate: new Date("2024-02-05"),
      endDate: new Date("2024-02-19"),
      title: "Analyse de l'existant",
      bullets: [
        "Prise en main du code et l'environnement",
        "Analyse ergonomique de l'application",
        "Présentation orale en anglais des résultats de l'analyse",
      ],
    },
    {
      startDate: new Date("2024-03-29"),
      endDate: new Date("2024-04-11"),
      title: "Réalisation et présentation",
      bullets: [
        "Création d'un environnement de développement avec Docker",
        "Amélioration du back-office",
        "Amélioration de l'application mobile",
        "Démonstration au jury",
      ],
    },
  ],
};
export const projects: Project[] = [
  enigmathique,
  starace,
  daengine,
  carnetstage,
];
export default projects;
