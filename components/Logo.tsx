import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface LogoProps {
    className?: string;
    type?: "red" | "rose";
    width?: number;
    height?: number;
}

export default function Logo({
    className,
    type = "red",
    width = 0,
    height = 20,
}: LogoProps) {
    return (
        <div className="flex items-center justify-center overflow-hidden">
            <Image
                src={type === "red" ? "/logo-red.svg" : "/amokstudio-róż.svg"}
                alt="logo amokstudio"
                width={width}
                height={height}
                className={cn("relative object-cover object-center", className)}
            />
        </div>
    );
}
