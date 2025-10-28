"use client";

import React, { MouseEventHandler } from "react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    onClick?: MouseEventHandler;
    variant?: "primary" | "opposite";
    className?: string;
    href?: string;
    as?: "button" | "link";
}

const variants = {
    primary: "",
    opposite: "",
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
        "group relative flex cursor-pointer items-center justify-center gap-4 rounded-4xl px-6 py-3 text-base font-semibold transition-all duration-200";

    const combinedClasses = cn(passedClassName, variants[variant], className);

    if (as === "link" && href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children || text}
            </Link>
        );
    }

    return (
        <button {...props} className={combinedClasses} {...props}>
            {children}
            {text}
        </button>
    );
}
