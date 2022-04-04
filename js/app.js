const buttons = document.querySelectorAll('button');

window.addEventListener('load', () => {
    showLoadingScreen.play();

    for (j in buttons) {
        buttons[j].disabled = true;
    }
});

function LoadingScreenCompleted(){
    for (j in buttons) {
        buttons[j].disabled = false;
    }
}