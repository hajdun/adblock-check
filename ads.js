// ads.js (bait file - named to be blocked)
window.adBlockNotDetected = true;

// main.js
setTimeout(() => {
    if (!window.adBlockNotDetected) {
        console.log('Blocked!')
    } else {
        console.log("no blocker")
    }
}, 100);