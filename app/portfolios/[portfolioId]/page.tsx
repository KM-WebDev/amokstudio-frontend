import Heading from "@/components/base/Heading";
import { cn } from "@/lib/utils/cn";
import { client } from "@/services/sanity/client";
import { PORTFOLIO_SINGLE_QUERY } from "@/services/sanity/queries";

type ContentStyle = "underline" | "strong";

interface ContentLinePart {
    _key: string;
    marks: Array<ContentStyle>;
    text: string;
}

// Represents a SINGLE line in a content block!
// That line is split into children for styling (one part of the line might be underlined and the other bolded)
interface ContentLine {
    _key: string;
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

    // console.log(portfolio);
    // console.log(portfolio.sections[0].content[0].children[0].text);
    return (
        <div>
            {portfolio.sections.map((section) => {
                return (
                    <PortfolioSection key={section._key} section={section} />
                );
            })}
        </div>
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
    return (
        <div>
            {contentLine.children.map((linePart) => {
                let className = "";
                // Slow... and bad
                if (linePart.marks.includes("strong")) {
                    className += "font-bold ";
                } else if (linePart.marks.includes("underline")) {
                    className += "underline";
                }
                return (
                    <span className={cn(className)} key={linePart._key}>
                        {linePart.text}
                    </span>
                );
            })}
        </div>
    );
}
