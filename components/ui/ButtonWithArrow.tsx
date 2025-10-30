import Button, { ButtonProps } from "./Button";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ButtonWithArrow({
    className,
    text,
    children,
    ...props
}: ButtonProps) {
    return (
        <Button className={className} {...props}>
            <span className="group-hover/button:text-clr-brand-red flex items-center gap-1">
                <span>{text}</span>
                <span>{children}</span>
                <FaArrowCircleRight className="transition-transform group-hover/button:translate-x-0.5" />
            </span>
        </Button>
    );
}
