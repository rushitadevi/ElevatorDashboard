# Elevator Management System

## Summary

- **Description:** Project is to get all the elevators from database. Initially, sample data is loaded into the database from provided json file. There are two users set in oAuth0 (app). When user loggs in, it asks for credentials(set up is done in oAuth0). Logged in user is saved into the database. Access Token is generated and sent it to back end. Access token is verified by JWT.
  On the dashboard, there are three buttons according to state(warning, out-of-order, operational). And displayed count of each state. when we click on each button, it will display list of elevators. When we click on item from that list, it will display details of that list and chart if it is available. There is loadData button which is disabled when data is loaded. Just to indicate which record is loaded.
  If there are no records available, alert message is displayed.
  Layout is very simple.

  ## Technologies used: React Js, Node Js, Javascript, express.

  ## Database: MongoDb

## API Documentation

### Endpoints

#### GET /api/elevators/list

- **Description:** Retrieves a list of elevators.
- **Authentication:** Requires a valid accessToken generated from the frontend and verified by JWT.
- **Response Codes:**
  - 200: Returns the list of elevators.
  - 404: Access token not provided.

#### POST /api/users/save

- **Description:** Saves a user in the database.
- **Behavior:** Users who log in to the dashboard are saved in the database.
- **Authentication:** Requires a valid accessToken generated from the frontend and verified by JWT.
- **Response Codes:**
  - 200: "User saved successfully."
  - 200: "User already exists" if trying to save the same user again.

### Authentication

- **Description:** Authenticates the user and generates an access token.
- **Method:** Uses oAuth0 for authentication.

## Frontend Components

### Login Component

- **Description:** Used to log in to the dashboard.
- **Behavior:** Generates an access token upon successful login, which is then sent to the backend.

### Home Component

- **Description:** Used to display elevator data according to the state.
- **Behavior:**
  - Clicking on each button displays a list of elevators in that state (e.g., operational, warning, out of order).
  - Clicking on each record displays detailed analytics.

### Dashboard Schema (MongoDB)

1. **Users**
   - **Columns:** Name, Email, Picture, sub
2. **Elevators**
   - **Columns:** Fabrication Number, Address, Floor Number, Device Identification Number, Manufacturer Name, Production Year, Elevator Type, State, Warning Message, Chart

## Setup Instructions

### API Setup

1. Install required dependencies (Node.js, Express).
2. Create API endpoints following the documented routes.
3. Connect to the database (MongoDB Atlas).
4. Implement authentication mechanism using JWT.

### Frontend Setup

1. Set up a development environment with React.js.
2. Create frontend components according to the documentation.
3. Implement API calls to connect to the backend.
4. Implement context in the application.
5. Divide components into separate subcomponents.
6. Use a chart library to display analytical charts.

### Database Setup

1. MongoDB Atlas is used to set up the database.
2. Use the MongoDB URL in the backend.

### oAuth0 Setup

1. Set up the development environment by adding the localhost URL.
2. Download public keys from oAuth0 and use them in the backend to verify access tokens.

### Test Cases

1. Backend testing using the supertest library.

## Default oAuth0 Users

- **User 1:**
  - Email: neteyah588@wermink.com
  - Password: temp@1234
- **User 2:**
  - Email: ron@gmail.com
  - Password: temp@1234

## Getting Started

To get started with the repository, clone it from [repository URL].

# Elevator Management System

## API Documentation

### Endpoints

#### GET /api/elevators/list

- **Description:** Retrieves a list of elevators.
- **Authentication:** Requires a valid accessToken generated from the frontend and verified by JWT.
- **Response Codes:**
  - 200: Returns the list of elevators.
  - 404: Access token not provided.

#### POST /api/users/save

- **Description:** Saves a user in the database.
- **Behavior:** Users who log in to the dashboard are saved in the database.
- **Authentication:** Requires a valid accessToken generated from the frontend and verified by JWT.
- **Response Codes:**
  - 200: "User saved successfully."
  - 200: "User already exists" if trying to save the same user again.

### Authentication

- **Description:** Authenticates the user and generates an access token.
- **Method:** Uses oAuth0 for authentication.

## Frontend Components

### Login Component

- **Description:** Used to log in to the dashboard.
- **Behavior:** Generates an access token upon successful login, which is then sent to the backend.

### Home Component

- **Description:** Used to display elevator data according to the state.
- **Behavior:**
  - Clicking on each button displays a list of elevators in that state (e.g., operational, warning, out of order).
  - Clicking on each record displays detailed analytics.

### Dashboard Schema (MongoDB)

1. **Users**
   - **Columns:** Name, Email, Picture, sub
2. **Elevators**
   - **Columns:** Fabrication Number, Address, Floor Number, Device Identification Number, Manufacturer Name, Production Year, Elevator Type, State, Warning Message, Chart

## Setup Instructions

### API Setup

1. Install required dependencies (Node.js, Express).
2. Create API endpoints following the documented routes.
3. Connect to the database (MongoDB Atlas).
4. Implement authentication mechanism using JWT.

### Frontend Setup

1. Set up a development environment with React.js.
2. Create frontend components according to the documentation.
3. Implement API calls to connect to the backend.
4. Implement context in the application.
5. Divide components into separate subcomponents.
6. Use a chart library to display analytical charts.

### Database Setup

1. MongoDB Atlas is used to set up the database.
2. Use the MongoDB URL in the backend.

### oAuth0 Setup

1. Set up the development environment by adding the localhost URL.
2. Download public keys from oAuth0 and use them in the backend to verify access tokens.

### Test Cases

1. Backend testing using the supertest library.

## Two Users to login

- **User 1:**
  - Email: neteyah588@wermink.com
  - Password: temp@1234
- **User 2:**
  - Email: ron@gmail.com
  - Password: temp@1234

## Getting Started

To get started with the repository, clone it from https://github.com/rushitadevi/ElevatorDashboard.git.

## To run front end project: npm run client

## To run back end project: npm run start

## To run back end test: npm run test-backend
