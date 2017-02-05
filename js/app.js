function shuffle(){
  var order = []

  for (var i = 8; i > 0; i--) {
    order.push(i); 
  }
  var reorder = []
  for (var i = 8; i > 0; i--){
    ra = order.splice(Math.floor(Math.random() * i), 1)[0];
    reorder.push(ra);
    console.log(reorder)
  }
  
  document.getElementById("first").style.order = reorder[0];
  document.getElementById("second").style.order = reorder[1];
  document.getElementById("third").style.order = reorder[2];
  document.getElementById("fourth").style.order = reorder[3];
  document.getElementById("fifth").style.order = reorder[4];
  document.getElementById("sixth").style.order = reorder[5];
  document.getElementById("seventh").style.order = reorder[6];
  document.getElementById("eighth").style.order = reorder[7];

}
window.onload = shuffle;

var firstFlip = 0;
var secondFlip = 0;
var flipCounter = 0;

function changea(){
  document.getElementById("f1").style.transform = "rotateY(0deg)";
  document.getElementById("b1").style.transform= "rotateY(-180deg)";
  firstFlip = 1;
  flipCounter++;
}

function changeb(){
  document.getElementById("f2").style.transform = "rotateY(0)";
  document.getElementById("b2").style.transform= "rotateY(-180deg)";
  firstFlip = 2;
  flipCounter++;
}

function changec(){
  document.getElementById("f3").style.transform = "rotateY(0deg)";
  document.getElementById("b3").style.transform= "rotateY(-180deg)";
  firstFlip = 3;
  flipCounter++;
}

function changed(){
  document.getElementById("f4").style.transform = "rotateY(0deg)";
  document.getElementById("b4").style.transform= "rotateY(-180deg)";
  firstFlip = 4;
  flipCounter++;
}

function changee(){
  document.getElementById("f5").style.transform = "rotateY(0deg)";
  document.getElementById("b5").style.transform= "rotateY(-180deg)";
  secondFlip = 1;
  flipCounter++;
}

function changef(){
  document.getElementById("f6").style.transform = "rotateY(0deg)";
  document.getElementById("b6").style.transform= "rotateY(-180deg)";
  secondFlip = 2;
  flipCounter++;
}

function changeg(){
  document.getElementById("f7").style.transform = "rotateY(0deg)";
  document.getElementById("b7").style.transform= "rotateY(-180deg)";
  secondFlip = 3;
  flipCounter++;
}

function changeh(){
  document.getElementById("f8").style.transform = "rotateY(0deg)";
  document.getElementById("b8").style.transform= "rotateY(-180deg)";
  secondFlip = 4;
  flipCounter++;

}

function check(){
  console.log(firstFlip);
  console.log(secondFlip);
  console.log(flipCounter);
  console.log("--------");

  setTimeout(function(){
    if(firstFlip == secondFlip){
      if(firstFlip == 1){
        document.getElementById("first").style.display = "none";
        document.getElementById("fifth").style.display = "none";
      }
      if(firstFlip == 2){
        document.getElementById("second").style.display = "none";
        document.getElementById("sixth").style.display = "none";
      }
      if(firstFlip == 3){
        document.getElementById("third").style.display = "none";
        document.getElementById("seventh").style.display = "none";
      }
      if(firstFlip == 4){
        document.getElementById("fourth").style.display = "none";
        document.getElementById("eighth").style.display = "none";
      }


      flipCounter = 0;
      firstFlip = 0;
      secondFlip = 0; 
    }
  }, 1500);

  setTimeout(
    function delay(){
      if(flipCounter == 2 && firstFlip != secondFlip){
        flipCounter = 0;
        firstFlip = 0;
        secondFlip = 0;
        
        var idFrontNames = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"];
        var idBackNames = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];
        for(var z = idFrontNames.length; z > 0; z--){
          frontId = idFrontNames.splice(0, 1)[0];
          backId = idBackNames.splice(0, 1)[0];
          
          document.getElementById(frontId).style.transform = "rotateY(-180deg)";
          document.getElementById(backId).style.transform = "rotateY(0deg)";    
        }
      }
  },1000);
}
