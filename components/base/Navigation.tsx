import NavLink from "./NavLink";
import { NavigationRoutesEntry, routes } from "@/app/routes";

import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";

export default function Navigation() {
    const Links = <GeneratedLinks />;
    return (
        <>
            <NavigationMobile
                generatedLinks={Links}
                className={"flex lg:hidden"}
            />
            <NavigationDesktop
                generatedLinks={Links}
                className={"hidden lg:flex"}
            />
        </>
    );
}

function GeneratedLinks() {
    return routes.map((route) => {
        return (
            <li key={route.name}>
                <NavLink
                    closeNavOnClick={true}
                    route={route}
                    className="cursor-pointer text-zinc-600 hover:text-gray-900"
                    activeClassName="underline underline-offset-3"
                    ctaClassName="px-4 py-2 max-lg:mt-5 bg-clr-brand-rose w-full flex text-white justify-center rounded-full"
                />
            </li>
        );
    });
}
