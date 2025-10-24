import ScrollArrows from "@/components/ui/ScrollArrows";
import { HeroFog, HeroHeadingContainer } from "./Hero.client";

export default function HeroServer() {
    return (
        <div className="relative">
            <div className="h-[300vh] overflow-hidden md:h-[400vh]">
                <HeroFog />
            </div>
            <HeroHeadingContainer
                className={
                    "fixed top-[25%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%]"
                }
            >
                <h1 className="flex flex-col text-5xl text-white md:text-8xl">
                    <span>Reklama</span>
                    <span>Branding</span>
                    <span>wizualna</span>
                    <span>Komunikacja</span>
                </h1>
            </HeroHeadingContainer>

            <div className="fixed bottom-2 left-[50%] z-10 flex w-[1200px] -translate-x-[50%] justify-end">
                <span className="text-neutral-100/60">Zjedz niżej</span>
                <ScrollArrows />
            </div>
        </div>
    );
}
