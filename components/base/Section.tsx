import { cn } from "@/lib/utils/cn";
type paddingDirection = "top" | "bottom";
type SpaceSizes = "xs" | "sm" | "md" | "lg" | "xl";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    padded?: paddingDirection[] | boolean;
    paddingSize?: SpaceSizes;
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    gapped?: boolean;
    gapSize?: SpaceSizes;
}

const sectionPaddingTop = {
    xs: "pt-xs",
    sm: "pt-sm",
    md: "pt-md",
    lg: "pt-lg",
    xl: "pt-xl",
};

const sectionPaddingBottom = {
    xs: "pb-xs",
    sm: "pb-sm",
    md: "pb-md",
    lg: "pb-lg",
    xl: "pb-xl",
};

export default function Section({
    children,
    className,
    padded = ["top", "bottom"],
    paddingSize = "md",
}: SectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center",
                Array.isArray(padded) &&
                    padded.includes("top") &&
                    sectionPaddingTop[paddingSize],
                Array.isArray(padded) &&
                    padded.includes("bottom") &&
                    sectionPaddingBottom[paddingSize],
                className
            )}
        >
            {children}
        </section>
    );
}

const contentGap = {
    xs: "gap-xs",
    sm: "gap-sm",
    md: "gap-md",
    lg: "gap-lg",
    xl: "gap-xl",
};

function Content({
    children,
    className,
    gapped = true,
    gapSize = "md",
}: ContentProps) {
    return (
        <div className="flex w-full flex-col items-center max-lg:max-w-3xl">
            <div
                className={cn(
                    "max-xs:px-2",
                    "container flex flex-col px-4 xl:max-w-[1200px]",
                    "lg:px-5",
                    "xl:px-0",
                    gapped && contentGap[gapSize],
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

Section.Content = Content;
