// // loading screen
// var loadingLogo = gsap.timeline({repeat: -1, yoyo: true});
// loadingLogo.to(".logo-container__filter", {top: 80, duration: 1});
// loadingLogo.to(".logo-container__filter svg", {top: -80, duration: 1}, "<");
// loadingLogo.to(".logo-container__filter", {top: 140, duration: 1});
// loadingLogo.to(".logo-container__filter svg", {top: -140, duration: 1}, "<");

//hide loading screen
var hideLoadingScreen = gsap.timeline({ onComplete: LoadingScreenCompleted ,paused: "true"})
    .to(".preload", {yPercent: 100, duration: 1})
    .to(".preload", {opacity: 0, pointerEvents: "none", duration: .01})
    .to(".preload", {yPercent: -100}, "<")
// show again loading screen
var showAgainLoadingScreen = gsap.timeline({paused: "true"})
    .to(".preload", {opacity: 1, pointerEvents: "auto"})
    .to(".preload", {yPercent: 0, duration: 1})
    .to(".preload", {yPercent: 100, duration: 1}, "<1.5")
    .to(".preload", {opacity: 0, pointerEvents: "none", duration: .01})
    .to(".preload", {yPercent: -100}, "<")

//initial animation
var initAnimation = gsap.timeline({paused: "true"})
    .from(".initanimation__gate-left p", { y: 10, opacity: 0, duration: .5})
    .from(".initanimation__gate-right p", { y: -10, opacity: 0, duration: .5}, "<")
    .from(".initanimation__gate-left p", { x: 40, duration: .5})
    .from(".initanimation__gate-right p", { x: -40, duration: .5}, "<")
    .to(".initanimation__gate-left p", { y: -10, duration: .5})
    .to(".initanimation__gate-right p", { y: 10, duration: .5}, "<")
    .to(".initanimation__gate-left", { xPercent: -100, duration: .5})
    .to(".initanimation__gate-right", { xPercent: 100, duration: .5}, "<")
    .to(".initanimation__bg-marquee.--toleft img", { xPercent: -100, duration: .5}, "<")
    .to(".initanimation__bg-marquee.--toright img", { xPercent: 100, duration: .5}, "<")
    .fromTo(".initanimation__bg-marquee.--toleft img",
        {xPercent: 0,},
        {xPercent: 20, duration: 2, ease: "linear"}, 0)
    .fromTo(".initanimation__bg-marquee.--toright img",
        {xPercent: 0,},
        {xPercent: 20 , duration: 2, ease: "linear"}, 0)
    .to(".initanimation",{yPercent: -100}, 2)