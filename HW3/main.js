function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Approach") {
        document.getElementById("story").innerHTML = "You walk up to the capybara. He looks at you. What do you do?";
        document.getElementById("choice1").innerHTML = "Smile at him";
        document.getElementById("choice2").innerHTML = "Take a picture";
    } else if (choice == 2 && answer2 == "Smile at him") {
        document.getElementById("story").innerHTML = "You give him a big old cheesy smile. He smiles back at you. What is your next step?";
        document.getElementById("choice1").innerHTML = "Give him your orange from your lunch";
        document.getElementById("choice2").innerHTML = "Scratch his chin";
    } else if (choice == 1 && answer1 == "Give him your orange from your lunch") {
        document.getElementById("story").innerHTML = "How did you know this is his favorite food? He eats it whole. What is your next move?";
        document.getElementById("choice1").innerHTML = "Scratch his chin";
        document.getElementById("choice2").innerHTML = "Offer him your tuna sandwich";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("story").innerHTML = "Pugster starts to walk over to the dogs and then decides to go to the water instead.  Now what?'";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "Pugster decides to go in even with hesitation to make new friends.  Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
    else if (choice == 1 && answer1 == "Run Away") {
        document.getElementById("story").innerHTML = "You run back to your office in a cold sweat. You have escaped.. this time." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Take a picture") {
        document.getElementById("story").innerHTML = "The capybara hates getting his picture taken. He runs away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Go for a swim") {
        document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";

    }


}