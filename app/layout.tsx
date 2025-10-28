import "./globals.css";
import AppUtilities from "@/controls/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";

import { VisualEditing } from "next-sanity/visual-editing";
import NavigationControls from "@/controls/context/NavigationControls";
import { draftMode } from "next/headers";
import { SanityLive } from "@/services/sanity/client";
// import ScrollableArea from "@/components/base/ScrollableArea";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/kgi1rtg.css"
                ></link>
            </head>
            <body className="overscroll-none">
                {/* <GlobalControls> */}
                <NavigationControls>
                    <Header />
                    <AppUtilities />
                    <Main>{children}</Main>
                    <Footer />
                </NavigationControls>
                <SanityLive />
                {(await draftMode()).isEnabled && <VisualEditing />}
                {/* </GlobalControls> */}
            </body>
        </html>
    );
}
