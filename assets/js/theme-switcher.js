var themeSwitcher = document.getElementById("themeSwitcher");

themeSwitcher.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeSwitcher.src = "./assets/images/sun.webp";
        brandLogo.src = "./assets/images/futlife-brandlogo-white.png";
    } else {
        themeSwitcher.src = "./assets/images/moon.webp";
        brandLogo.src = "./assets/images/futlife-brandlogo-black.png";
    }
}
