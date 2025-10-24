import Hero from "@/components/sections/home/Hero";
import { Viewport } from "next";

export const metadata = {
    title: "Moja Strona",
    description: "Opis strony",
};

export const viewport: Viewport = {
    themeColor: "#a71938",
};

export default function Home() {
    return (
        <>
            <Hero />
            <div className="z-10 h-[300vh] bg-white" />
        </>
    );
}
