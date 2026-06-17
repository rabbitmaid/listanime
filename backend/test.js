import { prisma } from "./lib/prisma.js";

async function main() {
  const naruto = await prisma.anime.create({
    data: {
      title: "Naruto",
      synopsis:
        "Naruto Uzumaki dreams of becoming Hokage, the strongest ninja in his village, despite being feared by others because of the Nine-Tailed Fox sealed within him.",

      description:
        "Naruto follows the journey of Naruto Uzumaki as he trains to become a ninja worthy of recognition and respect while uncovering secrets about his past.",

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

      // 🔥 GENRES
      genres: {
        create: [
          connectGenre("Action"),
          connectGenre("Adventure"),
          connectGenre("Fantasy"),
        ],
      },

      // 🔥 TAGS (NEW)
      tags: {
        create: [
          connectTag("Ninja"),
          connectTag("Shounen"),
          connectTag("Martial Arts"),
          connectTag("Coming of Age"),
        ],
      },
    },

    include: {
      genres: { include: { genre: true } },
      tags: { include: { tag: true } },
    },
  });

  console.log("Created anime:", naruto);

  const allAnime = await prisma.anime.findMany({
    include: {
      genres: { include: { genre: true } },
      tags: { include: { tag: true } },
    },
  });

  console.log("All anime:", JSON.stringify(allAnime, null, 2));
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