# Intro To jQuery Events

#### HTML first...
* Add a header to this page above the container. Say something like, "Crazy Buttons"
* Add buttons so that the container looks something like this:

![example](images/screen.png)
* Add an id to each button that tells you what it says. For example, the first one might be `<button id="pink">COLOR IT PINK</button>`


### CSS next...
* Change the background color of the buttons to a color you like.
* Change the hover background color of the buttons to something else.

### The jQuery fun begins!
You will be using the jQuery click() event to do different things to your webpage based on which button was clicked.
* COLOR IT PINK: When the user clicks on this button it should use the [`css()` function](https://www.w3schools.com/jquery/jquery_css.asp) to put a `20px` pink border on the container div.   *disclaimer: you may choose a different color if you wish*
* FEELING BLUE: When the user clicks on this button it should turn the background color of the container `div` to a pretty shade of light blue [hex color picker](https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker&aqs=chrome..69i57j0l5.2583j0j4&sourceid=chrome&ie=UTF-8).
* FADE AWAY: When the user clicks on this button the entire container should fade out very slowly.
* LOTTERY BUTTON: When the user clicks on this button a pop-up should say "YOU WON THE LOTTERY" [hint if you're stuck](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_click)
* CONFIRM: When the user clicks on this button a confirmation pop-up should say "Are you sure?" [hint if you're stuck](https://www.w3schools.com/jsref/met_win_confirm.asp)
* SHOW ME A PUPPY: When the user clicks on this button the background-image becomes a puppy. Use the puppy image in the images folder. *hint: `.css()` should work here!*
* REPLACE ME: When the user clicks on this button the button should be replaced with a subheading REPLACED!. hint: Use jquery's [`replaceWith()` function](http://api.jquery.com/replacewith/)


#### EXTENSION
* OLD ENOUGH TO DRIVE?: When the user clicks on this button they will be prompted with "How old are you?". If they are old enough to drive, the entire container will be replaced with a heading saying "WOHOOO!!!". If they are not old enough to drive, the entire container will be replaced with a heading saying "Sorry, maybe next year".
* YOU CHOOSE!: Look at jQuery's effects possibilities: [jQuery effects](http://api.jquery.com/category/manipulation/) and pick something that you would like this button to do!