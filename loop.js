//let userInput = prompt('Isi angka')
//let asterix = ''

//for (i = 0; i < userInput; i++){
  //asterix += '*\n'
//}
//console.log(asterix)

//let userInput = prompt('Isi Angka!')
//let stars = ''
//for (let row = 0; row < userInput; row++) {
  //let char = '*';
  
  //for (let col = 0; col < userInput; col++) {
    //char += '*'
  //}
  //console.log(char);
//}

let number = "125";

// Write your code down below!
let result = false;
for (let i = 0; i < number.length; i++) {
  result = number[i] === '5'
  
  if (result) break;
}

console.log(result)