// Animate progress bars on scroll
function animateSkills() {
    const progressBars = document.querySelectorAll(".progress-bar");
    const windowHeight = window.innerHeight;

    progressBars.forEach(progressBar => {
        const rect = progressBar.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            progressBar.style.transition = 'width 2s';
            const percentage = progressBar.textContent === 'HTML' ? 95 :
                               progressBar.textContent === 'CSS' ? 92 :
                               progressBar.textContent === 'Bootstrap' ? 95 :
                               progressBar.textContent === 'JavaScript' ? 90 : 95;
            progressBar.style.width = percentage + '%';
        }
    });
}

window.addEventListener("scroll", animateSkills);
animateSkills(); // Trigger on load in case it's already in view


let display = document.getElementById("displaybox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(btn => {
btn.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === 'DEL') {
        string = string.slice(0, -1); // Remove the last character
    } else if (value === 'AC') {
        string = '';
    }
     else if (value === '=') {
        try {
            if (string) {
                string = eval(string).toString();
            } else {
                string = "Error"; // error handel
            }
        } catch (error) {
            string = "Error"; // agerr eval ma koi error ho
        }
    } else {const lastChar = string[string.length - 1]; ///xkexk the llast if number or operater 
        const operators = ['+', '-', '*', '/' ,'.'];

        if (operators.includes(value) && operators.includes(lastChar)) {
            // Do nothing if the last character is also an operator
            return;
            
        }
        const operator = ['+', '*', '/' ,'.','%'];
        if (operator.includes(value) && (string.length === 0 || operator.includes(lastChar))) {
            return; // Do nothing if the string is empty or last character is an operator
        }
        string += value;
       
    }
  

    display.value = string || '0'; // 
});
});

//tiktakteo

let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#rest");
let sms = document.querySelector(".sms");
let show = document.querySelector(".hide");
let para = document.querySelector("#para");

let plear = true; // Player 1 starts as 'X'
let xount = 0; // Counter for moves
let winningBox = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[2, 4, 6],
[1, 4, 7],
[0, 4, 8],
[2, 5, 8],
];

boxes.forEach((box) => {
box.addEventListener("click", () => {
    xount++;
    if (xount === 9) {
        para.innerText = "Game Over";
        box.innerText = "Try Again";
        box.disabled = true;
    } else {
        if (plear) {
            box.innerText = "X";
            plear = false;
            para.innerText = "Player Two's Turn";
        } else {
            box.innerText = "O";
            plear = true;
            para.innerText = "Player One's Turn";
            box.style.color = "red";
        }

        box.disabled = true;
        checkWinner();
    }
});
});

const disableBox = () => {
for (let box of boxes) {
    box.disabled = true;
}
};

const checkWinner = () => {
for (let pattern of winningBox) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
        if (position1 === position2 && position2 === position3) {
            announceWinner(position1);
            disableBox();
        }
    }
}
};

const announceWinner = (winner) => {
sms.innerText = `The winner is ${winner}`;
show.classList.remove("hide");
para.style.display = "none";
};

rest.addEventListener("click", () => {
window.location.reload();
});


