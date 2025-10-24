import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AppUtilities() {
    return (
        <>
            <ReactLenis />
            <Analytics />
            <SpeedInsights />
        </>
    );
}
