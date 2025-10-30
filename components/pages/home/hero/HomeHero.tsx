import Breakpoint from "@/controls/Breakpoint";
import HomeHeroDesktop from "./HomeHeroDesktop";
import HomeHeroMobile from "./HomeHeroMobile";
import Image from "next/image";

export default function Hero() {
    const H1 = (
        <h1 className="pointer-events-auto flex max-w-2xl flex-col justify-center gap-3 px-4 text-3xl font-semibold max-lg:order-1 max-lg:text-center lg:gap-3 lg:text-7xl">
            Kreatywne studio designu w Trójmieście
        </h1>
    );

    const Logo = (
        <Image
            src={"/logo-red.svg"}
            fill
            sizes="30vw"
            className="relative h-full object-contain px-5 pb-5 lg:px-[50px]"
            alt="logo"
        />
    );

    return (
        <>
            {/* <Breakpoint condition="more" breakpoint="lg"> */}
            <HomeHeroDesktop heading={<H1 />} logo={<Logo />} />
            {/* </Breakpoint>
            <Breakpoint fallback condition="less" breakpoint="lg">
                <HomeHeroMobile heading={<H1 />} logo={<Logo />} />
            </Breakpoint> */}
        </>
    );
}
