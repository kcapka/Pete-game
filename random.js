let pete = document.querySelector(".pete");
let button = document.querySelector(".clickme");
let warning = document.querySelector(".ohno");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let responseYes = document.querySelector(".yesresponse");
let responseNo = document.querySelector(".noresponse");
let playAgain = document.querySelector(".playagain");
let winPicture = document.querySelector(".win");
let losePicture = document.querySelector(".lose");
let backgroundChange = document.querySelector(".background");

button.addEventListener("click", () => {
    pete.classList.toggle("active");
    warning.classList.toggle("active");
    button.classList.toggle("active");
    yes.classList.toggle("active");
    no.classList.toggle("active");
    backgroundChange.classList.toggle("active");
});

yes.addEventListener("click", () => {
    yes.classList.remove("active");
    no.classList.remove("active");
    warning.classList.remove("active");
    responseYes.classList.toggle("active");
    playAgain.classList.toggle("active");
    pete.classList.remove("active");
    losePicture.classList.toggle("active");
    backgroundChange.classList.remove("active");
    
})

no.addEventListener("click", () => {
    responseNo.classList.toggle("active");
    yes.classList.remove("active");
    no.classList.remove("active");
    warning.classList.remove("active");
    playAgain.classList.toggle("active");
    pete.classList.remove("active");
    winPicture.classList.toggle("active");
})

playAgain.addEventListener("click", () => {
    pete.classList.remove("active");
    playAgain.classList.remove("active");
    responseNo.classList.remove("active");
    responseYes.classList.remove("active");
    button.classList.remove("active");
    losePicture.classList.remove("active");
    winPicture.classList.remove("active");
    backgroundChange.classList.remove("active");
})