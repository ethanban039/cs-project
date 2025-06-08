// ALWAYS KEEPS THE HOVER BACKGROUND EFFECT ON EASY ANSWER QUESTIONS

const eaMSenterleave = setInterval(() => {
const easyquizanswers = document.querySelectorAll('.easyanswers p');
easyquizanswers.forEach(p => {
    p.addEventListener('mouseenter', () => {
        if(p.style.backgroundColor != 'green' && p.style.backgroundColor != 'red') { // Doesn't change BGC if the answers are red or green
            p.style.backgroundColor = '#27acd1'
        }
    })
})

easyquizanswers.forEach(p => {
    p.addEventListener('mouseleave', () => {
        if(p.style.backgroundColor != 'green' && p.style.backgroundColor != 'red') { // Doesn't change BGC if the answers are red or green
            p.style.backgroundColor = '#33cef5'
        }
    })
})
}, 10)


// ALWAYS KEEPS THE HOVER BACKGROUND EFFECT ON EASY ANSWER QUESTIONS




document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameinput');
    const ageInput = document.getElementById('ageinput');
    const yearInput = document.getElementById('yginput');
    const output = document.getElementById('unquserGenerated');

    function generateUsername() {
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value);
        const yearGroup = parseInt(yearInput.value)

        if(name.length < 3 || isNaN(age) || age < 1 || age > 100 || isNaN(yearGroup) || yearGroup < 7 || yearGroup > 13) {
            output.textContent = "Please enter valid details."
            return;
        }

        const unquser = name.substring(0, 3) + age + `-${yearGroup}`;
        output.textContent = `Your Unique User Is: ${unquser}`
        
        const pointerInterval = setInterval(() => {
            let startbtn = document.getElementById('beginButton')

            if(name.length < 3 || isNaN(age) || age < 1 || age > 100 || isNaN(yearGroup) || yearGroup < 7 || yearGroup > 13) {
                startbtn.style.cursor = "not-allowed"
            } else {
                startbtn.style.cursor = "pointer"

                startbtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    console.log("Started, Interval Clearing")
                    selectDifficulty() // Move onto the next bit
                    clearInterval(pointerInterval)
                })
            }
        }, 10)
    }

    nameInput.addEventListener('input', generateUsername);
    ageInput.addEventListener('input', generateUsername);
    yearInput.addEventListener('input', generateUsername);
})


// ---------------------------------------------------------------(Above is Details & Unique User Generator)------------------------------------------------------------------------------- //
let easy = document.getElementById('easyselect')
let medium = document.getElementById('mediumselect')
let hard = document.getElementById('hardselect')
let difficulty = 0

let logincontainer = document.getElementById('login-container')
let difficultycontainer = document.getElementById('difficulty-container')

let easyquizcontainer = document.getElementById('easyquizcontainer')

function selectDifficulty() {
    logincontainer = document.getElementById('login-container').style.display = "none"
    difficultycontainer = document.getElementById('difficulty-container').style.display = "flex"
}


let incorrectmsg = document.createElement('p')
incorrectmsg.textContent = "Incorrect Answer. Moving onto the next question.."
incorrectmsg.style.color = "red"
incorrectmsg.style.textAlign = "center"
incorrectmsg.style.fontSize = "2.1vh"

let correctmsg = document.createElement('p')
correctmsg.textContent = "Correct Answer! Moving onto the next question.."
correctmsg.style.color = "green"
correctmsg.style.textAlign = "center"
correctmsg.style.fontSize = "2.1vh"

// ------------------------------------------------------- EASY QUIZ --------------------------------------------------------- //


function easyDiff() {
    difficulty = "Easy"
    console.log("Easy Difficulty Chosen, setting display")
    difficultycontainer = document.getElementById('difficulty-container').style.display = "none" // Hides difficulty selector
    easyquizcontainer = document.getElementById('easyquizcontainer').style.display = "flex" // Shows the easy quiz
    easyDiffFunctionality()
}

