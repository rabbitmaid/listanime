import AnimeGrid from "@/sections/AnimeGrid";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import Footer from "@/sections/Footer";
import { animes } from "@/data/animes";

export const metadata: Metadata = {
  title: "New Anime – Latest Releases & Recently Added | ListAnime",
  description:
    "Discover the newest anime series and latest releases. Stay up to date with recently added shows and fresh episodes on ListAnime.",
  keywords: [
    "new anime",
    "latest anime",
    "recent anime releases",
    "new anime series",
    "recently added anime",
    "fresh anime",
    "newly released anime",
    "anime updates",
  ],
  openGraph: {
    title: "New Anime – Latest Releases",
    description:
      "Explore the newest anime series and recently added shows. Stay updated with the latest anime releases on ListAnime.",
    url: "https://your-domain.com/new",
    siteName: "ListAnime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Anime – Latest Releases",
    description:
      "Find the newest anime series and latest releases, updated regularly on ListAnime.",
  },
};

export default function Page() {
  const newAnimes = animes.filter((anime) => anime.isNew);

  return (
    <>
      <Header />
      <HeroSlider />
      <section className="w-full py-10 px-5 md:py-12 md:px-20">
        <h1 className="uppercase text-3xl font-bold mb-10 text-center">
          New Anime
        </h1>
        <AnimeGrid animes={newAnimes} />
      </section>
      <Footer />
    </>
  );
}
