// "use client";

// import { ReactNode, useContext, useEffect, useRef } from "react";
// import { NavigationControlsContext } from "../controls/context/NavigationControls";
// import { cn } from "@/lib/utils/cn";

// export default function ScrollableArea({ children }: { children: ReactNode }) {
//     const { isNavOpen, scrollRef } = useContext(NavigationControlsContext);
//     const prevScrollYRef = useRef<number>(0);
//     const childrenOutletRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         if (!isNavOpen) {
//             // Restore normal scroll
//             window.scrollTo({ top: prevScrollYRef.current });
//         } else {
//             // Lock scroll
//             prevScrollYRef.current = scrollRef.current;
//         }
//     }, [isNavOpen, scrollRef]);
//     return (
//         <div
//             className={cn(
//                 "w-full overscroll-none",
//                 isNavOpen ? "h-svh" : "h-fit"
//             )}
//         >
//             <div ref={childrenOutletRef}>{children}</div>
//         </div>
//     );
// }
