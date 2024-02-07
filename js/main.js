window.addEventListener("scroll", function (e) {
    const sectionOne = document.querySelector(".section-1");
    // const image = document.querySelector(".s2-video-container");

    let scrolled = window.pageYOffset;
    let rateOne = scrolled * 0.7;
  
    let rateTwo = scrolled * -0.0015;

    // let rotationRate = scrolled * 0.2;
    let opacityRate = scrolled * 0.00075;
  
    sectionOne.style.opacity = `${1 - opacityRate}`;
    // image.style.width = `670px${+ (1 - rateTwo)}px`;
    // image.style.transform = `scaleX(${rateTwo})`;
    sectionOne.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;

    // heroBottomElipse.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;
  
    // heroCross.style.transform = `rotate(${rotationRate}deg)`;
    // heroTopLayer.style.transform = `translate3d(0px, ${rateThree}px ,0px)`;
  });