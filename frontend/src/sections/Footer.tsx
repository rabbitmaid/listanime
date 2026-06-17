export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 py-10">
      <div className="container mx-auto">
        <p className="text-white font-semibold text-center">
          Copyright &copy; {new Date().getFullYear()} ListAnime, All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
