document.addEventListener("keypress", function(event) {
    if (event.code === "KeyA") {
        let audio = new Audio("sounds/zvuk-notyi-do.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio("sounds/zvuk-notyi-re.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = new Audio("sounds/zvuk-notyi-mi.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = new Audio("sounds/zvuk-notyi-fa.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = new Audio("sounds/zvuk-notyi-sol.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = new Audio("sounds/zvuk-notyi-lya.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = new Audio("sounds/zvuk-notyi-si.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = new Audio("sounds/E.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = new Audio("sounds/T.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio("sounds/U.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = new Audio("sounds/W.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = new Audio("sounds/Y.mp3");
        audio.play();
    }
})