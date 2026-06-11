export default function Card({ image, title, href = "#", key }) {
  return (
    <a
      key={key}
      href={href}
      className="block focus:outline-none focus:ring-2 focus:ring-white/80 rounded-lg"
    >
      <div
        className="aspect-3/4 relative rounded-lg overflow-hidden bg-cover bg-center 
                   transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      >
        <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />

        <h3 className="uppercase tracking-wider text-white text-sm font-semibold text-center 
                      absolute bottom-3 sm:bottom-4 md:bottom-6 bg-neutral-900/70 backdrop-blur-sm 
                       py-3 px-2 w-full z-10">
          {title}
        </h3>
      </div>
    </a>
  );
}
