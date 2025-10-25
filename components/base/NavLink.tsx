"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationRoutesEntry } from "@/app/routes";
import { useContext } from "react";
import { NavigationControlsContext } from "../../controls/context/NavigationControls";

const normalize = (path: string) => {
    return path === "/"
        ? "/"
        : path.startsWith("/")
          ? path.replace("/", "")
          : path;
};

const checkActive = (target: string, current: string, exact: boolean) => {
    return exact
        ? current === target
        : current === target || current.startsWith(`${target}/`);
};

interface NavLinkProps {
    route: NavigationRoutesEntry;
    className?: string;
    activeClassName?: string;
    ctaClassName?: string;
    onClick?: () => void;
    closeNavOnClick: boolean;
}

export default function NavLink({
    route,
    className,
    activeClassName,
    ctaClassName,
    onClick,
    closeNavOnClick = true,
}: NavLinkProps) {
    const { closeNav } = useContext(NavigationControlsContext);
    const pathname = usePathname();
    const target = normalize(route.link);
    const current = normalize(pathname);
    const isActive = checkActive(target, current, route.exact || false);
    const isCTA = route.cta;

    const handleClick = () => {
        if (closeNavOnClick) closeNav();
        onClick?.();
    };

    return (
        <Link
            href={route.link}
            className={cn(
                className,
                isActive && activeClassName,
                isCTA && ctaClassName
            )}
            onClick={handleClick}
        >
            {route.name}
        </Link>
    );
}
