import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default (phase: string) => {
  const isDev: boolean = phase == PHASE_DEVELOPMENT_SERVER;

  const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    sassOptions: {
      includePaths: ["./app/styles"],
    },
    reactStrictMode: true,
    assetPrefix: isDev ? undefined : "/portfolio/",
    basePath: isDev ? undefined : "/portfolio",
  };
  return nextConfig;
};
