const localAIPlugin = require('eleventy-plugin-local-ai');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(localAIPlugin, { 
        verbose: true,
    });
};
