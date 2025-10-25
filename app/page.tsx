// import PortfolioDisplay from "@/components/Portfolio";
import HomePage from "@/components/pages/home/HomePage";
// import { client } from "@/services/sanity/client";
// import { PORTFOLIO_HOMEPAGE_QUERY } from "@/services/sanity/queries";
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

    return <HomePage />;
}
