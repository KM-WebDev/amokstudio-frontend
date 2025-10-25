import { client } from "@/services/sanity/client";
import { PORTFOLIO_SINGLE_QUERY } from "@/services/sanity/queries";

interface ContentLinePart {
    text: string;
}

// Represents a SINGLE line in a content block!
// That line is split into children for styling (one part of the line might be underlined and the other bolded)
interface ContentLine {
    children: Array<ContentLinePart>;
}

interface Section {
    heading: string;
    content: Array<ContentLine>;
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
