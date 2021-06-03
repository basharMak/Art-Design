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
      aboutBtnIcon = document.querySelector(".about-content .btn i");
/*      social = document.querySelector(".about-me .social-icons"),
      socialIcons = document.querySelectorAll(".about-me .social-icons a img"); */




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

// Window scrolling:
window.onscroll = function() {
  scrolling();
  aboutSection();
  skillsSection();
  workSection();
  careersSection();

}

// show hide button on scrolling:
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





// 1- animate about section on window scrolling:
let aboutMe = document.querySelector("#about-me")

function aboutSection() {
  let aboutOffsetTop = aboutMe.offsetTop,
      aboutOffsetHeight = aboutMe.offsetHeight,
      windowHeight = this.innerHeight,
      windowScrollTop = this.pageYOffset;

  if(windowScrollTop > aboutOffsetTop + aboutOffsetHeight - windowHeight) {
    let aboutImg = document.querySelector(".about-me .about-content img");
        aboutImg.style.opacity = "1";
    let aboutText = document.querySelector(".about-me .about-content .about-text");
        setTimeout(function() {
          aboutText.style.opacity = "1";
        },1000)
    let socialBase = document.querySelector(".social-base");
        socialBase.style.transform = "translateX(0)";
    let social = document.querySelector(".about-me .social-icons");
        social.style.transform = "translateX(0)";

  }
}




// 2- animate computer skills section on window scrolling:
let skills = document.querySelector("#computer-skills")

function skillsSection() {
  let skillsOffsetTop = skills.offsetTop,
      skillsOffsetHeight = skills.offsetHeight,
      windowHeight = this.innerHeight,
      windowScrollTop = this.pageYOffset;

  if(windowScrollTop > skillsOffsetTop + skillsOffsetHeight - windowHeight) {
    let skillsImg = document.querySelector(".computer-skills .skills-content .middle-col .main-image img");
        skillsImg.style.padding = "64px";
        
        // animate left column circles
        let leftColCircle = document.querySelectorAll(".computer-skills .skills-content .left-col .circle");
            leftColCircle.forEach((circle, index) => {
              setTimeout(() => {
                circle.style.cssText = `opacity: 1;
                                        transform: rotateY(360deg);
                                        width: 180px;
                                        height: 180px;
                                        `
              },1000 * index);
            });

        // animate right column circles
        let rightColCircle = document.querySelectorAll(".computer-skills .skills-content .right-col .circle");
        rightColCircle.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.cssText = `opacity: 1;
                                    transform: rotateY(-360deg);
                                    width: 180px;
                                    height: 180px;
                                    `
          },1000 * index);
        });

        // animate indicators:
        let indicators = document.querySelectorAll(".computer-skills .skills-content .middle-col .indicator");
        indicators.forEach((indicator, index) => {
          setTimeout(() => {
            indicator.style.opacity = "1";
          },500 * index);
        })
  }
}




// 3- animate work fields section on window scrolling:
let workFields = document.querySelector("#work-fields")

function workSection() {
  let workFieldsOffsetTop = workFields.offsetTop,
      workFieldsOffsetHeight = workFields.offsetHeight,
      windowHeight = this.innerHeight,
      windowScrollTop = this.pageYOffset;

      if(windowScrollTop > workFieldsOffsetTop + workFieldsOffsetHeight - windowHeight - 150) {
        let workImg = document.querySelector(".work-fields .fields .col-middle img")
            workImg.style.padding = "50px"

        let leftWorkCol = document.querySelector(".work-fields .fields .col-left"),
            rightWorkCol = document.querySelector(".work-fields .fields .col-right");

            setTimeout(() => {
              leftWorkCol.style.opacity = "1";
              leftWorkCol.style.transform = "translateX(0px)";

              rightWorkCol.style.opacity = "1";
              rightWorkCol.style.transform = "translateX(0px)";
            },1000)
      }
}



// 4- animate careers section on window scrolling:
let timeline = document.querySelector("#timeline"),
    careers = document.querySelectorAll(".timeline .careers .career"),
    careersImgR = document.querySelectorAll(".timeline .careers .career .career-icon-r"),
    careersImgL = document.querySelectorAll(".timeline .careers .career .career-icon-l"),
    lineR = document.querySelectorAll(".line-r"),
    lineL = document.querySelectorAll(".line-l");
    
  function careersSection() {
    let timelineOffsetTop = timeline.offsetTop,
        timelineOffsetHeight = timeline.offsetHeight,
        windowHeight = this.innerHeight,
        windowScrollTop = this.pageYOffset;
  
        if(windowScrollTop > timelineOffsetTop + timelineOffsetHeight - windowHeight - 150) {
          careers.forEach((career, index) => {
            setTimeout(() => {
              career.style.opacity = "1";
              lineR.forEach((lR) => {
                lR.style.transform = "translateX(-18%)";
              })
              lineL.forEach((lL) => {
                lL.style.transform = "translateX(18%)";
              })
              setTimeout(() => {
                  careersImgR.forEach((imgR) => {
                    imgR.style.transform = "rotateZ(360deg)";
                  })
                  careersImgL.forEach((imgL) => {
                    imgL.style.transform = "rotateZ(-360deg)";
                  })
              },900 * index)
            
            },300 * index);
          });
        }
    }



//===============================================================
// Computer skills section: --------
let circlesL = document.querySelectorAll(".computer-skills .skills-content .left-col .circle");
let circlesR = document.querySelectorAll(".computer-skills .skills-content .right-col .circle");
let closeBtn = document.querySelectorAll(".overlay .popup .popup-content .fa-times-circle");
let popIcon = document.querySelectorAll(".overlay .popup .popup-content .pop-icon");



	// loop on circles Left:----------------
circlesL.forEach((circle) => {

    //add click event:  
    circle.addEventListener("click", (e) => {
      
      let popup = document.querySelector(e.target.dataset.skill);
          popup.classList.add("show")

      closeBtn.forEach((mo) => {
          setTimeout(() => {
              mo.style.right = "-20px";
          },50);
        })

        // close popup bottom function:
        document.addEventListener("click", (e) => {

          if(e.target.classList.contains("fa-times-circle")) {

              closeBtn.forEach((mo) => {
                mo.style.right = "700px";
              })
              popup.classList.remove("show");
            }
        })
    });
})



// loop on circles Right:--------------------
circlesR.forEach((circle) => {

  //add click event:  
  circle.addEventListener("click", (e) => {
    
    let popup = document.querySelector(e.target.dataset.skill);
        popup.classList.add("show")

    closeBtn.forEach((mo) => {
        setTimeout(() => {
            mo.style.right = "-20px";
        },50);
      })

      // close popup bottom function:
      document.addEventListener("click", (e) => {

        if(e.target.classList.contains("fa-times-circle")) {

            closeBtn.forEach((mo) => {
              mo.style.right = "700px";
            })
            popup.classList.remove("show");
          }
      })
  });
})
