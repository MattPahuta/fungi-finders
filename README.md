# FungiFinders - A Frontend Masters design

This is a solution to the [Description of project/challenge](https://www.sourceofproject.com). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Example: View the optimal layout for the interface depending on their device's screen size
- Example: See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

My first time using nested media queries and data attribute styling in a proper project, additionally locally scoped variables (which I haven't used often), Example:

```css
@layer layout {
  .section {
    --padding: 3.75rem;
    padding-block: var(--padding);

    @media (width > 760px) {
      --padding: 8rem;

      &[data-padding="compact"] {
        --padding: 4.5rem;
      }
    }
  }

  .wrapper {
    --wrapper-max-width: 1130px;
    /* 
      different approahes to setting the max-width here
      Layout & Utility Classes => Wrappers & Containers ~ 4:00
    */
    max-width: var(--wrapper-max-width);
    margin-inline: auto;
    padding-inline: 1rem;
    box-sizing: content-box;
    /* nesting a modifier */
    &[data-width="narrow"] {
      --wrapper-max-width: 720px;
    }

    &[data-width="wide"] {
      --wrapper-max-width: 1330px;
    }

  }
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
