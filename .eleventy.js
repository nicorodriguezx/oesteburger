require('dotenv').config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("googleAnalyticsId", process.env.GOOGLE_ANALYTICS_ID);
    eleventyConfig.addGlobalData("whatsappLink", process.env.WHATSAPP_LINK);
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};