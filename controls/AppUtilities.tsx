import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AppUtilities() {
    return (
        <>
            <ReactLenis
                options={{
                    duration: 1.5, // scroll duration
                    lerp: 0.5, // interpolation factor
                    touchMultiplier: 0.7, // speed of touch scroll
                }}
            />
            <Analytics />
            <SpeedInsights />
        </>
    );
}
