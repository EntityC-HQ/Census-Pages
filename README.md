# Project Documentation

## 1. Project Overview

...

## 2. Tech Used

- Frontend Framework: React (https://react.dev/) - A popular JavaScript library for building user interfaces.
- Javascript
- CSS Framework: Tailwind CSS (https://tailwindcss.com/docs/installation) - A utility-first CSS framework that provides pre-built classes for rapid styling and responsive design implementation.
- Build Tool: Vite (https://vitejs.dev/) - A modern build tool for developing web applications with lightning-fast development server and hot module replacement (HMR) functionalities.

## 3. Project Setup

### Make sure you have Node JS installed or install it: (https://nodejs.org)

### Step 1 - Create a new project:

```
mkdir Census-pages
cd Census-pages
```

Initialise the project with Vite and JavaScript:

```
npm create vite@latest
```

or

```
yarn create vite@latest
```

It will ask for your project name, select framework as React and select JavaScript for the variant.

Now, enter the vite project directory, install the necessary packages, and run the project. So, enter in terminal the commands below:

```
npm install
npm run dev
```

### Step 2 - Install Tailwind CSS and other Dependencies

Install tailwindcss, postcss, and autoprefixer:

```
npm install -D tailwindcss postcss autoprefixer
```

or

```
yarn add -D tailwindcss postcss autoprefixer
```

This will install:

- The Tailwind CSS framework
- Post CSS - a tool for transforming CSS with JavaScript plugins. Tailwind CSS uses PostCSS to process its CSS.
- Autoprefixer, which is a PostCSS plugin that parse CSS and add vendor prefixes to CSS rules.

Make sure these dev dependencies are added by checking your package.json file.

### Step 3 - Generate Configuration Files for Tailwind CSS

Input the command below in terminal:

```
npx tailwind init -p
```

This command will generate tailwind.config.js and postcss.config.js configuration files which will help you to interact and customize the project.

### Step 4 - Configure Source Path for Tailwind CSS

Add the path for template files in "tailwind.config.js" file. Template files include HTML templates, JavaScript components, and other source files that contain Tailwind class name. This is to make sure that vanilla CSS is generated for the corresponding elements.

Initially, "./tailwind.config.js" contain this:

![Vite-Guide-TailwindCSS-TypeScript](https://miro.medium.com/v2/resize:fit:720/format:webp/1*3IVLfbc4p5ZxWju8T-kjrg.png)

Add

```
"./index.html", "./src/**/*.{js, ts, jsx, tsx}
```

in content array which will make the "tailwind.config.js" file to contain this:

![Vite-Guide-TailwindCSS-TypeScript](https://miro.medium.com/v2/resize:fit:720/format:webp/1*JK6tYJnOHPv9dseEmepEfg.png)

Please make sure you don't add space in between them \*.{js,ts,jsx,tsx}

### Step 5 - Add Tailwind Directives to CSS file

Tailwind directives are custom Tailwind-specific statements that instruct Tailwind CSS to process certain features or configurations during the build process.
Please add the statements below in the "index.css" file. Bfore this, clear all the content of the file:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The directives are used to include the respective parts of Tailwind CSS in your CSS files. These directives are commonly used within youur CSS files to ensure that the base styles, component styles, and utility classes provided by Tailwind CSS are included in the final output.

"App.css" file has been removed as it was not required any more.

### To run the project:

```
npm run dev
```

or

```
yarn dev
```

### Environment Variables:

Create ".env" file in the root directory of the app "./" and define variables for rss feed channel and form service as below:

```
VITE_APP_RSS_CHANNEL_URL="https://odysee.com/$/rss/@your-channel"
```

#### Important!

Don't forget to add exception in your .gitignore file:

```
#Environment variables
.env
*.env
*.vars
!.env.example
```

\*replace "your_getform_url" and "@your-channel" with actual values

## Project Deployment

### Cloudflare Pages:

Create an account on Clouflare - https://cloudflare.com

Integrate git repo - https://developers.cloudflare.com/pages/get-started/git-integration

### Pages Project Settings:

#### Environment variables

Production variables should be defined/set accordingly with the .env variables, in our case

```
Variable name:  VITE_APP_RSS_CHANNEL_URL
Value:          https://odysee.com/$/rss/@your-channel

Variable name:  VITE_APP_ENTITY_C_URL
Value:          https://your-entity-c-url

Variable name:  VITE_APP_BLOG_URL
Value:          https://your-blog-url

Variable name:  VITE_APP_X_URL
Value:          https://your-twitter/x-url

Variable name:  VITE_APP_DISCORD_HUB_URL
Value:          https://your-discord-research-hub-url
```

#### Builds & deployments

For the framework select "None" as Vite Build is not available
Build command:

```
npm run build
```

Build output directory
/

```
dist
```

Root directory
/

```
./
```
