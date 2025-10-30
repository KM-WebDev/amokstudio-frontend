import Image from "next/image";
import { HeroScrollArrowsContainer } from "./HomeHero.client";
import ScrollArrows from "@/components/ui/ScrollArrows";
import { BasicComponentProps } from "@/lib/types/global";
import { ParticlesLazy } from "../../../LazyParticles";
import { cn } from "@/lib/utils/cn";

export default function HomeHeroDesktop({ className }: BasicComponentProps) {
    return (
        <div className="relative flex h-[150vh] flex-col items-center justify-center lg:h-[200vh]">
            <Background />
            <div className="flex h-full w-full flex-col items-center pt-[30svh]">
                <h1 className="z-100 flex w-full max-w-2xl shrink flex-col items-center justify-center gap-3 px-4 text-center text-3xl font-semibold">
                    Kreatywne studio designu w Trójmieście źćęążó
                </h1>
                <div className="pt-sm h-full w-full grow">
                    <div className="sticky top-[30%]">
                        <div className="relative h-30 w-full">
                            <Image
                                src={"/logo-red.svg"}
                                fill
                                sizes="30vw"
                                className="relative object-contain px-5 pb-5"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-5 mt-auto mb-5 flex w-full flex-col items-center justify-center gap-5 px-5 text-sm text-zinc-500">
                <ScrollArrows />
                <span className="">Zjedz niżej</span>
            </div>
        </div>
    );
}

function Background() {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 h-full overflow-hidden"
            )}
        >
            <ParticlesLazy
                particleColors={["#fec7da", "#ca010b"]}
                particleCount={280}
                particleSpread={4}
                speed={0.1}
                particleBaseSize={350}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
                className={"absolute inset-0 blur-xs"}
                style={{ transform: "translateZ(0)" }}
            />
        </div>
    );
}
