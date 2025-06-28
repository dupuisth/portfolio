// components/BasePathImage.jsx
import Image from "next/image";

export function BasePathImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}) {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return (
    <Image
      src={`${basePath}${src}`}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
    />
  );
}
