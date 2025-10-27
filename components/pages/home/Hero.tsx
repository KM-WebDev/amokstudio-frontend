import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero() {
    return (
        <>
            <HeroDesktop className="max-lg:hidden" />
            <HeroMobile className="lg:hidden" />
        </>
    );
}
