interface SectionHeadingProps {
    heading: string;
    text?: string;
    number: string;
}

export default function SectionHeading({
    heading,
    text,
    number,
}: SectionHeadingProps) {
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
                <span className="text-clr-text-muted font-bold">{number}</span>
                <h2 className="text-clr-brand-red text-center text-base/7 font-semibold">
                    {heading}
                </h2>
            </div>
            <p className="text-clr-text mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {text}
            </p>
        </div>
    );
}
