var numSelected=null;
var tileSelected=null;

var errors=0;

var board= [
    "--74916-5",
    "2---6-3-9",
    "-6---7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution=[
    "387491625",
    "241568375",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832914",
    "812945763"
]
/* to load the game*/
window.onload= function(){
    setGame();
}

function setGame(){
    //Digits 1-9
    for(let i=1;i<=9;i++)
    {
        //ye ek div tag create karta hai!
        //<div id="1" class="number">1</div>
        //isse ye sahuliyat hota hai ki digits class ke ander itne saare numbers(81)
        //nahi likhna padta!
        let number= document.createElement("div");
        number.id=i
        number.innerText=i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

//Board 9X9
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++){
        let tile=document.createElement("div");
        tile.id=r.toString()+"-"+c.toString();
        if(board[r][c]!="-"){
            tile.innerText=board[r][c];
            tile.classList.add("tile-start");
        }
        if(r==2||r==5){
            tile.classList.add("horizontal-line");
        }
        if(c==2||c==5){
            tile.classList.add("vertical-line");
        }
        tile.addEventListener("click",selectTile);
        tile.classList.add("tile");
        document.getElementById("board").append(tile);
    }
}
}

function selectNumber(){
    /*If there is a number selected already,we are going 
    to remove that styling so that it doesnt have the grey 
    background anymore.*/
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    /*then we are going to update it to a new number and 
    then add that background to the new number.*/ 
    numSelected=this;// this refers to div
    numSelected.classList.add("number-selected");
}
function selectTile(){
    /*Whenever we click on the tile we have to make sure that
    the number has been selected first.*/
    if(numSelected){
        if(this.innerText!=""){
            return;
        }
        /* now when we click on a number and then we select any tile
        its just going to automatically change the tile to that number.
        Now,we want to compare it with the solution so before we do that
        we need to get the coordinates of that tile so that we can check
        on the solution board.*/

        let coords=this.id.split("-");
        //the ids look like:-"0-0","0-1"etc etc.
        //it is going to split btw the dashes.
        //it creates an array of two individual numbers:["0","0"] etc etc.
        let r=parseInt(coords[0]);
        let c=parseInt(coords[1]);

        if(solution[r][c]==numSelected.id){
            this.innerText=numSelected.id;
        }
        else{
            errors+=1;
            document.getElementById("errors").innerText=errors;
        }
    }
}

