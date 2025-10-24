import "./globals.css";
import AppUtilities from "@/components/controls/AppUtilities";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import Footer from "@/components/base/Footer";
import Head from "next/head";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <Head>
                <meta name="theme-color" content="#a71938" />
            </Head>
            <body className="bg-red-500">
                <Header />
                <AppUtilities />
                <Main>{children}</Main>
                <Footer />
            </body>
        </html>
    );
}
