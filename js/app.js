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

