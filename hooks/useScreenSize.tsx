import { useEffect, useState } from "react";

type ScreenBreakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
const screenBreakpoints: Record<ScreenBreakpoint, number> = {
    base: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

function getBreakpoint(size: number): ScreenBreakpoint {
    for (const [breakpoint, value] of Object.entries(
        screenBreakpoints
    ).reverse()) {
        if (value <= size) return breakpoint as ScreenBreakpoint;
    }
    return "base";
}

export function useScreenSize(target?: Element) {
    const node = target ? target : document.body;
    const [breakpoint, setBreakpoint] = useState<ScreenBreakpoint>("base");

    const handleNewDimensions = (target: Element) => {
        const width = target.getBoundingClientRect().width;
        const bp = getBreakpoint(width);
        setBreakpoint(bp);
    };

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            handleNewDimensions(entry.target);
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, [node]);

    return { breakpoint };
}
