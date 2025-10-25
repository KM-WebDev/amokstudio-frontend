"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    // 🔒 blokowanie scrolla, gdy menu otwarte
    useEffect(() => {
        if (open) {
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
    }, [open]);

    return (
        <div className="relative z-50">
            {/* 🔘 przycisk otwierania */}
            <button
                onClick={() => setOpen(true)}
                className="rounded-lg bg-gray-800 p-2 text-white"
            >
                menu
            </button>

            {/* 🌫️ overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm"
                    >
                        {/* ❌ przycisk zamykania */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 rounded-lg bg-white/20 p-2 text-white"
                        >
                            x
                        </button>

                        {/* 📜 Linki */}
                        <nav className="space-y-6 text-2xl font-semibold text-white">
                            <a href="#home" onClick={() => setOpen(false)}>
                                Home
                            </a>
                            <a href="#about" onClick={() => setOpen(false)}>
                                About
                            </a>
                            <a href="#services" onClick={() => setOpen(false)}>
                                Services
                            </a>
                            <a href="#contact" onClick={() => setOpen(false)}>
                                Contact
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
