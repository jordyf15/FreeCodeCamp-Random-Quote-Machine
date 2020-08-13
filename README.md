# Random Quote Machine
For the first FreeCodeCamp Frontend Library Project, we have to make a random quote machine using any mix of technology such as HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.

## Test/User-Stories
1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with a corresponding id="text".
3. Within #quote-box, I can see an element with a corresponding id="author".
4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
5. Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
11. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

We need to include the CDN link in the public\index.html file to be able to run the test in any environment we like. The example to include it:
```
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```
## Live Demo on Codepen
https://codepen.io/jordyf15/full/OJyeoar
## Technology used:
1. HTML
2. CSS
3. Javascript
3. React version 16.13.1
4. Bootstrap version 4.1.0
5. Fontawesome version 5.8.1

## List of React Components:
### App Component
The app component rendered the background and also is the parent of quote box component. This is where the color list, quote and author are imported.
#### States
The app component only have 1 state which is the colorIndex where it will be used to change the background color and also as props for the default state of colorIndex of QuoteBox.
#### Functions
The app component only have 1 function the changeBgColor. this is where the setState will happen and change the state of colorIndex which will re render and change the background color.
#### Renders
The app component renders the background and also the QuoteBox component. It also give props to the QuoteBox Component such as:
- colorList (an array of color codes to change the color of text and button of QuoteBox)
- quoteList (an array of quotes that will be used for the QuoteBox)
- authorList (an array of authors that will be used for the QuoteBox)
- startIndex (an index for the array colorList that will be used for the default or starting of the state colorIndex in QuoteBox)
- changeBgColor (the function to change the background color of the App Component so it can be called from the child component which is QuoteBox)
- startText (the starting index for the array author and quote that will be used for the default or starting of the state authorIndex and quoteIndex)

### QuoteBox Component
The QuoteBox component will render the quote box along with its quote, author and also the button that will change the quote, author, and also the background colour. 
#### States
The QuoteBox component have 5 states, they are:
1. colorIndex: the current color of the text and buttons of quote box.
2. authorIndex: the current author of the quote box.
3. quoteIndex: the current quote of the quote box.
4. fadeTransition: the state that will be used for the fading animation of the texts.
5. fadeState: the state that will use to make the text fade in or fade out.
  
#### Functions
The QuoteBox component have 3 functions, they are:
1. randomIndex: this will render a number to be used for the setState of colorIndex, authorIndex, and quoteIndex.
2. changeEverything: this will set state of the colorIndex, authorIndex, quoteIndex, fadeTransition, and fadeState, to change the text and color of the quote box randomly with fade-in fade-out animation. This is also where the changeBgColor of the app component will be called.
3. tweetQuote: this will tweet the current quote and author in the quotebox to twitter.
  
#### Renders
The QuoteBox component will render all elements in the quote box, such as:
1. The quote text and author text: this will print the current quote and author.
2. The share quote twitter button: this will tweet the current quote and author to twitter.
3. The share quote tumblr button: this will share the current quote and author to tumblr.
4. The new quote button: this will trigger the changeEverything function.
