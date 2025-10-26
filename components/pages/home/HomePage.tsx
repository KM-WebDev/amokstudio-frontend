import Hero from "@/components/pages/home/Hero";
import PageContent from "./PageContent";
import Bento from "./Bento";
import Logo from "@/components/Logo";

export default async function HomePage() {
    return (
        <>
            <Hero />
            <PageContent>
                <Bento />
                <div className="h-[1000px]"></div>
                <Logo />
            </PageContent>
        </>
    );
}
