gsap.from('.logo h1', {
    x:-300,
    duration:1,
    scrub:5
})

gsap.from('.list', {
    y:-100,
    duration:1,
    scrub:5
})
gsap.from('.store', {
    x:300,
    duration:1,
    scrub:5,
    rotate:360
})
gsap.from('.bars', {
    x:300,
    duration:1,
    scrub:5,
})

gsap.from('.heroimage', {
    x:700,
    duration:1,
    scrub:5,
})
gsap.from('.herotext', {
    x:-700,
    duration:1,
    delay:1,
    scrub:5
})


gsap.from('.page2 .top', {
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        // overflow:hidden,
        trigger:'.page2 .top',
        scroller:'body',
        start:"top 99%",
        end:'top 99%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.page2 .one', {
    opacity:0,
    y:200,
    duration:1,
    // overflow:hidden,
    scrollTrigger:{
        // overflow:hidden,
        trigger:'.page2 .one',
        scroller:'body',
        start:"top 80%",
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.page2 .two', {
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:'.page2 .two',
        scroller:'body',
        start:"top 80%",
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.page2 .three', {
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:'.page2 .three',
        scroller:'body',
        start:"top 80%",
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.left', {
    opacity:0,
    x:-400,
    duration:1,
    scrollTrigger:{
        trigger:'.left',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.right', {
    opacity:0,
    x:400,
    duration:1,
    scrollTrigger:{
        trigger:'.right',
        scroller:'body',
        start:'top 60%',
        end:'top 60%',
        scrub:5,
        // markers:true
    }
})

gsap.from('.page4 .first', {
    opacity:0,
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.page4 .first',
        scroller:'body',
        start:"top 60%",
        end:'top 60%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.page4 .second', {
    opacity:0,
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.page4 .second',
        scroller:'body',
        start:"top 60%",
        end:'top 60%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.page4 .third', {
    opacity:0,
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.page4 .third',
        scroller:'body',
        start:"top 60%",
        end:'top 60%',
        scrub:5,
        // markers:true
    }
})

gsap.from('.cook', {
    opacity:0,
    x:-400,
    duration:1,
    scrollTrigger:{
        trigger:'.cook',
        scroller:'body',
        start:'top 70%',
        end:'top 70%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.chef', {
    opacity:0,
    x:400,
    duration:1,
    scrollTrigger:{
        trigger:'.chef',
        scroller:'body',
        start:'top 70%',
        end:'top 70%',
        scrub:5,
        // markers:true
    }
})

gsap.from('.customer h1', {
    opacity:0,
    x:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.customer h1',
        scroller:'body',
        start:'top 80%',
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.customer p', {
    opacity:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:'.customer p',
        scroller:'body',
        start:'top 80%',
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.feedback', {
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:'.feedback',
        scroller:'body',
        start:'top 90%',
        end:'top 90%',
        scrub:5,
        // markers:true
    }
})

gsap.from('.quote', {
    opacity:0,
    x:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.quote',
        scroller:'body',
        start:'top 90%',
        end:'top 90%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.product', {
    opacity:0,
    x:-100,
    duration:1,
    scrollTrigger:{
        trigger:'.quote',
        scroller:'body',
        start:'top 80%',
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.info', {
    opacity:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:'.quote',
        scroller:'body',
        start:'top 80%',
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})
gsap.from('.company', {
    opacity:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:'.quote',
        scroller:'body',
        start:'top 80%',
        end:'top 80%',
        scrub:5,
        // markers:true
    }
})


gsap.from('.last2', {
    opacity:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:'.last2',
        scroller:'body',
        start:'top 100%',
        end:'top 100%',
        scrub:5,
        // markers:true
    }
})

// gsap.registerPlugin(scrollTrigger);

// let mm = gsap.matchMedia();

// mm.add("(min-width: 600px)", () => {

//     gsap.to('.one', {
//         opacity:0,
//         x: 100,
//         duration:1,
//         overflow:hidden,
//         scrollTrigger:{
//             trigger:' .one',
//             scroller:'body',
//             start:"top 80%",
//             end:'top 80%',
//             scrub:5,}
//             // markers:true
// })

// })