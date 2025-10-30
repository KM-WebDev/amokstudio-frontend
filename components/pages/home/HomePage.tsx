import { HomeAbout } from "./HomeAbout";
import HomeBento from "./HomeBento";
import { HomeFAQ } from "./HomeFAQ";
import HomePortfolio from "./HomePortfolio";
import HomeReviews from "./HomeReviews";
import HomeHero from "./HomeHero";
import HomeFeature from "./HomeFeature";

export default async function HomePage() {
    return (
        <>
            <HomeHero />
            <div>
                <HomeBento />
                <HomeAbout />
                <HomePortfolio />
                <HomeFeature />
                <HomeReviews />
                <HomeFAQ />
                <div className="h-screen" />
            </div>
        </>
    );
}
