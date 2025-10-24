"use client";

import Fog from "@/components/Fog";
import { cn } from "@/lib/utils/cn";
import { motionValue, MotionValue } from "motion";
import { useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client";

import {
    createContext,
    HTMLAttributes,
    ReactNode,
    RefObject,
    useContext,
    useRef,
} from "react";

interface HeroContext {
    scrollYProgress: MotionValue<number>;
    scrollRef: RefObject<HTMLDivElement | null>;
}

interface HeroClientProps {
    children: ReactNode;
}

const HeroContext = createContext<HeroContext>({
    scrollYProgress: motionValue(0),
    scrollRef: { current: null },
});

export default function HeroClient({ children }: HeroClientProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["end end", "end start"],
    });

    return (
        <HeroContext.Provider value={{ scrollYProgress, scrollRef }}>
            <div ref={scrollRef}>{children}</div>
        </HeroContext.Provider>
    );
}

interface HeroHeadingContainerProps {
    children: ReactNode;
    className: string;
}
export function HeroHeadingContainer({
    children,
    className,
}: HeroHeadingContainerProps) {
    const { scrollYProgress } = useContext(HeroContext);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const top = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    return (
        <motion.div style={{ scale, top }} className={cn("", className)}>
            {children}
        </motion.div>
    );
}

export function HeroFog() {
    const { scrollRef } = useContext(HeroContext);
    return <Fog scrollRef={scrollRef} />;
}
