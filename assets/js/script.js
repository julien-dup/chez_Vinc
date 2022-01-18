let navBar = document.getElementById("navBar");
let navBar2 = document.getElementById("navBar2");
let img = document.getElementById("img")

navBar2.style.display = "none"

document.addEventListener("scroll", function() {

    var intElemScrollDown = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(intElemScrollDown)

    if (intElemScrollDown > 100) {
        navBar.style.display = "none"
        navBar2.style.display = "flex"

    } else {
        navBar.style.display = "flex"
        navBar2.style.display = "none"
    }

    if (2584 < intElemScrollDown && intElemScrollDown < 3200) {
        console.log("ok")
        document.getElementById("img").id = "imgBig";
        document.getElementById("img2").id = "imgBig2";
        document.getElementById("img3").id = "imgBig3";
        document.getElementById("img4").id = "imgBig4";
    } else {
        console.log("k0")
        document.getElementById("imgBig").id = "img";
        document.getElementById("imgBig2").id = "img2";
        document.getElementById("imgBig3").id = "img3";
        document.getElementById("imgBig4").id = "img4";

    }

})