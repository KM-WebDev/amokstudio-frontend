"use client";

import { createContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface Context {
    isNavOpen: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
}

export const NavigationControlsContext = createContext<Context>({
    isNavOpen: false,
    openNav: () => {},
    closeNav: () => {},
    toggleNav: () => {},
});

export default function NavigationControls({ children }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => setIsNavOpen(true);
    const closeNav = () => setIsNavOpen(false);
    const toggleNav = () => setIsNavOpen((x) => !x);

    return (
        <NavigationControlsContext
            value={{ isNavOpen, openNav, closeNav, toggleNav }}
        >
            {children}
        </NavigationControlsContext>
    );
}
