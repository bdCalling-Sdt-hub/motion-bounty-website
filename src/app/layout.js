import "@ant-design/v5-patch-for-react-19";

import { Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Motion Bounty",
  description: "Motion Bounty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
