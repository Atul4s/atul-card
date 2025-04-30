
let btn = document.querySelector(".follow-button")


function sendMail() {
    const subject = "Hello";
    const body = " ";
    window.location.href = `mailto:mrcool94126@gmail.com?subject=${subject}&body=${body}`;
  }


btn.addEventListener("click",function(){
    sendMail()
})



let box = document.querySelector(".box")

let box2 = document.querySelector(".box-two")

box.addEventListener("touchstart",function(){
     box.style.display = "none"
   
})

box2.addEventListener("touchstart",function(){
    box2.style.display = "none"
})



setInterval(function(){
    let tp = Math.floor(Math.random()*30)
    box.classList.add("animate");
    box.style.top = `${tp}rem`;
    box.style.animation = "3s slide-in";
    box.style.display = "flex";
    box2.style.display = "none";
},7000,)


setInterval(function(){
    let tp = Math.floor(Math.random()*30)
    box.style.display = "none";
    box2.classList.add("animate");
    box2.style.animation = "3s slide-in-2";
    box2.style.display = "flex";
    box2.style.top = `${tp}rem`;
  },14000,)



  const mediaQuery = window.matchMedia('(min-width: 800px)');

  if (mediaQuery.matches) {
    console.log('Viewport is <= 600px');
  } else {
    console.log('Viewport is > 600px');
  }