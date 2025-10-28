import Link from "next/link";
import Socials from "../Socials";
import Navigation from "./Navigation";
import { HeaderContainer } from "./Header.client";
import { NavigationToggleButton } from "./NavigationMobile";
import Logo from "../Logo";

export default function Header({ socials }: { socials: string[] }) {
    return (
        <header className="fixed top-0 right-0 left-0 z-10000 shadow">
            <HeaderContainer className="h-full w-full bg-zinc-100/60 backdrop-blur-md">
                <div className="relative z-100000 flex h-full w-full items-center justify-center">
                    <div className="flex h-full w-full max-w-[1200px] items-center justify-between px-6 py-6 lg:py-2">
                        <div className="flex items-center justify-between gap-15">
                            <Link
                                href="/"
                                className="flex items-center justify-center"
                            >
                                <Logo type="red" width={125} height={30} />
                            </Link>
                            <Navigation />
                        </div>
                        <Socials socials={socials} className="hidden lg:flex" />
                    </div>
                    <NavigationToggleButton
                        className="pr-5 lg:hidden"
                        size={30}
                    />
                </div>
            </HeaderContainer>
        </header>
    );
}
