let drums = document.querySelectorAll(".drum");
let start = document.querySelector(".start");
let gameover = document.querySelector("#game-over")
let array_drums = Array.from(drums);
let array_alphabet = ["w","a","s","d","j","k","l"]; 
let body = document.querySelector("#body")
//console.log(array_drums);



array_drums.forEach((drum)=>{
    drum.addEventListener("click",(event)=>{
        //console.log(event.target.innerHTML);
        playing(event.target.innerHTML)
    })
})

document.addEventListener("keypress",(e)=>{
    //console.log(e);
    playing(e.key);
})


function playing (value){
    let random_number = Math.floor(Math.random()*7);
    let scare = new Audio("sounds/Scare.mp3");
    if(array_alphabet.includes(value)){
        if(array_alphabet.indexOf(value)==random_number && start.style.visibility != "hidden"){
            console.log(random_number);
            start.style.visibility = "hidden";
            body.classList.add("end");
            scare.play();

            setTimeout(()=>{
                gameover.style.visibility = "visible";
            },800)
        }
        else if(start.style.visibility != "hidden"&&array_alphabet.indexOf(value)!=random_number){
                drums_sounds(value);  
                btn_style(value);
        }
    }
    
}



function drums_sounds(value){
    switch (value)
    {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
            
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
                
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3') 
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
            
        case "j":
            let snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;

        case "k":
            let crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;

        case "l":
            let kick_bass = new Audio('sounds/kick-bass.mp3')
            kick_bass.play();
            break;
            
        default:
            console.log(value);
        break;
    }
}

function btn_style(value){
    //console.log(value);
    let btn = document.querySelector("."+value)
    btn.classList.add("pressed");
     setTimeout(() => {
         btn.classList.remove("pressed")
     }, 100);
}

