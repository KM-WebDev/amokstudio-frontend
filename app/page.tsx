import HomePage from "@/components/pages/home/HomePage";
import { Viewport } from "next";

export const metadata = {
    title: "Moja Strona",
    description: "Opis strony",
};

export const viewport: Viewport = {
    themeColor: "#a71938",
};

export default async function Home() {
    return <HomePage />;
}
