let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils);

// pupils movements
let pupilStartPoint = -100;
let pupilRange = 200;

// Mouse X position
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

// Mouse Y position
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    let pupilXCurrentPositon = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrentPositon = pupilStartPoint + (fracYValue * pupilRange);


    pupilsArr.forEach(curPupil => {
        curPupil.style.transform = `translate(${pupilXCurrentPositon}px, ${pupilYCurrentPositon}px)`;
    });
}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerWidth;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);
