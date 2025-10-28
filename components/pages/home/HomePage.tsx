import HomeBento from "./HomeBento";
import HomeHero from "./hero/HomeHero";

export default async function HomePage() {
    return (
        <>
            <HomeHero />
            <div>
                <HomeBento />
                <div className="h-[1000px]" />
            </div>
        </>
    );
}
