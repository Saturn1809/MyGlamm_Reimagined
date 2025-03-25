var rellax = new Rellax('.rellax');





gsap.to(".slides .box1",{
    transform:'translate(-200%)',
    duration:2,
    scrollTrigger:{
        trigger:".box1",
        start:"top 0",
        end:"+=1300",
        scrub:0.3,
    }
})
const windowWidth = window.innerWidth;

const desktopThreshold = 768; 

if (windowWidth >= desktopThreshold) {
    gsap.from(".un-text",{
        y:100,
        duration:0.8,
        delay:0.2,
        opacity:0,
        ease:"sine.out",
        scrollTrigger:{
            trigger:".cover-unlockstars",
            start:"top 30%",
            end:"top 0"
        }
    })
} else {
    console.log("You are not in desktop mode.");
}





