import { cn } from "@/lib/utils/cn";
import { sanityFetch } from "@/services/sanity/client";
import { SOCIALS_QUERY } from "@/services/sanity/queries";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

interface SocialProps {
    link: string;
    children: React.ReactNode;
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
    console.log(allSocials);
    const classNameIcon =
        "hover:text-clr-brand-red transition-colors duration-200";

    return (
        <div className={cn("flex gap-2", className)}>
            {allSocials.map((social, i) => (
                <SocialButton key={i} link={social}>
                    <Image
                        className={classNameIcon}
                        alt={""}
                        src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${getBrandFromUrl(social)}.svg`}
                        width={20}
                        height={20}
                    />
                    {/* <FaFacebookSquare className={classNameIcon} /> */}
                </SocialButton>
            ))}
        </div>
    );

    // return (
    //     <div className={cn("flex gap-2", className)}>
    //         <SocialButton link="https://facebook.com">
    //             <FaFacebookSquare className={classNameIcon} />
    //         </SocialButton>
    //         <SocialButton link="https://instagram.com">
    //             <FaInstagramSquare className={classNameIcon} />
    //         </SocialButton>
    //         <SocialButton link="https://x.com">
    //             <FaSquareXTwitter className={classNameIcon} />
    //         </SocialButton>
    //         <SocialButton link="https://linkedin.com">
    //             <FaLinkedin className={classNameIcon} />
    //         </SocialButton>
    //     </div>
    // );
}

function getBrandFromUrl(url: string) {
    try {
        const { hostname } = new URL(url);
        return hostname.replace("www.", "").split(".")[0];
    } catch (e) {
        console.log(`"${url}" is not a valid url`);
        return "";
    }
}
