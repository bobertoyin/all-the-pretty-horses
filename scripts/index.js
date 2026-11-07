import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export function getCurrentWeek() {
    const urlParams = new URLSearchParams(window.location.search);
    return Number(urlParams.get("week") ?? 1);
}

export function togglePartsByWeek(currentWeek) {

    const partsList = document.getElementById("parts").children;

    for (let i = 0; i < partsList.length; i++) {
        if (i + 1 > currentWeek) {
            partsList[i].style.display = "none";
        }
    }
}

export function animateHorses(week) {
    animateHorse(document.getElementById("horse1"), 60);
    if (week >= 2) {
        animateHorse(document.getElementById("horse2"), 1);
    } else {
        hideHorse(document.getElementById("horse2"));
    }
    if (week >= 3) {
        animateBackwardHorse(document.getElementById("horse3"), 10);
    } else {
        hideHorse(document.getElementById("horse3"));
    }
    if (week >= 4) {
        animateSpinningHorse(document.getElementById("horse4"), 1.5);
    } else {
        hideHorse(document.getElementById("horse4"));
    }
}

function animateHorse(horse, duration) {
    const sequence = [
        [horse, {x: window.innerWidth - 150}], // walk forward
        [horse, {rotateY: 180}], // turn around
        [horse, {x: 0}], // walk back
        [horse, {rotateY: 360}], // turn back around
    ];
    animate(
        sequence,
        { repeat: Infinity, duration: duration, ease: "linear" }
    );
}

function animateBackwardHorse(horse, duration) {
    const sequence = [
        [horse, {rotateY: 180}], // turn around
        [horse, {x: -200}], // walk back
        [horse, {rotateY: 360}], // turn back around
        [horse, {x: 0}], // walk forward
    ];
    animate(
        sequence,
        { repeat: Infinity, duration: duration, ease: "linear" }
    );
}

function animateSpinningHorse(horse, duration) {
    const sequence = [
        [horse, {rotate: 360}],
    ];
    animate(
        sequence,
        { repeat: Infinity, duration: duration, ease: "linear" }
    );
}

function hideHorse(horse) {
    horse.style.display = "none";
}