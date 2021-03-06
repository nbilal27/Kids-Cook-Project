# Kids-Cook-Project



The CDC's National Center for Health Statistics recently reported that about 34% of all children and adolescents, aged 2 -19, fast food on a given day [NCHS Data Brief, 2015](https://www.cdc.gov/nchs/products/databriefs/db213.htm). Kids Cook is a web/mobile platform to help parents and caretakers find home cooked, balanced meals that their children will enjoy.

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
* [Sequelize](http://docs.sequelizejs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)

## Development Process

* [1. Concept](#1-concept)
* [2. Initial Planning](#2-initial-planning)
* [3. Challenges and Successes!](#3-challenges-and-successes)
* [4. Future Additions](#5-future-additions)

### 1. Concept

We began with the idea of a web application that helps parents and caregivers prepare balanced recipes for their children. We decided to use the U.S. Department of Agriculture's [MyPlate](https://www.fns.usda.gov/tn/myplate) as a guide to measure healthy eating habits. There are four main food groups to a healthy eating plate: vegetables, fruits, whole grains, and healthy protein. 

### 2. Initial Planning

We decided that building a quiz was the best way to gauge healthy eating habits. The quiz includes five questions: a question for each food group and a question about food allergies. This allowed us to measure if the user's child/dependent consumed food from each of the recommended food groups. Here's a screen shot of how we approached building the quiz. 

![pic1](public/assets/readmeImages/q-obj.png?raw=true "pic 1")

The quiz results are sent to the back end with a jQuery AJAX function `$.ajax.()` that uses a  `POST` request. If the results indicate a lack of vegetables and fruits, for example, the web application will find recipes that focus on those food groups. The recipes are stored in a database we built called `kidscook_db`.  

![pic2](public/assets/readmeImages/db.png?raw=true "pic 2")


### 3. Challenges and Successes!

Front-end: 

* Once we got started it was hard to look back and consider [validation standards](https://validator.w3.org/).

* A major front end challenge was using a new CSS framework called [BULMA](https://bulma.io/). A lot of the styling takes place in the html file. It was impossible to keep CSS separate from HTML. Despite these challenges, BULMA is a beautiful CSS framework. For the most part, responsiveness is built in. In cases where that was not the case media queries did the trick. 

* Sending data properly to the back-end was challenging as well.

* We got tons of practice with committing and merging code.

Back-end: A major back end challenge was using sequelize. 


### 4. Future Additions

If we had more time and resources, we could filter results based on allergies. We also considered incorporating an interactive version of the USDA's [MyPlate](https://www.fns.usda.gov/tn/myplate). 


## Instructions for Mac Development

1. Clone or download our repository
2. In your console, navigate to the directory
3. Run the following console command: node server.js
4. In your browser (Chrome works best), go to the URL localhost:3050

