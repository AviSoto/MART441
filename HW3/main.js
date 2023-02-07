function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Approach") {
        document.getElementById("story").innerHTML = "You walk up to the capybara. He looks at you. What do you do?";
        document.getElementById("choice1").innerHTML = "Smile at him";
        document.getElementById("choice2").innerHTML = "Take a picture";
    } else if (choice == 4 && answer1 == "Smile at him") {
        document.getElementById("story").innerHTML = "You give him a big old cheesy smile. He smiles back at you. What is your next step?";
        document.getElementById("choice1").innerHTML = "Give him your orange from your lunch";
        document.getElementById("choice2").innerHTML = "Scratch his chin";
    } else if (choice == 5 && answer1 == "Give him your orange from your lunch") {
        document.getElementById("story").innerHTML = "How did you know this is his favorite food? He eats it whole. What is your next move?";
        document.getElementById("choice1").innerHTML = "Scratch his belly";
        document.getElementById("choice2").innerHTML = "Offer him your tuna sandwich";
    } else if (choice == 6 && answer1 == "Scratch his belly") {
        document.getElementById("story").innerHTML = "The capybara loves getting his chin scratched after having a snack. The two of you become best friends.";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";

    }
    else if (choice == 2 && answer2 == "Run Away") {
        document.getElementById("story").innerHTML = "You run back to your office in a cold sweat. You have escaped.. this time." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 4 && answer2 == "Take a picture") {
        document.getElementById("story").innerHTML = "The capybara hates getting his picture taken. He runs away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 5 && answer2 == "Scratch his chin") {
        document.getElementById("story").innerHTML = "He bites your hand and runs away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 6 && answer2 == "Offer him your tuna sandwich") {
        document.getElementById("story").innerHTML = "He stopped eating fish last year. He glares at you and walks away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice ==  && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";

    }


}