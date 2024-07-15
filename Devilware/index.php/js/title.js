if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; N|", "&#128293; Ne|", "&#128293; Nev|", "&#128293; Neve|", "&#128293; Never|", "&#128293; NeverC|", "&#128293; NeverCa|", "&#128293; NeverCat|","&#128293; NeverCatc|","&#128293; NeverCatch|","&#128293; NeverCatchM|","&#128293; NeverCatchMe|","&#128293; NeverCatchMe","&#128293; NeverCatchMe","&#128293; NeverCatchMe","&#128293; NeverCatchMe|","&#128293; NeverCatchM|","&#128293; NeverCatch|","&#128293; NeverCatc|", "&#128293; NeverCat|", "&#128293; NeverCa|", "&#128293; NeverC|", "&#128293; Never|", "&#128293; Never|", "&#128293; Neve|", "&#128293; Nev|", "&#128293; Ne|", "&#128293; N|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

