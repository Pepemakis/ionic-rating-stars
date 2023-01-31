# ionic-rating-stars
A simple example project for presenting and editing rating using stars (with 0.5 step)

This project utilizes a service that takes a number from 0 to 5 and returns
a json array of ionicons (5 max). This json array is then used inside an ng-repeat
to represent the given number with stars. 

To recreate the common rating input, a range ionic component is used in front of the 
star representation list. The range component's opacity is set to 0 so the result is
an interactive rating representation.

I hope it will be useful,
pepemakis
