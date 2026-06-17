import { prisma } from "./lib/prisma.js";




const animes = [
  {
    id: 1,
    image: "https://animeheaven.me/image.php?horaf",
    title: "The Daily Life of a Single 29-Year-Old Adventurer",
    slug: "the-daily-life-of-a-single-29-year-old-adventurer",
    synopsis: "Born and raised in the slums, 29-year-old adventurer Hajime Shinonome now lives a quiet life in Komai Village. But his peaceful days take a turn when he discovers Lirui, an abandoned young girl, being attacked by a slime. Moved by her desperation and reminded of his own past, he takes her back to the village. Hajime and Lirui begin a new chapter filled with unexpected challenges and gentle days!",
    description: "A laid-back fantasy story about a solo adventurer trying to survive daily quests while dealing with unpredictable dungeon life and absurd monsters.",
    tags: ["Fantasy", "Adventure", "Comedy"],
    episodes: 12,
    year: 2024,
    score: 7.4,
    author: "Hiroshi Tanaka",
  },
  {
    id: 2,
    image: "https://animeheaven.me/image.php?z8rkx",
    title: "The Strongest Tank’s Labyrinth Raids: A Tank with a Rare 9999 Resistance Skill Got Kicked from the Hero’s Party",
    slug: "the-strongest-tanks-labyrinth-raids-a-tank-with-a-rare-9999-resistance-skill-got-kicked-from-the-heros-party",
    synopsis: `Rud is a tank of the Hero's Party and is said to have the highest defense ever in history...`,
    description: "After being kicked from his hero party, a tank with absurd defense stats explores labyrinths and discovers his true strength.",
    tags: ["Action", "Fantasy", "Adventure"],
    episodes: 12,
    year: 2023,
    score: 7.1,
    author: "Kei Mizuno",
  },
  {
    id: 3,
    image: "https://animeheaven.me/image.php?pibv7",
    title: "Goblin Slayer",
    slug: "goblin-slayer",
    synopsis: "Rumor has it that, in a certain guild in the middle of nowhere, there is an extraordinary man who has climbed all the way to the Silver rank just by killing goblins...",
    description: "A dark fantasy story following a warrior dedicated solely to exterminating goblins using brutal and tactical methods.",
    tags: ["Dark Fantasy", "Action", "Drama"],
    episodes: 24,
    year: 2018,
    score: 8.0,
    author: "Kumo Kagyu",
  },
  {
    id: 4,
    image: "https://animeheaven.me/image.php?mz34c",
    title: "Jack-of-All-Trades, Party of None",
    slug: "jack-of-all-trades-party-of-none",
    synopsis: "Betrayed by his childhood friend and cast out of the Hero Party, Orhun Dura—once their loyal Enchanter—is branded by his former comrades as “a jack-of-all-trades but a master of none.”...",
    description: "A rejected adventurer builds his own path after being excluded from elite parties, mastering multiple skills along the way.",
    tags: ["Fantasy", "Adventure"],
    episodes: 12,
    year: 2024,
    score: 6.9,
    author: "Ryo Sakamoto",
  },
  {
    id: 5,
    image: "https://animeheaven.me/image.php?atc87",
    title: "My Instant Death Ability Is So Overpowered, No One in This Other World Stands a Chance Against Me!",
    slug: "my-instant-death-ability-is-so-overpowered-no-one-in-this-other-world-stands-a-chance-against-me",
    synopsis: "Awaking to absolute chaos and carnage while on a school trip, Yogiri Takatou discovers that everyone in his class has been transported to another world!...",
    description: "A high school student is transported to another world with an ability that can instantly kill anything, making survival almost too easy.",
    tags: ["Isekai", "Action", "Fantasy"],
    episodes: 12,
    year: 2024,
    score: 7.2,
    author: "Tsuyoshi Fujitaka",
  },
  {
    id: 6,
    image: "https://animeheaven.me/image.php?2m6y1",
    title: "Naruto",
    slug: "naruto",
    synopsis: "Naruto Uzumaki is a young ninja who bears a great power hidden inside him, a power that has isolated him from the rest of his village...",
    description: "A young ninja strives to become the strongest leader of his village while overcoming loneliness and powerful enemies.",
    tags: ["Action", "Adventure", "Ninja"],
    episodes: 720,
    year: 2002,
    score: 8.3,
    author: "Masashi Kishimoto",
  },
  {
    id: 7,
    image: "https://animeheaven.me/image.php?cm785",
    title: "One Piece",
    slug: "one-piece",
    synopsis: "Long ago the infamous Gol D. Roger was the strongest and most powerful pirate on the seas...",
    description: "A boy with rubber powers sails across dangerous seas with his crew to find the legendary One Piece treasure.",
    tags: ["Adventure", "Action", "Pirates"],
    episodes: 1100,
    year: 1999,
    score: 9.0,
    author: "Eiichiro Oda",
  },
  {
    id: 8,
    image: "https://animeheaven.me/image.php?snab5",
    title: "Attack on Titan",
    slug: "attack-on-titan",
    synopsis: "Over a century ago, mankind was devoured by giant beings of unknown intelligence and origin known as Titans...",
    description: "Humans fight for survival against giant humanoid Titans that threaten to destroy humanity.",
    tags: ["Action", "Dark Fantasy", "Drama"],
    episodes: 87,
    year: 2013,
    score: 9.1,
    author: "Hajime Isayama",
  },
  {
    id: 9,
    image: "https://animeheaven.me/image.php?bmyla",
    title: "Demon Slayer: Kimetsu no Yaiba",
    slug: "demon-slayer-kimetsu no-yaiba",
    synopsis: "Bloodthirsty demons lurk in the woods, and nobody dares to venture out at night, save for the demon slayer of legend...",
    description: "A boy becomes a demon slayer to save his sister and fight powerful demons.",
    tags: ["Action", "Supernatural", "Adventure"],
    episodes: 55,
    year: 2019,
    score: 8.7,
    author: "Koyoharu Gotouge",
    trailer: "https://youtu.be/VQGCKyvzIM4"
  },
  {
    id: 10,
    image: "https://animeheaven.me/image.php?f5q9b",
    title: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    synopsis: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold!...",
    description: "A student joins a secret organization that fights cursed spirits using powerful techniques.",
    tags: ["Action", "Supernatural", "School", "Shounen", "Fantasy", "Demons", "Exorcists", "Urban Fantasy", "Dark Fantasy", "Martial Arts", "Manga"],
    episodes: 47,
    year: 2020,
    score: 8.6,
    author: "Gege Akutami",
    trailer: "https://youtu.be/pkKu9hLT-t8",
    studio: "MAPPA",
    rating: "R - 17+ (violence & profanity)"
  },
  {
    id: 11,
    image: "https://animeheaven.me/image.php?eoyyk",
    title: "Death Note",
    slug: "death-note",
    synopsis: `Have you ever felt like the world would be a better place if certain people weren’t around?...`,
    description: "A genius student discovers a notebook that allows him to kill anyone by writing their name.",
    tags: ["Thriller", "Psychological", "Supernatural"],
    episodes: 37,
    year: 2006,
    score: 9.0,
    author: "Tsugumi Ohba",
  },
  {
    id: 12,
    image: "https://animeheaven.me/image.php?cvito",
    title: "My Hero Academia",
    slug: "my-hero-academia",
    synopsis: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers...",
    description: "In a world where superpowers are common, a powerless boy dreams of becoming the greatest hero.",
    tags: ["Action", "Superhero", "School"],
    episodes: 150,
    year: 2016,
    score: 8.2,
    author: "Kohei Horikoshi",
  },
  {
    id: 13,
    image: "https://animeheaven.me/image.php?b5xgh",
    title: "Chainsaw Man",
    slug: "chainsaw-man",
    synopsis: `Denji is a teenage boy living with a Chainsaw Devil named Pochita...`,
    description: "A young man merges with a chainsaw devil and becomes a devil hunter in a violent world.",
    tags: ["Action", "Horror", "Supernatural"],
    episodes: 12,
    year: 2022,
    score: 8.5,
    author: "Tatsuki Fujimoto",
    trailer: "https://youtu.be/l96zmDlWCBk"
  },
  {
    id: 14,
    image: "https://cx.animeheaven.me/image.php?6889t",
    title: "Bleach",
    slug: "bleach",
    synopsis: "Fifteen-year-old Ichigo Kurosaki is a typical teen with fighting skills, two caring sisters and a special trait: he can see ghosts...",
    description: "A teenager gains Soul Reaper powers and protects humans from evil spirits.",
    tags: ["Action", "Supernatural", "Adventure"],
    episodes: 366,
    year: 2004,
    score: 8.3,
    author: "Tite Kubo",
    trailer: "https://youtu.be/WkNcS2mG_WU"
  },
  {
    id: 15,
    image: "https://animeheaven.me/image.php?8e8n5",
    title: "Tokyo Ghoul",
    slug: "tokyo-ghoul",
    synopsis: "In modern day Tokyo, society lives in fear of Ghouls: mysterious creatures who look exactly like humans -- yet hunger insatiably for their flesh...",
    description: "A college student becomes half-ghoul and struggles to survive in a dark world of monsters.",
    tags: ["Dark Fantasy", "Horror", "Psychological"],
    episodes: 48,
    year: 2014,
    score: 7.9,
    author: "Sui Ishida",
    trailer: "https://youtu.be/vGuQeQsoRgU"
  }
];


