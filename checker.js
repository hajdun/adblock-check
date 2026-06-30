function classifyBait(el) {
    if (!el) return "missing-bait";
    const { offsetWidth, offsetHeight } = el;
    const { display, visibility } = getComputedStyle(el);
    const d = display.toLowerCase();
    const v = visibility.toLowerCase();
    if (d === "none" || d === "contents" || v === "hidden") {
        return "hidden (common when an extension applies cosmetic filters)";
    }
    if (offsetWidth === 0 && offsetHeight === 0) {
        return "zero box (collapsed bait or removed from layout)";
    }
    return "visible bait (no strong blocklist signal from this probe alone)";
}

const bait = document.querySelector("#bait .ads");

function run() {
    console.log(classifyBait(bait));
}

requestAnimationFrame(run);