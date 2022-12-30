const mix = require("laravel-mix");
const vueMacros = require("unplugin-vue-macros/webpack");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
    plugins: [
        vueMacros({
            version: 2,
            defineOptions: {
                include: [/\.vue$/, /\.vue\?vue/],
            },
            reactivityTransformVue2: {
                include: [/\.vue$/, /\.vue\?vue/],
            },
        }),
    ],
});

mix.js("resources/js/app.js", "public/js").vue({ version: 2 });

mix.postCss("resources/css/app.css", "public/css");
