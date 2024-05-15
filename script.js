
let currPlayer="X";
let gameover=false
let arr=Array(9).fill(null)
function checkWinner(){
   
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
         document.getElementById("message").innerHTML=`<div>  🏆 ${currPlayer} is Winner </div>`
    
        gameover=true
        return true;
    } else if (arr.every((item) => item !== null)) {
        document.getElementById("message").innerHTML=`<div>draw</div>`
        document.getElementById("message").style.color;
        
        return true;
    }
    return false;
}
function handleclick(element){
    if(gameover)return
    let index=Number(element.id);
    if(arr[index]==null){

   
    arr[index]=currPlayer;
    console.log(arr);
    element.innerHTML=currPlayer
    checkWinner()
    currPlayer=currPlayer==='X'?"O":"X"
}
}  