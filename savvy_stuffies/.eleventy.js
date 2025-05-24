module.exports = function (eleventyConfig) {
  // ✅ Pass through static assets directly
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts"); // optional
  eleventyConfig.addPassthroughCopy("favicon.ico"); // if present
  eleventyConfig.addPassthroughCopy("Savvy_Stuffies_Favicon.png");

  return {
    dir: {
      input: ".",         // Keep your existing folder structure
      includes: "_includes", // For partials like nav, footer, etc.
      layouts: "_layouts",   // Optional: if you want layout templates
      output: "_site"      // Where the built site will go
    },
    templateFormats: ["html", "njk", "liquid", "md"], // enable Nunjucks/Liquid optionally
    htmlTemplateEngine: "liquid", // or "njk" if you prefer Nunjucks
    markdownTemplateEngine: "liquid"
  };
};
