matrix-react-example
====================

An example of how to use the Matrix React SDK to build a more customised app

Guided Tour
===========

Here are the components that make up this simple derived skin and how they
fit together:

 * package.json and webpack.config.js: These are the same as in matrix-react-skin,
   except that the package.json has no scripts to build CSS (this package has no CSS).
 * index.html: Pulls in a bundled js file and CSS file, as in matrix-react-skin, except
   note that that it manually references the CSS from matrix-react-skin. CSS in derived
   skins is currently experimental so CSS needs to be referenced separately from each
   base skin.
 * src/skins/custom/: This is the actual directory for the derived skin itself.
 * src/skins/custom/skinfo.json: This declares that this skin's base skin is the
   `base` skin in matrix-react-skin.
 * src/skins/custom/views: This contains the view JSX for our skin: it has only
   one file. Note that it shares its name with `molecules.MTextTile` from the base skin. 
   This causes it to take the place of that component in our derived skin.
 * src/app/index.js: The bootstrap javascript for our app. Here, we load our
   custom skin, get the `pages.MatrixChat` component out of the sdk and pass it
   to React to render.

If you run `npm start`, navigate to http://localhost:8080/, log in, find a
textual message and click on it, observe that you get a javascript alert
with the raw body of that message. Our custom MTextTile is doing its thing!

This trivial example is designed to show how you can take the basic skin and
provide your own user interface, component by component.
