# Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Desktop 
<img width="891" alt="image" src="https://user-images.githubusercontent.com/57645180/188328682-b4045728-ac02-4ae4-9275-175205cf55ee.png">

## Mobile
<img width="242" alt="image" src="https://user-images.githubusercontent.com/57645180/188328666-cc2f43cb-f76d-4123-8e79-7c840739473e.png">


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Links

- Live Demo: [Demo](https://cacosted-submission-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript (+ES6) 
- Flexbox
- CSS Grid
- [Tailwind](https://tailwindcss.com/)
- Mobile-first workflow

### What I learned

This challenge was a great opportunity to keep learning and practicing `tailwind`

1. On tailwind config file if you remove the `extend` key you overwrite all the tailwind styles. To add custom styles you must add the values you need inside the `extend
```js
// tailwind.config.js
// ⚠️ Overwrites tailwind's font families and background images styles
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'regular': ['Josefin Sans', 'sans-serif']
    },
    backgroundImage: {
      'hero': "url(./images/bg-pattern-desktop.svg)"
    }
  },
}
```
```js
// ✅ Overwrites tailwind's font families and background images styles
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: { // <--- Is very important that you set custom styles inside extend
        fontFamily: {
          'regular': ['Josefin Sans', 'sans-serif']
        },
        backgroundImage: {
          'hero': "url(./images/bg-pattern-desktop.svg)"
        }
    },
  },
}
```

2. Use javaScript to change tailwind's styles dynamically
```js
const displayError = (text) => {
  if(text !== null) {
    label.classList.replace('border','border-4')
    label.classList.replace('border-red-300','border-red-400')
  }
  else {
    label.classList.replace('border-4','border')
    label.classList.replace('border-red-400','border-red-300')
  }
}
```

3. Create a grid with row span on large screens to get the expected layout
**Tailwind**
```css
  .container {
    min-height: 80vh;
    background-color: antiquewhite;
    display: grid;
    grid-template-columns: 1fr 40%;
  }

  .featured {
    grid-row: span 2;
  }
```
**Tailwind**
```html
<main class="grid grid-cols-[1fr_40%]">
  <div class="row-span-2">
    <!-- ...content -->
  <div>
</main>
```

4. Create custom email validation
```js
const getErrorMessage = (text) => {
  const hasAtSign = text.includes('@')

  if(text === '') {
    return('Error you must provide an email')
  }
  
  if(!hasAtSign) {
    return('Error you must add the "@"')
  }

  if(hasAtSign) {
    const [before, after] = text.split('@')
    if(before === '' || after === '') {
      return('Error the email format is not valid')
    }
  }
  return null
}
```
## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)
