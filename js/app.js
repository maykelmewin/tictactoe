const buttons = document.querySelectorAll('button');

window.addEventListener('load', () => {
    hideLoadingScreen.play();
    initAnimation.play();

    for (j in buttons) {
        buttons[j].disabled = true;
    }
});

function LoadingScreenCompleted(){
    for (j in buttons) {
        buttons[j].disabled = false;
    }
}