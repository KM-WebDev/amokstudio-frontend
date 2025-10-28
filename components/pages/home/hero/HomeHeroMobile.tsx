import { TextEffect } from "@/components/thirdparty/motion-primitives/TextEffect";
import Image from "next/image";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import { cn } from "@/lib/utils/cn";
import Particles from "@/components/thirdparty/reactbits/Particles";
import { BasicComponentProps } from "@/lib/types/global";

export default function HomeHeroMobile({ className }: BasicComponentProps) {
    return (
        <div
            className={cn(
                "relative flex h-screen w-full items-center justify-center",
                className
            )}
        >
            <HeaderHeightPadding />
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-xs"></div>
            <div className="absolute inset-0">
                <Particles
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
                />
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
        <h1 className="pointer-events-auto flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold max-lg:order-1 max-lg:text-center lg:gap-3 lg:text-7xl">
            <TextEffect per="char" delay={1} preset="blur">
                Kreatywne studio designu w Trójmieście
            </TextEffect>
        </h1>
    );
}
