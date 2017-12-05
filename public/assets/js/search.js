
$(document).ready(function(){
    $("#resultsWrapper").toggleClass("hidden");

        $("#go").click(function(){
            $("#results").html("")
            var userSearch = $("#search").val().trim();
             console.log(userSearch)
             var data = {
                curUserSearch : userSearch
             }


            if (userSearch === ""|| userSearch === null || userSearch === undefined) {
                $("#errorMsg").toggleClass('hidden');

            } else {

                 $.ajax("/search/results", {
                    type: "POST",
                    data: data
                 }).then(function(result){
                    console.log(result)
                 displayResults(result)
                 }).done(function(){
                    console.log("searching") 
                });
            }
        });

        $("#veg").click(function(){
        $("#results").html("")
        var data = {
            curUserSearch :  "vegetable"
        }
        $.ajax("/search/results", {
                    type: "POST",
                    data: data
                 }).then(function(result){
                    console.log(result)
                   
                     displayResults(result)
                    }).done(function(){
                    console.log("searching") 
                });
            })


        $("#protein").click(function(){
        $("#results").html("")
        var data = {
            curUserSearch :  "protein"
        }
        $.ajax("/search/results", {
                    type: "POST",
                    data: data
                 }).then(function(result){
                    console.log(result)
                   
                     displayResults(result)
                    }).done(function(){
                    console.log("searching") 
                });
            })


        $("#fruit").click(function(){
        $("#results").html("")
        var data = {
            curUserSearch :  "fruit"
        }
        $.ajax("/search/results", {
                    type: "POST",
                    data: data
                 }).then(function(result){
                    console.log(result)
                   
                     displayResults(result)
                    }).done(function(){
                    console.log("searching") 
                });
            })
$("#grain").click(function(){
        $("#results").html("")
        var data = {
            curUserSearch :  "whole grain"
        }
        $.ajax("/search/results", {
                    type: "POST",
                    data: data
                 }).then(function(result){
                    console.log(result)
                   
                     displayResults(result)
                    }).done(function(){
                    console.log("searching") 
                });
            })


    });



function displayResults(result){
                    for (var i = 0; i <result.length; i ++){
                       if (i%2 === 0) {
            var main = $("<div>")
            main.addClass("tile is-ancestor is-6")
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
                 }