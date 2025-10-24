import Image from "next/image";
import { urlFor } from "@/services/sanity/imageUrl";

interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface PortfolioDisplayEntry {
    title: string;
    mainImage: SanityImage;
    description: string;
}

type PortfolioDisplayEntries = PortfolioDisplayEntry[];

interface PortfolioDisplayProps {
    portflios: PortfolioDisplayEntries;
}

export default function PortfolioDisplay({ portflios }: PortfolioDisplayProps) {
    return (
        <>
            <Image
                src={urlFor(portflios[0].mainImage).width(800).url()}
                alt={portflios[0].title}
                width={800}
                height={600}
            />
            <p>ewoihre2orh</p>
        </>
    );
}
