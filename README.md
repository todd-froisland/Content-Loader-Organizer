# Content-Loader-Organizer - React.js

Content loaders can come in several varieties and can become cumbersome to codebases depending on the length and complexity of the individual loaders.

Use this framework to create new content loaders of different shapes and sizes and maintain them in an orderly and scalable fashion.
  * Currently, shapes that have been verified as implementable are rectangles and circles. See the recipe.jsx file for examples.

  * Add global variables like (speed and colors) at the skeletonWrapper component level to maintain uniformity and simplicity across all of your different variations of content loaders
  * Add individual shapes to individual recipes to change shape and size of loaders. 
  * Add viewbox values at the skeletonWrapper level to make sure your individual recipes are dependent upon your wrapper. This allows for unity among the individual loaders. 
