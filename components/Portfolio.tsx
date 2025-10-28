import Image from "next/image";
import { urlFor } from "@/services/sanity/utils";
import Link from "next/link";
import Section from "./base/Section";
import Heading from "./base/Heading";

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
        <Section className="bg-zinc-200">
            <Section.Content className="rounded-xl bg-white">
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
                        {portflios.map((portflio) => (
                            <Link
                                href={`/portfolio/${portflio._id}`}
                                key={portflio._id}
                                className="group relative h-80 w-80 cursor-pointer overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={urlFor(portflio.mainImage)
                                        .width(1200)
                                        .url()}
                                    alt={portflio.title}
                                    fill
                                    sizes="100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                                    <h2 className="text-xl font-semibold text-white capitalize">
                                        {portflio.title}
                                    </h2>
                                    <p className="text-lg tracking-wider text-blue-400 uppercase">
                                        {/* {project.category} */}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section.Content>
        </Section>
    );

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
