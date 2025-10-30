import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import HorizontalScrollCarousel from "@/components/thirdparty/hover/HorizontalScrollCarousel";
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

import Breakpoint from "@/controls/Breakpoint";
import DefaultCarousel from "@/components/DefaultCarousel";

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
];

export default function HomePortfolio() {
    const Top = <SectionTop />;

    const Cards = cards.map((card) => <Card key={card.id} card={card} />);

    return (
        <Section className="bg-clr-bg-dark">
            <Section.Content className="z-100 w-full">
                <Breakpoint condition="more" breakpoint="lg">
                    <DesktopCarousel Top={Top} Cards={Cards} />
                </Breakpoint>
                <Breakpoint condition="less" breakpoint="lg" fallback>
                    <MobileCarousel Cards={Cards} Top={Top} />
                </Breakpoint>
            </Section.Content>
        </Section>
    );
}

interface CarouselProps {
    Cards: ReactNode[];
    className?: string;
    Top: ReactNode;
}

function DesktopCarousel({ Top, Cards, className }: CarouselProps) {
    return (
        <HorizontalScrollCarousel
            className={cn("h-[300vh] w-full", className)}
            title={Top}
        >
            {Cards}
        </HorizontalScrollCarousel>
    );
}

function MobileCarousel({ Cards, className, Top }: CarouselProps) {
    return (
        <div className={cn("gap-sm flex h-fit w-full flex-col", className)}>
            {Top}
            <div className="relative w-full">
                <DefaultCarousel slides={Cards} />
            </div>
        </div>
    );
}

function SectionTop({ className }: BasicComponentProps) {
    return (
        <div
            className={cn(
                "gap-sm relative flex flex-col items-center",
                className
            )}
        >
            <SectionHeading
                heading="Portfolio"
                number="03"
                text="Zobacz moje realizacje"
            />
            <p className="text-clr-text-muted text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quo vel eos quis ullam omnis!
            </p>
            <ButtonWithArrow
                text="Zobacz wszystkie"
                variant="secondary"
                className="w-fit"
            />
        </div>
    );
}

type Card = { url: string; title: string; id: number };

const Card = ({ card, className }: { card: Card; className?: string }) => {
    return (
        <div
            key={card.id}
            className={cn(
                "group relative shrink-0 cursor-pointer overflow-hidden lg:h-[300px] lg:w-[300px]",
                className
            )}
        >
            <div className="relative aspect-square shrink-0 overflow-hidden rounded-2xl">
                <Image
                    src={card.url}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover transition-transform lg:group-hover:scale-110"
                />
                <div
                    className={cn(
                        "absolute inset-0 z-10 bg-linear-0 transition-colors max-lg:hidden lg:group-hover:backdrop-blur-xs",
                        "from-clr-brand-red/60 via-clr-brand-red/10 to-clr-brand-red/5",
                        "lg:group-hover:from-clr-brand-red/80 lg:group-hover:via-clr-brand-red/50 lg:group-hover:to-clr-brand-red/30"
                    )}
                />
            </div>

            <div className="p-xs inset-0 z-100 flex flex-col justify-end lg:absolute">
                <p className="lg:text-clr-bg-extra-light text-lg font-medium">
                    Lorem ipsum dolor sit.
                </p>
                <div className="transition-transform lg:hidden lg:group-hover:block">
                    <p className="lg:text-clr-bg-dark text-clr-text-muted">
                        Lorem ipsum dolor, sit amet consecte adipisicng elit.
                        Assumenda, amet?
                    </p>
                    <ButtonWithArrow
                        text="Sprawdź"
                        variant="secondary"
                        className="w-fit max-w-[80%] px-0 lg:text-white"
                    />
                </div>
            </div>
        </div>
    );
};
