var imageObject=document.querySelector('img');
const basket = document.querySelectorAll("img")[1]

var top_position=0;

var left_position=Math.random()*(window.innerWidth-imageObject.width);
imageObject.style.left=left_position + "px";

function moveDown(){
var id=setInterval(function(){
    if(top_position<window.innerHeight-imageObject.height){
        top_position+=20;
        imageObject.style.top=top_position+'px';
    
    }
    else{
        clearInterval(id);
        setInterval(()=>{
          imageObject.src="images/Uovo_sorridente.png";
        },200)
        
    }


},100)
}
moveDown();

const controlBasket = (imgObject) =>{
    let keyCount = 0;
window.onkeydown = function(event){
   
const keyCode = event.keyCode
if (keyCode == 39){
    keyCount += 15;
    imgObject.style.left = keyCount +"px";
  
}
if (keyCode == 37){
    keyCount -= 8;
    imgObject.style.left = keyCount +"px";
}

}

}


controlBasket(basket);
