"use client";

import { ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { NavigationControlsContext } from "../../controls/context/NavigationControls";

interface HeaderContainerProps {
    children: ReactNode;
    className?: string;
}
export function HeaderContainer({ children, className }: HeaderContainerProps) {
    const { headerRef } = useContext(NavigationControlsContext);
    return (
        <div ref={headerRef} className={className}>
            {children}
        </div>
    );
}

interface HeaderHeightProps {
    className?: string;
}
export function HeaderHeightPadding({ className }: HeaderHeightProps) {
    const { headerRef } = useContext(NavigationControlsContext);
    const paddingRef = useRef<HTMLDivElement | null>(null);

    const resizeHandler = useCallback(() => {
        if (headerRef.current && paddingRef.current) {
            const { height } = headerRef.current.getBoundingClientRect();
            paddingRef.current.style.height = height.toString() + "px";
        }
    }, [headerRef, paddingRef]);

    useEffect(() => {
        const node = headerRef.current;
        if (!node) return;
        resizeHandler();

        const resizeObserver = new ResizeObserver(resizeHandler);
        resizeObserver.observe(node);
        return () => resizeObserver.disconnect();
    }, [headerRef, paddingRef, resizeHandler]);

    return <div ref={paddingRef} className={className} />;
}
