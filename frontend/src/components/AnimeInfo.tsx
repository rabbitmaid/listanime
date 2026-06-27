"use client";

import Link from "next/link";
import ReactPlayer from "react-player";
import { animes } from "@/data/animes";
import Image from "next/image";

type AnimeInfoProps = {
  id: string;
};

export default function AnimeInfo({ id }: AnimeInfoProps) {
  if (isNaN(Number(id))) {
    throw new Error("Invalid anime id");
  }

  const anime = animes.find((anime) => anime.id === Number(id));

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-10 gap-y-8 items-start">
        <div className="rounded-xl object-cover border-4 border-blue-600 min-w-[300px] max-w-[300px] min-h-[445px] mx-auto lg:mx-0 overflow-hidden flex items-center justify-center">
          <Image
            src={anime.image}
            alt={anime.title}
            width={300}
            height={445}
            loading="lazy"
            className="transition-transform delay-100 ease-in-out hover:scale-102 hover:cursor-pointer"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="uppercase text-3xl font-bold mb-5 text-center md:text-start">
            {anime.title}
          </h1>
          <p className="font-medium mb-8 text-justify text-lg">
            {anime.synopsis}
          </p>

          <div className="flex flex-wrap gap-3 font-semibold mb-5 border-2 border-neutral-800 rounded-lg py-6 px-5">
            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-blue-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Score
              </h3>
              <span className="text-lg mt-2 px-5">{anime.score}</span>
            </div>

            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-pink-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Episodes
              </h3>
              <span className="text-lg mt-2 px-5">{anime.episodes}</span>
            </div>

            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-orange-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Year
              </h3>
              <span className="text-lg mt-2 px-5">{anime.year}</span>
            </div>

            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-green-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Author
              </h3>
              <span className="text-lg mt-2 px-5">{anime.author}</span>
            </div>

            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-cyan-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Studio
              </h3>
              <span className="text-lg mt-2 px-5">{anime.studio ?? "---"}</span>
            </div>

            <div className="w-fit flex flex-col items-center border-2 border-neutral-800 rounded pb-3">
              <h3 className="bg-red-500 w-full text-white text-center uppercase font-semibold text-sm px-5 py-1">
                Rating
              </h3>
              <span className="text-lg mt-2 px-5">{anime.rating ?? "---"}</span>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="font-semibold uppercase mb-3">Tags</h2>
            <div className="tags">
              {anime.tags.map((tag, index) => (
                <Link key={index} href="#" className="tag">
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <h2 className="font-semibold uppercase mb-3">Trailer</h2>

          <div className="flex gap-x-8">
            <div className="w-145 aspect-video rounded-xl overflow-hidden shadow-xl bg-black border-4 border-blue-600">
              <ReactPlayer
                src={anime.trailer}
                width="100%"
                height="100%"
                controls
                playing={false}
              />
            </div>

            <div className="flex flex-col gap-y-5 border-2 border-neutral-800 rounded-lg py-6 px-5">
              <Link
                href="#"
                target="_blank"
                className="bg-orange-600 hover:bg-orange-600/80 transition-all delay-75 ease-in-out text-white text-center py-3 px-4 uppercase tracking-widest font-semibold rounded-lg"
              >
                Stream on Crunchyroll
              </Link>

              <Link
                href="#"
                target="_blank"
                className="bg-red-600 hover:bg-red-600/80 transition-all delay-75 ease-in-out text-white text-center py-3 px-4 uppercase tracking-widest font-semibold rounded-lg"
              >
                Trailer on YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
