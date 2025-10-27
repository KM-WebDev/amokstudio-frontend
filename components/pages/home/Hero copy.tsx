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
import Logo from "@/components/Logo";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import Iridescence from "@/components/thirdparty/reactbits/Iridescence";
import LiquidChrome from "@/components/thirdparty/reactbits/LiquidChrome";
import { StarsBackground } from "@/components/thirdparty/animate-ui/StarsBackground";
import { cn } from "@/lib/utils/cn";

export default function Hero2() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center">
            <HeaderHeightPadding />
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-xs"></div>
            <div className="absolute inset-0">
                {/* <Particles
                    particleColors={["#fec7da", "#ca010b"]}
                    particleCount={150}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={450}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                    className={"-z-100"}
                    style={{ transform: "translateZ(0)" }}
                /> */}

                <StarsBackground
                    starColor="#ca010b"
                    factor={1}
                    speed={50}
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded-xl",
                        "bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)] dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]"
                    )}
                />

                {/* <Iridescence
                    color={[202, 1, 11]}
                    // color={[254, 199, 218]}
                    mouseReact={false}
                    amplitude={0.5}
                    speed={0.1}
                /> */}
                {/* <LiquidChrome
                    // baseColor={[
                    //     0.792156862745098, 0.00392156862745098,
                    //     0.043137254901960784,
                    // ]}
                    baseColor={[
                        0.996078431372549, 0.7803921568627451,
                        0.8549019607843137,
                    ]}
                    speed={0.1}
                    amplitude={0.6}
                    interactive={false}
                /> */}
            </div>
            <div className="z-100 flex h-full w-full max-w-[1500px] items-center justify-center max-lg:flex-col lg:justify-between">
                <HeroHeading />
                <Image
                    src="/logo-red.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] px-5 pb-5 lg:max-w-[50%]"
                    alt="logo"
                />
            </div>
        </div>
    );
}

function HeroHeading() {
    return (
        <h1 className="pointer-events-auto flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold max-lg:order-1 lg:gap-3 lg:text-7xl">
            <TextEffect per="char" delay={1} preset="blur">
                Kreatywne studio designu w Trójmieście
            </TextEffect>
        </h1>
    );
}
