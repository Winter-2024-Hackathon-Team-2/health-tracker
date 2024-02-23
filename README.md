
![moodscapename](https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/cc189057-194b-42cc-8263-906aa697d39e)

<hr>

## Useful Links

[Moodscape Live Application](https://health-tracker-ov9u.onrender.com/strategies)

[GitHub Repository](https://github.com/Winter-2024-Hackathon-Team-2/health-tracker)

[Hackathon Description & Brief](https://chegg-my.sharepoint.com/:w:/p/bfontourasutliff/EfCAsLdWUHxGhmIur4bgq3kBTIXHMEI_J1lwWLrJCiV38A?rtime=biJ833It3Eg)

## Contributors

- [Aaron Jazzar - Software Engineer](https://github.com/ajazzar)
- [Angelo Kitio - Data Analyst](https://github.com/AngeloKItio)
- [Brian Stasiukaitis - Software Engineer](https://github.com/BrianStas)
- [Devina Gillis - Software Engineer](https://github.com/DevinaG007)
- [Elena Kirzhner - Data Analyst](https://github.com/elenadesigner)
- [Rouzbeh Vahdatiasl - Software Engineer](https://github.com/Rouz275)


## Setup Instructions

- Clone the repository
  
- Run ```npm install``` to install packages and dependencies
  
- Use ```npm run start:dev``` from the root directory to run **both** the frontend and the backend server
  
- use ```npm run start:frontend``` and ```npm run start:backend``` respectively to run either the frontend **or** the backend
  
- To Demo the login, use the following login information:
- 

**Employee Username:** 11 
**Employee Password:** 97273f94-697c-420c-8820-5f0703278e90

**Admin Username:** 4
**Admin Password:** 89c35cb0-bf4a-47e0-82f5-ddcb41c8337b


## Frontend Layout
<hr>

### Login Page

<img width="1464" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/f45b8324-1ff2-4281-bf01-e5c019be7213">

## Employee Flow

### Daily Survey

<img width="1448" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/2b4f4a65-9196-4160-a285-0d7fca346832">

### Moodscape Recommends 

<img width="1465" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/1ddc5252-9893-41b0-98db-d3c05748b1f6">

### Filter Coping Strategies

<img width="1462" alt="Screenshot 2024-02-22 at 7 54 00 AM" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/21574413-0a18-4d8e-b69e-0ddf39721744">

### View History

<img width="1460" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/125ebad0-d103-4404-bc2a-caed3e00cadf">

## Employer/Admin Flow

### Employee Overview

<img width="1461" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/fddd25ca-d546-4de2-82c0-d926ca1f7ff8">

### Add A New Employee

<img width="1464" alt="image" src="https://github.com/Winter-2024-Hackathon-Team-2/health-tracker/assets/137969744/c3ffb999-8e78-4848-b570-6a02e63c9ea4">

<hr>

## Backend API Routes

- ```/track``` - List of all survey history for all users
- ```/track/:userId``` - Retrieve survey history by user
- ```/users``` - List of all users
- ```/users/login``` -Login route for users (employees and admins)
- ```/users/:userId``` - Retrieves user information based on userId
- ```/strategies``` - List of all coping strategies
- ```/strategies/:strategyType``` - Retrieves a list of strategies by strategyType based on user's survey
