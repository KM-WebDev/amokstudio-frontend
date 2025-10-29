"use client";

import { NavigationControlsContext } from "@/controls/context/NavigationControls";
import { useThrottledMotionValue } from "@/hooks/useThrottledMotionValue";
import { BasicComponentProps } from "@/lib/types/global";
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
    useEffect,
    useRef,
} from "react";

interface HeroContextType {
    scrollProgress: MotionValue<number>;
    scrollEndProgress: MotionValue<number>;
    scrollRef: RefObject<HTMLDivElement | null>;
}
const HeroContext = createContext<HeroContextType>({
    scrollProgress: motionValue(0),
    scrollEndProgress: motionValue(0),
    scrollRef: { current: null },
});

// HERO CLIENT - wrapper for all HeroDesktop Component
export default function HeroClient({
    children,
    className,
}: BasicComponentProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { isNavOpen } = useContext(NavigationControlsContext);

    const { scrollYProgress: rawScrollStartEnd } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: rawScrollEndEnd } = useScroll({
        target: scrollRef,
        offset: ["end end", "end start"],
    });

    // throttle both scroll handlers to targeted fps
    const scrollProgress = useThrottledMotionValue(rawScrollStartEnd, 60);
    const scrollEndProgress = useThrottledMotionValue(rawScrollEndEnd, 30);

    console.log("HeroClient render");

    const outerStyle = {
        opacity: isNavOpen ? 0 : 1,
        pointerEvents: "none" as const,
    };

    return (
        <HeroContext.Provider
            value={{
                scrollProgress,
                scrollEndProgress,
                scrollRef,
            }}
        >
            <div
                ref={scrollRef}
                className={cn("pointer-events-none z-1000", className)}
                style={outerStyle}
            >
                {children}
            </div>
        </HeroContext.Provider>
    );
}

const HeadingVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        filter: "blur(6px) brightness(0%)",
        transition: { duration: 0.28 },
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "none",
        transition: { duration: 0.22 },
    },
};

export function HeroHeadingContainer({
    children,
    className,
}: BasicComponentProps) {
    const { scrollProgress } = useContext(HeroContext);
    const controls = useAnimation();
    const visibleRef = useRef<boolean>(false);
    const THRESH = 0.25;

    useMotionValueEvent(scrollProgress, "change", (latest: number) => {
        const shouldBeVisible = latest <= THRESH;

        // set new animation state if prev was different
        if (shouldBeVisible !== visibleRef.current) {
            visibleRef.current = shouldBeVisible;
            controls.start(shouldBeVisible ? "visible" : "hidden");
        }
    });

    console.log("HeroHeading render");

    // initial mount only
    useEffect(() => {
        if (typeof window !== "undefined" && window.scrollY === 0) {
            visibleRef.current = true;
            controls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            variants={HeadingVariants}
            initial="hidden"
            animate={controls}
            className={cn("will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}

// HERO IMAGE
interface HeroBgImgContainerProps extends BasicComponentProps {
    particles?: ReactNode;
}
export function HeroBgImgContainer({
    className,
    children,
}: HeroBgImgContainerProps) {
    const { scrollProgress } = useContext(HeroContext);
    console.log("HeroBgImg render");

    const scale = useTransform(scrollProgress, [0.1, 0.7], [0.6, 1]);
    const opacity = useTransform(scrollProgress, [0.9, 0.98], [1, 0]);
    const top = useTransform(
        scrollProgress,
        [0.5, 0.8, 0.95, 1],
        ["50%", "15%", "0%", "-10%"]
    );
    const transformTemplate = useMotionTemplate`translateY(${top}) scale(${scale})`;

    return (
        <div className={cn("", className)}>
            <motion.div className="pointer-events-none absolute inset-0 z-100 w-full" />

            <motion.div
                className="absolute right-0 left-0 h-full w-full translate-y-[-50%]"
                style={{
                    transform: transformTemplate,
                    willChange: "transform, opacity",
                    opacity,
                }}
                aria-hidden
            >
                {children}
            </motion.div>
        </div>
    );
}

const SubtitleVariants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.12 },
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.18 },
    },
};

export function HeroSubtitleContainer({
    children,
    className,
}: BasicComponentProps) {
    const { scrollProgress } = useContext(HeroContext);
    const controls = useAnimation();
    const visibleRef = useRef(false);

    const V_MIN = 0.7;
    const V_MAX = 0.88;

    useMotionValueEvent(scrollProgress, "change", (latest: number) => {
        const nowVisible = latest >= V_MIN && latest <= V_MAX;
        if (nowVisible !== visibleRef.current) {
            visibleRef.current = nowVisible;
            controls.start(nowVisible ? "visible" : "hidden");
        }
    });

    return (
        <motion.div
            variants={SubtitleVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.12 }}
            className={cn("will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}

const arrowVariants = {
    before: { position: "fixed" },
    after: { position: "absolute" },
};
export function HeroScrollArrowsContainer({
    children,
    className,
}: BasicComponentProps) {
    const { scrollEndProgress } = useContext(HeroContext);
    const opacity = useTransform(scrollEndProgress, [0.3, 0.7], [1, 0]);

    const controls = useAnimation();
    const posRef = useRef<"before" | "after">("before");
    useMotionValueEvent(scrollEndProgress, "change", (latest: number) => {
        const state = latest > 0 ? "after" : "before";
        if (state !== posRef.current) {
            posRef.current = state;
            controls.start(state);
        }
    });

    return (
        <motion.div
            variants={arrowVariants}
            initial={"before"}
            animate={controls}
            className={cn("will-change-transform", className)}
            style={{ opacity }}
        >
            {children}
        </motion.div>
    );
}
