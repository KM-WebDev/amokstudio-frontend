"use client";

import { cn } from "@/lib/utils/cn";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { ReactNode, useRef } from "react";

interface HorizontalScrollCarousel {
    children: ReactNode;
    title: ReactNode;
    className?: string;
}
export default function HorizontalScrollCarousel({
    children,
    title,
    className,
}: HorizontalScrollCarousel) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const { scrollYProgress: endScroll } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0.2, 0.3, 0.9, 1],
        [0.8, 1, 1, 0.8]
    );
    const x = useTransform(scrollYProgress, [0.25, 1], ["10%", "-100%"]);
    const y = useTransform(endScroll, [0, 1], ["0%", "70%"]);
    return (
        <div ref={targetRef} className={cn("relative h-full", className)}>
            <motion.div
                style={{ y }}
                className="gap-sm sticky top-[30%] flex flex-col overflow-hidden"
            >
                {title}
                <motion.div
                    style={{ x, scale }}
                    className="inline-flex w-fit justify-start gap-4"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
