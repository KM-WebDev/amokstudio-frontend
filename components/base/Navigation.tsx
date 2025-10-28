import NavLink from "./NavLink";
import { routes } from "@/app/routes";

import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";
import { useMemo } from "react";

export default function Navigation() {
    const Links = useMemo(() => <GeneratedLinks />, []);
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
                    className="text-clr-text cursor-pointer font-medium hover:text-gray-900"
                    activeClassName=""
                    ctaClassName="px-4 py-1.5 max-lg:mt-5 bg-clr-brand-red w-full flex text-white justify-center rounded-full"
                />
            </li>
        );
    });
}
