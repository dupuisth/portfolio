/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";
import "./styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Thibaut Dupuis",
    default: "Portfolio - Thibaut Dupuis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
          integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${poppins.className} min-vh-100 position-relative`}>
        <NavBar />

        <div
          style={{
            paddingTop: "56px",
          }}
        >
          {children}
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
