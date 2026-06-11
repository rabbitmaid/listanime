import SmallCardGrid from "./SmallCardGrid";
import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function SearchForm({ inputClass , formClass }){ 

    let [ open, setOpen ] = useState(false);

    useEffect(() => {
        function handleClickOutside(e) {
            if(!e.target.closest(".dropdown")) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    let searchFieldClasses =  `bg-white w-full rounded text-xl py-3 px-3 block ${inputClass}`;
    let formClasses =  `relative ${formClass}`;
    return (<>
        <form className={formClasses}>
            <label htmlFor="searchField" className="sr-only">
                Search Anime
            </label>
            <input type="search" id="searchField" className={searchFieldClasses} placeholder="Search Anime" onFocus={() => setOpen(true)}  onChange={() => setOpen(true)} onKeyDown={(e) => { if (e.key === "Escape") setOpen(false) }} />
            <button type="submit" className="py-2 px-3 bg-blue-800 text-white absolute top-1.5 right-2 rounded uppercase hover:bg-blue-950 cursor-pointer font-semibold tracking-widest">Search</button>

            {open && (
                <button type="button" onClick={() => setOpen(false)} className="uppercase py-1 font-semibold absolute top-3.5 right-30 cursor-pointer">
                    <span className="sr-only">Close Search Modal</span>
                    <RiCloseLargeLine />
                </button>
            )}
            
            {open && (
                <div className="dropdown absolute w-full bg-white h-[300px] py-5 px-8 z-40 shadow mt-3 rounded overflow-y-auto">
                    <h3 className="text-xl font-semibold mb-5">Search Results</h3>
                    <SmallCardGrid />
                </div>
            )}

        </form>
    </>)
}

export default SearchForm;