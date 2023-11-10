let btnEl=document.querySelector(".generate");
let serialEl=document.querySelector(".serial");

btnEl.onclick= function (){
    let characters="1234567890abcdefghjklmnopqrstuwvxyzABCDEFGHJKLMNOPQRSTVWYZXU";
    let charCount=10;
    let randomserial="";
    for (let i=0; i<charCount;i++){
        randomserial+=(characters[Math.floor(Math.random()*characters.length)]);
        //console.log(randomserial)

        serialEl.innerHTML=randomserial
        
    }
}
