// Elements
const bgMusic = document.getElementById("bgMusic");
const openSound = document.getElementById("openSound");
const yaySound = document.getElementById("yaySound");
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// Open Envelope

envelope.addEventListener("click", () => {
     openSound.play();
    bgMusic.play();

    envelope.style.display = "none";
    letter.style.display = "flex";

    envelope.style.display = "none";
    letter.style.display = "flex";


    setTimeout(() => {

        document
        .querySelector(".letter-window")
        .classList.add("open");

    },50);


});




// NO button runs away

noBtn.addEventListener("mouseover", () => {


    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;


    noBtn.style.transform =
    `translate(${x}px,${y}px)`;

});





// YES button

let yesScale = 1;


noBtn.addEventListener("click",()=>{

    yesScale +=0.3;

    yesBtn.style.transform =
    `scale(${yesScale})`;

});




// YES CLICK

yesBtn.addEventListener("click",()=>{
  yaySound.play();

    title.textContent =
    "Yeayy!! I knew you would say yes..(Also I loved today❤️)";


    catImg.src="cat_dance.gif";


    buttons.style.display="none";


    finalText.style.display="block";


    document
    .querySelector(".letter-window")
    .classList.add("final");


    createHearts();



});




// Heart Explosion

function createHearts(){


    for(let i=0;i<80;i++){


        let heart=document.createElement("div");

        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left="50%";
        heart.style.top="50%";


        heart.style.fontSize=
        Math.random()*30+15+"px";


        heart.style.transition="3s";


        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.style.transform=
            `translate(
            ${Math.random()*800-400}px,
            ${Math.random()*800-400}px
            ) rotate(360deg)`;

            heart.style.opacity=0;


        },50);



        setTimeout(()=>{

            heart.remove();

        },3000);


    }


}
