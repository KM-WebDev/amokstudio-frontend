import { HTMLAttributes } from "react";

export default function Footer({
    children,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return <footer {...props}>{children}</footer>;
}
