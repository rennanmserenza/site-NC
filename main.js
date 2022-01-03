function menuIconToggler(x) {
    x.classList.toggle("change");
}

function responsiveToggler() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 