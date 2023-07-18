let buttons=document.querySelectorAll(".buttonss")
Array.from(buttons).forEach((but)=>{
    but.addEventListener("click",(e)=>{
    let roundNum=document.querySelector(".roundNumm").innerHTML;
    roundNum=Number.parseInt(roundNum);
    roundNum++;
    document.querySelector(".roundNumm").innerHTML=roundNum;
    // if(document.querySelector(".roundNumm").innerHTML=="11"){
    //     break;
        
    // } 




    // roundNum++;
    

        

    })
})




const youWin=()=>{
    
    let middle=document.querySelector(".vs-message-side")
    
    let p=document.createElement("p")
    p.className="win"
    p.innerHTML="You Win!"
    middle.appendChild(p);
    middle.firstElementChild.replaceWith(p)

}
const youLoose=()=>{
    
    let middle=document.querySelector(".vs-message-side")
    
    let p=document.createElement("p")
    p.className="loose"
    p.innerHTML="You Loose!"
    middle.appendChild(p);
    middle.firstElementChild.replaceWith(p)

}
const youDraw=()=>{
    
    let middle=document.querySelector(".vs-message-side")
    
    let p=document.createElement("p")
    p.className="draw"
    p.innerHTML="Draw!"
    middle.appendChild(p);
    middle.firstElementChild.replaceWith(p)

}



const generateCompMove=()=>{
    let compMoveImg1 = document.querySelector(".comp-move-img")
    compMoveImg1.innerHTML=""

    let computerMove="";
    move=((Math.random()*8)+1)
    if (move>1 && move<=3){
        computerMove+="rock"

        let compHeader=document.querySelector(".screen-comp")
        let p=document.createElement("p")
        p.innerHTML="Computer picked Rock"
        compHeader.appendChild(p);
        compHeader.firstElementChild.replaceWith(p)

        let compMoveImg = document.querySelector(".comp-move-img")
        let img=document.createElement("img")
        img.src="images/fist.png"
        img.alt="rock"
        compMoveImg.appendChild(img);
    }
    else if (move>3 && move<=6){
        computerMove+="paper"

        let compHeader=document.querySelector(".screen-comp")
        let p=document.createElement("p")
        p.innerHTML="Computer picked Paper"
        compHeader.appendChild(p);
        compHeader.firstElementChild.replaceWith(p)

        let compMoveImg = document.querySelector(".comp-move-img")
        let img=document.createElement("img")
        img.src="images/privacy.png"
        img.alt="paper"
        compMoveImg.appendChild(img);
    }
    else{
        computerMove+="scissors"

        let compHeader=document.querySelector(".screen-comp")
        let p=document.createElement("p")
        p.innerHTML="Computer picked Scissors"
        compHeader.appendChild(p);
        compHeader.firstElementChild.replaceWith(p)

        let compMoveImg = document.querySelector(".comp-move-img")
        let img=document.createElement("img")
        img.src="images/scissors.png"
        img.alt="scissors"
        compMoveImg.appendChild(img);
    }
    console.log(move)
    console.log(computerMove)
    return computerMove

}

