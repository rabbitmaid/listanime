import Link from "next/link";
import SearchForm from "@/components/SearchForm";

export default function Header() {
  return (
    <>
        <header className='py-5 md:px-20 bg-blue-800'>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start px-5 md:px-0 gap-8">
              <Link href="/">
                    <h1 className="text-2xl text-white font-bold">LISTANIME</h1>
              </Link>
              <SearchForm inputClass="w-full" formClass="w-full" />
              <nav className="flex items-center gap-5">
                  <Link className="text-white font-semibold hover:text-orange-300" href="#">New</Link>
                  <Link className="text-white font-semibold hover:text-orange-300" href="#">Popular</Link>
                  <Link className="text-white font-semibold hover:text-orange-300" href="#">Random</Link>
              </nav>
          </div>
      </header>
    </>
  )
}
