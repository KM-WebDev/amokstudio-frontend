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
        <div>
            {portflios.map((portflio, i) => {
                if (portflio.mainImage == null) {
                    return;
                }
                return (
                    <Image
                        key={i}
                        src={urlFor(portflio.mainImage).width(200).url()}
                        alt={portflio.title}
                        width={200}
                        height={600 / 3}
                    />
                );
            })}
        </div>
    );
}
