"use client";

import { ReactNode, useContext } from "react";
import { BreakpointContext } from "./context/BreakpointProvider";
import { ScreenBreakpoint } from "@/lib/types/global";
import { BREAKPOINT_VALUES } from "@/lib/constants/global";

export interface BreakpointProps {
    children: ReactNode;
    breakpoint: ScreenBreakpoint;
    condition?: "more" | "less" | "equal";
    fallback?: boolean;
}

export default function Breakpoint({
    children,
    breakpoint,
    condition = "more",
    fallback = false,
}: BreakpointProps) {
    const { breakpointValue: currentBreakpointValue } =
        useContext(BreakpointContext);
    const targetBreakpointValue = BREAKPOINT_VALUES[breakpoint];

    if (typeof window === "undefined") {
        return fallback ? children : null;
    }

    const shouldRender =
        (condition === "more" &&
            currentBreakpointValue >= targetBreakpointValue) ||
        (condition === "less" &&
            currentBreakpointValue < targetBreakpointValue) ||
        (condition === "equal" &&
            currentBreakpointValue === targetBreakpointValue);

    return shouldRender ? children : null;
}
