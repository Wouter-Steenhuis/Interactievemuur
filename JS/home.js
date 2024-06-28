document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        fadeOut();
    }
});

var instructieTekstElement = document.getElementById('instructieTekst');
var clickableHeartElement = document.getElementById('clickableHeart');
var tekstElement = document.getElementById('jaarText');

clickableHeartElement.addEventListener('click', function() {
    fadeOut();
});

function fadeOut() {
    clickableHeartElement.style.animation = 'heartAnimation 4s forwards';
    instructieTekstElement.style.transition = 'opacity 1s';
    instructieTekstElement.style.opacity = 0;

    setTimeout(function() {
        window.location.href = '../Html/select.html';
    }, 3999);
}
