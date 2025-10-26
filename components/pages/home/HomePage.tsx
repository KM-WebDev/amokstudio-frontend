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
                <Logo />
            </PageContent>
        </>
    );
}
