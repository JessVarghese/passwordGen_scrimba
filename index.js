//Generate two random passwords when someone clicks the button
//15 character limit

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = []

let passButton = document.getElementById("pass-btn")

let passLength = 15

//generate random characters

function randomPassword() {
    let randomChar = Math.floor( Math.random() * characters.length)
    return characters[randomChar]
}

//set pass length

function setLength() {
    let password = " "
    for (let i = 0; i < passLength; i++) {
       password += randomPassword()

}
return password
}


//display random pass

passButton.addEventListener("click", function() { 
   
    let fieldOne = document.getElementById("pass-one")
    let fieldTwo = document.getElementById("pass-two")
    
    fieldOne.textContent = setLength()
    fieldTwo.textContent = setLength()
})


