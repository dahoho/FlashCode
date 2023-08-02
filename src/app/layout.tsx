import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "FlashCode",
  description: "It is an app to learn programming with flashcards.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
