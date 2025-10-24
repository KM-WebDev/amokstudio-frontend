import { defineQuery } from "next-sanity";

export const PORTFOLIO_HOMEPAGE_QUERY =
    defineQuery(`*[_type == "portfolio" && show_on_homepage == true]{
    title, mainImage, description
}`);

// export const POSTS_QUERY =
//     defineQuery(`*[_type == "post" && defined(slug.current)]{
//     _id, title, slug
//   }`);

// export const POST_QUERY =
//   defineQuery(`*[_type == "post" && slug.current == $slug][0]{
//     title, body, mainImage
//   }`);
