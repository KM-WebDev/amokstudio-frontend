import { cn } from "@/lib/utils/cn";
import { IoIosArrowDown } from "react-icons/io";
const arrowClassName = "block rotate-0 animate-arrow -m-[15px]";
export default function ScrollArrows({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col", className)}>
            <div className={arrowClassName} style={{ animationDelay: "0s" }}>
                <IoIosArrowDown className="-rotate-45" />
            </div>
            <div className={arrowClassName} style={{ animationDelay: "-0.2s" }}>
                <IoIosArrowDown className="-rotate-45" />
            </div>
            <div className={arrowClassName} style={{ animationDelay: "-0.4s" }}>
                <IoIosArrowDown className="-rotate-45" />
            </div>
        </div>
    );
}
