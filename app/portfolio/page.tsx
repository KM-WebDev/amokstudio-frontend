import PortfolioDisplay from "@/components/Portfolio";
import { client } from "@/services/sanity/client";
import { PORTFOLIO_ALL_QUERY } from "@/services/sanity/queries";

export default async function Portfolio() {
    const result = await client.fetch(PORTFOLIO_ALL_QUERY);
    return <PortfolioDisplay portflios={result} />;
}
