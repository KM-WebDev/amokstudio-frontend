import { cn } from "@/lib/utils/cn";
import { sanityFetch } from "@/services/sanity/client";
import { SOCIALS_QUERY } from "@/services/sanity/queries";
import Image from "next/image";

interface SocialProps {
    link: string;
    children: React.ReactNode;
}

interface BrandIconProps {
    className: string;
    brand: string;
}

type SocialData = {
    _id: string;
    socials: string[];
};

function SocialButton({ link, children }: SocialProps) {
    return (
        <a target="_blank" href={link}>
            {children}
        </a>
    );
}

export default async function Socials({ className }: { className?: string }) {
    const { data } = await sanityFetch({
        query: SOCIALS_QUERY,
    });

    const socialData: SocialData[] = data;
    const allSocials: string[] = socialData.flatMap((data) => data.socials);

    const classNameIcon =
        "hover:text-clr-brand-red transition-colors duration-200";

    return (
        <div className={cn("flex gap-2", className)}>
            {allSocials.map((social, i) => (
                <SocialButton key={i} link={social}>
                    <BrandIcon
                        className={classNameIcon}
                        brand={getBrandFromUrl(social)}
                    />
                </SocialButton>
            ))}
        </div>
    );
}

function getBrandFromUrl(url: string) {
    try {
        const { hostname } = new URL(url);
        return hostname.replace("www.", "").split(".")[0];
    } catch (e) {
        return "";
    }
}

function BrandIcon({ className, brand }: BrandIconProps) {
    return (
        <Image
            className={className}
            alt={brand}
            src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg`}
            width={20}
            height={20}
        />
    );
}
