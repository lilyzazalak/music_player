#music_player
 # Project Proposal: BandCreep
 
 ## Get It Up And Running
- Clone the repository. 
- Change directory into 'band-creep' directory.
- Run npm install
- Then run npm start
- Open another terminal window
- Change directory back into 'band-creep' directory again.
- From there change directory into 'api' directory.
- Then run node server.js 
- In your browser go to: http://localhost:3000

 
 ## Project Goals
 Developing this project will provide many different challenges that I will have to overcome. It will really test my knowledge on what we have learned through out this course. My goals are to become more comfortable with state management, and imporoving my css skills. I would also like to work on my web app responsivness skills.
 
 ## Tech Stack
 #### First Party Tools
 - React for building the interface
 - Node/express for communicating data with the React application.

 #### Third Party Tools
 - AudioDB for getting aritst info and youtube videos
 - Bandsintown for getting artist upcoming events

 ## Features and Deliverables
 - Main page will contain a search bar to search artists 
 - The search will then display 3 buttons that will take the user to three different pages, either the artists info, videos, or events
 - The info page will display the artist images and general info
 - The videos page will display the artist youtube videos
 - The events page will have 2 date pickers and will display the upcoming events of that artists between those 2 dates.
 

 #### Future Deliverables
 - Authentication/Authorization
 - Users are able to follow their favorite artists

 	
 ## Data
 #### Info from API
- artists youtube url: string
- artist id number : string
 
 #### Input from user
 - artists name : string
 - 2 different dates : string
