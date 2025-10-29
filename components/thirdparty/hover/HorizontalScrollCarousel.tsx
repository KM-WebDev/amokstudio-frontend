"use client";

import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
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
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: endScroll } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    useMotionValueEvent(endScroll, "change", (l) => console.log(l));

    const x = useTransform(scrollYProgress, [0.15, 0.8], ["0%", "-100%"]);
    const y = useTransform(endScroll, [0, 1], ["0%", "90%"]);
    return (
        <div ref={targetRef} className="relative h-full">
            <motion.div
                style={{ y }}
                className="gap-md sticky top-[30%] flex flex-col overflow-hidden"
            >
                {title}
                <motion.div
                    style={{ x }}
                    className="inline-flex w-fit justify-start gap-4"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
