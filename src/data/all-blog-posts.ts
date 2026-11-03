import { blogPosts as legacyBlogPosts } from "./blog-posts";
import { editorialPosts } from "./editorial-posts";
import { judgmentPosts } from "./judgment-posts";
import { inheritedWorkPosts } from "./inherited-work-posts";

export const blogPosts = [...legacyBlogPosts, ...editorialPosts, ...judgmentPosts, ...inheritedWorkPosts];
