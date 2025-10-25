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

export const { sanityFetch, SanityLive } = defineLive({
    client,
    serverToken: apiReadToken,
    browserToken: apiReadToken,
});
