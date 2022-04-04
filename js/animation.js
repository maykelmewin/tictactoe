// // loading screen
// var loadingLogo = gsap.timeline({repeat: -1, yoyo: true});
// loadingLogo.to(".logo-container__filter", {top: 80, duration: 1});
// loadingLogo.to(".logo-container__filter svg", {top: -80, duration: 1}, "<");
// loadingLogo.to(".logo-container__filter", {top: 140, duration: 1});
// loadingLogo.to(".logo-container__filter svg", {top: -140, duration: 1}, "<");

//hide loading screen
var showLoadingScreen = gsap.timeline({ onComplete: LoadingScreenCompleted ,paused: "true"})
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

function LoadingScreenCompleted(){
    for (j in buttons) {
        buttons[j].disabled = false;
    }
}