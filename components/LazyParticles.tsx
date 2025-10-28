"use client";
import dynamic from "next/dynamic";

export const ParticlesLazy = dynamic(
    () => import("@/components/thirdparty/reactbits/Particles"),
    { ssr: false, loading: () => null }
);
