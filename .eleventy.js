module.exports = function(eleventyConfig) {
    // ✅ Copy images from content to _site root
    eleventyConfig.addPassthroughCopy({ "content/*.png": "/" });
    eleventyConfig.addPassthroughCopy({ "content/*.jpg": "/" });
    eleventyConfig.addPassthroughCopy({ "content/*.webp": "/" });

    return {
        dir: {
            input: "content",   // ✅ Keep Markdown files in content/
            output: "_site",    // ✅ Generated static site
            includes: "../_includes", // ✅ This is incorrect, it should be "_includes"
            layouts: "../_includes"   // ✅ This is incorrect, it should be "_includes"
        }
    };
};
