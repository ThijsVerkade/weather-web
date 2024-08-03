# Weather Web Frontend Application

This is a React application designed to display weather information. The design is based on a Figma template (https://www.figma.com/community/file/1300997022541611628). The application features a sidebar with weather details, an hourly forecast, and a location search component.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [To-Do List](#to-do-list)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Weather Details**: Displays the current weather conditions including temperature, humidity, cloudiness, and wind speed.
- **Hourly Forecast**: Shows the weather forecast for each hour of the current day.
- **Location Search**: Allows users to search for weather information by location.
- **Responsive Design**: The layout is responsive and works well on different screen sizes.

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended) or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/weather-web-frontend.git
    ```

2. Navigate to the project directory:

    ```sh
    cd weather-web-frontend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

   or

    ```sh
    yarn install
    ```

4. Start the development server:

    ```sh
    npm run dev
    ```

   or

    ```sh
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Additional Scripts

- **Build**: To build the application for production:

    ```sh
    npm run build
    ```

  or

    ```sh
    yarn build
    ```

- **Lint**: To run ESLint checks:

    ```sh
    npm run lint
    ```

  or

    ```sh
    yarn lint
    ```

- **Preview**: To preview the production build locally:

    ```sh
    npm run preview
    ```

  or

    ```sh
    yarn preview
    ```

## To-Do List

- **Introduce Icons**: Integrate weather icons to visually represent different weather conditions.
- **Add Functionality to Search on Location**: Implement the feature to search for weather information based on the user’s input location. This should update the entire web app accordingly.
- **Add Background Image Change**: Implement functionality to change the background image depending on the temperature.
- **Make it Responsive**: Ensure the application is fully responsive and works well on tablets and phones.
