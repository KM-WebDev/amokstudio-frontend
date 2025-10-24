import { HTMLAttributes } from "react";

export default function Main({
    children,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return <main {...props}>{children}</main>;
}
