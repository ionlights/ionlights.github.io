const abouts = document.getElementById("about");
const navbar = document.getElementById("navbar-main");

const initial_body_margin_top = parseInt(document.body.style.marginTop);
const initial_abouts_padding_top = parseInt(abouts.style.paddingTop);

const targetOffset = 0.25 * window.innerHeight;
const navbarColor = window.getComputedStyle(navbar, null)
  .getPropertyValue("background-color")
  .replace("rgb(", "rgba(");

$(function() {
  // region Update Now Link
  for (let a of document.getElementsByTagName("a")) {
    if (a.href.includes("/now/latest")) {
      for (let v of document.getElementsByTagName("a")) {
        if (v.innerHTML.includes("Now, as of"))
          a.href = v.href;
      }
    }
  }
  // endregion

  // setStyles();
  // setResizeStyles();
  // fadeHomeNav();
  setEventListeners();
});

function setStyles() {
  document.body.style.boxSizing = "border-box!important";
  document.body.style.marginTop = 0;

  abouts.childNodes[1].style.display = "flex";
  abouts.childNodes[1].style.margin = "auto";
  abouts.style.display = "flex";
  abouts.style.minHeight = "80vh";
}

function setResizeStyles() {
  let pad = navbar.offsetHeight + initial_abouts_padding_top;
  console.log(`${pad}px!important`);
  abouts.style.paddingTop = `${pad}px`;
}

function fadeHomeNav() {
  let percent;
  if (window.scrollY >= targetOffset) {
    percent = 1;
  } else if (window.scrollY < navbar.offsetHeight) {
    percent = 0;
  } else {
    percent = window.scrollY / targetOffset;
  }
  let color = navbarColor.replace(")", `, ${percent})`);
  navbar.style.cssText = `background-color: ${color}!important`;
}


function setEventListeners() {
  window.addEventListener("resize", setResizeStyles);
  // window.addEventListener('scroll', fadeHomeNav);
}
