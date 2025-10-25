import PortfolioDisplay from "@/components/Portfolio";
import Hero from "@/components/sections/home/Hero";
import { client } from "@/services/sanity/client";
import { PORTFOLIO_HOMEPAGE_QUERY } from "@/services/sanity/queries";
import { Viewport } from "next";

export const metadata = {
    title: "Moja Strona",
    description: "Opis strony",
};

export const viewport: Viewport = {
    themeColor: "#a71938",
};

export default async function Home() {
    // const result = await client.fetch(PORTFOLIO_HOMEPAGE_QUERY);
    // console.log(result[0].mainImage);
    return (
        <>
            <Hero />
            {/* <PortfolioDisplay portflios={result} /> */}
            {Array(100)
                .fill(0)
                .map((_, n) => (
                    <span key={n} className="block py-1">
                        {n}
                    </span>
                ))}
            <div className="z-10 h-[300vh] bg-neutral-600" />
        </>
    );
}
