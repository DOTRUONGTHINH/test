const myButton=document.getElementById("myButton");
const myAnimation=document.getElementById("Hung");

myButton.addEventListener("click", begin)
/*
function begin(){
    let timerId=null;
    let x=0;
    let y=0;
    timerId=setInterval(frame, 5);
    function frame(){
        if(y >=300 || x >=300) {
            clearInterval(timerId);//stop animation
        }
        else{
            x+=1
            y+=1;
            myAnimation.style.top=y+"px";
            myAnimation.style.left=x+"px";
        }
    }
}
*/
function begin(){
    let timerId=null;
    let degrees=0;
    let x=0;
    let y=0;

    timerId=setInterval(frame, 5);
    function frame(){
        if(x>=2000 || y>=2000) {
            clearInterval(timerId);//stop animation
        }
        else{
            degrees+=7;
            x+=4;
            y+=4;
            myAnimation.style.left=x+"px";
            myAnimation.style.top=y+"px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            //rotate the z dimension 
            //"scale("scaleX+","scaleY+")"; increase or decrease the scale of the stuff
        }
    }
}
