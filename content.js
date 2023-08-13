chrome.runtime.onMessage.addListener((message) => {
    switch (message) {
        case "toggle":
            document.body.classList.toggle('ar_twitch');
            break;
        default:
            alert('a7a :)');
            break;
    }
});
