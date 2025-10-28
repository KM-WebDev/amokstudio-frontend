import "./globals.css";
import AppUtilities from "@/controls/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";

import NavigationControls from "@/controls/context/NavigationControls";
import { fetchAllSocials } from "@/services/sanity/fetch";
// import ScrollableArea from "@/components/base/ScrollableArea";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const socials = await fetchAllSocials();

    return (
        <html lang="pl">
            <head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/kgi1rtg.css"
                />
            </head>
            <body className="overscroll-none">
                {/* <GlobalControls> */}
                <NavigationControls>
                    <Header socials={socials} />
                    <Main>{children}</Main>
                    <Footer socials={socials} />
                </NavigationControls>

                {/* </GlobalControls> */}
                <AppUtilities />
            </body>
        </html>
    );
}
