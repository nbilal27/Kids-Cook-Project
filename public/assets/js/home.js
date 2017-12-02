
$(document).ready(function(){

        $("button").click(function(){

            var userEmail = $("#email").val().trim();
           // var userpw = $("#password").val().trim();

            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            var checkValid = regex.test(userEmail);

            if (checkValid) {

                //set total score to local storage
                window.localStorage.setItem("userEmail", userEmail);
                //window.localStorage.setItem("userpw", userpw)
                var uemail = window.localStorage.getItem("userEmail");
                //var upw = window.localStorage.getItem("userpw");


                //send user data
                var user = {
                    email: uemail,
                   // pw: upw
                }

                $.ajax("/add/email", {
                    type: "POST",
                    data: user
                 }).then(function(result){
                 }).done(function(){
                    console.log("user added") 
                    window.location = "quiz.html" 
                });

                //go to quiz page
                //window.location = "quiz.html";
            } else {
                $("#errorMsg").toggleClass('hidden');
            }
        });
    });