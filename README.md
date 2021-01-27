# Rijksgalerij

This application provides users with a portal to the Rijksmuseum [API](https://data.rijksmuseum.nl/) and serves as a miniature art gallery accessing the Rijksmuseum collection. See the deployed site [here](https://rijksgalerij.herokuapp.com/).

## Technologies Used

- React for a SPA with dynamic client-side rendering
- React Router for page navigation
- React Bootstrap for styled components
- React Infinite Scroll Component

## Screenshots

### Homepage

![Homepage screenshot](https://i.imgur.com/OxNGx2Nh.jpg)

### Gallery

![Gallery screenshot](https://i.imgur.com/TxIIsq2h.png)

### Search

![Search screenshot](https://i.imgur.com/6szIStMh.png)

## Feature Plan

### MVP Features

- Home page with hard-coded Rembrandt carousel element
- Gallery page that allows users to interact with random assortment of 20 art objects from API call to Rijksmuseum API
- Search Rijksmuseum collection by any query parameter

### Stretch Features

- [x] Add infinite scroll to Gallery to load more results
- [x] Add infinite scroll to Search results
- [x] Save search results after navigating away from search page
- [x] Dark theme toggle
- [x] Refactor components using React Hooks
- [x] Utilize React Context to avoid prop drilling
- [ ] Implement light/dark theme toggle in more programmatic way
- [ ] Testing coverage

## Installation Instructions

- Clone the repository locally.
- If you do not have NodeJS/npm installed on your machine, follow the directions [here](https://nodejs.org/en/download/) to install.
- Using your CLI/Terminal, navigate into the cloned folder and run `npm install` to download required dependencies.
- Run `npm start` to launch the React development server.

## Acknowledgements

- Thank you to the [Rijksmuseum](https://www.rijksmuseum.nl/) for making their collection available online to art-enthusiasts from all over the world, and for maintaining a free API that makes the data accessible to developers.

## Contribution Guidelines

This is a work in progress, and any suggestions, contributions or bug identifications are more than welcome. Please fork and submit a pull request or submit an issue if you'd like to contribute to the project.

## License

The MIT License (MIT)

Copyright (c) 2020 Esin Saribudak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
