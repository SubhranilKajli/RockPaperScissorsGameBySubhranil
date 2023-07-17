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
    
        // let scoreUser = document.querySelector(".score-user")
        // let p=document.createElement("p");
        // p.innerHTML=`Draw: ${draw}`;
        // scoreUser.appendChild(p);
        draw+=1 ;

        comPdraw+=1;
        youDraw();
    
    }
    else if(computerMove=="paper"){
        loose+=1;
        comPwin+=1;
        youLoose();
        
    }
    else{
        win+=1;
        comPloose+=1;
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
        draw+=1 ;
        comPdraw+=1;
        youDraw();
    
    }
    else if(computerMove=="scissors"){
        loose+=1;
        comPwin+=1;
        youLoose();
        
    }
    else{
        win+=1;
        comPloose+=1;
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
        draw+=1 ;
        comPdraw+=1;
        youDraw();
    
    }
    else if(computerMove=="rock"){
        loose+=1;
        comPwin+=1;
        youLoose();
        
    }
    else{
        win+=1;
        comPloose+=1;
        youWin();
    }
}

