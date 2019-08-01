//? When we scroll the page create parallax
//? we want to move certain tags, based on how far away they are from the anchor point
//? make the anchor the middle of the screen
//? find the ratio the distance scrolled from the anchor point

//! 1. Add in the '.pg-scroll' on the wrapper div
//! 2. Add in '[data-pg-speed]' to all items that you want to have parallax
    //todo positive go in the direction of the scroll and negative go opposite
    //todo the higher the number the faster the speed of the animation

    const pgScroll = document.querySelectorAll('.pg-scroll')

    function parallaxPgScroll(){
        const topViewport = window.pageYOffset;
        const midViewport = topViewport + (window.innerHeight / 2);
    
        pgScroll.forEach( pg => {       
            // Run this if it already has a data attribute set
            const topSection = pg.offsetTop;
            const midSection = topSection + (pg.offsetHeight / 2);
    
            const distanceToSection = midViewport - midSection;
    
            const tags = pg.querySelectorAll('[data-pg-speed]');
    
            tags.forEach(tag => {
                const pgSpeed = parseFloat(tag.getAttribute('data-pg-speed'));
    
                tag.style.transform = `translate(0, ${(distanceToSection * pgSpeed) / 2}px)`;
                tag.style.transition = "transform ease"
            })
            
        })
    }


    //! Toggle the classes that I want to animate on scroll
const fadeItem = document.querySelectorAll('.fadeIn');
const slideDownItem = document.querySelectorAll('.slideDown');
const slideRightItemFade = document.querySelectorAll('.slideRightFade');
const slideLeftItemFade = document.querySelectorAll('.slideLeftFade');
const lines = document.querySelectorAll('.line');

const fadeIn = () => {
    let delay = 0.25;

    fadeItem.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const bottom = event.getBoundingClientRect().bottom;

        if(top < window.innerHeight && bottom > 0){
            event.style.animation = `fadeIn 1s ${delay}s both`;
            delay = delay + 0.25;
        } else{
            event.style.opacity = "0";
            event.style.animation = "";
        }
    })
}

const slideDown = () => {
    let delay = 0.25;

    slideDownItem.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const bottom = event.getBoundingClientRect().bottom;

        if(top < window.innerHeight && bottom > 0){
            event.style.animation = `slideDown .6s ease ${delay}s both`;
            delay = delay + 0.25;
        } else{
            event.style.transform = "translateY(-100%)";
            event.style.animation = "";
        }
    })
}

const slideRightFade = () => {
    let delay = 0.2;

    slideRightItemFade.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const bottom = event.getBoundingClientRect().bottom;

        if(top < window.innerHeight && bottom > 0){
            event.style.animation = `slideRightFade .3s ease ${delay}s both`;
            delay = delay + 0.25;
        } else{
            event.style.transform = "translateX(-50%)";
            event.style.opacity = "0";
            event.style.animation = "";
        }
    })
}

const slideLeftFade = () => {
    let delay = 0.2;

    slideLeftItemFade.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const bottom = event.getBoundingClientRect().bottom;

        if(top < window.innerHeight && bottom > 0){
            event.style.animation = `slideLeftFade .3s ease ${delay}s both`;
            delay = delay + 0.25;
        } else{
            event.style.transform = "translateX(-50%)";
            event.style.opacity = "0";
            event.style.animation = "";
        }
    })
}

const lineAnimation = () => {
    lines.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const bottom = event.getBoundingClientRect().bottom;

        if(top < window.innerHeight && bottom > 0){
            event.style.animation = `lineAppear .6s ease both`;
        } else{
            event.style.transform = "scaleY(0)";
            event.style.opacity = "0";
            event.style.animation = "";
        }
    })
}


document.addEventListener('scroll', () => {
    fadeIn();
    slideRightFade();
    slideLeftFade();
    slideDown();
    parallaxPgScroll();
    lineAnimation();
})

//! When we resize the window run our animations

window.addEventListener('resize', () => {
    lineAnimation();
    fadeIn();
    slideDown();
    slideRightFade();
    slideLeftFade();
})

