// console.clear();
gsap.registerPlugin(ScrollTrigger);
// scroll trigger initiate
const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate1",
      scrub: 0.15,
      start: "top top",
      end: "bottom center",
      // markers: "true",
      pin: true,
      // pinType: "fixed",
      pinnedContainer: ".animate1",
      // preventOverlaps: true,
      // refreshPriority: 1,
      // endTrigger: ".done",
      end: "+=400%",
    },
  })
  .set("#firstWord", { opacity: 0, y: 0 })
  .set("#secondWord", { opacity: 0 })
  .set("#thirdWord", { opacity: 0 })
  .from(".videoSectionFull", {
    scale: 2.9,
    ease: "none",
    yPercent: 5,
    // x:200
    duration: 1,
  })
  .to(".videoSectionFull", {
    scale: 0.6,
    ease: "none",
    yPercent: 5,
    x: 200,
    transformOrigin: "center top",
  })
  .to("#firstWord", 0, {
    ease: "slow",
    yPercent: -1400,
    xPercent: 5,
    // x: () => window.innerWidth - 0,
    opacity: 1,
    duration: 5,
  })
  .to("#secondWord", 1, {
    ease: "slow",
    yPercent: -900,
    xPercent: 5,
    opacity: 1,
    duration: 1,
  })
  .to("#thirdWord", 2, {
    ease: "slow",
    // y: -750,
    yPercent: -2700,
    xPercent: 5,
    opacity: 1,
    duration: 1,
  })
  .to("#firstWord, #secondWord, #thirdWord", 1, { ease: "slow", opacity: 0 })
  // .to("#fourthWord", 0, { ease: "slow", y: -1050, opacity: 1 })
  .to("#animation1", 1, {
    duration: 20,
    ease: "slow(0.2, 0.2, false)",
    xPercent: -500,
  });

const tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate2",
      scrub: 0.15,
      start: "top top",
      // end: "bottom center",
      // markers: "true",
      pin: true,
      // pinType: "fixed",
      pinnedContainer: ".animate2",
      // preventOverlaps: true,
      // refreshPriority: 1,
      // endTrigger: ".done",
      end: "+=400%",
    },
  })
  .set("#animation2", { xPercent: -450 })
  .set("#fifthWord", {
    opacity: 0,
    // y: 1250,
    yPercent: -30,
  })
  .set("#sixthWord", {
    opacity: 0,
    // y: 1250,
    yPercent: -30,
  })
  .set("#seventhWord", {
    opacity: 0,
    //  y: 500 ,
    yPercent: -30,
  })
  .to("#animation2", 1, {
    duration: 10,
    ease: "power1",
    xPercent: -90,
  })
  .to("#fifthWord", 1, {
    ease: "slow",
    y: 200,
    xPercent: 60,
    opacity: 1,
  })
  .to("#sixthWord", 1, { ease: "slow", y: 190, xPercent: 60, opacity: 1 })
  .to("#seventhWord", 1, { ease: "slow", y: 190, xPercent: 60, opacity: 1 });

const tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate3",
      scrub: 0.15,
      start: "top top",
      // end: "bottom center",
      // markers: "true",
      pin: true,
      // pinType: "fixed",
      pinnedContainer: ".animate3",
      // preventOverlaps: true,
      // refreshPriority: 1,
      // endTrigger: ".done",
      end: "+=900%",
    },
  })
  .set("#animation3", { xPercent: 350 })
  .set("#ninthWord", { opacity: 0, y: 1250 })
  .set("#tenthWord", { opacity: 0, y: 1250 })
  .set("#eleventhWord", { opacity: 0, y: 500 })
  .to("#animation3", 1, {
    duration: 1,
    ease: "power1",
    xPercent: 0,
  })
  .to("#ninthWord", 1, {
    ease: "slow",
    yPercent: -1100,
    xPercent: 10,
    opacity: 1,
  })
  .to("#tenthWord", 1, {
    ease: "slow",
    yPercent: -1450,
    xPercent: 10,
    opacity: 1,
  })
  .to("#eleventhWord", 1, {
    ease: "slow",
    yPercent: -1100,
    xPercent: 10,
    opacity: 1,
  });

// LOAD CANVAS ROTATION 2
const canvas2 = document.getElementById("animation2");
const context2 = canvas2.getContext("2d");

canvas2.width = 1440;
canvas2.height = 1440;

const frameCount2 = 47;
const currentFrame2 = (index) =>
  `https://legion.lenovo.com/xbox/assets/images/yoga/(${(
    index + 1
  ).toString()}).png`;
// const currentFrame2 = (index) =>
//   `assets/images/yoga/(${(index + 1).toString().padStart(1, 0)}).png`;

const images2 = [];
const laptops2 = {
  frame: 0,
};

for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  if (i >= 0) {
    img.src = currentFrame2(i);
    images2.push(img);
  }
  // console.log(img.src);
}

tl2.to(laptops2, {
  frame: frameCount2 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".animate",
    scrub: 1,
  },
  onUpdate: render2, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images2[0].onload = render2;

function render2() {
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  context2.drawImage(images2[laptops2.frame], 0, 0);
  // console.clear();
}

// LOAD CANVAS ROTATION 3
const canvas3 = document.getElementById("animation3");
const context3 = canvas3.getContext("2d");

canvas3.width = 1440;
canvas3.height = 1440;

const frameCount3 = 63;
const currentFrame3 = (index) =>
  `https://legion.lenovo.com/xbox/assets/images/5ipro/${(
    index + 1
  ).toString()}.png`;
// const currentFrame3 = (index) =>
//   `assets/images/5ipro/${(index + 1).toString()}.png`;

const images3 = [];
const laptops3 = {
  frame: 0,
};

for (let i = 10; i < frameCount3; i++) {
  const img = new Image();
  img.src = currentFrame3(i);
  images3.push(img);
  console.log(img.src);
}

tl3.to(laptops3, {
  frame: frameCount3 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".animate",
    scrub: 1,
  },
  onUpdate: render3, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images3[0].onload = render3;

function render3() {
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  context3.drawImage(images3[laptops3.frame], 0, 0);
  // console.clear();
}
