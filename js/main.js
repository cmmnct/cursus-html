/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    let topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
  }

