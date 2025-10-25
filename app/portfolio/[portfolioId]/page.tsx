import { client } from "@/services/sanity/client";
import {
    PORTFOLIO_SINGLE_QUERY,
    PORTFOLIO_IDS_QUERY,
} from "@/services/sanity/queries";
import { PortableText } from "@portabletext/react";
import Header from "@/components/base/Heading";
import { FilteredResponseQueryOptions } from "next-sanity";

type ContentLinePartMark = "underline" | "strong";
type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ContnetStyle = HeadingType | "blockquote" | "normal";

interface ContentLinePart {
    _key: string;
    marks: Array<ContentLinePartMark>;
    text: string;
}

// Represents a SINGLE line in a content block!
// That line is split into children for styling (one part of the line might be underlined and the other bolded)
interface ContentLine {
    _key: string;
    _type: string;
    style: ContnetStyle;
    children: Array<ContentLinePart>;
}

interface Section {
    _key: string;
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

const options: FilteredResponseQueryOptions = { next: { revalidate: false } };

export default async function Portfolio(props: PortfolioPageProps) {
    const { portfolioId } = await props.params;
    const portfolio: Portfolio = await client.fetch(PORTFOLIO_SINGLE_QUERY, {
        portfolioId: portfolioId,
    });

    if (!portfolio || !portfolio.sections) {
        return;
    }
    console.log(portfolio);
    return portfolio.sections.map((section) => (
        <PortableText key={section._key} value={section.content}></PortableText>
    ));
}

export async function generateStaticParams() {
    let sanityPortfolioIds: SanityIdObject[] = await client.fetch(
        PORTFOLIO_IDS_QUERY,
        {},
        options
    );

    return sanityPortfolioIds.map((sanityPortfolioId) => ({
        slug: sanityPortfolioId._id,
    }));
}
