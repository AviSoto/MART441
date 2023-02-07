    function storyFunction(choice) {
        var answer1 = document.getElementById("choice1").innerHTML;
        var answer2 = document.getElementById("choice2").innerHTML;
        if (choice == 1 && answer1 == "Approach") {
            document.getElementById("story").innerHTML = "You walk up to the capybara. He looks at you. What do you do?";
            document.getElementById("choice1").innerHTML = "Smile at him";
            document.getElementById("choice2").innerHTML = "Take a Picture";
        } else if (choice == 2 && answer2 == "Run Away") {
            document.getElementById("story").innerHTML = "You run away from the capybara. You look back at him and he is chasing you. What do you do";
            document.getElementById("choice1").innerHTML = "Stop running and face him";
            document.getElementById("choice2").innerHTML = "Keep running away";
        } else if (choice == 1 && answer1 == "Smile at him") {
            document.getElementById("story").innerHTML = "The capybara smiles back at you and you feel warm inside. What do you do next?";
            document.getElementById("choice1").innerHTML = "Scratch him on the chin";
            document.getElementById("choice2").innerHTML = "Ask him if he wants to be friends";
        } else if (choice == 2 && answer2 == "Take a picture") {
            document.getElementById("story").innerHTML = "You pull out your phone and take a picture. He is camera shy and runs away." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Restart";
            document.getElementById("choice2").innerHTML = "Quit";
        } else if (choice == 1 && answer1 == "Stop running and face him") {
            document.getElementById("story").innerHTML = "You decide to face him. He looks sad. What do you do?";
            document.getElementById("choice1").innerHTML = "Give him an orange";
            document.getElementById("choice2").innerHTML = "Sing him a song";
        } else if (choice == 2 && answer2 == "Keep running away") {
            document.getElementById("story").innerHTML = "You were too scared to become the capybaras friend." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Yes restart";;
            document.getElementById("choice2").innerHTML = "No quit";
        } else if (choice == 1 && answer1 == "Scratch him on the chin") {
            document.getElementById("story").innerHTML = "He loves the chin scratch. You are now friends." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Restart";
            document.getElementById("choice2").innerHTML = "Quit";
        } else if (choice == 2 && answer2 == "Ask him if he wants to be friends") {
            document.getElementById("story").innerHTML = "The capybara is confused. He walks away." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Restart";
            document.getElementById("choice2").innerHTML = "Quit";
        } else if (choice == 1 && answer1 == "Give him an orange") {
            document.getElementById("story").innerHTML = "You give the capybara an orange. Oranges are his favorite food. You are now friends." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Restart";
            document.getElementById("choice2").innerHTML = "Quit";
        } else if (choice == 2 && answer2 == "Sing him a song") {
            document.getElementById("story").innerHTML = "The capybara does not like your singing. He runs away." + "<br>Restart?";
            document.getElementById("choice1").innerHTML = "Restart";
            document.getElementById("choice2").innerHTML = "Quit";
        } else if (choice == 1 && answer1 == "Restart") {
            document.getElementById("story").innerHTML = "Its a beautiful Saturday afternoon. You are on your work break in Waco, TX. Suddenly you see your favorite animal, the capybara, appears. What do you do next?";
            document.getElementById("choice1").innerHTML = "Approach";
            document.getElementById("choice2").innerHTML = "Run Away";
        } else if (choice == 2 && answer2 == "Quit") {
            document.getElementById("story").innerHTML = "Better luck next time!";
    
        }
    
    
    }