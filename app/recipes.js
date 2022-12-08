//mobile navigation menu
function mobileMenu() {
    //console.log("mobile menu");
    let menu = document.getElementById("mobileLinks");
        if (menu.style.display === "flex") {
          menu.style.display = "none";
        } else {
          menu.style.display = "flex";
        }
}