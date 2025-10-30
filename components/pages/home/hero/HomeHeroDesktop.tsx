import Image from "next/image";
import HeroClient, {
    HeroBgImgContainer,
    HeroHeadingContainer,
    HeroScrollArrowsContainer,
} from "./HomeHero.client";
import ScrollArrows from "@/components/ui/ScrollArrows";
import { BasicComponentProps } from "@/lib/types/global";
import { ParticlesLazy } from "../../../LazyParticles";

export default function HomeHeroDesktop({ className }: BasicComponentProps) {
    return (
        <HeroClient className={className}>
            {/* -z-100 */}
            <div className="relative">
                <div className="pointer-events-none relative h-[300vh] overflow-hidden">
                    <ParticlesLazy
                        particleColors={["#fec7da", "#ca010b"]}
                        particleCount={180}
                        particleSpread={6}
                        speed={0.1}
                        particleBaseSize={350}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                        className={"absolute inset-0 blur-xs"}
                        style={{ transform: "translateZ(0)" }}
                    />
                    <div id="particles-js"></div>
                </div>
                <HeroBgImgContainer className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center">
                    <div className="relative mx-auto h-full w-full max-w-[1200px]">
                        <Image
                            src={"/logo-red.svg"}
                            fill
                            sizes="30vw"
                            className="relative h-full object-contain px-5 pb-5 lg:px-[50px]"
                            alt="logo"
                        />
                    </div>
                </HeroBgImgContainer>
                <HeroHeadingContainer
                    className={
                        "fixed top-[30%] left-[50%] container w-full -translate-x-[50%] -translate-y-[50%] lg:top-[50%]"
                    }
                >
                    <h1 className="-z-10 flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold lg:gap-3 lg:text-7xl">
                        Kreatywne studio designu w Trójmieście źćęążó
                    </h1>
                </HeroHeadingContainer>
                <HeroScrollArrowsContainer className="fixed right-0 bottom-2 mb-5 flex w-full items-end justify-center gap-2 px-5 text-sm text-zinc-500">
                    <span className="">Zjedz niżej</span>
                    <ScrollArrows />
                </HeroScrollArrowsContainer>
            </div>
        </HeroClient>
    );
}

// function HeroHeading() {
//     return (
//         <h1 className="pointer-events-auto -z-10 flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold lg:gap-3 lg:text-7xl">
//             <TextEffect per="char" delay={0.5} preset="blur">

//             </TextEffect>

//     );
// }
