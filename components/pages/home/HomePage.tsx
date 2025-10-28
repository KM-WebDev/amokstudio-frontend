import { HomeAbout } from "./HomeAbout";
import HomeBento from "./HomeBento";
import HomeHero from "./hero/HomeHero";

export default async function HomePage() {
    return (
        <>
            <HomeHero />
            <div>
                <HomeBento />
                <HomeAbout />
            </div>
        </>
    );
}
