import { urlFor } from "@/services/sanity/utils";
import Image from "next/image";
import Link from "next/link";
import Section from "./base/Section";
import Heading from "./base/Heading";
import {
    PortableText,
    PortableTextBlock,
    PortableTextComponents,
} from "next-sanity";

interface PortfolioDisplayEntry {
    _id: string;
    title: string;
    mainImage: SanityImage;
    description: PortableTextBlock[];
}

type PortfolioDisplayEntries = PortfolioDisplayEntry[];

interface PortfolioDisplayProps {
    portfolios: PortfolioDisplayEntries;
}

// How to style PortableText: https://github.com/portabletext/react-portabletext
const components: PortableTextComponents = {
    block: {
        normal: ({ children }) => {
            return (
                <p className="text-clr-brand-red/90 text-lg wrap-break-word uppercase">
                    {children}
                </p>
            );
        },
    },
};

export default function PortfolioGallery({
    portfolios,
}: PortfolioDisplayProps) {
    return (
        <Section className="bg-zinc-200">
            <Section.Content className="rounded-xl bg-zinc-100">
                <div className="flex flex-col gap-8 px-6 py-10">
                    <Heading
                        styling="h1"
                        className="text-center text-2xl lg:text-3xl"
                    >
                        Portfolio
                    </Heading>

                    <p className="mt-4 text-center text-zinc-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nostrum quam voluptatibus.
                    </p>

                    <div className="grid grid-cols-1 justify-center justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {portfolios.map((portfolio: PortfolioDisplayEntry) => (
                            <Element
                                key={portfolio._id}
                                portfolio={portfolio}
                            />
                        ))}
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}

function Element({ portfolio }: { portfolio: PortfolioDisplayEntry }) {
    return (
        <Link
            href={`/portfolio/${portfolio._id}`}
            key={portfolio._id}
            className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg"
        >
            <Image
                src={urlFor(portfolio.mainImage)
                    .width(800)
                    .height(800)
                    .auto("format")
                    .url()}
                alt={portfolio.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex h-full w-full flex-col justify-center gap-5 bg-zinc-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                <Heading styling="h5" className="text-center text-zinc-300">
                    {portfolio.title}
                </Heading>
                <div>
                    <PortableText
                        value={portfolio.description}
                        components={components}
                    />
                </div>
            </div>
        </Link>
    );
}
