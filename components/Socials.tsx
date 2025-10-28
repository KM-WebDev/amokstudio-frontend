import { cn } from "@/lib/utils/cn";

interface SocialProps {
    className: string;
    socials: string[];
}

interface SocialButtonProps {
    link: string;
    children: React.ReactNode;
}

interface BrandIconProps {
    brand: string;
}

export default async function Socials({ socials, className }: SocialProps) {
    return (
        <div className={cn("flex gap-2", className)}>
            {socials.map((social, i) => (
                <SocialButton key={i} link={social}>
                    <BrandIcon brand={getBrandFromUrl(social)} />
                </SocialButton>
            ))}
        </div>
    );
}

function SocialButton({ link, children }: SocialButtonProps) {
    return (
        <a target="_blank" href={link}>
            {children}
        </a>
    );
}

function BrandIcon({ brand }: BrandIconProps) {
    return (
        <div className="hover:text-clr-brand-red transition-colors duration-200">
            <div
                className="h-[20] w-[20]"
                style={{
                    WebkitMaskImage: `url(https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg)`,
                    maskImage: `url(https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg)`,
                    background: "currentcolor",
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    );
    // return (
    //     <Image
    //         className={className}
    //         alt={brand}
    //         src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg`}
    //         width={20}
    //         height={20}
    //     />
    // );
}

function getBrandFromUrl(url: string) {
    try {
        const { hostname } = new URL(url);
        return hostname.replace("www.", "").split(".")[0];
    } catch (e) {
        return "";
    }
}
