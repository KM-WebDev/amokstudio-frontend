import { ReactNode } from "react";
import {
    Carousel,
    CarouselDots,
    CarouselNextButton,
    CarouselPrevButton,
} from "./ui/Carousel/Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cn } from "@/lib/utils/cn";

interface DefaultCarouselProps {
    slides: ReactNode[];
    className?: string;
}

export default function DefaultCarousel({
    slides,
    className,
}: DefaultCarouselProps) {
    return (
        <Carousel
            options={{ loop: true }}
            className={cn(
                "gap-sm flex w-full flex-col",
                "[--slide-size:75%]",
                className
            )}
            itemClassName="opacity-25! transition-opacity duration-300"
            activeItemClassName="opacity-100!"
            slides={slides}
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
    );
}
