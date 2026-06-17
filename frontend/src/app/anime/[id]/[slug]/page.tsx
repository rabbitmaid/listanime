import AnimeGrid from "@/sections/AnimeGrid";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import type { Metadata, ResolvingMetadata } from "next";
import AnimeInfo from "@/components/AnimeInfo";
import { animes } from "@/data/animes";
import HeroSlider from "@/components/HeroSlider";


type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  if (isNaN(Number(id))) {
    throw new Error("Invalid anime id");
  }

  const anime = animes.find((anime) => anime.id === Number(id));

  return {
    title: anime.title,
    description: anime.synopsis,
    keywords: anime.tags,
    openGraph: {
      title: anime.title,
      description: anime.synopsis,
      url: `/anime/${anime.id}`,
      siteName: "ListAnime",
      type: "website",
    },

    twitter: {
      card: anime.image,
      title: anime.title,
      description: anime.synopsis,
    },
  };
}

async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <Header />
      {/* <HeroSlider /> */}
      <section className="w-full py-10 px-5 md:py-18 md:px-20">
        <AnimeInfo id={id} />
      </section>
      <section className="w-full py-10 px-5 md:py-18 md:px-20 bg-blue-50">
        <h2 className="mb-8 text-center font-semibold text-2xl uppercase text-black">
          Related Shows
        </h2>
        <AnimeGrid animes={animes}/>
      </section>

      <section className="w-full py-10 px-5 md:py-18 md:px-20">
        <h2 className="mb-8 text-center font-semibold text-2xl uppercase">
          Similar Shows
        </h2>
        <AnimeGrid animes={animes}/>
      </section>
      <Footer />
    </>
  );
}

export default Page;
