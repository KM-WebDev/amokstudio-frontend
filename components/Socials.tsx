import { cn } from "@/lib/utils/cn";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

interface SocialProps {
    link: string;
    children: React.ReactNode;
}

function SocialButton({ link, children }: SocialProps) {
    return (
        <a target="_blank" href={link}>
            {children}
        </a>
    );
}

export default function Socials({ className }: { className?: string }) {
    const classNameIcon =
        "hover:text-clr-brand-red transition-colors duration-200";

    return (
        <div className={cn("flex gap-2", className)}>
            <SocialButton link="https://facebook.com">
                <FaFacebookSquare className={classNameIcon} />
            </SocialButton>
            <SocialButton link="https://instagram.com">
                <FaInstagramSquare className={classNameIcon} />
            </SocialButton>
            <SocialButton link="https://x.com">
                <FaSquareXTwitter className={classNameIcon} />
            </SocialButton>
            <SocialButton link="https://linkedin.com">
                <FaLinkedin className={classNameIcon} />
            </SocialButton>
        </div>
    );
}
