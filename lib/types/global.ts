import { ReactNode } from "react";

export interface BasicComponentProps {
    children?: ReactNode;
    className?: string;
}

export type ScreenBreakpoint =
    | "base"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";
