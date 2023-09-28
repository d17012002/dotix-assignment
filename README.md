# Weather App

This is a simple web application that allows users to check the current weather for a location by making asynchronous requests to a weather API.

## Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Requirements

1. **Homepage:** The homepage provides a simple user interface with a search input field and a "Get Weather" button to trigger the weather request.

2. **Weather Display:** The app displays current weather conditions for the specified location, including temperature, humidity, wind speed, and weather description. It uses a weather API (e.g., OpenWeatherMap) to fetch this data.

3. **Error Handling:** The app handles cases where the location entered by the user is not found or when there is an issue with the API request. It displays user-friendly error messages and guides the user on how to proceed.

4. **Unit Selection:** Users can switch between temperature units (e.g., Celsius and Fahrenheit) using a toggle or dropdown, and the weather data is updated accordingly.

5. **Optional: Geolocation:** The app offers the option to use the user's geolocation to automatically fetch the weather for their current location. It requests and handles geolocation permissions appropriately.

6. **Styling:** The app has CSS styles to make it visually appealing with attention to layout, color scheme, and readability.

7. **Responsive Design:** The app is responsive and functions well on both desktop and mobile devices. It has been tested for usability on various screen sizes.

## Usage

1. Enter a location (e.g., city or ZIP code) in the search input field.
2. Click the "Get Weather" button to trigger the weather request.
3. The current weather conditions, including temperature, humidity, wind speed, and weather description, will be displayed.
4. You can switch between temperature units (Celsius and Fahrenheit) using the provided toggle or dropdown.
5. Optionally, you can allow the app to use your geolocation to fetch the weather for your current location.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser to use the app.

## Built With

- HTML5
- CSS3
- JavaScript
- AJAX for asynchronous API requests
- [Weather API](https://api.openweathermap.org/)

## Authors

- [Anurag Singh](https://github.com/d17012002) - [Website](https://d17012002.netlify.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
