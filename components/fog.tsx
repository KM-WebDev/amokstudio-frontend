"use client";
import { HTMLAttributes, ReactNode, RefObject, useEffect, useRef } from "react";
import { VANTA } from "../lib/thirdparty/vanta-js/vanta.fog";
import * as THREE from "three";
import * as motion from "motion/react-client";
import { MotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils/cn";
import { clamp } from "@/lib/utils/helpers";

interface FogProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    scrollYProgress?: MotionValue<number>;
}

const fogInitialConfig = {
    THREE: THREE,
    forceAnimate: true,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0xdedede,
    midtoneColor: 0xd97f6a,
    lowlightColor: 0xa71938,
    baseColor: 0xd22727,
    blurFactor: 0.39,
    speed: 0,
    zoom: 6,
    mobileZoom: 6,
};

export default function Fog({ children, className, scrollRef }: FogProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fogRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef ? scrollRef : ref,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        if (!ref.current) return;

        const fog = VANTA.FOG({ el: ref.current, ...fogInitialConfig });

        fogRef.current = fog;
        const speed = 1;
        const zoom = 5;
        fogRef.current.setOptions({ speed, zoom });

        return () => {
            if (fog) fog.destroy();
        };
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!fogRef.current) return;
        // const speed = clamp(latest * 5 - 1, 0.5, 5);
        const zoom = clamp(5 - latest * 5, 0, 5);
        fogRef.current.setOptions({ zoom });
    });

    return (
        <motion.div
            // style={{ scale }}
            ref={ref}
            className={cn("relative z-10 h-full w-full", className)}
        >
            {children}
        </motion.div>
    );
}
