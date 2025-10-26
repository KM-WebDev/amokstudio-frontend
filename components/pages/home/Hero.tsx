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
import Particles from "@/components/thirdparty/reactbits/Particles";

export default function Hero() {
    return (
        <HeroClient>
            <div className="relative -z-100">
                <div className="pointer-events-none h-[250vh] overflow-hidden md:h-[300vh]">
                    {" "}
                </div>
                <HeroBgImgContainer
                    particles={
                        <Particles
                            particleColors={["#fec7da", "#ca010b"]}
                            particleCount={300}
                            particleSpread={15}
                            speed={0.1}
                            particleBaseSize={500}
                            moveParticlesOnHover={true}
                            alphaParticles={true}
                            disableRotation={false}
                            className="absolute inset-0 z-[100000000] blur-xs"
                        />
                    }
                    className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center"
                >
                    <Image
                        src={"/amokstudio-red.svg"}
                        fill
                        sizes="100vw"
                        className="h-full w-full object-contain"
                        alt="logo"
                    />
                </HeroBgImgContainer>
                <HeroHeadingContainer
                    className={
                        "fixed top-[30%] left-[50%] z-10 container w-full -translate-x-[50%] -translate-y-[50%] lg:top-[50%]"
                    }
                >
                    <HeroHeading />
                </HeroHeadingContainer>
                <HeroScrollArrowsContainer className="fixed right-0 bottom-2 z-10 mb-5 flex w-full items-end justify-center gap-2 px-5 text-sm text-zinc-500">
                    <span className="">Zjedz niżej</span>
                    <ScrollArrows />
                </HeroScrollArrowsContainer>
                {/* <HeroSubtitleContainer className="fixed top-[0%] right-0 left-[50%] mb-5 flex h-[40%] w-full translate-x-[-50%] flex-col items-center justify-center gap-2 text-sm text-zinc-700">
                    <CurvedLoop
                        marqueeText="Branding ✦ Komunikacja wizualna ✦ Znakowanie odzieży  ✦ Reklama ✦"
                        speed={0.5}
                        curveAmount={300}
                        direction="right"
                        interactive={false}
                        className="custom-text-style fill-clr-brand-rose"
                    />
                </HeroSubtitleContainer> */}
            </div>
        </HeroClient>
    );
}

function HeroHeading() {
    return (
        <h1 className="pointer-events-auto z-1000 flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold lg:gap-3 lg:text-7xl">
            <TextEffect per="char" delay={0.5} preset="blur">
                Kreatywne studio designu w Trójmieście
            </TextEffect>
        </h1>
    );
}
