function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Update hour hand
    var hourHand = document.querySelector('.heure');
    var hourAngle = (currentHours % 12) * 30 + currentMinutes / 2;
    hourHand.style.webkitTransform = 'translate(-50%, -100%) rotate(' + hourAngle + 'deg)';

    // Update minute hand
    var minuteHand = document.querySelector('.minute');
    var minuteAngle = currentMinutes * 6;
    minuteHand.style.webkitTransform = 'translate(-50%, -100%) rotate(' + minuteAngle + 'deg)';

    // Update second hand
    var secondHand = document.querySelector('.seconde');
    var secondAngle = currentSeconds * 6;
    secondHand.style.webkitTransform = 'translate(-50%, -100%) rotate(' + secondAngle + 'deg)';
}

setInterval(updateClock, 1000);
