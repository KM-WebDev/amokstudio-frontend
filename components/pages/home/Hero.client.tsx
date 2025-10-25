"use client";

import { cn } from "@/lib/utils/cn";
import { motionValue, MotionValue } from "motion";
import {
    useAnimation,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import * as motion from "motion/react-client";

import {
    createContext,
    ReactNode,
    RefObject,
    useContext,
    useRef,
    useState,
} from "react";

interface HeroContext {
    scrollEndEnd: MotionValue<number>;
    scrollStartEnd: MotionValue<number>;
    scrollRef: RefObject<HTMLDivElement | null>;
}

interface HeroClientProps {
    children: ReactNode;
}

const HeroContext = createContext<HeroContext>({
    scrollEndEnd: motionValue(0),
    scrollStartEnd: motionValue(0),
    scrollRef: { current: null },
});

export default function HeroClient({ children }: HeroClientProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress: scrollEndEnd } = useScroll({
        target: scrollRef,
        offset: ["end end", "end start"],
    });

    const { scrollYProgress: scrollStartEnd } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollStartEnd, "change", (latest) =>
        console.log(latest)
    );

    return (
        <HeroContext.Provider
            value={{ scrollEndEnd, scrollStartEnd, scrollRef }}
        >
            <div ref={scrollRef}>{children}</div>
        </HeroContext.Provider>
    );
}

const HeadingVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        filter: "blur(10px) brightness(0%)",
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "0",
        transition: {
            duration: 0.2,
        },
    },
};

interface HeroHeadingContainerProps {
    children: ReactNode;
    className: string;
}
export function HeroHeadingContainer({
    children,
    className,
}: HeroHeadingContainerProps) {
    const { scrollEndEnd, scrollStartEnd } = useContext(HeroContext);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(true);

    useMotionValueEvent(scrollStartEnd, "change", (latest) => {
        if (latest > 0.2) {
            // When scroll passes 20% of section height
            controls.start("hidden");
            setIsVisible(false);
        } else {
            if (!isVisible && latest < 0.3) {
                controls.start("visible");
            } else {
                controls.start("visible");
            }
            setIsVisible(true);
        }
    });
    // const scale = useTransform(scrollEndEnd, [0, 1], [1, 2]);
    // const style = { scale };
    const style = {};

    return (
        <motion.div
            variants={HeadingVariants}
            initial="visible"
            animate={controls}
            transition={{ duration: 0.2 }}
            style={style}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    );
}

interface HeroBgImgContainer {
    children: ReactNode;
    className?: string;
}

export function HeroBgImgContainer({
    className,
    children,
}: HeroBgImgContainer) {
    const { scrollStartEnd } = useContext(HeroContext);
    const scale = useTransform(scrollStartEnd, [0.1, 0.7], [1, 1.5]);
    const blurBackground = useTransform(scrollStartEnd, [0, 0.5], [15, 0]);
    const backdropFilter = useMotionTemplate`blur(${blurBackground}px)`;
    const top = useTransform(
        scrollStartEnd,
        [0.5, 0.7, 0.9, 1],
        ["50%", "15%", "15%", "-10%"]
    );

    return (
        <div className={cn("", className)}>
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 w-full"
                style={{ backdropFilter }}
            />

            <motion.div
                className="absolute right-0 left-0 h-full w-full translate-y-[-50%]"
                style={{ scale, top }}
            >
                {children}
            </motion.div>
        </div>
    );
}

const SubtitleVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        filter: "blur(10px) brightness(0%)",
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "0",
        transition: {
            duration: 0.2,
        },
    },
};

interface HeroSubtitleContainerProps {
    children: ReactNode;
    className?: string;
}
export function HeroSubtitleContainer({
    children,
    className,
}: HeroSubtitleContainerProps) {
    const { scrollStartEnd } = useContext(HeroContext);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(true);

    useMotionValueEvent(scrollStartEnd, "change", (latest) => {
        console.log(latest);
        if (latest < 0.8) {
            controls.start("hidden");
            setIsVisible(false);
        } else {
            if (!isVisible && latest > 0.85) {
                controls.start("visible");
            } else {
                controls.start("visible");
            }
            setIsVisible(true);
        }
    });

    return (
        <motion.div
            variants={SubtitleVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.2 }}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    );
}
