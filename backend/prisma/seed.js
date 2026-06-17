import { prisma } from "../lib/prisma.js";

const animeDataset = [
  {
    title: "The Daily Life of a Single 29-Year-Old Adventurer",
    slug: "the-daily-life-of-a-single-29-year-old-adventurer",
    synopsis: "Born and raised in the slums, 29-year-old adventurer Hajime Shinonome now lives a quiet life in Komai Village. But his peaceful days take a turn when he discovers Lirui, an abandoned young girl, being attacked by a slime. Moved by her desperation and reminded of his own past, he takes her back to the village. Hajime and Lirui begin a new chapter filled with unexpected challenges and gentle days!",
    description: "A laid-back fantasy story about a solo adventurer trying to survive daily quests while dealing with unpredictable dungeon life and absurd monsters.",
    image: "https://animeheaven.me/image.php?horaf",
    bannerImage: null,
    trailer: null,
    episodes: 12,
    duration: 24,
    status: "FINISHED",
    season: "WINTER",
    year: 2024,
    score: 7.4,
    author: "Hiroshi Tanaka",
    studio: "Unknown",
    isPopular: false,
    genres: ["Fantasy", "Adventure"],
    tags: ["Comedy", "Slice of Life", "Overpowered"]
  },
  {
    title: "The Strongest Tank’s Labyrinth Raids: A Tank with a Rare 9999 Resistance Skill Got Kicked from the Hero’s Party",
    slug: "the-strongest-tanks-labyrinth-raids-a-tank-with-a-rare-9999-resistance-skill-got-kicked-from-the-heros-party",
    synopsis: "Rud is a tank of the Hero's Party and is said to have the highest defense ever in history...",
    description: "After being kicked from his hero party, a tank with absurd defense stats explores labyrinths and discovers his true strength.",
    image: "https://animeheaven.me/image.php?z8rkx",
    bannerImage: null,
    trailer: null,
    episodes: 12,
    duration: 24,
    status: "FINISHED",
    season: "WINTER",
    year: 2023,
    score: 7.1,
    author: "Kei Mizuno",
    studio: "Studio Pierrot",
    isPopular: false,
    genres: ["Action", "Fantasy"],
    tags: ["Adventure", "Dungeon", "Overpowered"]
  },
  {
    title: "Goblin Slayer",
    slug: "goblin-slayer",
    synopsis: "Rumor has it that, in a certain guild in the middle of nowhere, there is an extraordinary man who has climbed all the way to the Silver rank just by killing goblins...",
    description: "A dark fantasy story following a warrior dedicated solely to exterminating goblins using brutal and tactical methods.",
    image: "https://animeheaven.me/image.php?pibv7",
    bannerImage: null,
    trailer: null,
    episodes: 24,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2018,
    score: 8.0,
    author: "Kumo Kagyu",
    studio: "White Fox",
    isPopular: true,
    genres: ["Fantasy", "Action"],
    tags: ["Dark Fantasy", "Drama", "Gore"]
  },
  {
    title: "Jack-of-All-Trades, Party of None",
    slug: "jack-of-all-trades-party-of-none",
    synopsis: "Betrayed by his childhood friend and cast out of the Hero Party, Orhun Dura—once their loyal Enchanter—is branded by his former comrades as “a jack-of-all-trades but a master of none.”...",
    description: "A rejected adventurer builds his own path after being excluded from elite parties, mastering multiple skills along the way.",
    image: "https://animeheaven.me/image.php?mz34c",
    bannerImage: null,
    trailer: null,
    episodes: 12,
    duration: 24,
    status: "FINISHED",
    season: "SPRING",
    year: 2024,
    score: 6.9,
    author: "Ryo Sakamoto",
    studio: "Unknown",
    isPopular: false,
    genres: ["Fantasy"],
    tags: ["Adventure", "Betrayal"]
  },
  {
    title: "My Instant Death Ability Is So Overpowered, No One in This Other World Stands a Chance Against Me!",
    slug: "my-instant-death-ability-is-so-overpowered-no-one-in-this-other-world-stands-a-chance-against-me",
    synopsis: "Awaking to absolute chaos and carnage while on a school trip, Yogiri Takatou discovers that everyone in his class has been transported to another world!...",
    description: "A high school student is transported to another world with an ability that can instantly kill anything, making survival almost too easy.",
    image: "https://animeheaven.me/image.php?atc87",
    bannerImage: null,
    trailer: null,
    episodes: 12,
    duration: 24,
    status: "FINISHED",
    season: "WINTER",
    year: 2024,
    score: 7.2,
    author: "Tsuyoshi Fujitaka",
    studio: "Okuruto Noboru",
    isPopular: false,
    genres: ["Isekai", "Action"],
    tags: ["Fantasy", "Overpowered", "Comedy"]
  },
  {
    title: "Naruto",
    slug: "naruto",
    synopsis: "Naruto Uzumaki dreams of becoming Hokage, the strongest ninja in his village, despite being feared by others because of the Nine-Tailed Fox sealed within him.",
    description: "Naruto follows the journey of Naruto Uzumaki as he trains to become a ninja worthy of recognition and respect while uncovering secrets about his past.",
    image: "https://animeheaven.me/image.php?2m6y1",
    bannerImage: "https://example.com/naruto-banner.jpg",
    trailer: "https://www.youtube.com/embed/-G9BqkgZXRA",
    episodes: 720,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2002,
    score: 8.3,
    author: "Masashi Kishimoto",
    studio: "Studio Pierrot",
    isPopular: true,
    genres: ["Action", "Adventure", "Fantasy"],
    tags: ["Ninja", "Shounen", "Martial Arts", "Coming of Age"]
  },
  {
    title: "One Piece",
    slug: "one-piece",
    synopsis: "Long ago the infamous Gol D. Roger was the strongest and most powerful pirate on the seas...",
    description: "A boy with rubber powers sails across dangerous seas with his crew to find the legendary One Piece treasure.",
    image: "https://animeheaven.me/image.php?cm785",
    bannerImage: null,
    trailer: null,
    episodes: 1100,
    duration: 24,
    status: "AIRING",
    season: "FALL",
    year: 1999,
    score: 9.0,
    author: "Eiichiro Oda",
    studio: "Toei Animation",
    isPopular: true,
    genres: ["Action", "Adventure", "Fantasy"],
    tags: ["Pirates", "Shounen", "Superpowers"]
  },
  {
    title: "Attack on Titan",
    slug: "attack-on-titan",
    synopsis: "Over a century ago, mankind was devoured by giant beings of unknown intelligence and origin known as Titans...",
    description: "Humans fight for survival against giant humanoid Titans that threaten to destroy humanity.",
    image: "https://animeheaven.me/image.php?snab5",
    bannerImage: null,
    trailer: null,
    episodes: 87,
    duration: 24,
    status: "FINISHED",
    season: "SPRING",
    year: 2013,
    score: 9.1,
    author: "Hajime Isayama",
    studio: "WIT Studio",
    isPopular: true,
    genres: ["Action", "Drama", "Fantasy"],
    tags: ["Dark Fantasy", "Gore", "Military", "Mystery"]
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    slug: "demon-slayer-kimetsu no-yaiba",
    synopsis: "Bloodthirsty demons lurk in the woods, and nobody dares to venture out at night, save for the demon slayer of legend...",
    description: "A boy becomes a demon slayer to save his sister and fight powerful demons.",
    image: "https://animeheaven.me/image.php?bmyla",
    bannerImage: null,
    trailer: "https://youtu.be/VQGCKyvzIM4",
    episodes: 55,
    duration: 24,
    status: "FINISHED",
    season: "SPRING",
    year: 2019,
    score: 8.7,
    author: "Koyoharu Gotouge",
    studio: "ufotable",
    isPopular: true,
    genres: ["Action", "Fantasy"],
    tags: ["Supernatural", "Adventure", "Demons", "Historical"]
  },
  {
    title: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    synopsis: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold!...",
    description: "A student joins a secret organization that fights cursed spirits using powerful techniques.",
    image: "https://animeheaven.me/image.php?f5q9b",
    bannerImage: null,
    trailer: "https://youtu.be/pkKu9hLT-t8",
    episodes: 47,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2020,
    score: 8.6,
    author: "Gege Akutami",
    studio: "MAPPA",
    isPopular: true,
    genres: ["Action", "Fantasy"],
    tags: ["Supernatural", "School", "Shounen", "Demons", "Exorcists", "Dark Fantasy", "Martial Arts"]
  },
  {
    title: "Death Note",
    slug: "death-note",
    synopsis: "Have you ever felt like the world would be a better place if certain people weren’t around?...",
    description: "A genius student discovers a notebook that allows him to kill anyone by writing their name.",
    image: "https://animeheaven.me/image.php?eoyyk",
    bannerImage: null,
    trailer: null,
    episodes: 37,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2006,
    score: 9.0,
    author: "Tsugumi Ohba",
    studio: "Madhouse",
    isPopular: true,
    genres: ["Thriller", "Suspense"],
    tags: ["Psychological", "Supernatural", "Detective", "Crime"]
  },
  {
    title: "My Hero Academia",
    slug: "my-hero-academia",
    synopsis: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers...",
    description: "In a world where superpowers are common, a powerless boy dreams of becoming the greatest hero.",
    image: "https://animeheaven.me/image.php?cvito",
    bannerImage: null,
    trailer: null,
    episodes: 150,
    duration: 24,
    status: "FINISHED",
    season: "SPRING",
    year: 2016,
    score: 8.2,
    author: "Kohei Horikoshi",
    studio: "Bones",
    isPopular: true,
    genres: ["Action"],
    tags: ["Superhero", "School", "Shounen", "Superpowers"]
  },
  {
    title: "Chainsaw Man",
    slug: "chainsaw-man",
    synopsis: "Denji is a teenage boy living with a Chainsaw Devil named Pochita...",
    description: "A young man merges with a chainsaw devil and becomes a devil hunter in a violent world.",
    image: "https://animeheaven.me/image.php?b5xgh",
    bannerImage: null,
    trailer: "https://youtu.be/l96zmDlWCBk",
    episodes: 12,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2022,
    score: 8.5,
    author: "Tatsuki Fujimoto",
    studio: "MAPPA",
    isPopular: true,
    genres: ["Action", "Fantasy"],
    tags: ["Horror", "Supernatural", "Gore", "Dark Fantasy"]
  },
  {
    title: "Bleach",
    slug: "bleach",
    synopsis: "Fifteen-year-old Ichigo Kurosaki is a typical teen with fighting skills, two caring sisters and a special trait: he can see ghosts...",
    description: "A teenager gains Soul Reaper powers and protects humans from evil spirits.",
    image: "https://cx.animeheaven.me/image.php?6889t",
    bannerImage: null,
    trailer: "https://youtu.be/WkNcS2mG_WU",
    episodes: 366,
    duration: 24,
    status: "FINISHED",
    season: "FALL",
    year: 2004,
    score: 8.3,
    author: "Tite Kubo",
    studio: "Studio Pierrot",
    isPopular: true,
    genres: ["Action", "Fantasy"],
    tags: ["Supernatural", "Adventure", "Swordplay", "Shounen"]
  },
  {
    title: "Tokyo Ghoul",
    slug: "tokyo-ghoul",
    synopsis: "In modern day Tokyo, society lives in fear of Ghouls: mysterious creatures who look exactly like humans -- yet hunger insatiably for their flesh...",
    description: "A college student becomes half-ghoul and struggles to survive in a dark world of monsters.",
    image: "https://animeheaven.me/image.php?8e8n5",
    bannerImage: null,
    trailer: "https://youtu.be/vGuQeQsoRgU",
    episodes: 48,
    duration: 24,
    status: "FINISHED",
    season: "SUMMER",
    year: 2014,
    score: 7.9,
    author: "Sui Ishida",
    studio: "Studio Pierrot",
    isPopular: true,
    genres: ["Action", "Thriller"],
    tags: ["Dark Fantasy", "Horror", "Psychological", "Gore"]
  }
];

