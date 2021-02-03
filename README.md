# Cookit!

Cookit! is a single page application that allows user to save andreference recipes from a database and 3rd party websites.Cut out the fluff by extracting a recipe you like and savingit to your user database. A user can also select a set ofrecipes and build a grocery list for a dinner of their choice

## Installations

The following instructions will get you a copy of the project up and running on your local machine for demonstration and testing purposes.

### Prerequisites

1. Download and install [Node.js](https://nodejs.org/en/), if not already installed on your local machine.
2. Install React with the following terminal command:
```
npm install --save react
```

3. Install ```ReactDOM``` with the following terminal command:
```
npm install --save react-dom
```

4. Install ```json-server``` with the following terminal command:
```
npm install -g json-server
```

5. Get an API key for [Spoonacular: Recipe-Food-Nutrition](https://rapidapi.com/spoonacular/api/recipe-food-nutrition/details//). Do NOT share this API key with anyone else.

6. Clone my [repository](https://github.com/Heath-Lester/cookit) to your local machine.

7. Navigate to the project folder. In the ```src``` directory. Within that directory create a file ```.api_key.js```

8. In said file, copy/paste ```export const apiKey = `paste_your_api_key_here` ```. This will prevent you from accidentally sharing your API key with other people.


### Usage

A step by step series of examples that tell you how to get a development env running

1. In your terminal, navigate to the project directory. 

```
cd /Users/username/workspace/cookit
```

2. From the root of this directory, run the following terminal command in order to start up the React application.

```
npm start
```

3. Open a new terminal tab and navigate to the ```api``` directory.

```
cd /Users/username/workspace/cookit/api
```

4. Run the following terminal command in order to start up your ```json-server```.

```
json-server -p 8088 -w database.json
```

5. Open your web browser of choice and navigate to ```http://localhost:3000/```

6. You will be presented with a login/registration page if this is your first time using the application. Register an account or use my email ```h.allen.lester@gmail.com``` and password ```12345```.

7. From here you can use the search bar with keywords like "chicken" or "strawberries" and you will be presented with multiple recipes from the Spoonacular API. You can select any of these recipes and be presented with a detailed recipe including ingredients and cooking instructions. If you are looking to parse specific recipe you can click the "Search Bar" drop-down button and select the "Extract Bar". Here, you can paste in recipe URL's from other websites and the essential information will be provided to you. You can save these recipes for later or add them to the meal section. Once the meals are added you can selecte the "Build Grocery List" button and you will be presented with a grocery list of all the recipes selected. 

8. Enjoy!


### Login view
![alt text](https://github.com/TheTechTravis/strain-brain/blob/main/public/Login.png?raw=true)

### Home view of a brand new user
![alt text](https://github.com/TheTechTravis/strain-brain/blob/main/public/Home%20(New%20Account).png?raw=true)

### Setting up medical conditions
![alt text](https://github.com/TheTechTravis/strain-brain/blob/main/public/Set%20Medical%20Conditions.png?raw=true)

### Home view after setting medical conditions
![alt text](https://github.com/TheTechTravis/strain-brain/blob/main/public/Home%20(After%20Setting%20Medical%20Conditions).png?raw=true)


## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Spoonacular API](https://rapidapi.com/spoonacular/api/recipe-food-nutrition/details//) - 

## Version Control

I use [Git](https://git-scm.com/) for version control.

## Authors

* **Heath Lester** - *Original Creator* - [Heath-Lester](https://github.com/Heath-Lester)

As of thus far, this project has been planned, developed, and tested exclusively by myself over the course of a two-week sprint.

## Acknowledgments

* Thank you to the creator of [Spoonacular API](https://rapidapi.com/spoonacular/api/recipe-food-nutrition/details//), which provided all the recipes for this application.