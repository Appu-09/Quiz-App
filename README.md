This project is a simple interactive quiz application built using HTML, CSS, and JavaScript. The app allows users to answer questions, calculate their score, and highlights correct/incorrect answers.

## Features
- **Dynamic Quiz Questions**: Users can enter answers to multiple-choice or open-ended questions.
- **Score Calculation**: After submission, the user’s score is calculated based on their correct answers.
- **Answer Highlighting**: Correct and incorrect answers are highlighted in different colors.
- **UI Feedback**: The final score is displayed after submitting the quiz.

## Technologies Used
- **HTML**: For structuring the page and quiz layout.
- **CSS**: For styling and creating a clean, user-friendly interface.
- **JavaScript**: For dynamic behavior such as score calculation, answer highlighting, and quiz submission.

## How It Works

### Step 1: Get Quiz Questions
The quiz consists of multiple questions, and users can input their answers in text fields. The questions are stored in JavaScript and are dynamically rendered in the HTML.

### Step 2: Calculate Score
Once the quiz is submitted, the app calculates the score by comparing the user’s answers with the correct answers. The total score is the number of correct answers.

### Step 3: Highlight  Answer
After submission, the app highlights the answers:
### Step 4: Display the Score
After the quiz is submitted, the user’s score is displayed at the bottom of the page, showing how many questions were answered correctly out of the total number of questions.

index.html
Contains the structure for displaying the quiz questions and answers, as well as a button to submit the quiz and display the score.

styles.css
Used to style the quiz UI. It defines the styles for correct and incorrect answers as well as general styling for the page.

quiz.js
Contains the JavaScript logic for the quiz:

calculateScore(): Computes the score by comparing the user's answers with the correct answers.
highlightAnswers(): Highlights correct answers in green and incorrect answers in red.
submitQuiz(): Handles the quiz submission, calculating the score and displaying it, as well as highlighting the answers.
Usage
Open index.html in your browser.
Answer the questions and click Submit Quiz.
Your score will be displayed, and the answers will be highlighted in green or red depending on whether they are correct or incorrect.
Example
Questions:

What is the capital of France?

Correct Answer: Paris
What is 2 + 2?

Correct Answer: 4
After Submission

### Explanation of Sections:

1. **Introduction**: Brief description of what the project is and what it does.
2. **Features**: A quick list of key features like dynamic questions, score calculation, etc.
3. **Technologies Used**: Highlights the technologies (HTML, CSS, JS) used in the project.
4. **How It Works**: Provides a step-by-step breakdown of how the quiz works:
   - Fetching questions
   - Calculating score
   - Highlighting answers
   - Displaying the score
5. **Installation**: Instructions on how to run the project locally.
6. **File Structure**: Shows the project structure, explaining each file’s role.
7. **Usage**: How users can interact with the quiz.






