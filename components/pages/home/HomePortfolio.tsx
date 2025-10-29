import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import HorizontalScrollCarousel from "@/components/thirdparty/hover/HorizontalScrollCarousel";
import Image from "next/image";

import ButtonWithArrow from "@/components/ui/ButtonWithArrow";

export default function HomePortfolio() {
    const cards = [
        {
            url: "/anastazja.jpg",
            title: "Title 1",
            id: 1,
        },
        {
            url: "/book-1.png",
            title: "Title 2",
            id: 2,
        },
        {
            url: "/book-2.png",
            title: "Title 3",
            id: 3,
        },
        {
            url: "/kebab-lokal.jpg",
            title: "Title 4",
            id: 4,
        },
        {
            url: "/kebab-tshirt.png",
            title: "Title 5",
            id: 5,
        },
        {
            url: "/kebab-lokal.jpg",
            title: "Title 4",
            id: 6,
        },
        {
            url: "/kebab-tshirt.png",
            title: "Title 5",
            id: 7,
        },
        {
            url: "/kebab-lokal.jpg",
            title: "Title 4",
            id: 8,
        },
        {
            url: "/kebab-tshirt.png",
            title: "Title 5",
            id: 9,
        },
    ];

    return (
        <Section className="bg-clr-bg-dark">
            <Section.Content className="z-100 h-[300vh] w-full">
                <HorizontalScrollCarousel
                    title={
                        <div className="gap-sm relative flex flex-col items-center">
                            <SectionHeading
                                heading="Portfolio"
                                number="03"
                                text="Zobacz moje realizacje"
                            />
                            <ButtonWithArrow
                                text="Zobacz wszystkie"
                                variant="secondary"
                                className="w-fit"
                            />
                        </div>
                    }
                >
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </HorizontalScrollCarousel>
            </Section.Content>
        </Section>
    );
}

type Card = { url: string; title: string; id: number };

const Card = ({ card }: { card: Card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-2xl bg-neutral-200"
        >
            <Image
                src={card.url}
                alt=""
                fill
                sizes="300px"
                className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-content-center">
                <Heading
                    className="z-100 text-white"
                    semantic="h3"
                    text={card.title}
                />
            </div>
            <div className="bg-clr-brand-red/30 group-hover:bg-clr-brand-red/40 absolute inset-0 z-10 transition-colors" />
        </div>
    );
};
