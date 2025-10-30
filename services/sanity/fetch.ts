import { safeSanityFetch } from "./client";
import { SOCIALS_QUERY } from "./queries";

type SocialData = {
    _id: string;
    socials: string[];
};

export async function fetchAllSocials() {
    const socialData = await safeSanityFetch<SocialData[]>(SOCIALS_QUERY);

    if (!socialData) {
        return [];
    }

    return socialData.flatMap((data) => data.socials);
}
