export default function GradientBackground({
  color,
  count,
  rotationCoef,
  zIndex = -100,
  scale,
  colCoef,
  mirror = false,
}: {
  color: string;
  count: number;
  rotationCoef: number;
  zIndex: number;
  scale: number;
  colCoef: number;
  mirror?: boolean;
}) {
  return (
    <div
      className="position-absolute w-100 h-100 overflow-hidden"
      style={{ zIndex: zIndex, transform: mirror ? "scaleX(-1)" : undefined }}
    >
      {[...Array(count)].map((x, i) => (
        <div
          className="position-absolute w-100 h-100 top-0"
          style={{
            transform: `rotateZ(${i * rotationCoef}deg) scale(${scale})`,
            zIndex: zIndex,
          }}
          key={i}
        >
          <div className="row">
            <div className={`col-lg-${i * colCoef}`}></div>
            <div
              className="col-lg vh-100 text-body-primary text-white pt-5"
              style={{ backgroundColor: color, opacity: 0.4, zIndex: zIndex }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
