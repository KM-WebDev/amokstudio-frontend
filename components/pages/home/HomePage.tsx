import { HomeAbout } from "./HomeAbout";
import HomeBento from "./HomeBento";
import HomePortfolio from "./HomePortfolio";
import HomeHero from "./hero/HomeHero";

export default async function HomePage() {
    return (
        <>
            <HomeHero />
            <div>
                <HomeBento />
                <HomeAbout />
                <HomePortfolio />
            </div>
        </>
    );
}
