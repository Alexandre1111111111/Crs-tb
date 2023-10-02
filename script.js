const mpd = document.querySelector("#mpd");
const cons = document.querySelector("#cons");
mpd.addEventListener("click", () => {
    if(mpd.style.position == "absolute") {
        mpd.style.height = "700px";
        mpd.style.position = "unset";
        cons.style.display = "none";
        mpd.title="Clique para Retrair"
    }
    else {
        mpd.style.height = "300px";
        mpd.style.position = "absolute";
        cons.style.display = "block";
        mpd.title="Clique para Expandir"
    }
})
mpd.addEventListener("mouseover", () => {
    mpd.style.border = "3px solid #20973a"; 
})
mpd.addEventListener("mouseout", () => {
    mpd.style.border = "3px solid #39e65e"; 
})