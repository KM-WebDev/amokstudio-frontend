"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { ScreenBreakpoint } from "@/lib/types/global";
import { createContext, ReactNode } from "react";

interface BreakpointContext {
    breakpoint: ScreenBreakpoint;
    breakpointValue: number;
}

export const BreakpointContext = createContext<BreakpointContext>({
    breakpoint: "base",
    breakpointValue: 0,
});

export default function BreakpointProvider({
    children,
}: {
    children: ReactNode;
}) {
    const { breakpoint, breakpointValue } = useScreenSize();
    return (
        <BreakpointContext value={{ breakpoint, breakpointValue }}>
            {children}
        </BreakpointContext>
    );
}
