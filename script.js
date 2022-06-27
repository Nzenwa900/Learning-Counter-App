const count = document.querySelector(".count");
const add = document.querySelector(".add");
const sub = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");


add.addEventListener("click", () => {
    count.innerHTML++
    setColor()
})
sub.addEventListener("click", () => {
    count.innerHTML--
    setColor()
})
resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor()
})


// creating a function to adjust the colors 

function setColor(){
    if (count.innerHTML > 0){
        count.style.color = "#90ee90";
    } else if(count.innerHTML < 0){
        count.style.color = "red";
    }else {
        count.style.color = "white";
    }
}