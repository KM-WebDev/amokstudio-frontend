import HomeHeroDesktop from "./HomeHeroDesktop";
import HomeHeroMobile from "./HomeHeroMobile";

export default function Hero() {
    return (
        <>
            <HomeHeroDesktop className="bg-clr-bg-extra-light max-lg:hidden" />
            <HomeHeroMobile className="lg:hidden" />
        </>
    );
}
