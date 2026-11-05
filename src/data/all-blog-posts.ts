import { blogPosts as legacyBlogPosts } from "./blog-posts";
import { editorialPosts } from "./editorial-posts";

export const blogPosts = [...legacyBlogPosts, ...editorialPosts];
