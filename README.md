# Kids-Cook-Project

Parents often struggle to get their children to eat fresh fruits and vegetables. Kids Cook is an interactive web app that parents can use to discover & track healthy, tasty and fun food options that their children will be more willing to try.

Users will answer a brief questionnaire about their child's current diet, allergies, likes and dislikes. Then the app will deliver balanced recipes in the scope of their child's likes and a visualization of the USDA food plate. The food plate visual will include a note about which particular part of the plate may need focus in order to ensure a solid foundation for healthy nutrition.

## Authors

* [Lauren Spencer](https://github.com/lspencer3)
Contributions: MySQL database management, Sequelize, Express
* [Alicia Barrett](https://github.com/aliciawyse)
Contributions: HTML, CSS framework, JavaScript/jQuery, Express
* [Nasr Bilal](https://github.com/nbilal27)
Contributions: 


## Built with

* HTML5
* JavaScript ES5
* jQuery v3.2.1
* CSS framework [Bulma](https://bulma.io/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Heroku](https://www.heroku.com/)
* [MySQL](https://www.mysql.com/)

## Development Process

* [1. Concept](#1-concept)
* [2. Initial Planning](#2-initial-planning)
* [3. Challenges and Successes!](#3-challenges-and-successes)
* [4. Future Additions](#5-future-additions)

### 1. Concept

We began with the idea of an web application that helps parents prepare balanced recipes for their children. We decided to use the U.S. Department of Agriculture's [MyPlate](https://www.fns.usda.gov/tn/myplate) as a guide. There are four main food groups to a healthy eating plate: vegetables, fruits, whole grains, and healthy protein. 

### 2. Initial Planning

We decided to build a quiz. The quiz includes five questions: a question for each food group and a question about food allergies. This allowed us to measure if the user's child/dependent has balanced meals. If the results indicate a lack of vegetables and fruits, the web application offers recipes that focus on these food groups.    

### 3. Challenges and Successes!

Front-end: A major front end challenge was using a CSS framework that we're not used to called [BULMA](https://bulma.io/). A lot of the styling takes place in the html file. It was impossible to keep CSS separate from HTML. Also, once we got started it was hard to look back and consider [validation standards](https://validator.w3.org/). Despite these challenges, BULMA is a beautiful CSS framework. For the most part, responsiveness is built in. In cases where that was not the case media queries did the trick. Sending data properly to the back-end was challenging as well.

Back-end: A major back end challenge was using sequelize. 


### 4. Future Additions

If we had a lot more time and resources, we could filter results based on allergies. We also considered incorporating an interactive version of the USDA's [MyPlate](https://www.fns.usda.gov/tn/myplate). 


## Instructions for Mac Development

1. Clone or download our repository
2. In your console, navigate to the directory
3. Run the following console command: node server.js
4. In your browser (Chrome works best), go to the URL localhost:3050

