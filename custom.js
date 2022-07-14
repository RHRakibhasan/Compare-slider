document.querySelector(".compare .before .after").style.width = "300px";
document.querySelector(".compare #compare-ip").addEventListener("input", function(x) {
    document.querySelector(".compare .before .after").style.width = (+x.target.value) + "px";
});