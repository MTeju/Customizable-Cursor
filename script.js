let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");
let image = document.querySelector(".image");

container.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out(1)",
    })
});

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "Hai i'm image"
    gsap.to(cursor,{
        scale: 4,
        backgroundColor : "rgba(170, 170, 170, 0.536)"
    })
})

image.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor : "black"
    })
})