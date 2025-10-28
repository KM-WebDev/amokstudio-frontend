import { routes } from "@/app/routes";
import { HTMLAttributes, useMemo } from "react";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";
import NavLink from "./NavLink";

export default function Footer({
    children,
    ...props
}: HTMLAttributes<HTMLElement>) {
    const Links = useMemo(() => <GeneratedFooterLinks />, []);

    return (
        <footer {...props}>
            <div className="bg-zinc-200 py-10 text-zinc-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
                    <h2 className="text-2xl font-semibold">
                        Masz pomysł na nowy projekt?
                    </h2>
                    <p className="text-sm text-zinc-600">
                        Pomogę Ci stworzyć logo, które wyróżni Twoją markę na
                        tle konkurencji.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block rounded-full bg-[#ca010b] px-6 py-3 font-medium text-white transition-colors hover:bg-[#b10009]"
                    >
                        Zacznij projekt
                    </Link>
                </div>
            </div>

            <div className="border-zinc-300 bg-zinc-100 text-zinc-700">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
                    {/* <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold text-zinc-800">
                            Jan Kowalski
                        </h2>
                        <p className="text-sm text-zinc-600">
                            Projektuję unikalne logotypy i identyfikacje
                            wizualne, które pomagają markom się wyróżnić.
                        </p>
                        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 pb-10">
                            <p className="text-sm text-zinc-700">
                                Masz projekt w głowie? Zróbmy to razem.
                            </p>
                            <Link
                                href="/kontakt"
                                className="rounded-full bg-[#ca010b] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b10009]"
                            >
                                Skontaktuj się
                            </Link>
                        </div>
                    </div> */}

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase">
                            Szybkie linki
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm capitalize">
                            <GeneratedFooterLinks />
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase">
                            Kontakt
                        </h3>
                        <div className="flex flex-col gap-2 text-sm text-zinc-600">
                            <a
                                href="mailto:kontakt@jankowalski.pl"
                                className="transition-colors hover:text-[#ca010b]"
                            >
                                kontakt@jankowalski.pl
                            </a>
                            <span>Warszawa, Polska</span>
                        </div>
                        <div className="flex gap-4 text-xl text-zinc-700">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="transition-colors hover:text-[#ca010b]"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                aria-label="Behance"
                                className="transition-colors hover:text-[#ca010b]"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                aria-label="Dribbble"
                                className="transition-colors hover:text-[#ca010b]"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="transition-colors hover:text-[#ca010b]"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 border-t border-zinc-300 px-6 py-4 text-sm text-zinc-500 md:flex-row">
                    <p className="flex-1 text-center">
                        © 2025 Jan Kowalski. Wszelkie prawa zastrzeżone.
                    </p>
                    <p className="w-full text-center md:w-auto md:text-right">
                        Strona wykonana przez{" "}
                        <span className="font-medium text-[#ca010b] transition-colors hover:text-[#fec7da]">
                            KM-WebDev
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function GeneratedFooterLinks() {
    return routes.map((route) => {
        if (route.cta) {
            return;
        }

        return (
            <li key={route.name}>
                <NavLink
                    closeNavOnClick={true}
                    route={route}
                    className="cursor-pointer text-zinc-600 hover:text-gray-900"
                    activeClassName="underline underline-offset-3"
                    ctaClassName="px-4 py-1.5 max-lg:mt-5 bg-clr-brand-red w-full flex text-white justify-center rounded-full"
                />
            </li>
        );
    });
}
