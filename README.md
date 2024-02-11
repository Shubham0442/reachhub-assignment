# Chess Point
This application is a React-based user interface with a NodeJs based server, consisting of data related to the cheass players where authenticated users can get data.

## Features
### Login and Signup
- Having the email and password fields for login.
- Users Can first signup with required details and after that can login to add the individual content.

### Get the top 50 classical chess players
- API endpoints: /top-players
- allows authenticated user to view the top 50classicialchess players data.

### Get the rating history of last 30 days
- API endpoints: /top-players/:username/rating-history
- With username allows authenticated user to get rating history of last 30 days for specific player.
- rating history can be displayed on frontend in form of table and line chart.

### Get the rating-history all top 50 classical players by downloading csv file
- API endpoints: /players/rating-history-csv
- Allows authenticated user can download the csv file containing rating-history of all top 50 classical players.

### Technologies Used
- ReactJS: for the frontend.
- Tailwind CSS: Open-source UI library for making user interface.
- Redux: Open-source state management library for managing application state.
- MongoDB: for storing data.
- NodeJs and ExpressJs: for API development.
- bcrypt: Open-source library for hashing the password
- jsonwebtoken: Open-source library for generating unique token after user login
- csv-writer: Open-source library for writing a csv file
- chart.js and react-chartjs-2: for displaying the rating history against date on line chart

### Installation
- Clone the repository
```bash
  git clone https://github.com/Shubham0442/reachhub-assignment
```
#### For frontend:
- Navigate to the frontend folder
```bash
cd client/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd server/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### API Endpoints

#### Get Top 50 classical players
- Endpoint: /top-players
- Method: GET
- Description: gets the data of top 50 classical players 
- Parameters:
  - headers: token generated after authetication
- Returns: { "success": true, "players": Array of players }

#### Get rating-history of specific player
- Endpoint: /top-players/:username/rating-history
- Method: GET
- Description: Gets the rating history of last 30 days for specific player
- Parameters:
   - param: username of player
   - headers: token generated after authetication
- Returns: { success: true, "success": true, "rating_history": Array of object containing rating with date }

#### Get rating-history of all players
- Endpoint: /players/rating-history-csv
- Method: GET
- Description: Downloads the csv file containing rating history of all players 
- Parameters:
   - headers: token generated after authetication
- Returns: a csv file 

#### Signup
- Endpoint: /signup
- Method: POST
- Parameters:
    - body: firstname, lastname, email, password
- Description: adds the new user
- Returns: { msg: "signup successful" }

#### Login
- Endpoint: /login
- Method: POST
- Parameters:
    - body: email, password
- Description: Authenticates the details given
- Returns: { msg: "login successful", token: token from jsonwebtoken, userData: object with details of user }

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - To run application in local

`KEY` - secret key for jsonwentoken

`mongodburl` - Mongo Atlus URL 

`api` - https://lichess.org/api

### Deployment
- [frontend](https://reach-hub-assignment.vercel.app/)
- [backend](https://reachhub-server.onrender.com)

### Note: As server is deployed on free hosing service it may takes 1-2 minutes on first request (for login or signup) 