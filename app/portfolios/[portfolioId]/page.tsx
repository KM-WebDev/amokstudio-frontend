import { client } from "@/services/sanity/client";
import { PORTFOLIO_SINGLE_QUERY } from "@/services/sanity/queries";

interface ContentText {
    text: string;
}

interface Content {
    children: Array<ContentText>;
}

interface Section {
    heading: string;
    content: Array<Content>;
}

interface Gallery {
    images: Array<SanityImage>;
}

interface Portfolio {
    title: string;
    mainImage: SanityImage;
    gallery: Gallery;
    sections: Array<Section>;
}

interface PortfolioParams {
    portfolioId: string;
}

interface PortfolioPageProps {
    params: Promise<PortfolioParams>;
}

export default async function Portfolio(props: PortfolioPageProps) {
    const { portfolioId } = await props.params;

    const portfolio: Portfolio = await client.fetch(PORTFOLIO_SINGLE_QUERY, {
        portfolioId,
    });
    console.log(portfolio);
    console.log(portfolio.sections[0].content[0].children[0].text);
    return <></>;
}
