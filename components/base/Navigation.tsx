"use client";

import Hamburger from "hamburger-react";
import { useContext } from "react";
import { cn } from "@/lib/utils/cn";
import NavLink from "./NavLink";
import { routes } from "@/app/routes";
import { NavigationControlsContext } from "../controls/context/NavigationControls";
import { createPortal } from "react-dom";

export default function Navigation() {
    const { isNavOpen, closeNav } = useContext(NavigationControlsContext);

    return (
        <div className="absolute inset-x-0 bottom-0 -z-10 h-fit translate-y-full overflow-hidden">
            {isNavOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 bg-red-300/50 backdrop-blur-sm"
                        onClick={closeNav}
                    />,
                    document.body
                )}
            <nav
                className={cn(
                    // Phone
                    "rounded-x m-5 translate-y-0 bg-neutral-300 px-10 py-10 backdrop-blur-xl transition-[translate]",
                    "lg:static lg:z-100000 lg:translate-y-0 lg:bg-transparent lg:px-4 lg:py-0 lg:transition-none",
                    isNavOpen
                        ? "max-lg:flex max-lg:translate-y-0"
                        : "max-lg:translate-y-[-150%]"
                )}
            >
                <ul className="flex flex-col gap-8 capitalize lg:flex-row">
                    {routes.map((route) => {
                        return (
                            <li key={route.name}>
                                <NavLink
                                    onClick={closeNav}
                                    route={route}
                                    className="cursor-pointer hover:text-gray-900"
                                    activeClassName=""
                                />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

interface NavigationToggleButton {
    className?: string;
    size?: number;
}

export function NavigationToggleButton({
    className,
    size = 24,
}: NavigationToggleButton) {
    const { isNavOpen, toggleNav } = useContext(NavigationControlsContext);

    return (
        <button
            type="button"
            className={cn("", className)}
            aria-label="toggle menu"
        >
            <Hamburger size={size} toggled={isNavOpen} onToggle={toggleNav} />
        </button>
    );
}
