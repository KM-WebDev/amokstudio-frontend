export interface NavigationRoutesEntry {
    name: string;
    link: string;
    exact?: boolean;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export const routes: NavigationRoutes = [
    { name: "Strona Główna", link: "/" },
    { name: "o mnie", link: "/portfolio" },
    { name: "portfolio", link: "/portfolio" },
    { name: "Cennik", link: "/services" },
    { name: "Kontakt", link: "contact" },
];
