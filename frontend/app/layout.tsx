import type { Metadata } from "next";
import { Radley, Montserrat } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const radley = Radley({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-radley',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Chris Abey',
    default: 'Chris Abey'
  },
  description: "Personal portfolio and projects by Chris",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${radley.variable}`}>
      <body className="font-radley antialiased">
        <PostHogProvider>
        {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
