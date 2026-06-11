import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <>
        <header className='py-5 md:px-20 bg-blue-800'>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start px-5 md:px-0 gap-8">
              <a href="#" role="heading">
                    <h1 className="text-2xl text-white font-bold">LISTANIME</h1>
              </a>
              <SearchForm inputClass="w-full" formClass="w-full" />
              {/* <nav className="flex items-center gap-5">
                  <a className="text-white font-semibold hover:text-orange-700" href="#">New</a>
                  <a className="text-white font-semibold hover:text-orange-700" href="#">Popular</a>
                  <a className="text-white font-semibold hover:text-orange-700" href="#">Random</a>
              </nav> */}
          </div>
      </header>
    </>
  )
}
