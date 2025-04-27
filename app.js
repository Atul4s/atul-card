gsap.from(".icons i",{
    y:50,
    duration:1,
    Delay:1,
    opacity:0,
    stagger:.5,
 
    
})

gsap.from(".video-container",{
    y:150,
    duration:1,
    opacity:0,
  
    


})




gsap.from(".profile-pic",{
    y:100,
    duration:1,
    Delay:1,
    opacity:0,
  
    

})


gsap.from(".container img", {
    duration: 2, 

    x:150,
    stagger:1
})


gsap.from(".mywork h1", {
    y:50,
    duration:3,
    Delay:3,
    opacity:0,
    stagger:1,
    rotation: -360
})

var btn = document.querySelector(".follow-button")



function sendMail() {
    const subject = "Hello";
    const body = " ";
    window.location.href = `mailto:mrcool94126@gmail.com?subject=${subject}&body=${body}`;
  }


btn.addEventListener("click",function(){
    sendMail()
})