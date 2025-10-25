import { HeaderHeightPadding } from "@/components/base/Header.client";
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
    const result = await client.fetch(PORTFOLIO_HOMEPAGE_QUERY);
    return (
        <>
            <HeaderHeightPadding />
            <Hero />
            <PortfolioDisplay portflios={result} />
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

export async function POST(request: Request) {
    // const secret = process.env.REVALIDATE_SECRET;
    // const { path, secret: reqSecret } = await request.json();
    // if (reqSecret !== secret) {
    // return new Response("Invalid token", { status: 401 });
    // }
    console.log(request.headers);
    const actionType = request.headers.get("action-type");
    console.log(actionType);
    return new Response("", { status: 200 });
    // return new Response(`Revalidated ${path}`, { status: 200 });
}
