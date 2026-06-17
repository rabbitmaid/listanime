import Card from "@/components/Card";

interface Anime {
  id: number;
  image: string;
  title: string;
  slug: string;
  synopsis: string;
  trailer?: string;
  studio?: string;   
  rating?: string; 
  description: string;
  tags: string[];
  episodes: number;
  year: number;
  score: number;
  author: string;
  isNew?: boolean;
  isPopular?: boolean;
  isTrending?: boolean;
}


type AnimeGridProps = {
  animes: Anime[]
};

export default function AnimeGrid({ animes } : AnimeGridProps) {
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
