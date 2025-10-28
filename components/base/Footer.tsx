import {
    routes as mainRoutes,
    legalRoutes,
    NavigationRoutes,
} from "@/app/routes";

import SectionHeading from "./SectionHeading";
import { BasicComponentProps } from "@/lib/types/global";
import Socials from "../Socials";
import Section from "./Section";
import Button from "../ui/Button";
import Heading from "./Heading";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface SocialFooterProps extends BasicComponentProps {
    socials: string[];
}

interface ColumnProps extends BasicComponentProps {
    title: string;
}

export default function Footer({ socials }: SocialFooterProps) {
    return (
        <footer>
            <FooterCTA />
            <FooterBottom socials={socials} />
        </footer>
    );
}

function FooterCTA() {
    return (
        <Section className="z-10000 bg-zinc-200 text-zinc-800">
            <Section.Content className="items-center gap-4 text-center">
                <SectionHeading
                    number="06"
                    heading="Masz pomysł na nowy projekt?"
                    text="Pomogę Ci stworzyć logo, które wyróżni Twoją markę na tle konkurencji."
                />
                <Button href="/kontakt" as="link">
                    Zacznij projekt
                </Button>
            </Section.Content>
        </Section>
    );
}

function FooterBottom({ socials }: SocialFooterProps) {
    return (
        <div className="bg-zinc-100 text-zinc-700">
            <FooterNaviagtion socials={socials} />
            <div className="flex flex-col items-center gap-2 border-t border-zinc-300 px-6 py-4 text-sm text-zinc-500 md:flex-row">
                <p className="flex-1 text-center">
                    &copy; {new Date().getFullYear()} Anastazja Mokwa. Wszelkie
                    prawa zastrzeżone.
                </p>
                <p className="w-full text-center md:w-auto md:text-right">
                    Strona wykonana przez{" "}
                    <span className="font-medium text-[#ca010b] transition-colors hover:text-[#fec7da]">
                        KM-WebDev
                    </span>
                </p>
            </div>
        </div>
    );
}

function FooterNaviagtion({ socials }: SocialFooterProps) {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-3xl grid-cols-1 gap-10 px-20 py-12",
                "sm:grid-cols-3 sm:px-12"
            )}
        >
            <Column className="gap-2" title="Szybkie linki">
                <FooterLinks routes={mainRoutes} />
            </Column>
            <Column className="gap-4" title="Kontakt">
                <div className="flex flex-col gap-2 text-sm text-zinc-600">
                    <a
                        href="mailto:kontakt@jankowalski.pl"
                        className="transition-colors hover:text-[#ca010b]"
                    >
                        kontakt@jankowalski.pl
                    </a>
                    Gdańsk, Polska
                </div>
                <div className="flex gap-4 text-xl text-zinc-700">
                    <Socials socials={socials} className=""></Socials>
                </div>
            </Column>
            <Column className="gap-2" title="Informacje prawne">
                <FooterLinks routes={legalRoutes} />
            </Column>
        </div>
    );
}

function Column({ title, children, className }: ColumnProps) {
    return (
        <div className={cn("flex flex-col", className)}>
            <Heading
                styling="h6"
                semantic="h6"
                className="text-sm text-zinc-800 uppercase"
            >
                {title}
            </Heading>

            {children}
        </div>
    );
}

function FooterLinks({ routes }: { routes: NavigationRoutes }) {
    return (
        <ul className="flex flex-col gap-2 text-sm capitalize">
            {routes.map((route) => {
                if (route.cta) {
                    return;
                }

                return (
                    <li key={route.name}>
                        <Link
                            href={route.link}
                            className="cursor-pointer text-zinc-600 hover:text-gray-900"
                        >
                            {route.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
