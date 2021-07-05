# Project 2: Curiosity Rover

## Overview 
In this project we were tasked with building our first React application that consumes a public API in pairs. Dubbed ‘Mini Reactathon’, we had 48 hours to complete this. We used Visual Studio Live share to collaborate in real time. 

### Web Technologies / Frameworks
* React
* JavaScript (ES6)
* HTML5 and CSS3
* Bulma

### Tools
* Zoom
* Github
* Visual Studio Live Share
* Ziteboard - White boarding 
* Slack

### Technical Requirements
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app can have a router** - with several “pages”, this is up to your discretion and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public.

## Approach
This was our first experience collaborating on a project and we had to do so remotely. As the project was all about consuming an external API, we started by exploring reputable APIs with good documentation.

### Explore API Endpoint | Mars Rover Concept - NASA API
As we browsed APIs for inspiration for our project idea, we stumbled across the NASA API and immediately began thinking about Mars exploration as we both followed the build up to the Perseverance Rover launch back in July 2020 and it’s landing in Feb 2021 on the Jezero Crater.  Although we couldn’t find an endpoint for the Perseverance Rover, we did find one for Curiosity.

We used the Mars Rover Photos API [NASA Open APIs](https://api.nasa.gov/) to access images from the on-board cameras and also query the mission manifest to allow us to browse by date. We thought it would be pretty cool to look around mars on a given sol (mars day). I decided to only display 6/7 camera feeds though as the MARDI cam wasn’t displaying great images.   

![Mars Rover API Table]('/src/assets/table.png')

### Wireframe
Once we were happy with the endpoint data, we decided sketch out our idea as a wireframe to make sure we were visualising the same goal. 

![]()

### Set up React App
We used a custom template for our React application build:
`npx create-react-app project-2 —template cra-template-ga-ldn-projects —use-npm`

### Set up API request (Get and Show data)
We later decided to add a homepage to improve the user experience by providing some context around purpose and user interaction with the API. We separated our API requests in a `lib/api.js` file and created a `<CameraCard />` component to handle each of the 6 cameras above.  

#### Photos for a Given Day
The `Main.js` page is where the `<CameraCard />` is mounted. We append the user’s selected Sol Date to the URL which is then retrieved using React router’s `useParams`  as the `day` which is passed into the `getAllPhotos(day)` function to retrieve the images for the given day.

*Home.js*
![]()

*Main.js*
![]()

There was also a need for user input validation to ensure the API request is not rejected on the front end so we set the input field type to `Number` and set limitation on the minimum and maximum values against the mission manifest details. 

*Footer.js*
![]()

#### Browse Images (Increment / Decrement)
*CameraCard.js*
![]()

#### Conditionally Rendering Images (Fallback Gif)
To anticipate the event of no available images, we provided a fun fallback of a gif which displays a No Signal message.

*CameraCard.js*
![]()

## Unsolved Problems / Major Hurdles
The main issue we had was working through React’s development errors while collaborating on a single server using Visual Studio’s Live Share extension from a slower machine. This was a new technology to me and it took some time to get a productive workflow going but we managed to work through it by discussing problems and solutions and working through them in chunks at a time. 

React was also quite difficult to grasp in the short time we had as I felt like it required an upfront investment in understanding rendering, hooks and effects as well as the component pattern. As for the components, although the temptation was there to go straight in, I found it really helped to refactor into components afterwards. 

## Future Changes