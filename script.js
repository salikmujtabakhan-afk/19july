// =======================================================
// THE JOURNEY TO JULY 19 🌻
// Cinematic Birthday Experience
// Version 4.0
// By Mujtaba
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // ===================================================
    // JOURNEY STATE
    // ===================================================

    const Journey = {

        currentScene: 1,
        totalScenes: 9,
        locked: false,
        musicStarted: false,
        heartOpened: false,
        musicBoxOpened: false,
        letterOpened: false,
        wishMade: false,
        finalStarted: false

    };

    // ===================================================
    // ELEMENTS
    // ===================================================

    const scenes = document.querySelectorAll(".scene");

    const loader = document.getElementById("loader");

    const progressBar = document.getElementById("progressBar");

    const musicButton = document.getElementById("musicButton");

    const beginJourney = document.getElementById("beginJourney");

    // Scene 2

    const yearInput = document.getElementById("yearInput");

    const unlockButton = document.getElementById("unlockButton");

    const puzzleResponse = document.getElementById("puzzleResponse");

    // Scene 3

    const whiteHeart = document.getElementById("whiteHeart");

    const heartHint = document.getElementById("heartHint");

    const sunflowerMessage = document.getElementById("sunflowerMessage");

    const continueTimeline =
        document.getElementById("continueTimeline");

    // Scene 4

    const timelineImage =
        document.getElementById("timelineImage");

    const timelineTitle =
        document.getElementById("timelineTitle");

    const timelineDescription =
        document.getElementById("timelineDescription");

    const previousMemory =
        document.getElementById("previousMemory");

    const nextMemory =
        document.getElementById("nextMemory");

    const continueConstellation =
        document.getElementById("continueConstellation");

    const timelineDots =
        document.querySelectorAll("#scene4 .timelineDots span");

    // Scene 5

    const memoryStars =
        document.querySelectorAll(".memoryStar");

    const memoryModal =
        document.getElementById("memoryModal");

    const memoryPhoto =
        document.getElementById("memoryPhoto");

    const memoryTitle =
        document.getElementById("memoryTitle");

    const memoryText =
        document.getElementById("memoryText");

    const closeMemory =
        document.getElementById("closeMemory");

    const memoryCount =
        document.getElementById("memoryCount");

    const continueMusic =
        document.getElementById("continueMusic");

    // Scene 6

    const musicBox =
        document.getElementById("musicBox");

    const openMusicBox =
        document.getElementById("openMusicBox");

    const floatingPhotos =
        document.getElementById("floatingPhotos");

    const continueLetter =
        document.getElementById("continueLetter");

    // Scene 7

    const envelope =
        document.getElementById("envelope");

    const waxSeal =
        document.getElementById("waxSeal");

    const openLetter =
        document.getElementById("openLetter");

    const letterPaper =
        document.getElementById("letterPaper");

    const typewriterLetter =
        document.getElementById("typewriterLetter");

    const continueCake =
        document.getElementById("continueCake");

    // Scene 8

    const makeWish =
        document.getElementById("makeWish");

    const flame =
        document.querySelector(".flame");

    const wishMessage =
        document.getElementById("wishMessage");

    const continueFinal =
        document.getElementById("continueFinal");

    // Scene 9

    const loveReveal =
        document.getElementById("loveReveal");

    const finalMessage =
        document.getElementById("finalMessage");

    const signature =
        document.getElementById("signature");

    const secretMessage =
        document.getElementById("secretMessage");

    const restartJourney =
        document.getElementById("restartJourney");

    // Audio

    const ambientAudio =
        document.getElementById("ambientAudio");

    const birthdaySong =
        document.getElementById("birthdaySong");

    const heartbeatAudio =
        document.getElementById("heartbeatAudio");

    const paperAudio =
        document.getElementById("paperAudio");

    const candleAudio =
        document.getElementById("candleAudio");

    const clickAudio =
        document.getElementById("clickAudio");
        