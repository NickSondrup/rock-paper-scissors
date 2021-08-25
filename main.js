function otherPlay(playerChoice){
  let computerScore = Math.floor(Math.random()*3)
  let playerScore = 0
  let computerChoice = 'Cockroach'
  if(playerChoice === "Cockroach"){
    playerScore = 0
  }
  else if(playerChoice === "Foot"){
    playerScore = 1
  }
  else if(playerChoice === "nuclear Bomb"){
    playerScore = 2
  }
  if(computerScore === 0){
    computerChoice = "Cockroach"
  }
  else if(computerScore === 1){
    computerChoice = "Foot"
  }
  else if(computerScore === 2){
    computerChoice = "nuclear Bomb"
  }
  
  if(playerScore === computerScore){
    document.getElementById("winnerText").innerText = "Tie!"
  }
  else if(playerScore === 0 && computerScore === 1){
    document.getElementById("winnerText").innerText = "Computers have taken over!"
  }
  else if(playerScore === 0 && computerScore === 2){
    document.getElementById("winnerText").innerText = "The Humans survive, for now..."
  }
  else if(playerScore === 1 && computerScore === 0){
    document.getElementById("winnerText").innerText = "The Humans survive, for now..."
  }
  else if(playerScore === 1 && computerScore === 2){
    document.getElementById("winnerText").innerText = "Computers have taken over!"
  }
  else if(playerScore === 2 && computerScore === 0){
    document.getElementById("winnerText").innerText = "Computers have taken over!"
  }
  else if(playerScore === 2 && computerScore === 1){
    document.getElementById("winnerText").innerText = "The Humans survive, for now..."
  }
  
  document.getElementById('playersChoice').innerText = "Your Choice: " + playerChoice
  document.getElementById('computerChoice').innerText = "Computer Choice: " + computerChoice
  
}
// REVIEW First try below
// function play(playerChoice){
//   let computerScore = Math.round(Math.random()*10)
//   console.log(computerScore)

//   let playerScore = 0
//   if(playerChoice === "Rock"){
//     playerScore = 1
//   }
//   else if(playerChoice === "Paper"){
//     playerScore = 4
//   }
//   else if(playerChoice === "Scissors"){
//     playerScore = 7
//   }

//   if(playerScore === 1 && computerScore >=7 ){
//       document.getElementById("winnerText").innerText = "Player Wins!"
//     }
//   else if(computerScore <= 3 && playerScore === 7){
//     document.getElementById("winnerText").innerText = "Computers have taken over!"
//   }
//   else if( playerScore === computerScore){
//     document.getElementById("winnerText").innerText = "Tie!"
//   }
//   else if(playerScore === 1 && computerScore <= 3){
//     document.getElementById("winnerText").innerText = "Tie!"
//   }
//   else if(playerScore === 4 && computerScore >= 4 && computerScore < 7){
//     document.getElementById("winnerText").innerText = "Tie!"
//   }
//   else if(playerScore ===7 && computerScore >= 7){
//     document.getElementById("winnerText").innerText = "Tie!"
//   }
//   else if(playerScore > computerScore){
//     document.getElementById("winnerText").innerText = "Player Wins!"
//   }
//   else if(playerScore < computerScore){
//     document.getElementById("winnerText").innerText = "Computers have taken over!"
//   }
// }

// function setComputerScore(){
//   let computerScore = Math.round(Math.random()*10)
  
// }