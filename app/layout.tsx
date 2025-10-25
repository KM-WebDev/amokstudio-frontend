import "./globals.css";
import AppUtilities from "@/controls/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";

import NavigationControls from "@/controls/context/NavigationControls";
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
                    <Main>{children}</Main>
                    <Footer />
                </NavigationControls>
                {/* </GlobalControls> */}
            </body>
        </html>
    );
}
