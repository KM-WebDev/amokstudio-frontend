import Hero from "@/components/pages/home/Hero";
import PageContent from "./PageContent";

export default async function HomePage() {
    return (
        <>
            <Hero />
            <PageContent>
                <div className="z-10000 w-full bg-white">
                    {Array(100)
                        .fill(0)
                        .map((_, n) => (
                            <span key={n} className="block py-1">
                                {n}
                            </span>
                        ))}
                    <div className="z-10 h-[300vh] bg-neutral-600" />
                </div>
            </PageContent>
        </>
    );
}
