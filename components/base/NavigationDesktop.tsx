import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface NavigationDesktopProps {
    generatedLinks: ReactNode;
    className?: string;
}
export default function NavigationDesktop({
    generatedLinks,
    className,
}: NavigationDesktopProps) {
    return (
        <nav className={cn("", className)}>
            <ul className="flex w-full items-center gap-4 text-sm capitalize">
                {generatedLinks}
            </ul>
        </nav>
    );
}
