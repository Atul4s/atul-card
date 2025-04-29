
var btn = document.querySelector(".follow-button")


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







setInterval(function(){
    let tp = Math.floor(Math.random()*30)
    box.classList.add("animate");
    box.style.top = `${tp}rem`;
    box.style.animation = "3s slide-in";
    box.style.display = "flex";
    box2.style.display = "none";
},8000,)


setInterval(function(){
    let tp = Math.floor(Math.random()*30)
    box.style.display = "none";
    box2.classList.add("animate");
    box2.style.animation = "3s slide-in-2";
    box2.style.display = "flex";
    box2.style.top = `${tp}rem`;
  },16000,)



//   setInterval(function(){
//     box2.classList.add("animate");
//     box2.style.animation = "3s slide-in-2";
//     box2.style.display = "flex";
    
// },18000,)




// setInterval(function(){
//     box2.style.display = "none";
//   },15000,)

