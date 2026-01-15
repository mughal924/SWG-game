var choices = ["snake", "water", "gun"];

function playGame(userChoice) {
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user").innerText =
        "You chose: " + userChoice;

    document.getElementById("computer").innerText =
        "Computer chose: " + computerChoice;

    var result = checkWinner(userChoice, computerChoice);

    document.getElementById("winner").innerText = result;
}

function checkWinner(user, computer) {
    if (user === computer) {
        return "Match Draw 😐";
    }

    if (user === "snake") {
        if (computer === "water") {
            return "You Win 🎉";
        } else {
            return "You Lose 😢";
        }
    }

    if (user === "water") {
        if (computer === "gun") {
            return "You Win 🎉";
        } else {
            return "You Lose 😢";
        }
    }

    if (user === "gun") {
        if (computer === "snake") {
            return "You Win 🎉";
        } else {
            return "You Lose 😢";
        }
    }
}
