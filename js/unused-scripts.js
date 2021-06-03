// on loading: ----
window.onload = function () {
  
    for(var i = 0; i < layers.length; i++) {
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
                
                  },500)
                }
              },500)
            }
          },500)
        }
      },500)
    }
  }
  
    setTimeout(() => {
      introText.style.opacity = "1";
    },2500)
  }
  

  // mouse tracking: --------------------
/* landing.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 500;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 500;
  introMonitor.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
}) */



/* 
aboutBtn.onmouseenter = (e) => {

  aboutBtnText
  var aboutIcon = document.createElement('i');
  aboutIcon.classList.add('fas');
  aboutIcon.classList.add('fa-id-card');
  e.target.innerHTML = "";
  e.target.appendChild(aboutIcon);
  e.target.style.cssText = `
                            font-size: 50px;
                            color: #FFCB05;
                            background-color:#ffffff;
                            `;
} */




// css 
/* .work-fields .fields .col-left .icons>div {
  width: 110px;
  height: 70px;
  position: absolute;
  top: 43px;
  left: 200px;
  background-image: linear-gradient(45deg, #ff3636, #ffd6d6);
  border-radius: 0px 120px 120px 0px;
}

.work-fields .fields .col-left .icons>div div {
  width: 100px;
  height: 60px;
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #FF0000;
  border-radius: 0px 120px 120px 0px;
}

.work-fields .fields .col-left .icons>div div img {
  padding-left: 42px;
  padding-top: 10px;
  width: 80px;
} */




// Computer skills section: --------
/* let skillCirclesL = document.querySelectorAll(".computer-skills .skills-content .left-col .circle"),
    skillCirclesR = document.querySelectorAll(".computer-skills .skills-content .right-col .circle");


    skillCirclesL.forEach((c) => {
      let tremblingCircle = document.createElement("span");
      c.addEventListener('mouseenter', (e) => {
        tremblingCircle.classList.add("trembling")
        e.target.appendChild(tremblingCircle);
        tremblingCircle.classList.add("show")
            console.log("hi")
      });

      c.addEventListener('mouseleave', () => {
        tremblingCircle.remove()
      });
    })
 */





 /* Start overlay popups (computer skills) --------------------------- */

 /* <div class="overlay modeling-popup">
   <div class="popup">
      <div><img src="images/3d-modeling-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>3D Modeling</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div>

<div class="overlay web-design-popup">
   <div class="popup">
      <div><img src="images/web-design-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>Web Design "UI/UX"</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div>

<div class="overlay web-dev-popup">
   <div class="popup">
      <div><img src="images/web-dev-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>Web Development</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div>

<div class="overlay graphic-design-popup">
   <div class="popup">
      <div><img src="images/graphic-design-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>Graphic Design</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div>

<div class="overlay video-editing-popup">
   <div class="popup">
      <div><img src="images/video-editing-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>Video Editing</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div>

<div class="overlay visual-effects-popup">
   <div class="popup">
      <div><img src="images/visual-effects-icon.svg" alt=""></div>
      <i class="far fa-times-circle"></i>
      <h5>Visual Effects</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, dolore accusamus magni cumque sequi repellendus recusandae assumenda facere, id perspiciatis soluta laudantium sed ipsam dolores amet nesciunt temporibus. Cupiditate?</p>
      <button class="popup-btn">Work Gallery <i class="fas fa-angle-double-right"></i></button>
   </div>
</div> */

/* End overlay popups (computer skills)----------------------------------  */




// last try in 3/6/2021
/* // Computer skills section: --------
let circlesL = document.querySelectorAll(".computer-skills .skills-content .left-col .circle");

	// loop on circles:
    circlesL.forEach((circle) => {
      
      //add click event:  
      circle.addEventListener("click", (e) => {
        
        // create overlay element:
        let overlay = document.createElement("div");
        
        // add class to overlay element:
        overlay.className = "overlay";

        // append overlay to body:
        document.body.appendChild(overlay);

        // create popup:
        let popup = document.createElement("div");

        // add class to popup:
        popup.className = "popup";

        // get popup content------:
        let content = document.querySelector(e.target.dataset.skill);
            
        let contentCopy = content.cloneNode(true);
            contentCopy.classList.add("show");

        // get popup header:
        let popHeader = document.querySelector(".popup-content h5");
        // add color property to pop header:
            popHeader.style.color = e.target.dataset.color

        // Declare a fragment:
        let fragment = document.createDocumentFragment();

          
        // Append popup content to the fragment:
        fragment.appendChild(contentCopy);

        // Append fragment to the popup:
        popup.appendChild(fragment);
        
         // append popup to the body:
        document.body.appendChild(popup);




        // close popup bottom function:
        document.addEventListener("click", (e) => {

              if(e.target.classList.contains("fa-times-circle")) {
                
                
              // remove the current popup:
              e.target.parentNode.classList.remove("show");
              // remove popup:
              document.querySelector(".popup").remove();
              // remove overlay:
              document.querySelector(".overlay").remove();
          }
      })




        // trigger the animation function:
        animateElem()


        })
    })



    // animate popup elements function:
let closeBtn = document.querySelector(".fa-times-circle");
let popIcon = document.querySelector(".pop-icon");

function animateElem() {
    setTimeout(() => {
      closeBtn.style.right = "-20px";
      popIcon.style.left = "20px";
    },50);
} */