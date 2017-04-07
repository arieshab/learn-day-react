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
According to [Github](https://guides.github.com/activities/hello-world/):

> GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## React.js
> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 


In other words, react makes your website look really pretty and respond very efficiently! React was created by Facebook and has a ton of great tutorials online if you want to get into the nitty-gritty.


[React resources for more information](https://facebook.github.io/react/)

## create-react-app
create-react-app is a module that creates single-page React applications with no build configuration.  It's super simple!

### Installation

Open iTerm on your workstation and run:

`npm install -g create-react-app`

### Creating an app

To create a new app, use iTerm on your workstation to run the commands below:


`create-react-app my-app`

(You can choose to replace the name 'my-app' with whatever you like!)

`cd my-app`

### Start and view your shiny new app

Then type in iTerm the following:

`npm start`

This will run the app in Chrome at: http://localhost:3000  
Note: if you try this at home you *must* do npm start, otherwise you won't be able to view it at this url.

### View the code 

Now type in iTerm:

`code .`

This will open up a source code editor called 'code' in the current directory (the period indicates current directory!)
In this editor you will see that the a couple folders and a bunch files were generated for you:
```
my-app/
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
    logo.svg
```

Some files worth noting:

`README.md` is generated as a user guide to this application that was created for you. It's a great reference about what your app is capable of!


Drill into the source folder and you'll see:


`App.js` which is a sample React component called 'App' that we get for free when creating a new app.  It is mostly html surrounded with some javascript to display the webpage.


`App.css` which stores styling for the app.  It stores the details that make the black background at the top of the page, and the white background in the bottom part of the page, along with font colors, sizes, alignments, and more!


`logo.svg` which is the react logo being displayed on the main page.  Look at it spin!



You have a great app so far! Remember to add, commit and push your code to your github repository!

### Edit the code

You are free to edit App.js to display what you'd like, but you have to code it correctly!

Try changing the code on line 14 from <br>
`To get started, edit <code>src/App.js</code> and save to reload.`<br>
to something more to your liking.  Maybe `My app is great!  I can write <code>html</code>!`

As you make edits to the code, the page at http://localhost:3000 will reload with your changes. You will also see any errors and warnings in the console. When you get your page to show new text without erroring, remember to add, commit and push your code to your github repository again!

When it changes in the browser, you'll notice that the text within the `<code>` tags shows in a different font style. This is one of the many tags you can use. `<h1>` `<img>` `<a>` `<p>` and `<div>` tags are others you can use for headers, images, links, text paragraphs and text sections and more.<br> 
Always be sure to always add a matching tag with a `/`, like: <br>
`<p> some words here </p>`<br>
Or embed them within other tags, but they must still have matching end tags like: <br>
 ```
<p> some words here
  <code>
    this font looks computer-y
  </code>
</p>
 ```
HTML tags are a huge part of web development. [W3 Schools](https://www.w3schools.com/TAgs/) has a great list of all the tags you can use to help bring the vision of your app to life!

You can also try adding the following 4 Hello World snippets within the  into to see how they all display on the page:<br>

``` 
<div>
  Hello World
</div> 


<div>
  Hello
  World
</div>


<div>
 
  Hello World
</div>
 ```
 Did you notice that in the webpage they all appear the same, even though they look different?
 
 
The create-react-app section of this tutorial was based on [this link](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html). 
Feel free to take a look if you want to learn more info about react!
 

### Now onto the fun stuff!

Are you ready to start cutomizing your website? Talk with your pair to think about an idea for a site that you can make. Keep in mind that you will have access to this code when you leave the class so you can pull it onto your own machine at home and completely personalize it!

Before we get too far ahead of ourselves, let's commit our code to github. 

Committing your code means that you're saving your work so you always have access to what you've done. And not just on your local system, it'll be available anywhere you go! It's good practice to commit often. <b>Very</b> often!

In your my-app directory, run the following command:

`git init`

This willinitialize your git repository

`git status`

This will show you all the files you changed, they'll be listed in red.

`git add .`

This command will add all the files in your current directory to the git repository

`git status`

All the files that were previously red are now green! This is good! 

>git commit -m "[remove the brackets and type a comment here]"

Since we'll find ourselves committing a lot, we want to make comments about *what* we are committing. Leave the quotes, but reaplce "[remove the brackets and type a comment here]" with something like "Initial commit. setting up react app". Or you can leave an inspiring message to yourself. It's up to you, these are for you to interpret! Your git message is going to look something like this: 

`git commit -m "Initial commit for my first react app" `

And finally, we will push it!

`git remote add origin [remote repository url]`

`git remote push -u origin master`



### What you'll need to do this at home!

<b>1. [Homebrew](https://brew.sh/)</b>

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

It's important to install homebrew first because a lot of other libraries rely on it

<b>2. [Node/Npm](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)</b>

`brew install node`

<b>3. [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started)</b>

`npm install -g create-react-app`

<b>4. Text Editor!</b>

You'll need some kind of text editor to write your code. There are so many options out there so feel free to find one you like the most. Today we used [VS code](https://code.visualstudio.com/docs/setup/setup-overview) but you can also check out [Atom](https://github.com/atom/atom/releases/tag/v1.15.0), [Sublime](https://www.sublimetext.com/3)

<b>5. [Github](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)</b>

The simplest thing to do on a Mac is to type the `git` command into iTerm. Your system will prompt you to install Git onto your machine!




