document.addEventListener("DOMContentLoaded", function () {
    var jaarElement = document.getElementById('jaarText');
    var linksKnop = document.getElementById('linkerKnop');
    var rechtsKnop = document.getElementById('rechterKnop');
    var instructieTekst = document.getElementById('instructieTekst2');
    var banner = document.getElementById('banner');
    var huidigJaar = parseInt(jaarElement.innerText);
    var doelJaar = 2024;

    linksKnop.classList.add('fade-in');
    rechtsKnop.classList.add('fade-in');
    instructieTekst.classList.add('fade-in');

    startCountdownAnimation();

    document.addEventListener("keydown", function (event) {
        if (event.code === "ArrowLeft") {
            if (huidigJaar > 2024) {
                jaarElement.innerText = --huidigJaar;
                updateArrowsVisibility();
            }
        } else if (event.code === "ArrowRight") {
            if (huidigJaar < 2035) {
                jaarElement.innerText = ++huidigJaar;
                updateArrowsVisibility();
            }
        } else if (event.code === "Space") {
            fadeOut();
        }
    });

    document.getElementById("linkerKnop").addEventListener("click", function () {
        if (huidigJaar > 2024) {
            jaarElement.innerText = --huidigJaar;
            updateArrowsVisibility();
        }
    });

    document.getElementById("rechterKnop").addEventListener("click", function () {
        if (huidigJaar < 2035) {
            jaarElement.innerText = ++huidigJaar;
            updateArrowsVisibility();
        }
    });

    jaarElement.addEventListener("click", function () {
        fadeOut();
    });

    function updateArrowsVisibility() {
        const isLinkerZichtbaar = huidigJaar > 2024;
        const isRechterZichtbaar = huidigJaar < 2035;

        linksKnop.setAttribute('aria-hidden', isLinkerZichtbaar ? 'false' : 'true');
        rechtsKnop.setAttribute('aria-hidden', isRechterZichtbaar ? 'false' : 'true');

        linksKnop.style.opacity = isLinkerZichtbaar ? 1 : 0;
        rechtsKnop.style.opacity = isRechterZichtbaar ? 1 : 0;

        linksKnop.style.visibility = isLinkerZichtbaar ? 'visible' : 'hidden';
        rechtsKnop.style.visibility = isRechterZichtbaar ? 'visible' : 'hidden';
    }

    function startCountdownAnimation() {
        var countdownInterval = setInterval(function () {
            if (huidigJaar === doelJaar - 1) {
                clearInterval(countdownInterval);
            } else {
                jaarElement.textContent = huidigJaar--;
                updateArrowsVisibility();
            }
        }, 250);
    }

    function fadeOut() {
        instructieTekst.classList.add('fade-out');
        linksKnop.classList.add('fade-out');
        rechtsKnop.classList.add('fade-out');
        jaarElement.classList.add('fade-out');
        banner.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = '../Html/info.html?jaar=' + huidigJaar;
        }, 1500);
    }

    updateArrowsVisibility();
});
