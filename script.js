document.getElementById('guess').addEventListener('click', randomizer)
let userinput = 0

function randomizer () {
     userinput = document.getElementById('input')
     .value
     userinput = parseInt(userinput)

   if (userinput >= 17) {
     document.getElementById('age').innerHTML = 'You can see R rated movies alone.'
  } else if (userinput >= 13) {
     document.getElementById('age').innerHTML = 'You can see PG-13 movies alone.'
  } else if (userinput >= 5) {
     document.getElementById('age').innerHTML = 'You can see G or PG movies alone.'
  } else {
     document.getElementById('age').innerHTML = 'You are to young to understand most movies.'
  }
}
