import GradientBackground from "./GradientBackground";

function Comptence({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border px-3 w-100" style={{ minHeight: 200 }}>
      <h3 className="mt-2">
        <b>{title}</b>
      </h3>
      <div className="position-relative">
        <span className="small opacity-25">&lt;p&gt;</span>
        <p className="m-0 ms-2 ps-1" style={{ borderLeft: "1px solid gray" }}>
          {description}
        </p>
        <span className="small opacity-25">&lt;p&gt;</span>
      </div>
    </div>
  );
}

function ParcoursItem({
  title,
  description,
  date,
  index,
  accordionId,
}: {
  title: string;
  date: string;
  description: string;
  index: number;
  accordionId: string;
}) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${accordionId}collapse${index}`}
          aria-expanded="false"
          aria-controls={`${accordionId}collapse${index}`}
        >
          <div className="d-flex justify-content-between w-100 me-5">
            <span>{title}</span>
            <span>{date}</span>
          </div>
        </button>
      </h2>
      <div
        id={`${accordionId}collapse${index}`}
        className="accordion-collapse collapse"
        style={{ backgroundColor: "#F0F0F0ff" }}
        data-bs-parent={`#${accordionId}`}
      >
        <div
          className="accordion-body"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-100 h-100 position-relative" id="about">
      <div className="overflow-hidden" style={{ zIndex: -100 }}>
        <GradientBackground
          color="#202020ff"
          count={8}
          zIndex={-10}
          scale={1.5}
          colCoef={1}
          rotationCoef={5}
          mirror={true}
        />
      </div>
      <div
        className="container mt-3 text-white pb-3"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-center">A propos de moi</h1>

        <p>
          Salut, moi, c&apos;est <b>Thibaut</b>. Je suis actuellement étudiant
          en <b>BUT informatique</b> à l&apos;IUT2 de Grenoble. Je suis
          interessé par la programmation et les nouvelles technologies depuis
          que je suis au lycée. Mon objectif actuel est de devenir{" "}
          <b>concepteur-développeur</b>.
        </p>

        <div className="mt-5">
          <h3>Mes compétences</h3>

          <div className="d-md-flex flex-nowrap gap-3 justify-content-center">
            <Comptence
              title="Développement Logiciel"
              description="Compétences en programmation fonctionnelle et orientée objet : C/C++, C#, Java, Python. "
            />
            <Comptence
              title="Développement Web"
              description="Expériences en développement d'application Web avec les langages HTML, CSS, JS et les frameworks Symfony et ASP.NET. "
            />
            <Comptence
              title="Développement Mobile"
              description="Développement d'applications mobiles avec Android Studio (Java) et Flutter"
            />
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-lg-6">
            <h3>Mon parcours universitaire</h3>

            <div className="accordion" id="univ">
              <ParcoursItem
                accordionId="univ"
                title="Ecole d'ingénieur l'Esisar à Valence"
                date="2025-2028"
                description="Je vais continuer mes études au sein de l'<b>Esisar</b>, avec une alternance au sein de <b>Legrand</b>"
                index={1}
              />
              <ParcoursItem
                accordionId="univ"
                title="BUT Informatique à l'IUT2 de Grenoble"
                date="2022-2025"
                description="Je suis actuellement en troisième année de <b>BUT Informatique</b> (en parcours réalisation d'application), que je réalise en alternance au sein du <b>Département de l'Isère</b>"
                index={2}
              />
              <ParcoursItem
                accordionId="univ"
                title="Lycée la Saulaie"
                date="2019-2022"
                description="J'ai passé mon BAC Scientifique au Lycée la Saulaie, avec les spécialités <b>Mathématiques</b>, <b>Physique-Chimie</b> et avec l'option <b>Mathématiques expertes</b>. "
                index={3}
              />
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <h3>Mon parcours professionel</h3>
            <div className="accordion" id="pro">
              <ParcoursItem
                accordionId="pro"
                title="Alternance concepteur-développeur au Département de l'Isère"
                date="2024-2025"
                description="Le sujet principal de mon alternance concerne la <b>reprise d'un projet</b> de surcouche applicative. J'ai ainsi travaillé sur la <b>conception</b> et la <b>réalisation</b> de la solution, le tout en <b>intégrant</b> une équipe de développement <b>agile</b>."
                index={1}
              />
              <ParcoursItem
                accordionId="pro"
                title="Stage au Département de l'Isère"
                date="12 semaines en 2024"
                description="J'ai réalisé de <b>A à Z</b> une <b>plateforme</b> permettant aux <b>agents</b> de donner leurs <b>avis</b> sur les <b>applications</b> interne."
                index={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
