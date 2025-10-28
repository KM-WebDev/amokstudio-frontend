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
            <span className="flex items-center gap-1">
                <span>{text}</span>
                <span>{children}</span>
                <FaArrowCircleRight />
            </span>
        </Button>
    );
}
