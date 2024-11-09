require('dotenv').config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};