# Moodscape


## Useful Links

[Moodscape Live Application](https://health-tracker-ov9u.onrender.com/strategies)

[GitHub Repository](https://github.com/Winter-2024-Hackathon-Team-2/health-tracker)

[Hackathon Description & Brief](https://chegg-my.sharepoint.com/:w:/p/bfontourasutliff/EfCAsLdWUHxGhmIur4bgq3kBTIXHMEI_J1lwWLrJCiV38A?rtime=biJ833It3Eg)

## Contributors

[Aaron Jazzar - Software Engineer](https://github.com/ajazzar)
[Angelo Kitio - Data Analyst](https://github.com/AngeloKItio)
[Brian Stasiukaitis - Software Engineer](https://github.com/BrianStas)
[Devina Gillis - Software Engineer](https://github.com/DevinaG007)
[Elena Kirzhner - Data Analyst](https://github.com/elenadesigner)
[Rouzbeh Vahdatiasl - Software Engineer](https://github.com/Rouz275)


## Setup Instructions

- Clone the repository
  
- Run ```npm install``` to install packages and dependencies
  
- Use ```npm run start:dev``` from the root directory to run **both** the frontend and the backend server
  
- use ```npm run start:frontend``` and ```npm run start:backend``` respectively to run either the frontend **or** the backend
  
- To Demo the login, use the following login information:

Employee Username: 11 
Employee Password: 97273f94-697c-420c-8820-5f0703278e90

Admin Username: 4
Admin Password: 89c35cb0-bf4a-47e0-82f5-ddcb41c8337b


## Frontend Layout
<hr>

### Login Page



## Employee Flow

### Daily Survey


### Moodscape Recommends 


### Filter Coping Strategies


### View History


## Employer/Admin Flow

### Employee Overview

### Add A New Employee

<hr>

## Backend API Routes

- ```/track``` - List of all survey history for all users
- ```/track/:userId``` - Retrieve survey history by user
- ```/users``` - List of all users
- ```/users/login``` -Login route for users (employees and admins)
- ```/users/:userId``` - Retrieves user information based on userId
- ```/strategies``` - List of all coping strategies
- ```/strategies/:strategyType``` - Retrieves a list of strategies by strategyType based on user's survey