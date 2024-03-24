const navBarState = document.getElementById("hide-links");

function showNavbar() {
  if (navBarState.id == "hide-links") {
    navBarState.id = "show-links";
  } else if (navBarState.id == "show-links") {
    navBarState.id = "hide-links";
  }
}
