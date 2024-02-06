let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count = 0;
const winpatterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box) => {
box.addEventListener("click",()=>{
   
    
        if(turno){
            box.innerText = "O";
            
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
    
    box.disabled = true;
    count++;
    
    let iswinner = checkwinner();

    if(count==9 && !iswinner){
        gamedraw();
       
    }

    
});
});


const gamedraw = () =>{
    msg.innerText = `Game was Draw😒`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}

const resetgame=()=>{
    turno =true;
    count = 0;
    for(box of boxes){
        
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                
                showWinner(pos1);
                return true;
            }
        }
     }
}

newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);



