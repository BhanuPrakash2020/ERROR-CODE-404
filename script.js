    function playAudio(audioFileName) {
            var audio = new Audio(audioFileName);
        audio.play();
    }
function toggleBackgroundColor() {
    var body = document.body;
    var text = document.label;
    var currentColor = window.getComputedStyle(body).getPropertyValue('background-color');

    if (currentColor === 'rgb(240, 240, 240)') {
        body.style.backgroundColor = 'rgb(34, 34, 30)';
        body.style.color = 'rgb(240, 240, 240)';
        } else {
        body.style.backgroundColor = 'rgb(240, 240, 240)';
        body.style.color = 'black'
        }
    }