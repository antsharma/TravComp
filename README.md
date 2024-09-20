<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">TravComp- Your Travel planner companion</h3>
     MERN stack app
</div>

<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api">API required</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>


<!-- ABOUT THE PROJECT -->
## About The Project

This is a travel planner MERN stack app.

You will find:
* Attractions, hotels and restaurants from anywhere in the world. Map and Place list. :earth_americas:
* Save the places you love in a trip list. (MongoDB = Reduce API calls) :world_map:
* Around me section. (This will get the user's IP, find the lat&lng with it and show the map and places around)
* 7-day weather forecast for any city. :umbrella:
* User Profile (Profile image, name, change password)
* Google Maps and Google Autocomplete.

<p align="right"><a href="#top">back to top ^</a></p>


### Built With

* [React.js](https://reactjs.org/)
* [Material-UI](https://mui.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

<p align="right"><a href="#top">back to top ^</a></p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Verify if you already have Node.js and npm installed:
  ```sh
  node -v
  npm -v
  ```

 To download the latest version of npm, on the command line, run the following command:
  ```sh
  npm install -g npm
  ```

### Installation

_Follow this simple steps:_

1. Clone the repo
   ```sh
   git clone https://github.com/davidcastillog/travcomp-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter all your API keys in `.env` file
   ```js
   REACT_APP_NAME_API = 'ENTER YOUR API';
   ```

**Note:**
* This is the Back-end (server) repository.

<p align="right"><a href="#top">back to top ^</a></p>

<!-- API LIST -->
## API

**Client**:
* [Google Maps](https://developers.google.com/maps)
* [Open Weather](https://openweathermap.org/api)
* [Rapid API Travel](https://rapidapi.com/apidojo/api/travel-advisor)
* [FreeGeoIp](https://freegeoip.app/)

**Server**:
* [Cloudinary](https://cloudinary.com/)

<p align="right"><a href="#top">back to top ^</a></p>

<!-- SCRIPTS -->
## Scripts

In the project directory:

 ```sh
  npm run dev
 ```

Runs the app in the development mode.\
Open [http://localhost:5005](http://localhost:5005)

You may also see any lint errors in the console.

<p align="right"><a href="#top">back to top ^</a></p>


<!-- USAGE EXAMPLES -->
## Usage

 <div align="center">
 <h3 >Place list</h3>
  <p>Includes Google Autocomplete & place filters</p>


 <h3 >My Trips</h3>
  <p>Save places for each trip </p>
  <br />
  <p>(Map with trip markers)</p>

  <h3>Weather</h3>
  <p>7-day forecast for any city in the world</p>
 </div>

<p align="right"><a href="#top">back to top ^</a></p>

