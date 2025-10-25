"use client";

import {
    createContext,
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

interface Props {
    children: React.ReactNode;
}

interface Context {
    isNavOpen: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
    scrollRef: RefObject<number>;
    headerRef: RefObject<HTMLDivElement | null>;
}

export const NavigationControlsContext = createContext<Context>({
    isNavOpen: false,
    openNav: () => {},
    closeNav: () => {},
    toggleNav: () => {},
    scrollRef: { current: 0 },
    headerRef: { current: null },
});

export default function NavigationControls({ children }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const scrollRef = useRef(0);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const openNav = useCallback(() => setIsNavOpen(true), []);
    const closeNav = useCallback(() => setIsNavOpen(false), []);
    const toggleNav = useCallback(() => setIsNavOpen((x) => !x), []);

    useEffect(() => {
        document.addEventListener(
            "scroll",
            () => (scrollRef.current = window.scrollY)
        );
    });

    const value = useMemo(() => {
        return {
            isNavOpen,
            openNav,
            closeNav,
            toggleNav,
            scrollRef,
            headerRef,
        };
    }, [isNavOpen, openNav, closeNav, toggleNav, scrollRef, headerRef]);

    return (
        <NavigationControlsContext value={value}>
            {children}
        </NavigationControlsContext>
    );
}
