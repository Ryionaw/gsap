// console.clear();
gsap.registerPlugin(ScrollTrigger);
// scroll trigger initiate
const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate1",
      scrub: 1,
      start: "top top",
      end: "bottom center",
      // markers: "true",
      pin: true,
      // pinType: "fixed",
      pinnedContainer: ".animate1",
      // preventOverlaps: true,
      // refreshPriority: 1,
      // endTrigger: ".done",
      // end: "+=400%",
    },
  })
  .set("#firstWord", { opacity: 0, y: 0 })
  .set("#secondWord", { opacity: 0 })
  .set("#thirdWord", { opacity: 0 })
  .from(".videoSectionFull", {
    scale: 1.5,
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
    y: -750,
    xPercent: 5,
    // x: () => window.innerWidth - 0,
    opacity: 1,
    duration: 5,
  })
  .to("#secondWord", 1, {
    ease: "slow",
    y: -750,
    xPercent: 5,
    opacity: 1,
    duration: 1,
  })
  .to("#thirdWord", 2, {
    ease: "slow",
    y: -750,
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
      scrub: 1,
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
  .set("#animation2", { xPercent: -350 })
  .set("#fifthWord", { opacity: 0, y: 1250 })
  .set("#sixthWord", { opacity: 0, y: 1250 })
  .set("#seventhWord", { opacity: 0, y: 500 })
  .to("#animation2", 1, {
    duration: 10,
    ease: "power1",
    xPercent: -90,
  })
  .to("#fifthWord", 1, {
    ease: "slow",
    y: 100,
    xPercent: 70,
    opacity: 1,
  })
  .to("#sixthWord", 1, { ease: "slow", y: 120, xPercent: 70, opacity: 1 })
  .to("#seventhWord", 1, { ease: "slow", y: 120, xPercent: 70, opacity: 1 });

const tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate3",
      scrub: 1,
      start: "top top",
      // end: "bottom center",
      markers: "true",
      pin: true,
      // pinType: "fixed",
      pinnedContainer: ".animate3",
      // preventOverlaps: true,
      // refreshPriority: 1,
      // endTrigger: ".done",
      end: "+=300%",
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
  .to("#ninthWord", 1, { ease: "slow", y: 120, xPercent: 10, opacity: 1 })
  .to("#tenthWord", 1, { ease: "slow", y: 120, xPercent: 10, opacity: 1 })
  .to("#eleventhWord", 1, {
    ease: "slow",
    y: 120,
    xPercent: 10,
    opacity: 1,
  });
// .to("#animation3", 1, {
//   duration: 1,
//   ease: "power1",
//   xPercent: -500,
// })

// //  Make Video Full Large
// // .set(".videoPlay",{
// //   padding: 0,
// //   width: "100vw",
// //   height: "100vh"
// // })
// .set(".videoSectionFull", {
//   scale: 1.5,
//   ease: "none",
//   yPercent: 5,
// })
// // Set Animation Gone
// .set("#animation3", { xPercent: 350 })
// .set("#animation2", { xPercent: -350 })
// // .set("#animation1", { opacity: 0 })
// .set("#firstWord", { opacity: 0 })
// .set("#secondWord", { opacity: 0 })
// .set("#thirdWord", { opacity: 0 })
// .set("#fourthWord", { opacity: 0 })
// .set("#fifthWord", { opacity: 0 })
// .set("#sixthWord", { opacity: 0 })
// .set("#seventhWord", { opacity: 0 })
// .set("#eightWord", { opacity: 0 })
// .set("#ninthWord", { opacity: 0 })
// .set("#tenthWord", { opacity: 0 })
// .set("#eleventhWord", { opacity: 0 })

// // SET LAPTOP CENTER

// .to(".videoSectionFull", {
//   scale: 0.6,
//   ease: "none",
//   yPercent: 15,
//   transformOrigin: "center top",
// })

// // SET TEXT TO COME
// .to("#firstWord", 0, {
//   ease: "slow",
//   y: -750,
//   xPercent: 5,
//   // x: () => window.innerWidth - 0,
//   opacity: 1,
// })
// // SET LAPTOP TO RIGHT AFTER CENTER
// .to("#animation1", { opacity: 1 })
// .to(".videoSectionFull", {
//   scale: 0.6,
//   // ease: "none",
//   x: 200,
//   transformOrigin: "center top",
// })
// .to(".videoPlay", { opacity: 0 })
// .to("#secondWord", 1, { ease: "slow", y: -750, xPercent: 5, opacity: 1 })
// .to("#thirdWord", 2, { ease: "slow", y: -750, xPercent: 5, opacity: 1 })

// // FADE AWAY MOMENT
// .to("#firstWord, #secondWord, #thirdWord", 1, { ease: "slow", opacity: 0 })
// // .to("#fourthWord", 0, { ease: "slow", y: -1050, opacity: 1 })
// .to("#animation1", 1, {
//   duration: 20,
//   ease: "slow(0.2, 0.2, false)",
//   xPercent: -500,
// })
// // .to("#secondWord", 1, { ease: "power1", opacity: 0 })
// // .to("#thirdWord", 1, { ease: "power1", opacity: 0 })
// // .to("#fourthWord", 0, { ease: "slow", y: -1050, opacity: 1 })
// .to("#animation2", 1, {
//   duration: 10,
//   ease: "power1",
//   xPercent: -90,
// })
// // .to("#fourthWord", 1, { ease: "power1", opacity: 0 })
// .to("#fifthWord", 1, {
//   ease: "slow",
//   y: -1050,
//   xPercent: 70,
//   opacity: 1,
// })
// .to("#sixthWord", 1, { ease: "slow", y: -1050, xPercent: 70, opacity: 1 })
// .to("#seventhWord", 1, { ease: "slow", y: -1000, xPercent: 70, opacity: 1 })
// .to("#animation2,", 1, { ease: "power1", xPercent: 500 })
// .to("#fifthWord, #sixthWord, #seventhWord", 1, { ease: "power1", opacity: 0 })
// // .to("#eightWord", 1, { ease: "power1", y: -1250, opacity: 1 })
// // .to("#sixthWord", 1, { ease: "power1", opacity: 0 })
// .to("#animation3", 1, {
//   duration: 1,
//   ease: "power1",
//   xPercent: 0,
// })
// // .to("#seventhWord", 1, { ease: "power1", opacity: 0 })
// // .to("#eightWord", 1, { ease: "power1", opacity: 0 })
// .to("#ninthWord", 1, { ease: "slow", y: -1450, xPercent: 10, opacity: 1 })
// .to("#tenthWord", 1, { ease: "slow", y: -1450, xPercent: 10, opacity: 1 })
// .to("#eleventhWord", 1, {
//   ease: "slow",
//   y: -1450,
//   xPercent: 10,
//   opacity: 1,
// })
// .to("#animation3", 1, {
//   duration: 1,
//   ease: "power1",
//   xPercent: -500,
// })
// .to("#ninthWord", 1, { ease: "power1", opacity: 0 })
// .to("#tenthWord", 1, { ease: "power1", opacity: 0 })
// .to("#eleventhWord", 1, { ease: "power1", opacity: 0 });

// // LOAD CANVAS ROTATION 1
// const canvas = document.getElementById("animation1");
// const context = canvas.getContext("2d");

// canvas.width = 1500;
// canvas.height = 1500;

// const frameCount = 52;
// // const currentFrame = (index) =>
// //   `https://laravel3.isysedge.com/gsap_try/assets/images/${(
// //     index + 1
// //   ).toString()}.png`;
// const currentFrame = (index) =>
//   `assets/images/5i/${(index + 1).toString()}.png`;

// const images = [];
// const laptops = {
//   frame: 0,
// };

// for (let i = -35; i < frameCount; i++) {
//   // if (i >= 0) {
//   const img = new Image();
//   img.src = currentFrame(i);
//   images.push(img);
//   // }
//   // console.log(img.src);
// }

// tl.to(laptops, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: "slow",
//   scrollTrigger: {
//     trigger: ".animate",
//     scrub: 0.5,
//   },
//   onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// // images[0].onload = render;

// function render() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.drawImage(images[laptops.frame], 0, 0);
//   // console.clear();
// }

// // END LOAD CANVAS ROTATION 1

// // LOAD CANVAS ROTATION 2
// const canvas2 = document.getElementById("animation2");
// const context2 = canvas2.getContext("2d");

// canvas2.width = 1440;
// canvas2.height = 1440;

// const frameCount2 = 47;
// // const currentFrame = (index) =>
// //   `https://laravel3.isysedge.com/gsap_try/assets/images/${(
// //     index + 1
// //   ).toString()}.png`;
// const currentFrame2 = (index) =>
//   `assets/images/yoga/yoga9igamescreen_00000_000${(index + 1).toString().padStart(1, 0)}.png`;

// const images2 = [];
// const laptops2 = {
//   frame: 0,
// };

// for (let i = 0; i < frameCount2; i++) {
//   const img = new Image();
//   if (i >= 0) {
//     img.src = currentFrame2(i);
//     images2.push(img);
//   }
//   // console.log(img.src);
// }

// tl.to(laptops2, {
//   frame: frameCount2 - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".animate",
//     scrub: 0.5,
//   },
//   onUpdate: render2, // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// images2[0].onload = render;

// function render2() {
//   context2.clearRect(0, 0, canvas2.width, canvas2.height);
//   context2.drawImage(images2[laptops2.frame], 0, 0);
//   // console.clear();
// }

// // END LOAD CANVAS ROTATION 2

// // LOAD CANVAS ROTATION 3
// const canvas3 = document.getElementById("animation3");
// const context3 = canvas3.getContext("2d");

// canvas3.width = 1440;
// canvas3.height = 1440;

// const frameCount3 = 77;
// const currentFrame3 = (index) =>
//   `assets/images/5ipro/${(index + 1).toString()}.png`;

// const images3 = [];
// const laptops3 = {
//   frame: 0,
// };

// for (let i = -35; i < frameCount3; i++) {
//   const img = new Image();
//   img.src = currentFrame3(i);
//   images3.push(img);
//   // console.log(img.src);
// }

// tl.to(laptops3, {
//   frame: frameCount3 - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".animate",
//     scrub: 0.5,
//   },
//   onUpdate: render3, // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// images3[0].onload = render;

// function render3() {
//   context3.clearRect(0, 0, canvas3.width, canvas3.height);
//   context3.drawImage(images3[laptops3.frame], 0, 0);
//   // console.clear();
// }

// // END LOAD CANVAS ROTATION 3

// END LOAD CANVAS ROTATION 1

// LOAD CANVAS ROTATION 2
const canvas2 = document.getElementById("animation2");
const context2 = canvas2.getContext("2d");

canvas2.width = 1440;
canvas2.height = 1440;

const frameCount2 = 47;
// const currentFrame = (index) =>
//   `https://laravel3.isysedge.com/gsap_try/assets/images/${(
//     index + 1
//   ).toString()}.png`;
const currentFrame2 = (index) =>
  `assets/images/yoga/(${(index + 1).toString().padStart(1, 0)}).png`;

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

tl.to(laptops2, {
  frame: frameCount2 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".animate",
    scrub: 0.5,
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

const frameCount3 = 77;
const currentFrame3 = (index) =>
  `assets/images/5ipro/${(index + 1).toString()}.png`;

const images3 = [];
const laptops3 = {
  frame: 0,
};

for (let i = 40; i < frameCount3; i++) {
  const img = new Image();
  img.src = currentFrame3(i);
  images3.push(img);
  console.log(img.src);
}

tl.to(laptops3, {
  frame: frameCount3 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".animate",
    scrub: 0.5,
  },
  onUpdate: render3, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images3[0].onload = render3;

function render3() {
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  context3.drawImage(images3[laptops3.frame], 0, 0);
  // console.clear();
}
