<pre>                                                                  
      ___          ___          ___         ___         ___     
     /\  \        /\  \        /\  \       |\__\       |\__\    
    /::\  \      /::\  \      /::\  \      |:|  |      |:|  |   
   /:/\:\  \    /:/\:\  \    /:/\:\  \     |:|  |      |:|  |   
  /:/  \:\  \  /::\~\:\  \  /::\~\:\  \    |:|__|__    |:|__|__ 
 /:/__/_\:\__\/:/\:\ \:\__\/:/\:\ \:\__\___/::::\__\___/::::\__\
 \:\  /\ \/__/\:\~\:\ \/__/\:\~\:\ \/__|::::/~~/~  \::::/~~/~   
  \:\ \:\__\   \:\ \:\__\   \:\ \:\__\  ~~|:|~~|    ~~|:|~~|    
   \:\/:/  /    \:\ \/__/    \:\ \/__/    |:|  |      |:|  |    
    \::/  /      \:\__\       \:\__\      |:|  |      |:|  |    
     \/__/        \/__/        \/__/       \|__|       \|__|    
                                                        
</pre>

# Welcome to the very first geexx+ Learn Day! 

## About
Today you are going to learn how to set up your own customizable website using `github` and `react.js`.
The skills, tools, and resources you learn today will help you continue to maintain your website well after our journey is done!

## Github
According to https://guides.github.com/activities/hello-world/:

`GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.`

## React.js
`React is a declarative, efficient, and flexible JavaScript library for building user interfaces`

In other words, react makes your website look really pretty and respond very efficiently! React was created by Facebook and has a ton of great tutorials online if you want to get into the nitty-gritty.

https://facebook.github.io/react/

## create-react-app
create-react-app is a module that creates single-page React applications with no build configuration.  It's super simple!

### Installation

Open iTerm on your workstation and run:

`npm install -g create-react-app`

### Creating an App

To create a new app, use iTerm on your workstation to run the commands below:
(You can choose to name your app my-app like below or substitute any name you like!)

`create-react-app my-app`
`cd my-app`

### Start and View Your Shiny New App

Then type in iTerm the following:

`npm start`

This will run the app in Chrome at: http://localhost:3000  If you don't npm start your app, you won't be able to view it at this url.

### View the code 

Now type in iTerm:

`code .`

This will open up a source code editor called 'code' in the current directory (period indicates current directory!)
In this editor you will see that the following files were generated for you:

`my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg`

Some files worth noting:
`App.js` is a sample React component called “App” that we get for free when creating a new app.  It is mostly html surrounded with some javascript to display the webpage.
`App.css` stores styling for the app.  It stores the details that make the black background at the top of the page, and the white background in the bottom part of the page, along with font colors, sizes, alignments, and more!
`logo.svg` is the react logo being displayed on the main page.  Look at it spin!

You have a great app so far.  Remember to add, commit and push your code to your github repository!

### Edit the code

You are free to edit App.js to display what you'd like, as long as you write it correctly!

Try changing the code on line 14 from 
`To get started, edit <code>src/App.js</code> and save to reload.`
to something more to your liking.  Maybe `My app is great!  I can write <code>html</code>!`

As you make edits to the code, the page at http://localhost:3000 will reload with your changes.  You will also see any errors and warnings in the console.  When you get your page to show new text without erroring, remember to add, commit and push your code to your github repository again!

When it changes in the browser, you'll notice that the text within the `<code>` tags shows in a different font style.  This is one of the many tags you can use.  `<h1>` `<img>` `<a>` `<p>` and `<div>` tags are others you can use for headers, images, links, text paragraphs and text sections and more.

You can also try adding the following 4 Hello World snippets into to see how they all display on the page:

`<div>Hello World</div>`

`<div>
  Hello World
</div>`

`<div>
  Hello
  World
</div>`

`<div>

  Hello World
</div>`

Did you notice that in the webpage they all appear the same, even though they look different?

The create-react-app section of this tutorial was based on the link below. If you want to find more information on create-react-app, you can visit:
https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html






