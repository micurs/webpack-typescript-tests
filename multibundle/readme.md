# Example of multi-page app with common bundle and page specific scripts

In this example we use webpack to create 3 bundles: one common for all the pages in our site and 2 specific for each page.
This is the scenarion where we share common code between all the pages in our app by producing a common.js using the
[CommonsChunkPlugin](https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin) available in WebPack.

Each page includes 2 Javascript files:

```
<script src="/dist/common.js"></script>
<script src="/dist/pagea.js"></script>
```

Most of the code, including all the libraries used are in the `common.js` file shared by all the pages and cached by the browser.
The `pagea.js` and `pageb.js` scripts only include page specific code.

To install the dependencies run:

```
npm install
typing install
```

To build and run the example run:

```
npm run build
npm start
```
