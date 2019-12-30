# React Styled Boilerplate

[![Build Status](https://travis-ci.org/radenkovic/styled-react-boilerplate.svg?branch=master)](https://travis-ci.org/radenkovic/styled-react-boilerplate)
[![dependencies Status](https://david-dm.org/radenkovic/styled-react-boilerplate/status.svg)](https://david-dm.org/radenkovic/styled-react-boilerplate)
[![devDependencies Status](https://david-dm.org/radenkovic/styled-react-boilerplate/dev-status.svg)](https://david-dm.org/radenkovic/styled-react-boilerplate?type=dev)

![React Styled Boilerplate](https://i.imgur.com/NU3rein.png)

Some really reasonable setup for React applications, no overhead and tons of libraries. 
Inspired by [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) but more minimal and less opinionated.
With small overhead, HMR is lightning fast, no stuttering and waiting any more!

Bundle size: `±320kb` 🔥

Includes:

- React
- Redux
- React Router DOM
- Webpack as module bundler (and `webpack-dev-server`)
- Styled Components
- Styled Components Theme
- [Grid System](https://github.com/LoicMahieu/react-styled-flexboxgrid)
- Configured tests with Jest and Enzyme
- Configured dynamic routes

Does *NOT* include:

- Style / CSS / SASS loaders (you have styled components)
- Heroku / AWS or any other deployment stuff


## Installation

You need NodeJS, obviously : ).

1. git clone `https://github.com/radenkovic/react-vanilla my-app`
2. `cd my-app`
3. `yarn`
4. `yarn dev`


## Project Structure

Source files for the react app are in folder `/src`. Feel free to change the structure. 
Redux is also only loosely connected, so it can be easily and safely removed from `main.js` file (remove `<Provider>` wrapper and `createStore`).

Routes folder is for App Routes, where `rootComponent.js` (in the directory root) is to declare main Routes for the app.

You can read more about proper structure [here](https://github.com/davezuko/react-redux-starter-kit#project-structure).

## Public folder

If you want to use plain images, load fonts via url and so on, place them in `/src/static` folder, then you can include them, for example:

`/src/static/vanilla.jpg` = `<img src="/static/vanilla.jpg" />`

## Builds

Distribution build can be made with:

- `npm run build`

It cleans `dist` directory and creates fresh app version.
