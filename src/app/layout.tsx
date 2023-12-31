import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/organisms/Header";

import { Footer } from "@/components/organisms/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "FlashCode",
  description: "It is an app to learn programming with flashcards.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <div className="grid grid-rows-[auto,1fr,auto] grid-cols-1 min-h-screen">
          <Header />

          <Providers>
            <main className="h-full py-8">{children}</main>
          </Providers>

          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
