"use client";

import Hamburger from "hamburger-react";
import { useContext } from "react";
import { cn } from "@/lib/utils/cn";
import NavLink from "./NavLink";
import { routes } from "@/app/routes";
import { NavigationControlsContext } from "../controls/context/NavigationControls";

// isNavOpen
//     ? "translate-x-0 opacity-100"
//     : "-translate-x-full opacity-0",
// "absolute inset-x-0 z-20 w-full flex-1 bg-green-500 px-6 py-4 transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:justify-between lg:bg-transparent lg:p-0 lg:opacity-100 dark:bg-gray-800"

export default function Navigation() {
    const { isNavOpen } = useContext(NavigationControlsContext);

    return (
        <nav
            className={cn(
                "absolute inset-x-0 bottom-0 -z-10 translate-y-full bg-neutral-500 px-5 py-4 transition-[translate]",
                "lg:static lg:z-100000 lg:translate-y-0 lg:bg-transparent lg:py-0 lg:transition-none",
                isNavOpen
                    ? "max-lg:flex max-lg:translate-y-full"
                    : "max-lg:translate-y-[-50%]"
            )}
        >
            <ul className="flex flex-col gap-8 capitalize lg:flex-row">
                {routes.map((route) => {
                    return (
                        <li key={route.name}>
                            <NavLink
                                route={route}
                                className="cursor-pointer hover:text-gray-900"
                                activeClassName=""
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
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
