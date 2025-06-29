import GradientBackground from "./GradientBackground";

function HeroContent() {
  return (
    <div
      className="w-100 h-100 text-white position-relative mt-5"
      style={{ zIndex: 5 }}
    >
      <div className="row">
        <div className="col-lg"></div>
        <div className="col-lg-6">
          <h1 className="h1">Thibaut Dupuis</h1>

          <div className="ms-3">
            <small className="d-block mb-2">
              Etudiant en BUT Informatique à l&apos;IUT2 de Grenoble
            </small>
            <small className="d-block">
              Alternant développeur fullstack au Département de l&apos;Isère
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroArrow() {
  return (
    <div
      className="position-absolute start-50 translate-middle"
      style={{ zIndex: 2000, bottom: "45px" }}
    >
      <a href="#projects" className="d-block position-relative">
        <div
          className="btn btn-link px-0 py-1 border-2 border-white animate-up-and-down"
          style={{ fontSize: "1.4rem" }}
        >
          <i className="bi bi-arrow-down text-white"></i>
        </div>
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      className="vw-100 position-relative overflow-hidden"
      style={{ height: "max(300px, calc(100vh - 56px))", zIndex: 1 }}
    >
      <GradientBackground
        color="#255b52"
        count={5}
        zIndex={-10}
        scale={1.2}
        colCoef={1}
        rotationCoef={1.2}
      />
      <HeroContent />
      <HeroArrow />
    </div>
  );
}
