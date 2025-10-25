"use client";
import { TextEffect } from "@/components/thirdparty/motion-primitives/TextEffect";
import Image from "next/image";
import HeroClient, {
    HeroBgImgContainer,
    HeroHeadingContainer,
    HeroScrollArrowsContainer,
    HeroSubtitleContainer,
} from "./Hero.client";
import ScrollArrows from "@/components/ui/ScrollArrows";

export default function Hero() {
    return (
        <HeroClient>
            <div className="relative -z-100">
                <div className="h-[300vh] overflow-hidden md:h-[400vh]"></div>
                <HeroBgImgContainer className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center">
                    <Image
                        src={"/amokstudio-red.svg"}
                        fill
                        className="h-full w-full object-contain"
                        alt="logo"
                    />
                </HeroBgImgContainer>
                <HeroHeadingContainer
                    className={
                        "fixed top-[35%] left-[50%] z-10 container w-full -translate-x-[50%] -translate-y-[50%] lg:top-[50%]"
                    }
                >
                    <HeroHeading />
                </HeroHeadingContainer>
                <HeroScrollArrowsContainer className="fixed right-0 bottom-2 z-10 mb-5 flex w-full items-end justify-center gap-5 px-5 text-zinc-500">
                    <span className="">Zjedz niżej</span>
                    <ScrollArrows />
                </HeroScrollArrowsContainer>
            </div>
        </HeroClient>
    );
}

function HeroHeading() {
    return (
        <h1 className="flex flex-col justify-center gap-3 px-4 text-3xl lg:gap-3 lg:text-7xl">
            <TextEffect per="char" delay={0} preset="blur">
                Reklama
            </TextEffect>
            <TextEffect per="char" delay={0.25} preset="blur">
                Branding
            </TextEffect>
            <TextEffect per="char" delay={0.5} preset="blur">
                Znakowanie odzieży
            </TextEffect>
            <TextEffect per="char" delay={1} preset="blur">
                Komunikacja wizualna
            </TextEffect>
        </h1>
    );
}
