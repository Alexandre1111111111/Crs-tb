const mpd = document.querySelector("#mpd");
const cons = document.querySelector("#cons");
const ongs = document.querySelector(".ongs");
const btn_ong = document.querySelector("#btn_ong");

mpd.addEventListener("click", () => {
    if(mpd.style.height == "300px") {
        mpd.style.height = "700px";
        mpd.style.top = "0px";
        mpd.style.right = "0px";
        cons.style.display = "none";
        mpd.title="Clique para Retrair"
    }
    else {
        mpd.style.height = "300px";
        cons.style.display = "block";
        mpd.style.top = "190px";
        mpd.style.right = "30px";
        mpd.title="Clique para Expandir"
    }
})
mpd.addEventListener("mouseover", () => {
    mpd.style.border = "3px solid #20973a"; 
})
mpd.addEventListener("mouseout", () => {
    mpd.style.border = "3px solid #39e65e"; 
})

btn_ong.addEventListener("click", () => {
    if(ongs.style.animationName == "ong") {
    ongs.style.animationName = "ongback";
    setTimeout(() => {
        ongs.style.display = "none";
    }, 300)
    }
    else {
        ongs.style.animationName = "ong";
        ongs.style.display = "block";
    }
})