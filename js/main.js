window.addEventListener("scroll", function (e) {
    const sectionOne = document.querySelector(".section-1");
    const boxOne = document.querySelector(".box2a");
    // const image = document.querySelector(".s2-video-container");

    let scrolled = window.pageYOffset;
    let rateOne = scrolled * 0.7;
  
    let rateTwo = scrolled * -0.0015;

    // let rotationRate = scrolled * 0.2;
    let opacityRate = scrolled * 0.00075;
  
    boxOne.style.opacity = `${1 - opacityRate}`;
    // image.style.width = `670px${+ (1 - rateTwo)}px`;
    // image.style.transform = `scaleX(${rateTwo})`;
    sectionOne.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;

    // heroBottomElipse.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;
  
    // heroCross.style.transform = `rotate(${rotationRate}deg)`;
    // heroTopLayer.style.transform = `translate3d(0px, ${rateThree}px ,0px)`;
  });


  window.addEventListener("scroll", setScrollVar)


  const img = document.querySelector(".s2-video-container")
  const mark = document.querySelector(".img-mark")
const observer = new IntersectionObserver(entry => {
// img.classlist.add("fixed")
// entry.target.classList.toggle("fixed", entry.isIntersecting)
if (entry.isIntersecting) {
    img.classList.add("sticky")
    console.log(img)

}
// console.log(entry.target)
// console.log(img.classList)

}, {
    threshold: 1,
})


function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = Math.floor(htmlElement.scrollTop / htmlElement.clientHeight * 100)
    const middleOfScreenHeightScrolled = Math.floor(htmlElement.scrollTop / htmlElement.clientHeight * 100) + 50
    htmlElement.style.setProperty("--scroll", percentOfScreenHeightScrolled)
    // console.log(percentOfScreenHeightScrolled)
    // console.log(middleOfScreenHeightScrolled)
    // console.log(htmlElement.clientHeight/2)
    const imgRect = img.getBoundingClientRect()
    const imgCenter = imgRect.top + (imgRect.height/2)
    const markRect = mark.getBoundingClientRect()
    const contentRect = document.querySelector(".content").getBoundingClientRect()
    console.log(document.documentElement.clientHeight/2)
    /console.log(imgCenter)
    if (imgCenter < document.documentElement.clientHeight/2) {
        img.classList.add("sticky", "bigpic")
    

    }

    
    if (markRect.bottom < document.documentElement.clientHeight) {
        img.classList.remove("sticky", "bigpic")

    }

    if (imgRect.top < contentRect.bottom + 100){
        img.classList.remove("sticky", "bigpic")

    }
observer.observe(img)

  }


function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = Math.floor(htmlElement.scrollTop / htmlElement.clientHeight * 100)
    const middleOfScreenHeightScrolled = Math.floor(htmlElement.scrollTop / htmlElement.clientHeight * 100) + 50
    htmlElement.style.setProperty("--scroll", percentOfScreenHeightScrolled)
    htmlElement.style.setProperty("--viewport-center", `${(document.documentElement.clientHeight/2)}px`)

    const imgRect = img.getBoundingClientRect()
    const imgCenter = imgRect.top + (imgRect.height/2)
    const markRect = document.querySelector(".section-2").getBoundingClientRect()
    const contentRect = document.querySelector(".content").getBoundingClientRect()

    if (imgCenter < document.documentElement.clientHeight/2) {
        img.classList.add("sticky", "bigpic")
        img.classList.remove("positioned")
        // console.log("111")

    
    }
    
    if (markRect.bottom < document.documentElement.clientHeight) {
        img.classList.remove("sticky")
        img.classList.add("positioned")
        // console.log("tosiedzieje")

    } 

    if (imgRect.top < contentRect.bottom + 100){
        img.classList.remove("sticky", "bigpic")
        img.classList.remove("positioned")
        // console.log("tteraz to")


    }

    if (markRect.bottom > document.documentElement.clientHeight && markRect.bottom < document.documentElement.clientHeight + 50) {
        img.classList.add("sticky", "bigpic")
        img.classList.remove("positioned")
        // console.log("TO")
        // console.log(markRect.bottom + " markRect.bottom")
        // console.log(document.documentElement.clientHeight + " document.documentElement.clientHeight")
        // console.log(document.documentElement.clientHeight + 50 + " +50")

    } 

  
observer.observe(img)

  }
