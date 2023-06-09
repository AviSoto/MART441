var questions = [
    {
        category: "Missoula",
        values: [200, 400, 600, 800, 1000],
        questions: [
            {
                text: "Jeannette Rankin became the first what in 1916?",
                answer: "First woman in Congress"
            },
            {
                text: "This award-winning film starring Brad Pitt was set in Missoula.",
                answer: "A River Runs Through It"
            },
            {
                text: "True or False: Missoula used to be entirely underwater",
                answer: "True"
            },
            {
                text: "The city’s nickname is the ____ City",
                answer: "Garden City"
            },
            {
                text: "In what year did Missoula become a city?",
                answer: "1864"
            }
        ]
    },
    {
        category: "Gonzaga",
        values: [200, 400, 600, 800, 1000],
        questions: [
            {
                text: "This is the name of the mascot at Gonzaga",
                answer: "Spike the Bulldog"
            },
            {
                text: "Gonzaga's _______ team has been undefeated since 1941",
                answer: "football"
            },
            {
                text: "Over ___ percent of Gonzaga undergraduates study abroad before they graduate.",
                answer: "56"
            },
            {
                text: "This is the year that Gonzaga first opened its doors",
                answer: "1887"
            },
            {
                text: "Who is Gonzaga named after?",
                answer: "St. Aloysius Gonzaga"
            }
        ]
    },
    {
        category: "SLP",
        values: [200, 400, 600, 800, 1000],
        questions: [
            {
                text: "_ in 5 Americans have hearing loss in at least 1 ear.",
                answer: "1"
            },
            {
                text: "By the first grade, roughly _% of children have noticeable speech disorders.",
                answer: "5%"
            },
            {
                text: "More than _ million Americans (about one percent) stutter",
                answer: "3"
            },
            {
                text: "Every day __ children are born with hearing loss, making it the most common congenital condition in the US",
                answer: "33"
            },
            {
                text: "What are the Big 9 in Speech Pathology?",
                answer: "Articulation, Language, Hearing, Fluency, Voice, Swallowing, Cognition, Social, Communication Modalities, and professional requirements."
            }
        ]
    },
    {
        category: "UM Team",
        values: [200, 400, 600, 800, 1000],
        questions: [
            {
                text: "Who does NOT work for UMOnline? Jeanie, Jeff, Jared, or Justin?",
                answer: "Jared"
            },
            {
                text: "How do you pronounce this name? Avianna",
                answer: "aHH-vee-aHH-nUH"
            },
            {
                text: "The Junior IDs name starts with an S",
                answer: "Sierra"
            },
            {
                text: "Go around and name every person in the room",
                answer: "Good job..I hope!"
            },
            {
                text: "Who are we going to miss dearly as she goes on to her next adventure?",
                answer: "Julie"
            }
        ]
    },
    {
        category: "Spokane",
        values: [200, 400, 600, 800, 1000],
        questions: [
            {
                text: "The first The first _____ Day celebration took place in Spokane on June 19th 1910",
                answer: "Fathers Day"
            },
            {
                text: "Spokane is home to Bloomsday, the Largest ___________ race in the world",
                answer: "Timed foot race"
            },
            {
                text: "The city’s nickname is the ____ City",
                answer: "Lilac City"
            },
            {
                text: "Spokane hosts the world’s largest _______ Basketball Tournament",
                answer: "3-on-3"
            },
            {
                text: "In what year did Spokane become a city?",
                answer: "1881"
            }
        ]
    }
];

  
  var currentQuestion = null;
  
  function showQuestion(categoryIndex, questionIndex) {
    var question = questions[categoryIndex].questions[questionIndex];
    currentQuestion = question;
  
    var modal = document.getElementById("question-modal");
    var questionText = document.getElementById("question-text");
    var showAnswerBtn = document.getElementById("show-answer-btn");
    var answer = document.getElementById("question-answer");
  
    questionText.textContent = question.text;
    showAnswerBtn.style.display = "block";
    answer.textContent = ""; // Reset answer
    questionText.style.display = "block"; // Ensure question text is visible
  
    modal.style.display = "block";
    handleQuestionClick(categoryIndex, questionIndex);
  }
  
  
  
  function closeQuestionModal() {
    var modal = document.getElementById("question-modal");
    modal.style.display = "none";
  }
  
  function checkAnswer() {
    var userAnswer = document.getElementById("answer").value;
    var modal = document.getElementById("question-modal");
    
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      alert("Correct answer!");
      modal.style.display = "none";
      markQuestionAsAnswered();
    } else {
      alert("Wrong answer. Try again.");
    }
  }
  function showAnswer() {
    var questionText = document.getElementById("question-text");
    var answer = document.getElementById("question-answer");
    var showAnswerBtn = document.getElementById("show-answer-btn");
    
    answer.textContent = currentQuestion.answer;
    questionText.style.display = "none";
    showAnswerBtn.style.display = "none";
    
  }
  
  function markQuestionAsAnswered() {
    var questionCell = document.getElementById(`question-${categoryIndex}-${questionIndex}`);
    questionCell.classList.add("answered");
  }
  function handleQuestionClick(categoryIndex, questionIndex) {
    var questionElement = document.getElementById(`question-${categoryIndex}-${questionIndex}`);
    
    questionElement.classList.add("greyed-out");
    questionElement.removeEventListener("click", function() {
      handleQuestionClick(categoryIndex, questionIndex);
    });
  }