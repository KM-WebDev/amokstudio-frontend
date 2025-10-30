import PortfolioGallery, {
    PortfolioDisplayEntries,
} from "@/components/PortfolioGallery";
import { safeSanityFetch } from "@/services/sanity/client";
import { PORTFOLIO_ALL_QUERY } from "@/services/sanity/queries";

export default async function Portfolio() {
    const portfolios =
        await safeSanityFetch<PortfolioDisplayEntries>(PORTFOLIO_ALL_QUERY);

    if (!portfolios) {
        return;
    }

    return <PortfolioGallery portfolios={portfolios} />;
}
