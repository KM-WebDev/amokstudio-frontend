"use client";

import { cn } from "@/lib/utils/cn";
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
            <Overlay onClick={closeNav} isOpen={isNavOpen} />

            {children}
        </NavigationControlsContext>
    );
}
function Overlay({
    onClick,
    isOpen,
}: {
    onClick: () => void;
    isOpen: boolean;
}) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-10000 bg-zinc-300/70 backdrop-blur-md lg:hidden"
            )}
            style={{
                visibility: isOpen ? "visible" : "hidden",
                pointerEvents: isOpen ? "auto" : "none",
                opacity: isOpen ? "1" : "0",
                zIndex: isOpen ? "10000" : "-10",
                display: isOpen ? "block" : "hidden",
                transition: "opacity 0.3s",
            }}
            onClick={onClick}
        />
    );
}
