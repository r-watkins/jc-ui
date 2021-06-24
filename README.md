# Welcome to my JumpCloud UI Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was made to work with the JumpCloud local server on the [assignment Github page](https://github.com/TheJumpCloud/jumpcloud-ui-assignment).

## Running the project

In the project directory, you can run:

### `npm install`

This will include the necessary dependencies. Then you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

Project features include:

- A list of current users
- Adding a new user
- Updating an existing user
- Deleting single or multiple users at a time
- Notifications on success/failure of user operations
- Ability to navigate app with keyboard only for accessibility
- Responsive layout that will fit most screen sizes
- Basic UI testing

### Specifications

The app is built using the following tech stack:

- [React](https://reactjs.org/) as a front-end "framework".
- [Material-UI](https://material-ui.com/) as a component library.
- [Styled-Components](https://styled-components.com/) as a styling utility.
- [Jest](https://jestjs.io/) as a testing framework.
- [Enzyme](https://enzymejs.github.io/enzyme/) as a testing utility.

## The Project

The app is a single-page app. I started out with a quick wireframe to plan layout and features that would make a good experience and UI.

![Main](https://user-images.githubusercontent.com/17993027/123185902-d53b4880-d44b-11eb-9901-0ee607f7a9a5.png)
![New-Edit](https://user-images.githubusercontent.com/17993027/123185912-d9676600-d44b-11eb-81c1-e6fe86503caf.png)

### The Product

The minimum viable product was achieved with inclusion of custom styles, responsiveness, general testing and some additional notifications for user feedback.

![Screen Shot 2021-06-22 at 8 11 46 PM](https://user-images.githubusercontent.com/17993027/123201921-8354eb80-d468-11eb-9747-8f88e377b515.png)

### Enhancements

As can be seen in the wireframes, there are a few features that could not be included due to time constraints. Potential enhancements that would further improve the app include:

- A user name search that filters the list
- A select all
- A list sort by user name
- Notifications with more descriptive messages
- User create/edit form validation

### Known Issues

There is a warning in the development console that appears due to Material-UI's dialog component. It is a known bug from the Material-UI library and is currently open.

https://github.com/mui-org/material-ui/issues/13394
