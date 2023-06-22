var rN=Math.floor(Math.random()*6)+1;

var imageSource="images/dice" + rN + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var rN1=Math.floor(Math.random()*6)+1;

var imageSource="images/dice" + rN1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource);

   if(rN > rN1) {
  
    document.querySelector("h1").innerHTML="Player 1 Won";

 }
   else if (rN<rN1) 
   {

       document.querySelector("h1").innerHTML="Player 2 won";
   }
   else 
   {
    document.querySelector("h1").innerHTML="Draw";
  }

