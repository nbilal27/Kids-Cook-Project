// ==========================================
// QUIZ PAGE
// ==========================================

var displayQuestion = 0;

var categories = {

    "vegetables": 0,
    "fruits": 0,
    "whole grains": 0,
    "healthy protein": 0,
    "water": 0
};

var totalPoints = 0;

var myListofQuestions = [

    {
        question: "How often does your child eat vegetables?",
        choices: ["1", "2", "3", "4", "5"],
        addPoints: [1, 2, 3, 4, 5],
        category: "vegetables"
    },

    {
        question: "Would you like to see your kid eat more fruits?",
        choices: ["1", "2", "3", "4", "5"],
        addPoints: [1, 2, 3, 4, 5],
        category: "fruits"
    },

    {
        question: "Does your kid eat plenty of whole grains",
        choices: ["1", "2", "3", "4", "5"],
        addPoints: [1, 2, 3, 4, 5],
        category: "whole grains"
    },

    {
        question: "How often is meat/other healthy proteins included in each meal",
        choices: ["1", "2", "3", "4", "5"],
        addPoints: [1, 2, 3, 4, 5],
        category: "healthy protein"
    },

    {
        question: "On a scale to one to five, does you child drink the required amount of water everyday?",
        choices: ["1", "2", "3", "4", "5"],
        addPoints: [1, 2, 3, 4, 5],
        category: "water"
    },

    {
        question: "Is your child allergic to any of these items?",
        choices: ["peanuts", "wheat", "eggs", "dairy"],
        addPoints: [0, 0, 0, 0],
        category: "water"
    }
    ];

showQuestion();

function showQuestion() {


    myQuestion = "";

    myQuestion = myQuestion + "<p class='bold center_q'>" + myListofQuestions[displayQuestion].question + "</p>";

    myListofQuestions[displayQuestion].choices.forEach(function(choice) {
        myQuestion += "<input type='radio' id='" + choice + "' name='" + displayQuestion + "' value='" + choice + "' + class='selectable'><label for='" + choice + "' class='round-button'>" + choice + "</label>";
    });

    $("#quiz").html(myQuestion);

    $(".selectable").on("click", function() {

        var index = $("input").index(this);

        processQuestion(index);

    });
}

var results = [];
var counter = 0;
var cleanResults = {};


function processQuestion(idx) {

    var pointsToAdd = myListofQuestions[displayQuestion].addPoints[idx];

    var thisCategory = myListofQuestions[displayQuestion].category;

    var currCategoryTotal = categories[thisCategory];

    totalPoints += pointsToAdd;

    categories[thisCategory] = currCategoryTotal + pointsToAdd;

    if (displayQuestion < myListofQuestions.length - 1) {

        results.push({
            answers: myListofQuestions[displayQuestion].choices[idx],
            question: myListofQuestions[displayQuestion].question
        });

        cleanResults[myListofQuestions[displayQuestion].question] = myListofQuestions[displayQuestion].choices[idx];

        counter++;
        displayQuestion++;
        showQuestion();

    } else {

        $("#quizWrapper").toggleClass("hidden");
        $("#resultsWrapper").toggleClass("hidden");
        console.log("Results", results);
        console.log("Clean Results", cleanResults);
        console.log("Categories", categories);
    }
}