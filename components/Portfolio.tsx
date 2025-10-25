import Image from "next/image";
import { urlFor } from "@/services/sanity/imageUrl";
import Link from "next/link";

interface PortfolioDisplayEntry {
    _id: string;
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
            {portflios.map((portflio) => {
                if (portflio.mainImage == null) {
                    return;
                }
                return (
                    <Link
                        href={`/portfolio/${portflio._id}`}
                        key={portflio._id}
                    >
                        <Image
                            src={urlFor(portflio.mainImage).width(200).url()}
                            alt={portflio.title}
                            width={200}
                            height={600 / 3}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
