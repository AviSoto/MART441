function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var answer3 = document.getElementById("choice3").innerHTML;
    var answer4 = document.getElementById("choice4").innerHTML;
    var answer5 = document.getElementById("choice5").innerHTML;
    var answer6 = document.getElementById("choice6").innerHTML;
    var answer7 = document.getElementById("choice7").innerHTML;
    var answer8 = document.getElementById("choice8").innerHTML;
    
    if (choice == 1 && answer1 == "Approach") {
        document.getElementById("storyFunction(1)").innerHTML = "You walk up to the capybara. He looks at you. What do you do?";
        document.getElementById("choice1").innerHTML = "Smile at him";
        document.getElementById("choice2").innerHTML = "Take a picture";
    } if (choice == 4 && answer3 == "Smile at him") {
        document.getElementById("storyFunction(3)").innerHTML = "You give him a big old cheesy smile. He smiles back at you. What is your next step?";
        document.getElementById("choice1").innerHTML = "Give him your orange from your lunch";
        document.getElementById("choice2").innerHTML = "Scratch his chin";
    } if (choice == 5 && answer5 == "Give him your orange from your lunch") {
        document.getElementById("storyFunction(5)").innerHTML = "How did you know this is his favorite food? He eats it whole. What is your next move?";
        document.getElementById("choice1").innerHTML = "Scratch his belly";
        document.getElementById("choice2").innerHTML = "Offer him your tuna sandwich";
    } if (choice == 6 && answer7 == "Scratch his belly") {
        document.getElementById("storyFunction(7)").innerHTML = "The capybara loves getting his chin scratched after having a snack. The two of you become best friends.";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";

    }
    else if (choice == 2 && answer2 == "Run Away") {
        document.getElementById("storyFunction(2)").innerHTML = "You run back to your office in a cold sweat. You have escaped.. this time." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 4 && answer4 == "Take a picture") {
        document.getElementById("storyFunction(4)").innerHTML = "The capybara hates getting his picture taken. He runs away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 5 && answer6 == "Scratch his chin") {
        document.getElementById("storyFunction(6)").innerHTML = "He bites your hand and runs away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 6 && answer8 == "Offer him your tuna sandwich") {
        document.getElementById("storyFunction(8)").innerHTML = "He stopped eating fish last year. He glares at you and walks away." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    }