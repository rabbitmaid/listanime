import Card from "@/components/Card";
import { animes } from "@/data/animes";

export default function AnimeGrid() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        { animes.map((anime)  => (
            <Card
              key={anime.id}
              image={anime.image}
              title={anime.title}
              href={`/anime/${anime.id}/${anime.slug}`}
            />
        )) }
      </div>
    </>
  );
}
