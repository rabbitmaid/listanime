export default function SmallCard({ image, title, href = "#", key }) {
  return (
    <a
      key={key}
      href={href}
      className="block focus:outline-none focus:ring-2 focus:ring-white/80 rounded-lg hover:shadow-lg"
    >
      <div className="flex items-center gap-2 p-2">
        <img src={image} alt={title} className="w-10 rounded aspect-3/4"  />
        <h3 className="uppercase tracking-wider text-sm font-semibold">
          {title}
        </h3>
      </div>
    </a>
  );
}
