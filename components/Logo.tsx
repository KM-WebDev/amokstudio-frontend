import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface LogoProps {
    className?: string;
    type: "red" | "rose";
}

export default function Logo({ className, type }: LogoProps) {
    return (
        <Image
            src={type === "red" ? "/amokstudio-red.svg" : "/amokstudio-róż.svg"}
            alt="logo amokstudio"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn("", className)}
        />
    );
}
