// at first we are deciding the logic for the to do list
// we add onclick event lister to the button for adding the elements;

let btn = document.querySelector("#addBtn");

btn.addEventListener("click", function(){
    console.log("The function is working properly");

    // important requires
    let reqDiv = document.querySelector("#listId");
    let reqInput = document.querySelector("#listInput");

    // we have to create the desired list item;
    let newDiv = document.createElement('div');
  
    // applying the particular styling on the given div item;
    newDiv.classList.add("flex");
    newDiv.classList.add("flex-wrap");
    newDiv.classList.add("justify-between");
    newDiv.classList.add("w-full");
    newDiv.classList.add("mx-2");
    
    let listText = document.createElement('span');
    listText.innerText = reqInput.value;
    // applying the particular styling on the given div item;
    listText.classList.add("border");
    listText.classList.add("rounded-xl");
    listText.classList.add("p-4");
    listText.classList.add("m-4");
    listText.classList.add("bg-pink-300");
    listText.classList.add("text-white");
    listText.classList.add("cursor-pointer");


    newDiv.append(listText);
    reqDiv.append(newDiv);
});

let parDiv = document.querySelector("#listId");
parDiv.addEventListener("click", function(event){
    console.log("This thing is working fine perfectly!");
    if(event.target.nodeName === "SPAN"){
        console.log("This works fine too!");
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


// below is the code for complete timer feature

let minuteHand = document.querySelector("#minuteHand");
let secondHand = document.querySelector("#secondHand");

let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let resetBtn = document.querySelector("#resetBtn");

let id;

const resetFunction = function(){
    startBtn.addEventListener("click", startFunction);
    pauseBtn.addEventListener("click", pauseFunction);
    minuteHand.innerText = '24';
    secondHand.innerText = '59';
};

const startFunction = function() {
    console.log("We are safely at this part");
    startBtn.removeEventListener("click", startFunction);
    id = setInterval(() => {
        secondHand.innerText = secondHand.innerText - 1;
        if(secondHand.innerText === '0'){
            if(minuteHand.innerText === '0'){
                clearInterval(id);
                resetFunction();
                alert("The timer is over");
            }
            else{
                minuteHand.innerText = minuteHand.innerText - 1;
                secondHand.innerText = '59';
            }
        }
    }, 1000)
};

const pauseFunction = function() {
    pauseBtn.removeEventListener("click", pauseFunction);
    startBtn.addEventListener("click", startFunction);
    clearInterval(id);
};

startBtn.addEventListener("click", startFunction);

pauseBtn.addEventListener("click", pauseFunction);

resetBtn.addEventListener("click", resetFunction);