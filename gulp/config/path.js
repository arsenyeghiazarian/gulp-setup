import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
        images: `${buildFolder}/images`,        
    },
    src: {
        images: `${srcFolder}/assets/images/**/*.{jpg, jpeg, png, gif, webp}`,
        svg: `${srcFolder}/assets/images/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/main.scss`,
        html: `./*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgIcons: `${srcFolder}/assets/images/svgicons/*svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/images/**/*.{jpg, jpeg, png, gif, webp, svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}