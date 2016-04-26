# Gulp Starter Jade

### Dependencies:

Dependencies will be one time installation only.

If you don't have them already installed on your computer then run through installation process for each of them, otherwise there's no necessary installation.

- sass v3.3+ [Install Sass](http://sass-lang.com/install)
- node.js [Install Node.js](https://nodejs.org/en/)
- npm v2.0+ (npm will be installed with node.js)
- gulp [Install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### To get started:

1. `git clone https://github.com/CosminAnca/gulp-starter-jade.git [project-name]`
2. `cd [project-name]`
3. `npm install`
4. `npm run gulp`
5. Done

### Built with:

- [Jade](http://jade-lang.com/)
- [Sass(3.3+)](http://sass-lang.com/)
- [Bourbon - Sass mixins library](http://bourbon.io/)
- [Neat - responsive grid](http://neat.bourbon.io/)
- [Bitters - base styles and structure for Sass](http://bitters.bourbon.io/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [BrowserSync](http://www.browsersync.io/)
- [Gulp.js](http://gulpjs.com/)

## Features
- **CSS:** [Sass](http://sass-lang.com/) (indented, scss, or both)
  - Libsass (node-sass) for super fast compiles
  - Autoprefixer
- **JS:** Modular JavaScript with [gulp-include](https://www.npmjs.com/package/gulp-include)
- **HTML**: Static templating with [Jade](http://jade-lang.com/) and [gulp-data](https://github.com/colynb/gulp-data)
- **Images:**
  - **SVG Sprites**: Compiles a spritesheet from a folder of SVGs
  - Compression with image-min
- **Fonts:**
  - **Icon Fonts:** Generate from a folder of SVGs
  - Folder and `.sass` mixin for including WebFonts
- **Development Mode:**
  - File Watching and Live Reloading with [BrowserSync](http://www.browsersync.io/)
  - Source Maps
- **Production Builds:**
  - JS and CSS are uglified and minified
  - All filneames are revisioned with an md5 hash, a `rev-manifest.json` file is generated and all asset references are updated in html, css, and js
  - File size reporting
  - Local production sever for testing
- **Testing:**
  - JS test examples with Karma, Mocha, Chai, Sinon
  - Travis CI integration
- **Deployment:**
  - Quickly deploy `public` folder to gh-pages (`gulp deploy` task)

## Basic Usage
Make sure Node 0.12.x or 5.9.0 is installed. I recommend using [NVM](https://github.com/creationix/nvm) to manage versions.

#### Install Dependencies
```
npm install
```

#### Start compiling, serving, and watching files
```
npm run gulp
```

(or `npm run development`)

This runs `gulp` from `./node_modules/bin`, using the version installed with this project, rather than a globally installed instance. All commands in the package.json `scripts` work this way. The `gulp` command runs the `default` task, defined in `gulpfile.js/tasks/default.js`.

All files will compile in development mode (uncompressed with source maps). [BrowserSync](http://www.browsersync.io/) will serve up files to `localhost:3000` and will stream live changes to the code and assets to all connected browsers. Don't forget about the additional BrowserSync tools available on `localhost:3001`!

To run any other existing task, simply add the task name after the `gulp` command. Example:

```bash
npm run gulp production
```

#### Configuration
Directory and top level settings are convienently exposed in `gulpfile.js/config.json`. All task configuration objects have `src` and `dest` directories specfied. These are relative to `root.src` and `root.dest` respectively. Each configuration also has an extensions array. This is used for file watching, and file deleting/replacing.

If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.

### Run JavaScript Tests
```
npm run test
```
Test files located in `__tests__` folders are picked up and run using
[Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/). The test script right now first compiles a production build, and then, if successful runs Karma. This is nice when using something like [Travis CI](https://travis-ci.org/vigetlabs/gulp-starter) in that if an error occurs during the build step, Travis alerts me that it failed. To pass, the files have to compile properly AND pass the JS tests.

### Build production-ready files
```
npm run production
```

This will compile revisioned and compressed files to `./public`. To build production files and preview them localy, run

```
npm run demo
```

This will start a static server that serves your production files to http://localhost:5000. This is primarily meant as a way to preview your production build locally, not necessarily for use as a live production server.

### Deploy to gh-pages
```
npm run deploy
```
This task compiles production code and then uses [gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) to push the contents of your `dest.root` to a `gh-pages` (or other specified) branch, viewable at http://[your-username].github.io/[your-repo-name]. Be sure to update the `homepage` property in your `package.json`.

GitHub Pages isn't the most robust of hosting solutions (you'll eventually run into relative path issues), but it's a great place to quickly share in-progress work, and you get it for free.

[Divshot](https://divshot.com/) and [Surge.sh](http://surge.sh/) are a couple great alternatives for production-ready static hosting to check out, and are just as easy to deploy to. Where ever you're deploying to, all you need to do is `npm run gulp production` and transfer the contents of the `public` folder to your server however you see fit.

# Task Details

#### JS
```
gulpfile.js/tasks/scripts
```
Each js file can be referenced in `app.js` which will bundle and minify all files.

#### CSS
```
gulpfile.js/tasks/css
```
Your Sass gets run through Autoprefixer, so don't prefix! Use the indented `.sass` syntax, but switch to whichever you prefer.

#### HTML
```
gulpfile.js/tasks/html
```
Robust templating with [Jade](http://jade-lang.com/). Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node and browsers.

A global data file is set up at [src/views/data/global.json](src/views/data/global.json), is read in by the `html` task, and exposes the properties to your html templates.

#### Fonts
```
gulpfile.js/tasks/fonts
```
All this task does is copy fonts from `./src/fonts` to `./public/fonts`.

#### IconFont
```
gulpfile.js/tasks/iconFont
```
SVGs added to `src/icons` will be automatically compiled into an iconFont, and output to `./public/fonts`. At the same time, a `.sass` file will be output to `src/style/generated/_icons.sass`. This file contains mixins and classes based on the svg filename. If you want to edit the template that generates this file, it's at `gulpfile.js/tasks/iconFont/template.sass`

##### Usage:
With generated classes:
```
<span class="icon icon--twitter"></span>
```

With mixins:
```sass
.lil-birdy-guy
  +icon--twitter
```

```scss
.lil-birdy-guy {
  @include icon--twitter;
}
```

```html
<span class="lil-birdy-guy"></span>
```

*Don't forget about accessibility!*

```html
<span aria-label="Twitter" class="icon icon--twitter"></span>
<!-- or -->
<div class="icon icon--twitter"><span class="screen-reader">Twitter</span></div>
```

#### SVG Sprites
```
gulpfile.js/tasks/svgSprite
```
SVGs sprites are super powerful. This particular setup allows styling 2 different colors from your css. You can have unlimited colors hard coded into your svg.

In the following example, the first path will be `red`, the second will be `white`, and the third will be `blue`. Paths **without a fill attribute** will inherit the `fill` property from css. Paths with **fill="currentColor"** will inherit the current css `color` value, and hard-coded fills will not be overwritten, since inline styles trump css values.

```sass
.sprite
  fill: red
  color: white
```

```svg
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="..."/>
    <path fill="currentColor" d="..."/>
    <path fill="blue" d="..."/>
  </svg>
```

I've included a helper mixin to generate the required svg markup in `src/views/mixins/_mixins.jade`, so you can just do:
```jade
  +sprite('my-icon')
```
Which spits out:

```html
  <span class='sprite my-icon'>
    <svg viewBox="0 0 1 1"><use xlink:href='img/sprites.svg#my-icon' /></use></svg>
  </span>
```

I recommend setting up your SVGs on a 500 x 500 canvas, centering your artwork, and expanding/combining any shapes of the same color. This last step is important.

#### Static Files (favicons, app icons, etc.)
There are some files that belong in your root destination directory that you won't want to process or revision in production. Things like [favicons, app icons, etc.](http://realfavicongenerator.net/), should go in `src/static`, and will get copied over to `public` as a last step (after revisioning in production). *Nothing* should ever go directly in `public`, since it gets completely trashed and re-built when running the `default` or `production` tasks.
