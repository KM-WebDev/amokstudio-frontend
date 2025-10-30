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
        <div className="flex flex-col md:justify-center">
            <div className="flex items-center gap-2 md:justify-center">
                <span className="text-clr-text-muted font-bold">{number}</span>
                <h2 className="text-clr-brand-red text-base/7 font-semibold md:text-center">
                    {heading}
                </h2>
            </div>
            <p className="text-clr-text max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:mx-auto md:text-center">
                {text}
            </p>
        </div>
    );
}
