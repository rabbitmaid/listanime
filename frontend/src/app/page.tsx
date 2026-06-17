import HeroSlider from "@/components/HeroSlider";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import Footer from "@/sections/Footer";
import { animes } from "@/data/animes";
import AnimeGrid from "@/sections/AnimeGrid";

export const metadata: Metadata = {
  title: "ListAnime – Track, Discover & Explore Anime",
  description:
    "ListAnime helps you discover anime, track what you're watching, build your list, and explore trending and top-rated anime.",
  keywords: [
    "anime list",
    "watch anime",
    "anime tracker",
    "top anime",
    "anime recommendations",
  ],
  openGraph: {
    title: "ListAnime – Track & Discover Anime",
    description:
      "Discover trending anime, track your watchlist, and explore top-rated series.",
    url: "https://your-domain.com",
    siteName: "ListAnime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListAnime – Track & Discover Anime",
    description: "Discover and track anime easily with ListAnime.",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <HeroSlider />
      <section className="w-full py-10 px-5 md:py-18 md:px-20">
        <AnimeGrid animes={animes} />
      </section>
      <Footer />
    </>
  );
}
