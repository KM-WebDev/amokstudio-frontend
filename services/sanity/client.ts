import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, apiReadToken } from "./env";

import { defineLive } from "next-sanity/live";

export const client = createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion,
    stega: { studioUrl: "/studio" },
});

const { sanityFetch, SanityLive } = defineLive({
    client,
    serverToken: apiReadToken,
    browserToken: apiReadToken,
    fetchOptions: {
        revalidate: process.env.NODE_ENV === "development" ? 5 : false,
    },
});

export async function safeSanityFetch<T>(
    query: string,
    params: Record<string, any> = {},
    fallback: T | null = null
): Promise<T | null> {
    try {
        const fetchData: SanityFetchData = await sanityFetch({ query, params });

        if (!fetchData) {
            console.warn("Received no data from sanity for query: ", query);
            return fallback;
        }

        return fetchData.data;
    } catch (err: any) {
        console.error(
            "Could not fetch data from sanity. Error string: ",
            err?.message || err
        );
        return fallback;
    }
}

export { SanityLive };
