export interface NavigationRoutesEntry {
    name: string;
    link: string;
    exact?: boolean;
    cta?: boolean;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export const routes: NavigationRoutes = [
    { name: "Strona Główna", link: "/" },
    { name: "o mnie", link: "/about" },
    { name: "portfolio", link: "/portfolio" },
    { name: "Cennik", link: "/services" },
    { name: "Kontakt", link: "/contact" },
    { name: "Zarezerwuj termin", link: "/reservation", cta: true },
];

export const legalRoutes: NavigationRoutes = [
    { name: "Polityka Prywatności", link: "/privacy" },
    { name: "Warunki korzystania z usługi", link: "/tos" },
];
