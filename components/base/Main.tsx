import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

export default function Main({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <main className={cn("bg-clr-bg-light", className)} {...props}>
            {children}
        </main>
    );
}
