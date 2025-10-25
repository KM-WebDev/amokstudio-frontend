import Hero from "@/components/pages/home/Hero";
import PageContent from "./PageContent";
import Bento from "./Bento";

export default async function HomePage() {
    return (
        <>
            <Hero />
            <PageContent>
                <Bento />
            </PageContent>
        </>
    );
}
