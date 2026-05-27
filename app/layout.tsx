import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowRecorder – Record Browser Actions & Replay as Automation",
  description: "Chrome extension records your browser actions and generates Playwright/Selenium code. Schedule recurring runs for marketing, QA, and data entry teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec396e91-7191-4922-b831-89ef5dd54d46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
