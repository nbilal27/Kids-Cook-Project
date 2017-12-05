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
    "peanuts": 0,
    "egg": 0,
    "soy": 0,
    "milk": 0,
    "fish": 0,
    "shellfish": 0,
    "wheat_gluten": 0
};

//Use this variable to grade how well user scored overall
var totalPoints = 0;

var myListofQuestions = [

    {
        question: "Did your child eat vegetables today?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "vegetable_score",
        pic:"https://shk-images.s3.amazonaws.com/wp-content/uploads/2016/09/avocado-hummus-veggie-cups-main.jpg"
    },

    {
        question: "Has your kid eaten any fruits?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "fruit_score",
        pic:"https://shk-images.s3.amazonaws.com/wp-content/uploads/2010/05/Fruity-Snack-A-Rooty-021-1024x683.jpg"

    },

    {
        question: "Did your family eat whole grains today?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "wholegrain_score",
        pic:"https://shk-images.s3.amazonaws.com/wp-content/uploads/2014/09/SHK-Maple-and-Brown-Sugar-Muffins.jpg"


    },

    {
        question: "Do feel like your child had enough healthy protein?",
        choices: ["No", "Yes"],
        addPoints: [1,0],
        category: "protein_score",
        pic:"https://shk-images.s3.amazonaws.com/wp-content/uploads/2014/09/SHK-Homemade-Protein-Bars-2.jpg"

    },

    {
        question: "Is your child allergic to any of the following?",
        choices: ["peanuts", "egg", "soy", "milk", "fish", "shellfish", "wheat_gluten"],
        addPoints: [1,1,1,1,1,1,1],
        category: "allergies",
        pic:"https://shk-images.s3.amazonaws.com/wp-content/uploads/2016/01/Peanut-Allergy-1024x683.jpg"

    }
    ];


//show  quiz questions

// var panel = $("#quiz-area");
//
// for (var i = 0; i < myListofQuestions.length; i++) {
//
//     panel.append("<h2>" + myListofQuestions[i].question + "</h2>");
//
//     for (var j = 0; j < myListofQuestions[i].choices.length; j++) {
//
//         if(myListofQuestions[i].category === 'allergies'){
//
//             // panel.append("<input class='selectable' id=allergy" + [j] + " type='checkbox' name='" + myListofQuestions[i].category +
//             //     "' value='" + myListofQuestions[i].choices[j] + "''>" + myListofQuestions[i].choices[j]);
//
//             panel.append("<input class='selectable' id=allergy" + [j] + " type='checkbox' name='" + myListofQuestions[i].choices[j] +
//                 "' value='" + myListofQuestions[i].addPoints[j] + "''>" + myListofQuestions[i].choices[j]);
//
//             //var index = $('input').attr('name');
//             //console.log(index);
//
//            // grabAnswer(i,j);
//
//         } else {
//             panel.append("<input required class='selectable' id=" + [j] + " type='radio' name='" + myListofQuestions[i].category +
//                 "' value='" + myListofQuestions[i].addPoints[j] + "''>" + myListofQuestions[i].choices[j]);
//
//         }
//     }
//
// }
//
//
// //User clicks submit on index.html then the following function runs
// function grabAnswer() {
//
//     console.log("send this",$("#myForm").serialize());
//
//     var obj = {
//         allergies : NaN,
//         egg : 0,
//         fish : 0,
//         fruit_score : 0,
//         milk : 0,
//         peanuts : 0,
//         protein_score : 1,
//         shellfish : 0,
//         soy: 0,
//         vegetable_score: 1,
//         wheat_gluten: 0,
//         wholegrain_score: 0
//     };
//
//
// //         $.ajax("/results", {
// //           type: "POST",
// //           data: categories // replace with serialize
// //         }).then(
//
//             $.ajax( "/results", {
//             type : "POST", // type of action POST || GET
//             data :  obj //$("#myForm").serialize()// post data || get data
//
//             })
//                 .then(function(results){
//
//                     alert("working");
//
//                 })
//                 .fail(function(){
//                     alert("catch");
//                 });
// }
//





//////////////////DON'T TOUCH CODE BELOW/////////////////////////

// myQuestion = "";
//
// myListofQuestions.forEach(function(obj,idx){
//
//     myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";
//
//     obj.choices.forEach(function(choice) {
//         myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";
//
//         //console.log(myQuestion);
//
//     })
//
// });

