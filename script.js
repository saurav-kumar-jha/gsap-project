var ipath = `M 10 100 Q 500 100 990 100`
var fpath = `M 10 100 Q 500 100 990 100`
var main = document.querySelector("#main")

main.addEventListener("mousemove",(dets)=>{
    ipath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`,
    gsap.to("svg path",{
        attr:{d:ipath},
        duration:0.5,
        ease: "power3.out"
    })
})

main.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:fpath},
        duration:1.5,
        ease: "elastic.out(2,0.1)"
    })
})