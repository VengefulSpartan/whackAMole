let currentMole,currentPiranha;
var score=0;
var gameOver=false;

window.onload= initGame();
function initGame() {
    for(i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile);
        tile.addEventListener("click",selectTile)
    }
    setInterval(setMole,1000);
    setInterval(setPiranha,2000);
}
function randomTile(){
    let int=Math.floor(Math.random()*9);
    return int.toString();
}
function setMole(){
    if(gameOver){
        return;
    }
    if(currentMole){
        currentMole.innerHTML="";
    };
    let mole= document.createElement("img");
    mole.src="./monty-mole.png";
    let num=randomTile();
    if(currentPiranha&&currentPiranha.id==num){
        return;
    }
    currentMole=document.getElementById(num);
    currentMole.appendChild(mole);
}
function setPiranha(){
    if(gameOver){
        return;
    }
    if(currentPiranha){
        currentPiranha.innerHTML="";
    }
    let piranha=document.createElement("img");
    piranha.src="./piranha-plant.png"
    let num=randomTile();
    if(currentMole&&currentMole.id==num){
        return;
    }
    currentPiranha=document.getElementById(num);
    currentPiranha.appendChild(piranha);
    
};
document.addEventListener("click",()=>{
    document.body.style.cursor= 'url("./cursor(1).cur"),auto';
    setTimeout(()=>{
        document.body.style.cursor= 'url("./cursor.cur"),auto';
    },300)
})

function selectTile(){
    if(this===currentMole&&gameOver!==true){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }else if(this===currentPiranha&&gameOver!==true){
        document.getElementById("score").innerText="GAME OVER "+score.toString();
        gameOver=true;
    }
}