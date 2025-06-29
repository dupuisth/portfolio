import GradientBackground from "./GradientBackground";

export default function Contact() {
  return (
    <div className="w-100 h-100 position-relative" id="contact">
      <div className="overflow-hidden" style={{ zIndex: -100 }}>
        <GradientBackground
          color="#255b52"
          count={5}
          zIndex={-10}
          scale={1.2}
          colCoef={1}
          rotationCoef={1.2}
        />
      </div>
      <div className="container mt-3 text-white pb-3">
        <h2 className="text-center">Me contacter</h2>

        <p>
          Mail pro :{" "}
          <a href="mailto:thibautdupuis.pro@gmail.com" className="text-white">
            thibautdupuis.pro@gmail.com
          </a>
        </p>

        <p>
          GitHub :{" "}
          <a
            href="https://github.com/dupuisth"
            target="_blank"
            className="text-white"
          >
            https://github.com/dupuisth
          </a>
        </p>

        <p>
          Linkedin :{" "}
          <a
            href="https://www.linkedin.com/in/thibautdupuis/"
            target="_blank"
            className="text-white"
          >
            https://www.linkedin.com/in/thibautdupuis/
          </a>
        </p>
      </div>
    </div>
  );
}
