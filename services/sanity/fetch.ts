import { sanityFetch } from "./client";
import { SOCIALS_QUERY } from "./queries";

type SocialData = {
    _id: string;
    socials: string[];
};

export async function fetchAllSocials() {
    const { data } = await sanityFetch({
        query: SOCIALS_QUERY,
    });

    const socialData: SocialData[] = data;

    return socialData.flatMap((data) => data.socials);
}
