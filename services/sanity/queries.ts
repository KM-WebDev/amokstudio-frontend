import { defineQuery } from "next-sanity";

export const PORTFOLIO_HOMEPAGE_QUERY =
    defineQuery(`*[_type == "portfolio" && show_on_homepage == true]{
    _id, title, mainImage, description
}`);

export const PORTFOLIO_SINGLE_QUERY =
    defineQuery(`*[_type == "portfolio" && _id == $portfolioId][0]{
    title, mainImage, sections, gallery
}`);
