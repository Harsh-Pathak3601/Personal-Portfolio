import type { Metadata } from "next";
import { Inter, Dancing_Script, Kaushan_Script, Gloria_Hallelujah, Satisfy} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloria",
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
});

export const metadata: Metadata = {
  title: "Harsh Pathak | Portfolio",
  description: "Modern & sleek portfolio website showcasing Harsh's projects and skills.",
   icons: {
    icon: "/logo1-modified.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
   <body
  className={`${inter.className} ${dancingScript.variable} ${kaushanScript.variable} ${gloriaHallelujah.variable} ${satisfy.variable}  min-h-[100svh] bg-background text-foreground overflow-x-hidden`}
>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}