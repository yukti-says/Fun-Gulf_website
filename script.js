var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
})

var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove" , function(dets){
    crsrblr.style.left = dets.x - 250 + "px"
    crsrblr.style.top = dets.y -250 + "px"
})



gsap.to("#nav" , {

    backgroundColor : "#000",
    height : "70px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end : "top -10%",
        scrub:1
    }
   
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})

// select multiple elements on the page 
 var h4all =  document.querySelectorAll("#nav h4");
//  these h4 are came in form of node list-treat it as array
h4all.forEach(function (elem){
    // console.log(ele)
    elem.addEventListener("mouseenter" , function(){
     crsr.style.scale = 2
     crsr.style.border = "0.5px solid #fff"
     crsr.style.backgroundColor = "transparent"
    })


    elem.addEventListener("mouseleave" , function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
       })

})


gsap.from("#about-us img , #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // marksers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:2
    }
})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
   
    // stagger:0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        // marksers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:2
    }
})