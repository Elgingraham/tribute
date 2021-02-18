document.getElementById('guess').addEventListener
('click',randomizer)
let number = 0
let userguess = 0
function randomizer() {
userguess = document.getElementById('input').value
userguess = parseInt(userguess)


number = (Math.random() * 6) + 1
number = parseInt(number)

if (userguess == number) {
   document.getElementById('winner').innerHTML = "winner"
 }
}