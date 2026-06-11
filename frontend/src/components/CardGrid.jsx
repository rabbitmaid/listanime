import Card from "./Card";

export default function CardGrid() {

  let cards = [
      {
        id: 1,
        image: "https://animeheaven.me/image.php?horaf",
        title: "The Daily Life of a Single 29-Year-Old Adventurer"
      },

      {
        id: 2,
        image: "https://animeheaven.me/image.php?z8rkx",
        title:"The Strongest Tank’s Labyrinth Raids: A Tank with a Rare 9999 Resistance Skill Got Kicked from the Hero’s Party"
      },
      {
        id: 3,
        image: "https://animeheaven.me/image.php?pibv7",
        title: "Goblin Slayer"
      },
      {
        id: 4,
        image: "https://animeheaven.me/image.php?mz34c",
        title: "Jack-of-All-Trades, Party of None"
      },

      {
        id: 5,
        image:"https://animeheaven.me/image.php?atc87",
        title:"My Instant Death Ability Is So Overpowered, No One in This Other World Stands a Chance Against Me!"
      }
  ];

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        { cards.map((card)  => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
            />
        )) }
      </div>
    </>
  );
}
