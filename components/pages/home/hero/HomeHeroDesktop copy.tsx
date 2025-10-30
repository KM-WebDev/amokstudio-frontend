import Image from "next/image";
import HeroClient, {
    HeroBgImgContainer,
    HeroHeadingContainer,
    HeroScrollArrowsContainer,
} from "./HomeHero.client";
import ScrollArrows from "@/components/ui/ScrollArrows";
import { BasicComponentProps } from "@/lib/types/global";
import { ParticlesLazy } from "../../../LazyParticles";
import { cn } from "@/lib/utils/cn";

export default function HomeHeroDesktop({ className }: BasicComponentProps) {
    return (
        <HeroClient className={className}>
            <div className="relative flex justify-center max-lg:flex max-lg:h-screen max-lg:flex-col max-lg:items-center max-lg:justify-center">
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 h-screen overflow-hidden",
                        "lg:relative lg:h-[300vh]"
                    )}
                >
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
                </div>
                <HeroHeadingContainer
                    className={cn(
                        "sticky top-[50vh] container h-fit w-full max-lg:z-10",
                        ""
                    )}
                >
                    <HeroBgImgContainer
                        className={cn(
                            "static max-lg:z-10 max-lg:h-30 max-lg:w-full",
                            "lg:fixed lg:top-0 lg:right-0 lg:left-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center"
                        )}
                    >
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
