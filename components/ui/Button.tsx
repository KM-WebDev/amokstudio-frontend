"use client";

import React, { MouseEventHandler } from "react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    onClick?: MouseEventHandler;
    variant?: "primary" | "opposite" | "secondary";
    className?: string;
    href?: string;
    as?: "button" | "link";
}

const variants = {
    primary:
        "bg-clr-brand-red text-zinc-100 hover:bg-clr-brand-red-dark shadow",
    opposite: "",
    secondary: "",
};

export default function Button({
    children,
    variant = "primary",
    className: passedClassName,
    href = "/",
    text,
    as,
    ...props
}: ButtonProps) {
    const className =
        "group/button relative flex cursor-pointer items-center justify-center gap-4 rounded-4xl px-5 py-2 text-base font-medium transition-all duration-200 ";

    const combinedClasses = cn(variants[variant], className, passedClassName);

    if (as === "link" && href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children || text}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
            {text}
        </button>
    );
}
