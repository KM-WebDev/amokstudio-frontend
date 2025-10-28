import { routes } from "@/app/routes";
import { HTMLAttributes } from "react";

import Link from "next/link";
import NavLink from "./NavLink";
import SectionHeading from "./SectionHeading";

export default function Footer({
    children,
    socials,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <footer {...props}>
            <div className="bg-zinc-200 py-10 text-zinc-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
                    <SectionHeading
                        number="06"
                        heading="Masz pomysł na nowy projekt?"
                        text="Pomogę Ci stworzyć logo, które wyróżni Twoją markę na tle konkurencji."
                    />
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
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase">
                            Szybkie linki
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm capitalize">
                            <FooterLinks />
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
                            {children}
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

function FooterLinks() {
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
                />
            </li>
        );
    });
}