showQuestion();

function showQuestion() {


    myQuestion = "";

    myQuestion = myQuestion + "<p class='bold center_q'>" + myListofQuestions[displayQuestion].question + "</p>";

    myListofQuestions[displayQuestion].choices.forEach(function(choice) {


        // if(myListofQuestions[displayQuestion].category === 'allergies'){
        //
        //     //alert("hi");
        //     myQuestion += "<input type='checkbox' id='" + choice + "' name='" + displayQuestion + "' value='" + choice + "' + class='selectable'><label for='" + choice + "' class='option-input'>" + choice + "</label><br>";
        //
        //
        // }


        myQuestion += "<input type='radio' id='" + choice + "' name='" + displayQuestion + "' value='" + choice + "' + class='selectable'><label for='" + choice + "' class='option-input'>" + choice + "</label><br>";
    });


        img="";

        img= img+ "<img src=" + myListofQuestions[displayQuestion].pic + ">";



        $("#quiz").html(myQuestion);

        $("#pic").html(img);

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
          data: categories // replace with serialize
        }).then(
          function(result) {
            console.log(result)
            for (var i = 0; i <result.length; i ++){
        if (i%2 === 0) {
            var main = $("<div>")
            main.addClass("tile is-ancestor is-8")
            main.attr("id", i)

            var parent = $("<div>")
            parent.addClass("tile is-parent")

            var child = $("<article>")
            child.addClass("tile is-child box")

            var a = $("<a>")
            a.attr("href", result[i].source)

            var p = $("<p>")
            p.addClass("title")
            p.html(result[i].recipe_name)

            var content = $("<div>")
            content.addClass("content")

            var img = $("<img>")
            img.attr("src", result[i].image)

            var p2 = $("<p>")
            p2.html("Get Recipe")

             content.append(img)
            a.append(p2)
            child.append(p)
            child.append(content)
            child.append(a)
            parent.append(child)
            main.append(parent)
            $("#results").append(main)
        }
        else {
            var parent = $("<div>")
            parent.addClass("tile is-parent")

            var child = $("<article>")
            child.addClass("tile is-child box")

            var a = $("<a>")
            a.attr("href", result[i].source)

            var p = $("<p>")
            p.addClass("title")
            p.html(result[i].recipe_name)

            var content = $("<div>")
            content.addClass("content")

            var p2 = $("<p>")
            p2.html("Get Recipe")

            var img = $("<img>")
            img.attr("src", result[i].image)

            content.append(img)
            a.append(p2)
            child.append(p)
            child.append(content)
            child.append(a)
            parent.append(child)
            var id = i-1
            $("#" + id).append(parent)
        }

        }




            /*$("#first").html(result[0].recipe_name)
            $("#source1").html("<a href =" + result[0].source + ">" + result[0].source + "</a>")
            $("#pic1").html("<img src=" + result[0].image + ">")
            console.log(result);
            $("#first").html(result[0].recipe_name);
            //$("#source1").html("<a href =" + result[0].source + ">" + result[0].source + "</a>");
            $("#source1").attr("href", result[0].source);

            $("#pic1").html("<img src=" + result[0].image + ">");

            $("#second").html(result[1].recipe_name);
            $("#source2").attr("href", result[1].source);
            $("#pic2").html("<img src=" + result[1].image + ">");

            $("#third").html(result[2].recipe_name);
            $("#source3").attr("href", result[2].source);
            $("#pic3").html("<img src=" + result[2].image + ">");

            $("#fourth").html(result[3].recipe_name)
            $("#source4").html("<a href =" + result[3].source + ">" + result[3].source + "</a>")
            $("#pic4").html("<img src=" + result[3].image + ">")
            $("#fourth").html(result[3].recipe_name);
            $("#source4").attr("href", result[3].source);
            $("#pic4").html("<img src=" + result[3].image + ">")*/
        }).done(console.log("this is done"));


       // console.log("Total points (the user's grade for how well they feed their kid)", totalPoints);

        var userEmail = window.localStorage.getItem("userEmail");
        var userpw = window.localStorage.getItem("userpw")

        console.log("userEmail", userEmail);
        console.log("userpw", userpw);
    }

}