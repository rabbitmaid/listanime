import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";

function Home() {
    return(
        <>
            <Header />
           
            <HeroSlider />
        
            <section className="w-full py-10 px-5 md:py-18 md:px-20">
               <CardGrid />                
            </section>
        </>
    )
}

export default Home;