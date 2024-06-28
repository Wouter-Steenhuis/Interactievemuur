document.addEventListener("DOMContentLoaded", function () {
    var terugKnop = document.getElementById('terugKnop');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');

    terugKnop.addEventListener("click", function () {
        goBack();
    });

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            startVideo2();
        } else if (event.code === "ArrowUp") {
            goBack();
        } else if (event.code === "ArrowRight") {
            pauseVideo2();
        }
    });

    function goBack() {
        window.history.back();
    }

    function replayVideo1() {
        video1.currentTime = 0;
        video1.play();
    }

    function startVideo2() {
        if (video2) {
            video2.play();
        }
    }

    function pauseVideo2() {
        if (video2) {
            video2.pause();
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return null;
    }

    var jaar = getQueryVariable('jaar');
    console.log('Geselecteerd jaar:', jaar);

    var selectJaarElement = document.getElementById('selectJaar');

    if (selectJaarElement) {
        selectJaarElement.textContent = jaar;
    }

    setTimeout(function () {
        if (video1) {
            video1.play();
        }
    }, 5000);
});
