var Player1=prompt("Enter the first player name");
var Player2=prompt("Enter the second player name");

var randomnum1=Math.floor((Math.random()*6)+1);




var randomnum2=Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomnum1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomnum2+".png");
document.querySelector(".p1name").innerHTML=Player1;
document.querySelector(".p2name").innerHTML=Player2;

if(randomnum1==randomnum2){
    document.querySelector("h1").innerHTML="DRAW";
}
else if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML=Player1+" wins";
}
else{
    document.querySelector("h1").innerHTML=Player2+ " wins";
}

