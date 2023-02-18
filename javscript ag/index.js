let randomNum = Math.floor(Math.random() * 21);
let userInput = parseInt(document.getElementById("userInput").value);
console.log(randomNum);

function handleCheckFunc() {
  userInput = parseInt(document.getElementById("userInput").value);
  
  if (randomNum == userInput) {
    document.body.style.backgroundColor = "green";
    return true;
  } else if (randomNum > userInput) {
    document.getElementById("title").innerHTML = "Lesser than Answer";  
  } else {
    document.getElementById("title").innerHTML = "Greater than Answer";
  }
  return false;
}

function reloadPage() {
  location.reload();
}
  

