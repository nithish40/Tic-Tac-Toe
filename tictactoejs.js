let reset=document.querySelector("#reset");
let boxes= document.querySelectorAll(".box");
let newgamebtn= document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let mssg=document.querySelector("#msg");

let turno= true;
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
            
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
let count=0;
const checkwinner=() => {
    for(let pattern of arr){
        // console.log(pattern);
        console.log(pattern[0],pattern[1],pattern[2]); //to print the indeces
        console.log(boxes[pattern[0]].innerText,    //to get the text in the element
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
    if(count===8){
        console.log("Draw");
        count=0;    
    }
}
const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const showwinner=(win)=>{
    mssg.innerText=`Congratulatoins ,Winner is ${win}`;
    msgcontainer.classList.remove("hide");
    disbaleboxes();
}
const disbaleboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);