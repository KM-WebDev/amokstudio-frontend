import { HomeAbout } from "./HomeAbout";
import HomeBento from "./HomeBento";
import { HomeFAQ } from "./HomeFAQ";
import HomePortfolio from "./HomePortfolio";
import HomeReviews from "./HomeReviews";
import HomeHero from "./hero/HomeHero";

export default async function HomePage() {
    return (
        <>
            <HomeHero />
            <div>
                <HomeBento />
                <HomeAbout />
                <HomePortfolio />
                <HomeReviews />
                <HomeFAQ />
                <div className="h-screen" />
            </div>
        </>
    );
}
