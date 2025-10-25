import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AppUtilities() {
    return (
        <>
            <ReactLenis
                options={{
                    duration: 2, // scroll duration
                    lerp: 0.1, // interpolation factor
                    touchMultiplier: 2, // speed of touch scroll
                }}
            />
            <Analytics />
            <SpeedInsights />
        </>
    );
}
