matrix-react-skin
=================

This package provides a basic skin and Matrix client using the matrix-react-sdk.

Getting started
===============

To build and start a server serving the basic client:

1. Install or update `node.js` so that your `npm` is at least at version `2.0.0`
2. Clone the repo: `git clone https://github.com/matrix-org/matrix-react-skin.git` 
3. Switch to the SDK directory: `cd matrix-react-sdk`
4. Install the prerequisites: `npm install`
5. Build the example and start a server: `npm start`

Now open http://127.0.0.1:8080/ in your browser to see your newly built
Matrix client.

Components of This Package
==========================

This package comprises the following:

 * A basic skin in src/skins/base. This contains the HTML (in React JSX) and CSS
   that's presented in the client. This matches the controller logic in
   matrix-react-sdk.
 * The containing app source in src/app. The index.js file here imports
   matrix-react-sdk and loads the base skin from this package. It then asks the
   sdk for the MatrixChat component and uses React to render it into the page.
 * The bootstrap HTML for the app in index.html. This imports the javascript
   bundle file that gets built in the build process as well as the CSS bundle
   file. It contains basic skeleton HTML and an element where the app gets
   rendered.
 * The package manifest and build instructions in package.json. This contains
   all the commands used for building the source files, javascript and CSS
   bundles.
 * The webpack config in webpack.config.json which contains the basic parameters
   webpack needs to build the bundled javascript.

Building On Top of matrix-react-skin
====================================

See the README.md file in matrix-react-sdk for more on making an application
with the react SDK and basic skin. An example of building a derived skin,
is provided in examples/custom and explained in examples/custom/README.md.

