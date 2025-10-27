import Hero from "@/components/pages/home/Hero";
import PageContent from "./PageContent";
import Bento from "./Bento";
import Logo from "@/components/Logo";
import Hero2 from "./Hero copy";

export default async function HomePage() {
    return (
        <>
            <Hero2 />
            <PageContent>
                <Bento />
                <div className="h-[1000px]"></div>
                <Logo />
            </PageContent>
        </>
    );
}
