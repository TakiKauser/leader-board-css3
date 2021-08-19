const titles = document.getElementsByClassName("section-title");

titles[0].setAttribute("id", "top-players-title");
titles[1].setAttribute("id", "top-blogs-title");
titles[2].setAttribute("id", "latest-course-title");

document.getElementById("top-players-title").style.color = "rgba(7, 165, 212, 0.959)";
document.getElementById("top-blogs-title").style.color = "rgba(3, 88, 88, 0.938)";
document.getElementById("latest-course-title").style.color = "rgba(255, 68, 0, 0.884)";

// console.log(titles);
const players =document.querySelectorAll(".players div");
// console.log(players);
for(const player of players){
    player.style.margin = "10px";
    player.style.paddingLeft = "8px";
    player.style.backgroundColor = "rgba(128, 128, 128, 0.041)";
}