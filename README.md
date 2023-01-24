# A awesome Travel Agency App with React-Tailwined

### Go to Live Project: https://travel1-react-tailwined-app.netlify.app/

![CHEESE!](/image/home.jpg)

### What I use here:
* React
* Tailwinedcss
* React-scroll
* React-icons

#### First Create React App by using command line:

    npx create-react-app ./

### For install Tailwined you have to follow 4 steps, such as...

#### Install Tailwined CSS by command line:

    npm install -D tailwindcss

#### Generate your tailwind.config.js file:

     npx tailwindcss init

#### Configure your template paths
#### Add the paths to all of your template files in your tailwind.config.js file:

    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
 #### Add the Tailwind directives to your CSS:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
 
 ### Install & import React-Icon:
    npm i react-icons --save
    import { FaBars, FaTimes, } from 'react-icons/fa'
 
### Install & import React-scroll:
    npm install react-scroll
    import { Link } from 'react-scroll'
