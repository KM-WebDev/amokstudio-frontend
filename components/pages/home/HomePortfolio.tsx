import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import HorizontalScrollCarousel from "@/components/thirdparty/hover/HorizontalScrollCarousel";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";
import {
    Carousel,
    CarouselDots,
    CarouselNextButton,
    CarouselPrevButton,
} from "@/components/ui/Carousel/Carousel";

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
    ];

    const Top = <SectionTop />;

    return (
        <Section className="bg-clr-bg-dark">
            <Section.Content className="z-100 w-full">
                <DesktopCarousel
                    Top={Top}
                    cards={cards}
                    className="max-lg:hidden"
                />
                {/* <MobileGrid Top={Top} cards={cards} className="lg:hidden" /> */}
                <MobileCarousel cards={cards} Top={Top} className="lg:hidden" />
            </Section.Content>
        </Section>
    );
}

interface DesktopCarouselProps {
    cards: Card[];
    className?: string;
    Top: ReactNode;
}

function DesktopCarousel({ Top, cards, className }: DesktopCarouselProps) {
    return (
        <HorizontalScrollCarousel
            className={cn("h-[300vh] w-full", className)}
            title={Top}
        >
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </HorizontalScrollCarousel>
    );
}

function MobileCarousel({ cards, className, Top }: DesktopCarouselProps) {
    return (
        <div className={cn("gap-sm flex h-fit w-full flex-col", className)}>
            {Top}
            <div className="relative w-full">
                <Carousel
                    options={{ loop: true }}
                    className={cn(
                        "gap-sm flex w-full flex-col",
                        "[--slide-size:75%]"
                    )}
                    itemClassName="opacity-25! transition-opacity duration-300"
                    activeItemClassName="opacity-100!"
                    slides={cards.map((card) => {
                        return (
                            <div
                                key={card.id}
                                className="gap-xs flex h-fit w-full flex-col"
                            >
                                <div className="relative aspect-square shrink-0">
                                    <Image
                                        src={card.url}
                                        alt=""
                                        fill
                                        sizes="300px"
                                        className="rounded-2xl object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-medium">
                                        Lorem ipsum dolor sit.
                                    </p>
                                    <p className="text-clr-text-muted">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Assumenda, amet?
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                >
                    <div className="z-10 flex flex-col items-center justify-center gap-10">
                        <div className="flex items-center justify-center gap-8 text-2xl">
                            <CarouselPrevButton>
                                <IoIosArrowBack />
                            </CarouselPrevButton>
                            <CarouselDots
                                className="gap-0.5"
                                dotClassName="w-3 h-3 bg-clr-text-muted border-2 border-clr-text-muted"
                                activeDotClassName="bg-clr-bg"
                            />
                            <CarouselNextButton>
                                <IoIosArrowForward />
                            </CarouselNextButton>
                        </div>
                    </div>
                </Carousel>
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
                "group relative aspect-square shrink-0 overflow-hidden rounded-2xl bg-neutral-200 lg:h-[300px] lg:w-[300px]",
                className
            )}
        >
            <Image
                src={card.url}
                alt=""
                fill
                sizes="300px"
                className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="p-xs absolute inset-0 z-100 flex flex-col justify-end">
                <p className="text-clr-bg-extra-light text-lg font-medium">
                    Lorem ipsum dolor sit.
                </p>
                <div className="hidden scale-0 transition-transform group-hover:block group-hover:scale-100">
                    <p className="text-clr-bg-dark">
                        Lorem ipsum dolor, sit amet consecte adipisicng elit.
                        Assumenda, amet?
                    </p>
                    <ButtonWithArrow
                        text="Zobacz wszystkie"
                        variant="secondary"
                        className="w-fit px-0 text-white"
                    />
                </div>
            </div>
            <div
                className={cn(
                    "absolute inset-0 z-10 bg-linear-0 transition-colors group-hover:backdrop-blur-xs",
                    "from-clr-brand-red/60 via-clr-brand-red/10 to-clr-brand-red/5",
                    "group-hover:from-clr-brand-red/80 group-hover:via-clr-brand-red/50 group-hover:to-clr-brand-red/30"
                )}
            />
        </div>
    );
};

// function MobileGrid({ Top, cards, className }: DesktopCarouselProps) {
//     return (
//         <div className={cn("gap-xs flex w-full flex-col", className)}>
//             {Top}
//             <div
//                 className={cn(
//                     "gap-xs grid grid-cols-1 justify-center sm:grid-cols-2"
//                 )}
//             >
//                 {cards.map((card) => {
//                     return (
//                         <div key={card.id} className="h-fit w-fit">
//                             <Card card={card} />
//                             <p className="text-lg">Lorem ipsum dolor sit.</p>
//                             <p className="text-clr-text-muted">
//                                 Lorem ipsum dolor, sit amet consectetur
//                                 adipisicing elit. Assumenda, amet?
//                             </p>
//                         </div>
//                     );
//                 })}
//             </div>
//             <ButtonWithArrow
//                 text="Zobacz wszystkie"
//                 variant="secondary"
//                 className="mx-auto w-fit"
//             />
//         </div>
//     );
// }
