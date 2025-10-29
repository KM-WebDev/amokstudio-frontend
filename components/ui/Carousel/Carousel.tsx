"use client";
import React, { createContext, useCallback, useContext, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaOptionsType,
    EmblaPluginType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import { useAutoplay, UseAutoplayType } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { cn } from "@/lib/utils/cn";
import AutoScroll, { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { useAutoScroll } from "@/components/ui/Carousel/EmblaCarouselAutoScroll";
import { useDotButton } from "./EmblaCarouselDotButton";
import { BasicComponentProps } from "@/lib/types/global";

interface CarouselContext {
    emblaApi: EmblaCarouselType | undefined;
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
    autoplayApi: UseAutoplayType | undefined;
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (param: number) => void;
}

const CarouselContext = createContext<CarouselContext>({
    emblaApi: undefined,
    prevBtnDisabled: true,
    nextBtnDisabled: true,
    onNextButtonClick: () => {},
    onPrevButtonClick: () => {},
    autoplayApi: undefined,
    selectedIndex: 0,
    scrollSnaps: [],
    onDotButtonClick: () => {},
});

interface CarouselProps {
    slides: React.ReactNode[];
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    children?: React.ReactNode;
    autoplay?: AutoplayOptionsType;
    autoScroll?: AutoScrollOptionsType;
    stretchItems?: boolean;
    className?: string;
    itemClassName?: string;
    activeItemClassName?: string;
    trackClassName?: string;
}

export function Carousel({
    slides,
    options,
    children,
    autoplay,
    autoScroll,
    className,
    itemClassName,
    activeItemClassName,
    trackClassName,
    stretchItems = true,
}: CarouselProps) {
    const plugins: EmblaPluginType[] = [];
    if (autoplay) plugins.push(Autoplay(autoplay));
    else if (autoScroll) plugins.push(AutoScroll(autoScroll));
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    const autoplayUse = useAutoplay(emblaApi);
    const autoScrollApi = useAutoScroll(emblaApi);
    const autoplayApi = autoplay ? autoplayUse : undefined;

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick: prevHandler,
        onNextButtonClick: nextHandler,
    } = usePrevNextButtons(emblaApi);

    const onButtonClick = useCallback(
        (dir: "prev" | "next") => {
            const handler = dir === "prev" ? prevHandler : nextHandler;

            if (autoplay) {
                autoplayApi?.onAutoplayButtonClick(handler);
            } else if (autoScroll) {
                autoScrollApi.onButtonAutoScrollClick(handler);
            } else {
                handler();
            }
        },
        [
            autoScrollApi,
            autoplayApi,
            prevHandler,
            nextHandler,
            autoplay,
            autoScroll,
        ]
    );

    const onPrevButtonClick = useCallback(
        () => onButtonClick("prev"),
        [onButtonClick]
    );
    const onNextButtonClick = useCallback(
        () => onButtonClick("next"),
        [onButtonClick]
    );

    // Snowy: Needs to be memoize to prevent unecessary rerenders. (React thing)
    const contextValue = React.useMemo(() => {
        return {
            emblaApi,
            prevBtnDisabled,
            nextBtnDisabled,
            onPrevButtonClick,
            onNextButtonClick,
            autoplayApi,
            selectedIndex,
            scrollSnaps,
            onDotButtonClick,
        };
    }, [
        emblaApi,
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        autoplayApi,
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    ]);

    return (
        <CarouselContext.Provider value={contextValue}>
            <div
                className={cn(
                    "w-full",
                    "[--slide-spacing:2rem]",
                    "[--slide-size:80%] lg:[--slide-size:40%] xl:[--slide-size:30%]",
                    className
                )}
            >
                <div
                    className={cn("overflow-hidden", trackClassName)}
                    ref={emblaRef}
                >
                    <div
                        className={cn(
                            "cursor-grab",
                            "flex",
                            "[touch-action:pan-y_pinch-zoom]",
                            "ml-[calc(var(--slide-spacing)*-1)]",
                            stretchItems && "items-stretch"
                        )}
                    >
                        {slides.map((Element, index) => (
                            <div
                                className={cn(
                                    "min-w-0",
                                    "transform-[translate3d(0,0,0)]",
                                    "flex-[0_0_var(--slide-size)]",
                                    "pl-[var(--slide-spacing)]",
                                    itemClassName,
                                    selectedIndex === index
                                        ? activeItemClassName
                                        : ""
                                )}
                                key={index}
                            >
                                {Element}
                            </div>
                        ))}
                    </div>
                </div>
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

interface CarouselDotsProps {
    className?: string;
    dotClassName?: string;
    activeDotClassName?: string;
}

export function CarouselDots({
    className,
    dotClassName,
    activeDotClassName,
}: CarouselDotsProps) {
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useContext(CarouselContext);

    return (
        <div className={cn("flex gap-1", className)}>
            {scrollSnaps.map((_, index) => (
                <button
                    type="button"
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={cn(
                        "h-5 w-5 rounded-full bg-neutral-200",
                        dotClassName,
                        selectedIndex === index ? activeDotClassName : ""
                    )}
                />
            ))}
        </div>
    );
}

export function CarouselToggleAutoplayButton({
    className,
}: {
    className?: string;
}) {
    const { autoplayApi } = useContext(CarouselContext);
    if (!autoplayApi) return <></>;
    const { autoplayIsPlaying, toggleAutoplay } = autoplayApi;

    return (
        <button
            className={cn("", className)}
            onClick={toggleAutoplay}
            type="button"
        >
            {autoplayIsPlaying ? "Stop" : "Start"}
        </button>
    );
}

export function CarouselAutoplayProgress() {
    const progressNode = useRef<HTMLDivElement>(null);
    const { emblaApi } = useContext(CarouselContext);

    const { showAutoplayProgress } = useAutoplayProgress(
        emblaApi,
        progressNode
    );

    return (
        <div
            className={cn(
                `embla__progress`,
                showAutoplayProgress ? "" : "embla__progress--hidden"
            )}
        >
            <div
                className={cn("embla__progress__bar", "!bg-red-500")}
                ref={progressNode}
            />
        </div>
    );
}

function Button({
    className,
    children,
    direction,
}: {
    direction: "prev" | "next";
    className?: string;
    children: React.ReactNode | string;
}) {
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onNextButtonClick,
        onPrevButtonClick,
    } = useContext(CarouselContext);
    const isPrev = direction === "prev";
    const handler = isPrev ? onPrevButtonClick : onNextButtonClick;
    const disabled = isPrev ? prevBtnDisabled : nextBtnDisabled;

    function handleClick() {
        handler();
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={cn("cursor-pointer", className)}
        >
            {children}
        </button>
    );
}

interface DirButton {
    className?: string;
    children: string | React.ReactNode;
}
export function CarouselPrevButton({ className, children }: DirButton) {
    return (
        <Button direction="prev" className={className}>
            {children}
        </Button>
    );
}

export function CarouselNextButton({ className, children }: DirButton) {
    return (
        <Button direction="next" className={className}>
            {children}
        </Button>
    );
}
