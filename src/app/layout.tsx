import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HeyStax — Never Pay the Reconstruction Tax Again",
    template: "%s | HeyStax",
  },
  description:
    "HeyStax is your flow engine for work across AI chat, terminal, browser, and web. Open the exact workspace. See the exact next action. Continue in seconds.",
  metadataBase: new URL("https://heystax.ai"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HeyStax — Never Pay the Reconstruction Tax Again",
    description:
      "Your flow engine for work across AI chat, terminal, browser, and web. Open the exact workspace. See the exact next action. Continue in seconds.",
    type: "website",
    url: "https://heystax.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,800;9..144,900&family=Epilogue:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
