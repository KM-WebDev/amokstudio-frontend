import Heading, { headingStyles } from "@/components/base/Heading";
import { cn } from "@/lib/utils/cn";

import { client } from "@/services/sanity/client";
import { PORTFOLIO_SINGLE_QUERY } from "@/services/sanity/queries";
import { JSX } from "react";

// Forgive me for this code ...

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

export default async function Portfolio(props: PortfolioPageProps) {
    const { portfolioId } = await props.params;

    const portfolio: Portfolio = await client.fetch(PORTFOLIO_SINGLE_QUERY, {
        portfolioId,
    });

    console.log(portfolio.sections[1]);
    return (
        <>
            {portfolio.sections.map((section) => {
                return (
                    <PortfolioSection key={section._key} section={section} />
                );
            })}
        </>
    );
}

function PortfolioSection({ section }: { section: Section }) {
    return (
        <div className="flex flex-col">
            <Heading styling="h1">{section.heading}</Heading>
            {section.content.map((contentLine) => (
                <PortfolioContentLine
                    key={contentLine._key}
                    contentLine={contentLine}
                />
            ))}
        </div>
    );
}

function PortfolioContentLine({ contentLine }: { contentLine: ContentLine }) {
    const { style, children } = contentLine;

    const markClassMap: Record<string, string> = {
        strong: "font-bold",
        underline: "underline",
    };

    let Tag: keyof JSX.IntrinsicElements = style === "normal" ? "span" : style;

    return (
        <div className="flex gap-1">
            {children.map((linePart) => {
                let className = linePart.marks
                    .map((mark) => markClassMap[mark] || "")
                    .filter(Boolean)
                    .join(" ");
                if (Tag in headingStyles) {
                    className += " " + headingStyles[Tag as HeadingType];
                }

                return (
                    <Tag key={linePart._key} className={cn(className)}>
                        {linePart.text}
                    </Tag>
                );
            })}
        </div>
    );
}
