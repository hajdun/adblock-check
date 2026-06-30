(function () {
    'use strict';
    window.adsAreWithUs = true;
})();


async function detectAdBlock() {
    let adBlockEnabled = false
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    try {
        await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
    } catch (e) {
        adBlockEnabled = true
    } finally {
        // actual result
        console.log(`AdBlock Enabled: ${adBlockEnabled}`)
    }
}
detectAdBlock()