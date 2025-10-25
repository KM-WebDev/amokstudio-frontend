"use client";

import { createContext, RefObject, useEffect, useRef, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface Context {
    isNavOpen: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
    scrollRef: RefObject<number>;
}

export const NavigationControlsContext = createContext<Context>({
    isNavOpen: false,
    openNav: () => {},
    closeNav: () => {},
    toggleNav: () => {},
    scrollRef: { current: 0 },
});

export default function NavigationControls({ children }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const scrollRef = useRef(0);
    const openNav = () => setIsNavOpen(true);
    const closeNav = () => setIsNavOpen(false);
    const toggleNav = () => setIsNavOpen((x) => !x);

    useEffect(() => {
        document.addEventListener(
            "scroll",
            () => (scrollRef.current = window.scrollY)
        );
    });

    return (
        <NavigationControlsContext
            value={{ isNavOpen, openNav, closeNav, toggleNav, scrollRef }}
        >
            {children}
        </NavigationControlsContext>
    );
}