async function main() {
  console.log("🌱 Start seeding dataset...");

  for (const item of animeDataset) {
    await prisma.anime.create({
      data: {
        title: item.title,
        slug: item.slug,
        synopsis: item.synopsis,
        description: item.description,
        image: item.image,
        bannerImage: item.bannerImage,
        trailer: item.trailer,
        episodes: item.episodes,
        duration: item.duration,
        status: item.status,
        season: item.season,
        year: item.year,
        score: item.score,
        author: item.author,
        studio: item.studio,
        isPopular: item.isPopular,

        // 🔥 GENRES
        genres: {
          create: item.genres.map((name) => connectGenre(name)),
        },

        // 🔥 TAGS
        tags: {
          create: item.tags.map((name) => connectTag(name)),
        },
      },
    });
    
    console.log(` Created anime: ${item.title}`);
  }

  // Verification
  const allAnime = await prisma.anime.findMany({
    include: {
      genres: { include: { genre: true } },
      tags: { include: { tag: true } },
    },
  });

  console.log("\nAll anime successfully in Database:\n", JSON.stringify(allAnime, null, 2));
}

/* ---------------------------------------
    Helpers (clean + reusable)
---------------------------------------- */

function connectGenre(name) {
  return {
    genre: {
      connectOrCreate: {
        where: { name },
        create: { name },
      },
    },
  };
}

function connectTag(name) {
  return {
    tag: {
      connectOrCreate: {
        where: { name },
        create: { name },
      },
    },
  };
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });