import { HTMLAttributes } from "react";

export default function Header({
    children,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return <header {...props}>{children}</header>;
}
