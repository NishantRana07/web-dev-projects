document.addEventListener("DOMContentLoaded", () => {
    // Quiz questions and options
    const quizQuestions = [
      {
        question: "If you were a food, what would you be?",
        options: [
          "A perfectly balanced sandwich",
          "Something spicy that makes people cry",
          "Whatever was left in the fridge for too long",
          "A fancy dish no one can pronounce",
        ],
      },
      {
        question: "How do you handle a crisis?",
        options: [
          "Make a detailed plan with backup options",
          "Panic, then somehow pull through at the last minute",
          "Pretend it's not happening and hope it goes away",
          "Call everyone you know for advice, then do something completely different",
        ],
      },
      {
        question: "What's your ideal weekend?",
        options: [
          "Netflix marathon with snacks that could feed a small country",
          "Outdoor adventure that will make a great social media story",
          "Cleaning and organizing while listening to true crime podcasts",
          "Party until you forget what day it is",
        ],
      },
      {
        question: "If you were an object in someone's house, what would you be?",
        options: [
          "That one weird decoration everyone asks about",
          "The reliable kitchen appliance used daily",
          "A comfortable couch that's seen too much",
          "A plant that somehow survives despite total neglect",
        ],
      },
      {
        question: "How would your friends describe your texts?",
        options: [
          "Novels with perfect grammar and punctuation",
          "Mostly memes and reaction GIFs",
          "One word responses that arrive days later",
          "ALL CAPS WITH EXCESSIVE EMOJIS!!! 🔥🔥🔥",
        ],
      },
      {
        question: "What superpower would suit you best?",
        options: [
          "Mind reading (but you can't turn it off)",
          "Time travel (but only backward, never forward)",
          "Invisibility (but only when no one is looking at you)",
          "Flying (but only 3 feet off the ground)",
        ],
      },
      {
        question: "What's your relationship with alarm clocks?",
        options: [
          "Set 15 alarms and still wake up late",
          "Wake up before the alarm and stare at the ceiling",
          "Hit snooze until it's an emergency situation",
          "What alarm? I wake up when I wake up",
        ],
      },
      {
        question: "How do you approach a buffet?",
        options: [
          "Strategic planning to maximize value and taste",
          "Pile everything on one plate to avoid multiple trips",
          "Stick to what you know and ignore new options",
          "Sample tiny bits of everything, judge it all harshly",
        ],
      },
      {
        question: "What's your spirit transportation?",
        options: [
          "A reliable but boring sedan",
          "Public transportation with interesting characters",
          "A bicycle that makes you feel morally superior",
          "Walking because you're always late anyway",
        ],
      },
      {
        question: "How do you feel about phone calls?",
        options: [
          "Absolute terror - text me instead",
          "Love them! I'll talk for hours",
          "Only for emergencies or food delivery",
          "I'll answer but silently hope it ends quickly",
        ],
      },
    ]
  
    // Personality results
    const results = [
      {
        title: "Cosmic Potato 🥔✨",
        description:
          "You're a Cosmic Potato! You appear simple on the outside, but contain infinite universes within. You're versatile, down-to-earth, and can adapt to any situation. People might underestimate you, but that's their mistake – you're the staple that holds the cosmic meal together.",
        emoji: "🥔✨",
      },
      {
        title: "Chaotic Glitter Bomb 💥✨",
        description:
          "You're a Chaotic Glitter Bomb! You bring excitement and sparkle wherever you go, even if you leave a bit of a mess. You're vibrant, impossible to ignore, and somehow end up everywhere. People might find traces of your influence days after meeting you.",
        emoji: "💥✨",
      },
      {
        title: "Philosophical Rubber Duck 🦆💭",
        description:
          "You're a Philosophical Rubber Duck! You help others solve problems just by existing. You're contemplative, surprisingly wise, and comfortable floating through life's currents. Your simple presence brings clarity to complex situations.",
        emoji: "🦆💭",
      },
      {
        title: "Sentient Cloud of WiFi 📶☁️",
        description:
          "You're a Sentient Cloud of WiFi! You connect people and ideas, sometimes strong and sometimes spotty. You're everywhere and nowhere at once, essential to modern life yet mysteriously intangible. People seek you out but rarely appreciate your complexity.",
        emoji: "📶☁️",
      },
      {
        title: "Vintage Meme Reincarnated 🔄😂",
        description:
          "You're a Vintage Meme Reincarnated! You were cool once, then forgotten, and now ironically cool again. You're timeless, cyclical, and somehow both outdated and ahead of your time. You make people laugh without always understanding why.",
        emoji: "🔄😂",
      },
      {
        title: "Supernatural Houseplant 🌱👻",
        description:
          "You're a Supernatural Houseplant! You require minimal maintenance but occasionally do unexplainable things. You're patient, resilient, and quietly observing everything. You thrive despite adversity and bring a calming presence to any space.",
        emoji: "🌱👻",
      },
    ]
  
    // DOM elements
    const startBtn = document.getElementById("start-btn")
    const prevBtn = document.getElementById("prev-btn")
    const nextBtn = document.getElementById("next-btn")
    const restartBtn = document.getElementById("restart-btn")
    const shareBtn = document.getElementById("share-btn")
    const introSection = document.getElementById("intro")
    const quizSection = document.getElementById("quiz")
    const resultSection = document.getElementById("result")
    const questionContainer = document.getElementById("question-container")
    const progressBar = document.getElementById("progress")
    const questionCounter = document.getElementById("question-counter")
    const resultImage = document.getElementById("result-image")
    const resultTitle = document.getElementById("result-title")
    const resultDescription = document.getElementById("result-description")
  
    // Quiz state
    let currentQuestion = 0
    const userAnswers = Array(quizQuestions.length).fill(null)
  
    // Initialize quiz
    function initQuiz() {
      startBtn.addEventListener("click", startQuiz)
      prevBtn.addEventListener("click", showPreviousQuestion)
      nextBtn.addEventListener("click", handleNextButton)
      restartBtn.addEventListener("click", restartQuiz)
      shareBtn.addEventListener("click", shareResults)
  
      // Initially hide the prev button on first question
      updateNavButtons()
    }
  
    // Start the quiz
    function startQuiz() {
      introSection.classList.remove("active")
      quizSection.classList.add("active")
      showQuestion(currentQuestion)
    }
  
    // Display current question
    function showQuestion(index) {
      questionContainer.innerHTML = ""
  
      const questionDiv = document.createElement("div")
      questionDiv.classList.add("question")
  
      const questionText = document.createElement("div")
      questionText.classList.add("question-text")
      questionText.textContent = quizQuestions[index].question
  
      const options = document.createElement("div")
      options.classList.add("options")
  
      quizQuestions[index].options.forEach((option, i) => {
        const optionDiv = document.createElement("div")
        optionDiv.classList.add("option")
        if (userAnswers[index] === i) {
          optionDiv.classList.add("selected")
        }
  
        const optionText = document.createElement("div")
        optionText.classList.add("option-text")
        optionText.textContent = option
  
        optionDiv.appendChild(optionText)
        optionDiv.addEventListener("click", () => selectOption(i))
  
        options.appendChild(optionDiv)
      })
  
      questionDiv.appendChild(questionText)
      questionDiv.appendChild(options)
      questionContainer.appendChild(questionDiv)
  
      // Update progress
      updateProgress()
    }
  
    // Handle option selection
    function selectOption(optionIndex) {
      userAnswers[currentQuestion] = optionIndex
  
      // Update UI to show selected option
      const options = document.querySelectorAll(".option")
      options.forEach((option, i) => {
        if (i === optionIndex) {
          option.classList.add("selected")
        } else {
          option.classList.remove("selected")
        }
      })
  
      // Enable next button if an option is selected
      updateNavButtons()
    }
  
    // Show previous question
    function showPreviousQuestion() {
      if (currentQuestion > 0) {
        currentQuestion--
        showQuestion(currentQuestion)
        updateNavButtons()
      }
    }
  
    // Handle next button click
    function handleNextButton() {
      if (userAnswers[currentQuestion] === null) {
        // If no option selected, show alert
        alert("Please select an option before continuing!")
        return
      }
  
      if (currentQuestion < quizQuestions.length - 1) {
        // Go to next question
        currentQuestion++
        showQuestion(currentQuestion)
        updateNavButtons()
      } else {
        // Show results if on last question
        showResults()
      }
    }
  
    // Update navigation buttons
    function updateNavButtons() {
      // Hide prev button on first question
      prevBtn.style.display = currentQuestion === 0 ? "none" : "block"
  
      // Change next button text on last question
      if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.textContent = "See Results"
      } else {
        nextBtn.textContent = "Next"
      }
    }
  
    // Update progress bar and counter
    function updateProgress() {
      const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
      progressBar.style.width = `${progress}%`
      questionCounter.textContent = `Question ${currentQuestion + 1}/${quizQuestions.length}`
    }
  
    // Calculate and show results
    function showResults() {
      quizSection.classList.remove("active")
      resultSection.classList.add("active")
  
      // Calculate result based on answers
      const resultIndex = calculateResult()
      const result = results[resultIndex]
  
      // Display result
      resultImage.textContent = result.emoji
      resultTitle.textContent = result.title
      resultDescription.textContent = result.description
  
      // Add animation classes
      resultImage.classList.add("animate-result")
      resultTitle.classList.add("animate-result")
      resultDescription.classList.add("animate-result")
    }
  
    // Calculate result based on user answers
    function calculateResult() {
      // Count frequency of each answer
      const answerCounts = [0, 0, 0, 0]
  
      userAnswers.forEach((answer) => {
        if (answer !== null) {
          answerCounts[answer]++
        }
      })
  
      // Find the most common answer
      let maxCount = 0
      let maxIndex = 0
  
      answerCounts.forEach((count, index) => {
        if (count > maxCount) {
          maxCount = count
          maxIndex = index
        }
      })
  
      // Map answer index to result index (with some randomness if there's a tie)
      const tiedIndices = []
      answerCounts.forEach((count, index) => {
        if (count === maxCount) {
          tiedIndices.push(index)
        }
      })
  
      if (tiedIndices.length > 1) {
        // If there's a tie, pick randomly from tied options
        const randomTieIndex = Math.floor(Math.random() * tiedIndices.length)
        maxIndex = tiedIndices[randomTieIndex]
      }
  
      // Map to result index (with some variation to make it interesting)
      return (maxIndex + userAnswers.reduce((sum, answer) => sum + (answer || 0), 0)) % results.length
    }
  
    // Restart the quiz
    function restartQuiz() {
      currentQuestion = 0
      userAnswers.fill(null)
      resultSection.classList.remove("active")
      introSection.classList.add("active")
    }
  
    // Share results
    function shareResults() {
      const resultIndex = calculateResult()
      const result = results[resultIndex]
  
      // Create share text
      const shareText = `I took the Under 25 Personality Test and I'm a ${result.title}! Take the test to find out what bizarre thing you are!`
  
      // Try to use Web Share API if available
      if (navigator.share) {
        navigator
          .share({
            title: "Under 25 Personality Test Results",
            text: shareText,
            url: window.location.href,
          })
          .catch((error) => {
            console.log("Error sharing:", error)
            fallbackShare()
          })
      } else {
        fallbackShare()
      }
  
      function fallbackShare() {
        // Fallback to copying to clipboard
        const textarea = document.createElement("textarea")
        textarea.value = shareText
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        alert("Result copied to clipboard! Share it with your friends!")
      }
    }
  
    // Initialize the quiz
    initQuiz()
  })
  