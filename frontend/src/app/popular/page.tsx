import AnimeGrid from "@/sections/AnimeGrid";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import Footer from "@/sections/Footer";
import { animes } from "@/data/animes";

export const metadata: Metadata = {
  title: "Popular Anime – Trending & Top Rated Series | ListAnime",
  description:
    "Browse the most popular anime right now. Discover trending, top-rated, and fan-favorite anime series on ListAnime. Updated regularly so you never miss what's hot.",
  keywords: [
    "popular anime",
    "trending anime",
    "top anime series",
    "best anime",
    "anime ranking",
    "most watched anime",
    "anime popularity list",
    "currently trending anime",
  ],
  openGraph: {
    title: "Popular Anime – Trending & Top Rated Series",
    description:
      "Explore the most popular anime right now. Find trending, top-rated, and fan-favorite series updated regularly.",
    url: "https://your-domain.com/popular",
    siteName: "ListAnime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popular Anime – Trending Series",
    description:
      "See what anime is trending right now. Browse popular and top-rated anime on ListAnime.",
  },
};

export default function Page() {

  const popularAnimes = animes.filter(anime => anime.isPopular);

  return (
    <>
      <Header />
      <HeroSlider />
      <section className="w-full py-10 px-5 md:py-12 md:px-20">

        <h1 className="uppercase text-3xl font-bold mb-10 text-center">
            Popular Anime
        </h1>

        <AnimeGrid animes={popularAnimes} />
      </section>
      <Footer />
    </>
  );
}
