// collect elements: ==================


  // header:
  var links = document.querySelectorAll(".header .links ul li a");
  // intro text:
var landing = document.querySelector(".landing"),
    introText = document.querySelector(".intro-text"),
    artDesignIntro = document.querySelector(".intro-text img"),
    slogan = document.querySelector(".intro-text .slogan"),
    resumeBtn = document.querySelector(".intro-text button"),
    resumeBtnIcon = document.querySelector(".intro-text button i")
  // intro monitor:
var introMonitor = document.querySelector(".intro-monitor"),
    monitorContainer = document.querySelector(".intro-monitor .monitor-container"),
    monitor = document.querySelector(".intro-monitor .monitor"),
    monitorLayers = document.querySelector(".intro-monitor .monitor-layers"),
    layers = document.querySelectorAll(".intro-monitor .monitor-layers img"),
    layersArr =Array.from(layers);

  // about me:
  var aboutBtn = document.querySelector(".about-content .btn"),
      aboutBtnIcon = document.querySelector(".about-content .btn i"),
      social = document.querySelector(".about-me .social-icons"),
      socialIcons = document.querySelectorAll(".about-me .social-icons a img");




// Landing Page:===========================================================
// on loading: ------
window.onload = function () {
  
    layers[0].classList.add("move");

    if (layers[0].classList.contains("move")) {
      setTimeout(() => {
        layers[1].classList.add("move");

        if(layers[1].classList.contains("move")) {
          setTimeout(() => {
          layers[2].classList.add("move");

          if(layers[2].classList.contains("move")) {
            setTimeout(() => {
            layers[3].classList.add("move");

            if(layers[3].classList.contains("move")) {
              setTimeout(() => {
              layers[4].classList.add("move");
              
                },550)
              }
            },400)
          }
        },350)
      }
    },300)
  }

  setTimeout(() => {
    introText.style.opacity = "1";
  },2500)
}

// Resume button: -----
resumeBtn.onclick = () => {
  window.open('resume.html','_blank');
}

resumeBtn.onmouseenter = () => {
  resumeBtnIcon.classList.add('fa-angle-double-right');
}

resumeBtn.onmouseleave = () => {
  resumeBtnIcon.classList.remove('fa-angle-double-right');
}


// About me:===========================================================
// about me button: -----
aboutBtn.onclick = () => {
  window.open('about.html','_blank');
}

aboutBtn.onmouseenter = () => {
  aboutBtnIcon.classList.add('fa-angle-double-right');
}

aboutBtn.onmouseleave = () => {
  aboutBtnIcon.classList.remove('fa-angle-double-right');
}

// Scroll to top button: ---------
var topBtn = document.querySelector("#top-btn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrolling()
}

function scrolling() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block"
  } else {
    topBtn.style.display = "none"
  }
}

// when user click on the button
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






