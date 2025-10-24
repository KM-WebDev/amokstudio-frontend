import Link from "next/link";
import Socials from "../Socials";
import Navigation, { NavigationToggleButton } from "./Navigation";
import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10000">
            <div className="relative flex w-full items-center justify-center backdrop-blur">
                <div className="flex w-full max-w-[1200px] items-center justify-between px-6 py-2 lg:py-4">
                    <div className="absolute inset-0 -z-5 bg-neutral-200/50" />
                    <div className="flex items-center justify-between gap-15">
                        <Link href="/">AMOKSTUDIO</Link>
                        <Navigation />
                    </div>
                    <NavigationToggleButton className="block lg:hidden" />
                    <Socials className="hidden lg:flex" />
                </div>
            </div>
        </header>
    );
}
