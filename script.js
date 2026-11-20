function openGift() {

    document.querySelector(".gift img").classList.add("spin");

    setTimeout(function() {

        document.querySelector(".left-curtain").classList.add("open");
        document.querySelector(".right-curtain").classList.add("open");
        document.querySelector(".landing").classList.add("hide");

        // Show the birthday banner
        document.querySelector("#birthdayBanner").classList.add("show");

        // Wait until curtains are halfway open
        setTimeout(function() {
            createRibbonBurst();

            setTimeout(function() {
                document.querySelector("#birthdayBanner").classList.add("settle");
            }, 2500);

        }, 750);

    }, 2000);
}
/*document.querySelector()
Finds an HTML element using a CSS selector.

.classList
Accesses the classes attached to that HTML element.

.add("open")
Adds the class open to the element.
 */

function goBack() {
    document.querySelector(".left-curtain").classList.remove("open");
    document.querySelector(".right-curtain").classList.remove("open");

    document.querySelector(".landing").classList.remove("hide");

    document.querySelector(".gift img").classList.remove("spin");
    document.querySelector("#birthdayBanner").classList.remove("show", "settle");

    document.querySelector("#ribbonBurst").innerHTML = "";

}

// Creates a colourful ribbon burst
function createRibbonBurst() {

    const burst = document.querySelector("#ribbonBurst");

    const colours = [
        "#ff1744",
        "#ff9100",
        "#ffea00",
        "#00e676",
        "#00b0ff",
        "#d500f9",
        "#ff4081"
    ];

    burst.innerHTML = "";

    for (let i = 0; i < 35; i++) {

        let ribbon = document.createElement("span");

        ribbon.style.backgroundColor =
            colours[Math.floor(Math.random() * colours.length)];

        ribbon.style.setProperty("--x", (Math.random() * 500 - 250) + "px");
        ribbon.style.setProperty("--y", (Math.random() * 300 - 150) + "px");
        ribbon.style.setProperty("--rotation", (Math.random() * 720 - 360) + "deg");

        ribbon.style.animationDelay = (Math.random() * 0.4) + "s";

        burst.appendChild(ribbon);
    }
}