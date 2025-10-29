"use client";

import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { ReactNode, useRef } from "react";

interface HorizontalScrollCarousel {
    children: ReactNode;
    title: ReactNode;
}
export default function HorizontalScrollCarousel({
    children,
    title,
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
    const y = useTransform(endScroll, [0, 1], ["0%", "90%"]);
    return (
        <div ref={targetRef} className="relative h-full">
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
