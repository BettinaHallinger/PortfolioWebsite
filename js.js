window.onscroll = function () {
  chanceColor();
};
function chanceColor() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navigation").style.background = "#111";
    document.getElementById("logo").style.background = "#fff";
  } else if (
    document.body.scrollTop < 150 ||
    document.documentElement.scrollTop < 150
  ) {
    document.getElementById("navigation").style.background = "none";
    document.getElementById("logo").style.background = "#000";
  } else if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("text").css("display", "none");
    document.getElementById("text").fadeIn(5000);
  }
}
