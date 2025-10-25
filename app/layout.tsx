import "./globals.css";
import AppUtilities from "@/components/controls/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";

import NavigationControls from "@/components/controls/context/NavigationControls";
// import ScrollableArea from "@/components/base/ScrollableArea";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className="overscroll-none">
                {/* <GlobalControls> */}
                <NavigationControls>
                    <Header />
                    <AppUtilities />
                    {/* <ScrollableArea> */}
                    <Main>{children}</Main>
                    <Footer />
                    {/* </ScrollableArea> */}
                </NavigationControls>
                {/* </GlobalControls> */}
            </body>
        </html>
    );
}