async function main() {
  console.log("🌱 Start seeding data...");

  for (const item of animes) {
    // 1. First, ensure all tags exist in the DB so we can just connect them
    for (const tagName of item.tags) {
      await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      });
    }

    // 2. Check if the Anime already exists by slug
    const existingAnime = await prisma.anime.findUnique({
      where: { slug: item.slug },
    });

    if (!existingAnime) {
      // 3. Create the anime and connect it to its tags via the join table
      await prisma.anime.create({
        data: {
          title: item.title,
          slug: item.slug,
          synopsis: item.synopsis,
          description: item.description,
          image: item.image,
          bannerImage: null,
          trailer: item.trailer || null,
          episodes: item.episodes,
          year: item.year,
          score: item.score,
          author: item.author,
          studio: item.studio ?? "Unknown",
          status: "FINISHED",
          
          // Assuming your schema join table is named AnimeToTag or similar
          // adapting to your `tags: { create: [...] }` structure:
          tags: {
            create: item.tags.map((tagName) => ({
              tag: {
                connect: { name: tagName }
              }
            }))
          }
        },
      });
      console.log(` Added: ${item.title}`);
    } else {
      console.log(` 🪙 Skipped (Already Exists): ${item.title}`);
    }
  }

  console.log("✅ Seeding completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });