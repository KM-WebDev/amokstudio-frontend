import "./globals.css";
import AppUtilities from "@/components/base/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body>
                <Header />
                <AppUtilities />
                <Main>{children}</Main>
                <Footer />
            </body>
        </html>
    );
}
