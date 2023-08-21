const winConditions =  [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8], 
[6,4,2]

]

const boxes = document.querySelectorAll(".box");
const turn = document.getElementById("1");
let playerX = true;
/* let playerO =  false; */
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(playerX){
            box.innerHTML="X";
            playerX=false;
            turnSwapper();
            
            checkWinner();
        }else{
            box.innerHTML="O";
            playerX=true;
            turnSwapper();
            checkWinner();
        }
    })
    
});
function checkWinner(){
    if(boxes[0].innerHTML=="X" && boxes[1].innerHTML=="X" && boxes[2].innerHTML=="X" )
    {
        alert("X win!");
        location.reload();
      }else if
     (boxes[3].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[5].innerHTML=="X" )
     {
        alert("X win!");
        location.reload();
      }else if
      (boxes[6].innerHTML=="X" && boxes[7].innerHTML=="X" && boxes[8].innerHTML=="X"){
      alert("X win!");
      location.reload();
    }
    else if(boxes[0].innerHTML=="X" && boxes[3].innerHTML=="X" && boxes[6].innerHTML=="X"){
        alert("X win!");
        location.reload();
      } else if
     (boxes[1].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[7].innerHTML=="X" )
     {
        alert("X win!");
        location.reload();
      } else if
     (boxes[3].innerHTML=="X" && boxes[5].innerHTML=="X" && boxes[8].innerHTML=="X"){
        alert("X win!");
        location.reload();
      }
      else if(boxes[0].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[8].innerHTML=="X")
      {
        alert("X win!");
        location.reload();
    }else if
      (boxes[2].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[6].innerHTML=="X"){
        alert("X win!");
        location.reload();
    }



    else if(boxes[0].innerHTML=="O" && boxes[1].innerHTML=="O" && boxes[2].innerHTML=="O" )
    {
        alert("O win!");
        location.reload();
      }else if
     (boxes[3].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[5].innerHTML=="O" )
     {
        alert("O win!");
        location.reload();
      }else if
      (boxes[6].innerHTML=="O" && boxes[7].innerHTML=="O" && boxes[8].innerHTML=="O"){
      alert("O win!");
      location.reload();
    }
    else if(boxes[0].innerHTML=="O" && boxes[3].innerHTML=="O" && boxes[6].innerHTML=="O"){
        alert("O win!");
        location.reload();
      } else if
     (boxes[1].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[7].innerHTML=="O" )
     {
        alert("O win!");
        location.reload();
      } else if
     (boxes[3].innerHTML=="O" && boxes[5].innerHTML=="O" && boxes[8].innerHTML=="O"){
        alert("O win!");
        location.reload();
      }
      else if(boxes[0].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[8].innerHTML=="O")
      {
        alert("O win!");
        location.reload();
    }else if
      (boxes[2].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[6].innerHTML=="O"){
        alert("O win!");
        location.reload();
    }
       }










function turnSwapper(){
    if(playerX){
        turn.innerHTML=`X's turn.`;
    }else{
        turn.innerHTML=`O's turn`;
    }
}
turnSwapper();

