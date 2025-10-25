"use client";

import { ReactNode, useContext, useEffect } from "react";
import { NavigationControlsContext } from "../../controls/context/NavigationControls";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";
import Hamburger from "hamburger-react";

interface NavigationMobileProps {
    generatedLinks: ReactNode;
    className?: string;
}

export default function NavigationMobile({
    generatedLinks,
    className,
}: NavigationMobileProps) {
    const { isNavOpen, closeNav, scrollRef } = useContext(
        NavigationControlsContext
    );

    const navVariants = {
        hidden: { y: "-150%", opacity: 1 },
        visible: { y: 0, opacity: 1 },
    };

    useEffect(() => {
        if (isNavOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    }, [isNavOpen, scrollRef]);

    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 -z-10 translate-y-full overflow-hidden pb-3.5",
                className
            )}
        >
            {isNavOpen &&
                createPortal(<Overlay onClick={closeNav} />, document.body)}
            <motion.nav
                initial={false}
                animate={isNavOpen ? "visible" : "hidden"}
                variants={navVariants}
                transition={{ type: "tween", duration: 0.2 }}
                className={cn(
                    // Phone
                    "rounded-x pointer-events-auto m-5 flex w-full translate-y-0 rounded-4xl bg-white px-10 py-10 shadow-xl transition-[translate] duration-2000 will-change-transform"
                )}
            >
                <ul className="flex w-full flex-col gap-4 text-lg capitalize">
                    {generatedLinks}
                </ul>
            </motion.nav>
        </div>
    );
}

function Overlay({ onClick }: { onClick: () => void }) {
    return (
        <div
            className="bg-clr-brand-red/30 fixed inset-0 backdrop-blur-xs lg:hidden"
            onClick={onClick}
        />
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
