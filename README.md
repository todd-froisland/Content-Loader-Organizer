# Content-Loader-Organizer - React.js

Content loaders can come in several varieties depending on your needs. Over time, your codebase can be encumbered with repetitive lines of content loader code. This also causes problems with separation of concerns.

Use this framework library to:
* create new content loaders of different shapes and sizes
* maintain them in an orderly and scalable fashion
* avoid bloating your codebase
* separate concerns and implement SOLID principles of software development.

## Tips

  * This feature implements the react-content-loader package. You'll need to install this package using `npm install react-content-loader` to use this feature.

  * Several values need to be filled with your preferences in order to function. Please check each file.
  
  * When building loader shapes, you must specify the X and Y location within the viewbox of where you want the top-left corner of the shape to begin (or center of the circle, depending on the shape).
  
  * With the current layout, the viewbox will adjust to your screen's size. 

  * Currently, shapes that have been verified as implementable are rectangles and circles. See the recipe.jsx file for examples.

  * Add global variables like (speed and colors) at the skeletonWrapper component level to maintain uniformity and simplicity across all of your different variations of content loaders
  * Add individual shapes to individual recipes to change shape and size of loaders. 
  * Add viewbox values at the skeletonWrapper level to make sure your individual recipes are dependent upon your wrapper. This allows for unity among the individual loaders. 
  * Because this feature is meant to be expandable based on your content loader needs, you'll need to copy these files into your repo to start using it.
