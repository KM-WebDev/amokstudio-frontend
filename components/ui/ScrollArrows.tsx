import { cn } from "@/lib/utils/cn";
import { IoIosArrowDown } from "react-icons/io";
const arrowClassName = "h-4 animate-arrow  text-3xl";
export default function ScrollArrows({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>
            <div className={arrowClassName} style={{ animationDelay: "0s" }}>
                <IoIosArrowDown />
            </div>
            <div className={arrowClassName} style={{ animationDelay: "-0.1s" }}>
                <IoIosArrowDown />
            </div>
            <div className={arrowClassName} style={{ animationDelay: "-0.2s" }}>
                <IoIosArrowDown />
            </div>
        </div>
    );
}
