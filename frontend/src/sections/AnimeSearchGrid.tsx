import SmallCard from "@/components/SmallCard";
import { animes } from "@/data/animes";

export default function AnimeSearchGrid() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 gap-2">
        { animes.map((anime)  => (
            <SmallCard
              key={anime.id}
              image={anime.image}
              title={anime.title}
            />
        )) }
      </div>
    </>
  );
}
