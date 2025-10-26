"use client";
import { TextEffect } from "@/components/thirdparty/motion-primitives/TextEffect";
import Image from "next/image";
import HeroClient, {
    HeroBgImgContainer,
    HeroHeadingContainer,
    HeroScrollArrowsContainer,
} from "./Hero.client";
import ScrollArrows from "@/components/ui/ScrollArrows";
import Particles from "@/components/thirdparty/reactbits/Particles";

export default function Hero() {
    return (
        <HeroClient>
            {/* -z-100 */}
            <div className="relative z-100">
                <div className="pointer-events-none relative h-[150vh] overflow-hidden md:h-[300vh]">
                    {" "}
                    <Particles
                        particleColors={["#fec7da", "#ca010b"]}
                        particleCount={100}
                        particleSpread={10}
                        speed={0.2}
                        particleBaseSize={450}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                        className={"absolute inset-0 -z-10000 blur-xs"}
                        style={{ transform: "translateZ(0)" }}
                    />
                </div>
                <HeroBgImgContainer className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center">
                    <Image
                        src={"/logo-red.svg"}
                        fill
                        sizes="100vw"
                        className="relative h-full object-contain px-5 pb-5 lg:px-25"
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
