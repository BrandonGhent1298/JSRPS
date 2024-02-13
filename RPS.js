String(Rock);
String(Paper);
String(Scissors);
String(PlayerChoice);
String(ComputerChoice);
String(Endstatement);

    let PlayerChoicePrompt = prompt("rock paper or scissors?")
    if (PlayerChoicePrompt.toLowerCase() === rock){
        PlayerChoice = Rock;
    }  
    else if (PlayerChoicePrompt.toLowerCase() === paper){
        PlayerChoice = Paper;
    }
    else if (PlayerChoicePrompt.toLowerCase() === scissors){
        PlayerChoice = Scissors;
    }
    let ComputerChoiceNum = Math.floor(Math.random() * 3)
    function getcomputerchoice () {if (ComputerChoiceNum == 0){ComputerChoice = Rock}
    else if (ComputerChoiceNum = 1){ComputerChoice = Paper}
    else{(ComputerChoice = Scissors)}};
    if(PlayerChoice == Rock && ComputerChoice == Scissors) {
        Endstatement = "You win!";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Rock && ComputerChoice == Rock) {
        Endstatement = "You tied the computer";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Rock && ComputerChoice == Paper) {
        Endstatement = "You lose";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Paper && ComputerChoice == Rock) {
        Endstatement = "You win!";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Paper && ComputerChoice == Scissors) {
        Endstatement = "You lose";
        console.log(Endstatement);
        }
    else if(PlayerChoice == Paper && ComputerChoice == Paper) {
            Endstatement = "You tied the computer";
            console.log(Endstatement);
    }
    else if(PlayerChoice == Scissors && ComputerChoice == Paper) {
        Endstatement = "You win!";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Scissors && ComputerChoice == Rock) {
        Endstatement = "You lose";
        console.log(Endstatement);
    }
    else if(PlayerChoice == Scissors && ComputerChoice == Scissors) {
        Endstatement = "You tied the computer";
        console.log(Endstatement);
    }
    