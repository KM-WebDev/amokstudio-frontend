import PortfolioGallery from "@/components/PortfolioGallery";
import { sanityFetch } from "@/services/sanity/client";
import { PORTFOLIO_ALL_QUERY } from "@/services/sanity/queries";

export default async function Portfolio() {
    const { data } = await sanityFetch({
        query: PORTFOLIO_ALL_QUERY,
    });

    return <PortfolioGallery portfolios={data} />;
}
