import Link from "next/link";
import Socials from "../Socials";
import Navigation from "./Navigation";
import { HeaderContainer } from "./Header.client";
import { NavigationToggleButton } from "./NavigationMobile";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10000 shadow">
            <HeaderContainer>
                <div className="relative z-100000 flex w-full items-center justify-center bg-neutral-50/50 backdrop-blur-sm">
                    <div className="flex w-full max-w-[1200px] items-center justify-between px-6 py-2 lg:py-2">
                        <div className="absolute inset-0 -z-5" />
                        <div className="flex items-center justify-between gap-15">
                            <Link href="/">AMOKSTUDIO</Link>
                            <Navigation />
                        </div>
                        <Socials className="hidden lg:flex" />
                    </div>
                    <NavigationToggleButton className="lg:hidden" />
                </div>
            </HeaderContainer>
        </header>
    );
}
