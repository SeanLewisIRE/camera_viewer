# Camera Viewer
React muti page application that could be atached to API to view/control cameras  


## UX
When a user lands on the site homepage, they will be greeted by a login page. This page does not currently perform any validation. User name is stored in state for use in the "options" panel of the navigation bar

My goal in the design of this website was to make it obvious as to the purpose of the application and keep it simple to use. 

## Features:

**Existing Features** 

  * Language switch English <-> French
  * Responsive design
  * Dummy API for mock calls
  * Username stored in state for use in application
  * Routing

**Features Left to Implement**
  
  * Mocked API re-randomise after 500ms
  
## Technologies
* React
* Tailwind

## Deployment


To run locally, you can clone this repository directly into the editor of your choice by pasting 'git clone https://github.com/SeanLewisIRE/camera_viewer.git'  into your terminal. 
Required packages can be installed using the included 'package.json' file by typing 'npm install' into the terminal. Installing these packages will allow for the application to be run locally by typing 'npm run start' in the "camera_viewer" folder. To run and install the dummy api, install as above using the package.json' file by typing 'npm install' into the terminal. To ensure ports of the React application and dummy api don't clash, run the dummy API using the command "json-server -p 4000 db.json". 
This will run the API on port 4000 and the React application on the default 3000. 

To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits

**Content**
* Some styled components modified from originals which are available [here](https://tailwindcomponents.com/)
