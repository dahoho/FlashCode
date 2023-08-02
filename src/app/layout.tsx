import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "FlashCode",
  description: "It is an app to learn programming with flashcards.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <div className="grid grid-rows-[auto,1fr,auto] grid-cols-1 min-h-screen">
            <Header />
            <main className="bg-lightGray">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
