let roundNo;




const compareMoveRock =()=>{


    const generateCompMove=()=>{
        let computerMove="";
        move=((Math.random()*8)+1)
        if (move>1 && move<=3){
            computerMove+="rock"
        }
        else if (move>3 && move<=6){
            computerMove+="paper"
        }
        else{
            computerMove+="scissors"
        }
        console.log(move)
        console.log(computerMove)
        return computerMove
    
    }

    let computerMove=generateCompMove()
    
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    let myMove="rock";
    if(computerMove=="rock"){
        draw+=1 ;
        comPdraw+=1;
        console.log("Draw")
    
    }
    else if(computerMove=="paper"){
        loose+=1;
        comPwin+=1;
        console.log("You loose")
        
    }
    else{
        win+=1;
        comPloose+=1;
        console.log("You win")
    }
}
const compareMovePaper =()=>{


    const generateCompMove=()=>{
        let computerMove="";
        move=((Math.random()*8)+1)
        if (move>1 && move<=3){
            computerMove+="rock"
        }
        else if (move>3 && move<=6){
            computerMove+="paper"
        }
        else{
            computerMove+="scissors"
        }
        console.log(move)
        console.log(computerMove)
        return computerMove
    
    }

    let computerMove=generateCompMove()
    
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    
    if(computerMove=="paper"){
        draw+=1 ;
        comPdraw+=1;
        console.log("Draw")
    
    }
    else if(computerMove=="scissors"){
        loose+=1;
        comPwin+=1;
        console.log("You loose")
        
    }
    else{
        win+=1;
        comPloose+=1;
        console.log("You win")
    }
}
const compareMoveScissors =()=>{


    const generateCompMove=()=>{
        let computerMove="";
        move=((Math.random()*8)+1)
        if (move>1 && move<=3){
            computerMove+="rock"
        }
        else if (move>3 && move<=6){
            computerMove+="paper"
        }
        else{
            computerMove+="scissors"
        }
        console.log(move)
        console.log(computerMove)
        return computerMove
    
    }

    let computerMove=generateCompMove()
    
    let win=0, draw=0, loose=0;
    let comPwin=0, comPdraw=0, comPloose=0;
    
    if(computerMove=="scissors"){
        draw+=1 ;
        comPdraw+=1;
        console.log("Draw")
    
    }
    else if(computerMove=="rock"){
        loose+=1;
        comPwin+=1;
        console.log("You loose")
        
    }
    else{
        win+=1;
        comPloose+=1;
        console.log("You win")
    }
}

