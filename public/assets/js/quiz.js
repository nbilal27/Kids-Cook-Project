// ==========================================
// QUIZ PAGE
// ==========================================

var displayQuestion = 0;

//use an object to grade how well user does in each category. Highest score for each category is 5.
var categories = {
    "vegetable_score": 0,
    "fruit_score": 0,
    "wholegrain_score": 0,
    "protein_score": 0,
    "water": 0
};

//Use this variable to grade how well user scored overall
var totalPoints = 0;

var myListofQuestions = [

    {
        question: "Did your child eat vegetables today?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "vegetable_score"
    },

    {
        question: "Has your kid eaten any fruits?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "fruit_score"
    },

    {
        question: "Did your family eat whole grains today?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "wholegrain_score"
    },

    {
        question: "Do feel like your child had enough healthy protein?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "protein_score"
    },

    {
        question: "Did your kid have 8 glasses of water today?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "water"
    }
    ];

showQuestion();

function showQuestion() {


    myQuestion = "";

    myQuestion = myQuestion + "<p class='bold center_q'>" + myListofQuestions[displayQuestion].question + "</p>";

    myListofQuestions[displayQuestion].choices.forEach(function(choice) {
        myQuestion += "<input type='radio' id='" + choice + "' name='" + displayQuestion + "' value='" + choice + "' + class='selectable'><label for='" + choice + "' class='option-input'>" + choice + "</label><br>";
    });

    $("#quiz").html(myQuestion);

    $(".selectable").on("click", function() {

       // var counter = 0;
        var index = $("input").index(this);

        //counter =+ ;

        processQuestion(index);

    });
}

var results = [];
var counter = 0;
var quizResults = {};


function processQuestion(idx) {

    var pointsToAdd = myListofQuestions[displayQuestion].addPoints[idx];

    var thisCategory = myListofQuestions[displayQuestion].category;

    var currCategoryTotal = categories[thisCategory];

    totalPoints += pointsToAdd;

    categories[thisCategory] = currCategoryTotal + pointsToAdd;

    if (displayQuestion < myListofQuestions.length - 1) {

        results.push({
            answers: myListofQuestions[displayQuestion].choices[idx],
            question: myListofQuestions[displayQuestion].questionn
        });

        quizResults[myListofQuestions[displayQuestion].question] = myListofQuestions[displayQuestion].choices[idx];

        counter++;
        displayQuestion++;
        showQuestion();

    } else {

        $("#quizWrapper").toggleClass("hidden");
        $("#resultsWrapper").toggleClass("hidden");


        console.log("Results object", results);
        //console.log("Quiz Results with corresponding answers", quizResults);
        console.log("Score per category", categories);

       console.log("new categories", categories);


        $.ajax("/results", {
          type: "POST",
          data: categories
        }).then(
          function(result) {
            console.log(result)
            $("#first").html(result[0].recipe_name)
            $("#source1").html("<a href =" + result[0].source + ">" + result[0].source + "</a>")
            $("#pic1").html("<img src=" + result[0].image + ">")

            $("#second").html(result[1].recipe_name)
            $("#source2").html("<a href =" + result[1].source + ">" + result[1].source + "</a>")
            $("#pic2").html("<img src=" + result[1].image + ">")

            $("#third").html(result[2].recipe_name)
            $("#source3").html("<a href =" + result[2].source + ">" + result[2].source + "</a>")
            $("#pic3").html("<img src=" + result[2].image + ">")

            $("#fourth").html(result[3].recipe_name)
            $("#source4").html("<a href =" + result[3].source + ">" + result[3].source + "</a>")
            $("#pic4").html("<img src=" + result[3].image + ">")

        }).done(console.log("this is done"));


        console.log("Total points (the user's grade for how well they feed their kid)", totalPoints);

        var userEmail = window.localStorage.getItem("userEmail");

        console.log("userEmail", userEmail);
    }

}