# Content-Loader-Organizer

content loaders can come in several varieties and can become cumbersome to codebases depending on the length and complexity of the loader.

Use this framework to create new content loaders of different shapes and sizes. 
  * Currently, shapes that have been verified as implementable are rectangles and circles. See the recipe.jsx file for examples.

Also use this framework to maintain your content loaders.
  * add global variables at the skeletonWrapper component level to maintain uniformity and simplicity across all of your different variations of content loaders
  * add individual shapes to individual recipes to change shape and size of loaders. 
  * add viewbox values at the skeletonWrapper level to make sure your individual recipes are dependent upon your wrapper. This allows for unity among the individual loaders. 