function easyDiffFunctionality() {
    const easyquizcontainer = document.getElementById('easyquizcontainer')
    let question = 1
    let questionTitle = document.getElementById('easyquestiontitle')
    let possibleAnswer1 = document.getElementById('easyA1')
    let possibleAnswer2 = document.getElementById('easyA2') //  All the 
    let possibleAnswer3 = document.getElementById('easyA3') //  possible answers
    let possibleAnswer4 = document.getElementById('easyA4')

    let score = 0

    if (question === 1) { // QUESTION 1
        function handleIncorrectClick(e) {
        possibleAnswer2.style.backgroundColor = "green";
        e.target.style.backgroundColor = "red";
        easyquizcontainer.append(incorrectmsg);
        score = score

        setTimeout(() => { incorrectmsg.remove(); question = 2; e.target.style.backgroundColor = "#33cef5"; possibleAnswer2.style.backgroundColor = "#33cef5"; 
        [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
        possibleAnswer2.removeEventListener('click', handleCorrectClick); }, 3000);
    }

    function handleCorrectClick() {
        possibleAnswer2.style.backgroundColor = "green";
        easyquizcontainer.append(correctmsg);
        score += 1

        setTimeout(() => { correctmsg.remove(); question = 2; possibleAnswer2.style.backgroundColor = "#33cef5"; 
        [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
        possibleAnswer2.removeEventListener('click', handleCorrectClick); }, 3000);
    }

    [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
    possibleAnswer2.addEventListener('click', handleCorrectClick);
} // END OF QUESTION 1




    const q2interval = setInterval(() => { // QUESTION 2
        if(question === 2) {
            clearInterval(q2interval)
            questionTitle.textContent = "Q2: What is the purpose of CSS?"
            possibleAnswer1.textContent = "a. To make a website function"
            possibleAnswer2.textContent = "b. To secure a website"
            possibleAnswer3.textContent = "c. To style and design a website"
            possibleAnswer4.textContent = "d. To structure a website"

            function handleIncorrectClick(e) {
            possibleAnswer3.style.backgroundColor = "green"; // Corect answer is (3)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 3; e.target.style.backgroundColor = "#33cef5"; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer3.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

            setTimeout(() => { correctmsg.remove(); question = 3; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer3.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 2

        const q3interval = setInterval(() => { // QUESTION 3
        if(question === 3) {
            clearInterval(q3interval)
            questionTitle.textContent = "Q3: What does CSS stand for?"
            possibleAnswer1.textContent = "a. Cascading Style Sheets"
            possibleAnswer2.textContent = "b. Computer Style Syntax"
            possibleAnswer3.textContent = "c. Creative Styling System"
            possibleAnswer4.textContent = "d. Colorful Sheet Selector"

            function handleIncorrectClick(e) {
            possibleAnswer1.style.backgroundColor = "green"; // Corect answer is (1)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 4; e.target.style.backgroundColor = "#33cef5"; possibleAnswer1.style.backgroundColor = "#33cef5"; 
            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer1.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer1.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 4; possibleAnswer1.style.backgroundColor = "#33cef5"; 
            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer1.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer1.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 3

        const q4interval = setInterval(() => { // QUESTION 4
        if(question === 4) {
            clearInterval(q4interval)
            questionTitle.textContent = "Q4: Which of the following is NOT a Javascript variable type?"
            possibleAnswer1.textContent = "a. var"
            possibleAnswer2.textContent = "b. let"
            possibleAnswer3.textContent = "c. const"
            possibleAnswer4.textContent = "d. str"

            function handleIncorrectClick(e) {
            possibleAnswer4.style.backgroundColor = "green"; // Corect answer is (4)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 5; e.target.style.backgroundColor = "#33cef5"; possibleAnswer4.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer4.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer4.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 5; possibleAnswer4.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer4.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer4.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 4

        const q5interval = setInterval(() => { // QUESTION 5
        if(question === 5) {
            clearInterval(q5interval)
            questionTitle.textContent = "Q5: How do you link a Javascript file to HTML?"
            possibleAnswer1.textContent = "a. <src script='script.js'>"
            possibleAnswer2.textContent = "b. <send src='script.js'>"
            possibleAnswer3.textContent = "c. <script src='script.js'>"
            possibleAnswer4.textContent = "d. <svr scrpt='script.js'>"

            function handleIncorrectClick(e) {
            possibleAnswer3.style.backgroundColor = "green"; // Corect answer is (3)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 6; e.target.style.backgroundColor = "#33cef5"; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer3.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 6; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer3.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 5
    
        const q6interval = setInterval(() => { // QUESTION 6
        if(question === 6) {
            clearInterval(q6interval)
            questionTitle.textContent = "Q6: How to change the Text Content of 'demo'?"
            possibleAnswer1.textContent = "a. getElementByName=('demo').textContent = 'Hello'"
            possibleAnswer2.textContent = "b. getElementsById=('demo').textContent = 'Hello'"
            possibleAnswer3.textContent = "c. getDemoElement=('textContent') = 'Hello'"
            possibleAnswer4.textContent = "d. getElementById('demo').textContent = 'Hello'"

            function handleIncorrectClick(e) {
            possibleAnswer4.style.backgroundColor = "green"; // Corect answer is (4)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 7; e.target.style.backgroundColor = "#33cef5"; possibleAnswer4.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer4.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer4.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 7; possibleAnswer4.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer4.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer3].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer4.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 6

        const q7interval = setInterval(() => { // QUESTION 7
        if(question === 7) {
            clearInterval(q7interval)
            questionTitle.textContent = "Q7: How do you create a function called 'Add'?"
            possibleAnswer1.textContent = "a. create Function Add()"
            possibleAnswer2.textContent = "b. set Function Add()"
            possibleAnswer3.textContent = "c. function Add()"
            possibleAnswer4.textContent = "d. set Function(add)"

            function handleIncorrectClick(e) {
            possibleAnswer3.style.backgroundColor = "green"; // Corect answer is (3)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);


            setTimeout(() => { incorrectmsg.remove(); question = 8; e.target.style.backgroundColor = "#33cef5"; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer3.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 8; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer3.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 7

        const q8interval = setInterval(() => { // QUESTION 8
        if(question === 8) {
            clearInterval(q8interval)
            questionTitle.textContent = "Q8: How do you create a Promise in JS?"
            possibleAnswer1.textContent = "a. let promise = new Promise(() => {resolve, reject})"
            possibleAnswer2.textContent = "b. let promise = create Promise(() => {resolve, reject})"
            possibleAnswer3.textContent = "c. let promise = add Promise(() => {resolve, reject})"
            possibleAnswer4.textContent = "d. let promise = set Promise() => {resolve, reject})"

            function handleIncorrectClick(e) {
            possibleAnswer1.style.backgroundColor = "green"; // Corect answer is (1)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 9; e.target.style.backgroundColor = "#33cef5"; possibleAnswer1.style.backgroundColor = "#33cef5"; 
            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer1.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer1.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 9; possibleAnswer1.style.backgroundColor = "#33cef5"; 
            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer1.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer2, possibleAnswer3, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer1.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 8
    
        const q9interval = setInterval(() => { // QUESTION 9
        if(question === 9) {
            clearInterval(q9interval)
            questionTitle.textContent = "Q9: Which is true about Garbage Collection?"
            possibleAnswer1.textContent = "a. Developers must manually free memory"
            possibleAnswer2.textContent = "b. Memory is automatically freed when objects are unreferenced"
            possibleAnswer3.textContent = "c. Garbage Collection only occurs at program termination"
            possibleAnswer4.textContent = "d. Garbage collection only works on global variables"

            function handleIncorrectClick(e) {
            possibleAnswer2.style.backgroundColor = "green"; // Corect answer is (2)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 10; e.target.style.backgroundColor = "#33cef5"; possibleAnswer2.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer2.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer2.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 10; possibleAnswer2.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer2.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer3, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer2.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 9

        const q10interval = setInterval(() => { // QUESTION 10
        if(question === 10) {
            clearInterval(q10interval)
            questionTitle.textContent = "Q10: What is React?"
            possibleAnswer1.textContent = "a. A JS-based database managment system"
            possibleAnswer2.textContent = "b. A CSS framework for styling websites"
            possibleAnswer3.textContent = "c. A JS Library for building user interfaces"
            possibleAnswer4.textContent = "d. A tool for managing server-side operations"

            function handleIncorrectClick(e) {
            possibleAnswer3.style.backgroundColor = "green"; // Corect answer is (3)
            e.target.style.backgroundColor = "red";
            easyquizcontainer.append(incorrectmsg);

            setTimeout(() => { incorrectmsg.remove(); question = 11; e.target.style.backgroundColor = "#33cef5"; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            function handleCorrectClick() {
            possibleAnswer3.style.backgroundColor = "green";
            easyquizcontainer.append(correctmsg);
            score += 1

             setTimeout(() => { correctmsg.remove(); question = 11; possibleAnswer3.style.backgroundColor = "#33cef5"; 
            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.removeEventListener('click', handleIncorrectClick)); 
            possibleAnswer3.removeEventListener('click', handleCorrectClick); }, 3000);
    }

            [possibleAnswer1, possibleAnswer2, possibleAnswer4].forEach(el => el.addEventListener('click', handleIncorrectClick));
            possibleAnswer3.addEventListener('click', handleCorrectClick);
        }
    }, 100) // END OF QUESTION 10

        const qEndinterval = setInterval(() => { // THE END
        if(question === 11) {
            clearInterval(qEndinterval)
            questionTitle.textContent = "You finished the easy quiz!"
            possibleAnswer1.remove(), possibleAnswer2.remove(), possibleAnswer3.remove(), possibleAnswer4.remove();
            let result = document.createElement('p')
            result.textContent = `You got a score of ${score} / 10!`
            easyquizcontainer.append(result)

            let grade;
            if(score <= 2 && score > 1) {
                grade = "F"
            } else if(score <=4 && score > 2) {
                grade = "D"
            } else if(score <=5 && score > 4) {
                grade = "C"
            } else if(score <=6 && score > 5) {
                grade = "B"
            } else if(score <=7 && score > 7) {
                grade = "B+"
            } else if(score <=9 && score > 8) {
                grade = "A"
            } else if(score <= 10 && score > 9) {
                grade = "A+"
            } else {
                grade = "U"
            }

            let DOMgrade = document.createElement('p')
            DOMgrade.textContent = `Your grade: ${grade}`
            easyquizcontainer.append(DOMgrade)

            let passOrfail = document.createElement('p')
            if(score >= 6) {
                passOrfail.textContent = "You Passed!"
            } else {
                passOrfail.textContent = "You failed."
            }
            easyquizcontainer.append(passOrfail)

            clearInterval(eaMSenterleave) // Removes Interval to add Hover Effect, prevents memory leaks
        }
    }, 100)
} 

// THE END OF EASY QUIZ & MAIN VARIABLES