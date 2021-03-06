# mongo-workout-tracker

The workout tracker allows users to keep progress of their workouts within the week using Mongo database for storage and express for connectivity. The exercises are broken down into two categories; cardio and resistance in which different types of field inputs will be requested. Once the user has entered exercises they can view a workout progress report on the dashboard to view the current weeks progress.

## Instillation

Simply go to live site [here](https://vast-ravine-47234.herokuapp.com/) to see the application in action. If running through a local host, ensure to run npm install to install the necessary node modules. Once installed, simply start up your Mongo database and run npm start to start a localhost.

## Usage

When the user enters the application they will be presented with the option of continueing a workout or starting a new one, with a latest workout session stats as well (if applicable) which includes the date, total workout duration, exercises performed, and the total distance covered.

When entering a new workout a new session is created in which the user will be presented with an option of either cardio or resistance.

If cardio is selected they will be required to enter: name (of exercise), sitstance (in miles) and the duration it took (in minutes). Alternatively, if resistance is selected the fields required would change to: exercise name, weight, sets, reps, and duration.

once details are entered in they can either add another exercise or complete which brings them back to the inital screen with the quick summary updated accordingly.

If the user wants to check on the weeks progress they can click on the dashboard on the top left which will show the current weeks overview in charts which includes: workout duration per day, pounds lifted and a break down of what exercises were performed.

## Examples

- image 1: Initial homepage
![Start up](./assets/1.png)

- image 2: Exercise Type Selection
![Exercise Type](./assets/2.png)

- image 3: Resistance workout form
![Resistance](./assets/3.png)

- image 4: Cardio workout form
![Cardio](./assets/4.png)

 - image 5: Week Summary
![Summary](./assets/5.png)
