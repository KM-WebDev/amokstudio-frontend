import Bento from "./HomeBento";
import Hero from "./hero/HomeHero";

export default async function HomePage() {
    return (
        <>
            <Hero />
            <div>
                <Bento />
                <div className="h-[1000px]" />
            </div>
        </>
    );
}
