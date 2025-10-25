import NavLink from "./NavLink";
import { NavigationRoutesEntry, routes } from "@/app/routes";

import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";

export default function Navigation() {
    const generatedLinks = routes.map(generateLink);
    return (
        <>
            <NavigationMobile
                generatedLinks={generatedLinks}
                className={"flex lg:hidden"}
            />
            <NavigationDesktop
                generatedLinks={generatedLinks}
                className={"hidden lg:flex"}
            />
        </>
    );
}

function generateLink(route: NavigationRoutesEntry) {
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
}
