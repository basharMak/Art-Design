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