const compareMoveRock =()=>{
    let screenHeader=document.querySelector(".screen-user")
    
    let p=document.createElement("p")
    p.innerHTML="You picked Rock"
    screenHeader.appendChild(p);
    screenHeader.firstElementChild.replaceWith(p)


    let compMoveImg = document.querySelector(".user-move-img")
    compMoveImg.innerHTML=""
    let img=document.createElement("img")
    img.src="images/fist.png"
    img.alt="rock"
    compMoveImg.appendChild(img);
    

    let computerMove=generateCompMove()
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    let myMove="rock";
    
    if(computerMove=="rock"){
    
        let drawPoint=document.querySelector(".draw-point").innerHTML;
        drawPoint=Number.parseInt(drawPoint);
        drawPoint++;
        document.querySelector(".draw-point").innerHTML=drawPoint;

        let compDrawPoint=document.querySelector(".comp-draw-point").innerHTML;
        compDrawPoint=Number.parseInt(compDrawPoint);
        compDrawPoint++;
        document.querySelector(".comp-draw-point").innerHTML=compDrawPoint;

        youDraw();
    
    }
    else if(computerMove=="paper"){
             let loosePoint=document.querySelector(".loose-point").innerHTML;
        loosePoint=Number.parseInt(loosePoint);
        loosePoint++;
        document.querySelector(".loose-point").innerHTML=loosePoint;

        let compWinPoint=document.querySelector(".comp-win-point").innerHTML;
        compWinPoint=Number.parseInt(compWinPoint);
        compWinPoint++;
        document.querySelector(".comp-win-point").innerHTML=compWinPoint;
        youLoose();
        
    }
    else{
              let winPoint=document.querySelector(".win-point").innerHTML;
        winPoint=Number.parseInt(winPoint);
        winPoint++;
        document.querySelector(".win-point").innerHTML=winPoint;

        let comploosePoint=document.querySelector(".comp-loose-point").innerHTML;
        comploosePoint=Number.parseInt(comploosePoint);
        comploosePoint++;
        document.querySelector(".comp-loose-point").innerHTML=comploosePoint;
        youWin();
    }
}
const compareMovePaper =()=>{

    let screenHeader=document.querySelector(".screen-user")
    
    let p=document.createElement("p")
    p.innerHTML="You picked Paper"
    screenHeader.appendChild(p);
    screenHeader.firstElementChild.replaceWith(p)


    let compMoveImg = document.querySelector(".user-move-img")
    compMoveImg.innerHTML=""
    let img=document.createElement("img")
    img.src="images/privacy.png"
    img.alt="paper"
    compMoveImg.appendChild(img);

    let computerMove=generateCompMove()
    
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    
    if(computerMove=="paper"){

        let drawPoint=document.querySelector(".draw-point").innerHTML;
        drawPoint=Number.parseInt(drawPoint);
        drawPoint++;
        document.querySelector(".draw-point").innerHTML=drawPoint;

        let compDrawPoint=document.querySelector(".comp-draw-point").innerHTML;
        compDrawPoint=Number.parseInt(compDrawPoint);
        compDrawPoint++;
        document.querySelector(".comp-draw-point").innerHTML=compDrawPoint;
        youDraw();
    
    }
    else if(computerMove=="scissors"){
             let loosePoint=document.querySelector(".loose-point").innerHTML;
        loosePoint=Number.parseInt(loosePoint);
        loosePoint++;
        document.querySelector(".loose-point").innerHTML=loosePoint;

        let compWinPoint=document.querySelector(".comp-win-point").innerHTML;
        compWinPoint=Number.parseInt(compWinPoint);
        compWinPoint++;
        document.querySelector(".comp-win-point").innerHTML=compWinPoint;
        youLoose();
        
    }
    else{
        let winPoint=document.querySelector(".win-point").innerHTML;
        winPoint=Number.parseInt(winPoint);
        winPoint++;
        document.querySelector(".win-point").innerHTML=winPoint;

        let comploosePoint=document.querySelector(".comp-loose-point").innerHTML;
        comploosePoint=Number.parseInt(comploosePoint);
        comploosePoint++;
        document.querySelector(".comp-loose-point").innerHTML=comploosePoint;
        youWin();
    }
}
const compareMoveScissors =()=>{

    let screenHeader=document.querySelector(".screen-user")
    
    let p=document.createElement("p")
    p.innerHTML="You picked Scissors"
    screenHeader.appendChild(p);
    screenHeader.firstElementChild.replaceWith(p)


        let compMoveImg = document.querySelector(".user-move-img")
        compMoveImg.innerHTML=""
    let img=document.createElement("img")
    img.src="images/scissors.png"
    img.alt="scissors"
    compMoveImg.appendChild(img);

    let computerMove=generateCompMove()
    
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    
    if(computerMove=="scissors"){
        let drawPoint=document.querySelector(".draw-point").innerHTML;
        drawPoint=Number.parseInt(drawPoint);
        drawPoint++;
        document.querySelector(".draw-point").innerHTML=drawPoint;

        let compDrawPoint=document.querySelector(".comp-draw-point").innerHTML;
        compDrawPoint=Number.parseInt(compDrawPoint);
        compDrawPoint++;
        document.querySelector(".comp-draw-point").innerHTML=compDrawPoint;
        youDraw();
    
    }
    else if(computerMove=="rock"){
        let loosePoint=document.querySelector(".loose-point").innerHTML;
        loosePoint=Number.parseInt(loosePoint);
        loosePoint++;
        document.querySelector(".loose-point").innerHTML=loosePoint;

        let compWinPoint=document.querySelector(".comp-win-point").innerHTML;
        compWinPoint=Number.parseInt(compWinPoint);
        compWinPoint++;
        document.querySelector(".comp-win-point").innerHTML=compWinPoint;
        // loose+=1;
        // comPwin+=1;
        youLoose();
        
    }
    else{
        let winPoint=document.querySelector(".win-point").innerHTML;
        winPoint=Number.parseInt(winPoint);
        winPoint++;
        document.querySelector(".win-point").innerHTML=winPoint;

        let comploosePoint=document.querySelector(".comp-loose-point").innerHTML;
        comploosePoint=Number.parseInt(comploosePoint);
        comploosePoint++;
        document.querySelector(".comp-loose-point").innerHTML=comploosePoint;
        // win+=1;
        // comPloose+=1;
        youWin();
    }
}

