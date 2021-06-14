// Using default extractor works
module.exports = {
  content: ["dist/index.html", "dist/**/*.js"],
  css: ["dist/assets/css/**/tailwind*.css"],
  output: "dist/assets/css",
  defaultExtractor: (content) => content.match(/[\w-:/]+(?<!:)/g) || [],
};
