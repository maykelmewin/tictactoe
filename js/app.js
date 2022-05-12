// disable all buttons when loading
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

const modal = document.querySelector("[data-modal]")
const undoBtn =  document.getElementById('undoButton');
const restartBtn =  document.getElementById('restartButton');

settingBtn.onclick = () => {
    preloading();
    setTimeout(function() {
        openModal('setting');
    }, 2000);
}

restartBtn.onclick = () => {
    preloading();
    setTimeout(function() {
       gameRestart()
    }, 2000);
}

modal.onclick = () => {
    alert('modal')
}