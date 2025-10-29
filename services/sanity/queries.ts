import { defineQuery } from "next-sanity";

// Query Cheat Sheet: https://www.sanity.io/docs/content-lake/query-cheat-sheet

export const PORTFOLIO_HOMEPAGE_QUERY =
    defineQuery(`*[_type == "portfolio" && showOnHomepage == true] | order(orderRank) {
    _id, title, mainImage, description
}`);

export const PORTFOLIO_ALL_QUERY = defineQuery(`*[_type == "portfolio"]{
    _id, title, mainImage, description
}`);

export const PORTFOLIO_SINGLE_QUERY =
    defineQuery(`*[_type == "portfolio" && _id == $portfolioId][0]{
    title, mainImage, sections, gallery
}`);

export const PORTFOLIO_IDS_QUERY = defineQuery(`*[_type == "portfolio"]{
    _id
}`);

export const SOCIALS_QUERY = defineQuery(`*[_type == "contactInfo"]{
    _id, socials
}`);
