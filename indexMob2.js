// console.clear();
gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section2Mob",
      scrub: 5,
      start: "top top",
      end: "+=340%",
      // markers: "true",
      pin: true,
      pinType: "fixed",
      pinnedContainer: ".section2Mob",
      preventOverlaps: true,
      refreshPriority: 1,
    },
  })
  // Set Animation Gone
  .set("#animation2Mob", { opacity: 0 })
  .set("#fifthWordMob", { opacity: 0 })
  .set("#sixthWordMob", { opacity: 0 })
  .set("#seventhWordMob", { opacity: 0 })
  .set("#eightWordMob", { opacity: 0 })

  // SET TEXT TO COME
  .to("#fifthWordMob", 1, {
    ease: "power1",
    opacity: 1,
    y: "50vh",
  })
  // SET LAPTOP TO RIGHT AFTER CENTER
  .to("#animation2Mob", { opacity: 1 })
  .to("#sixthWordMob", 0, { ease: "power1", y: "50vh", opacity: 1 })
  .to("#seventhWordMob", 0, { ease: "power1", y: "50vh", opacity: 1 })

  // FADE AWAY MOMENT
  .to("#eightWordMob", 3, { ease: "power1", y: "55vh", opacity: 1 })
  .to("#fifthWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#sixthWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#seventhWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#eightWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#animation2Mob", 1, {
    duration: 10,
    ease: "slow(0.2, 0.2, false)",
    xPercent: -500,
  });

// LOAD CANVAS ROTATION 2
const canvas2 = document.getElementById("animation2Mob");
const context2 = canvas2.getContext("2d");

canvas2.width = 1440;
canvas2.height = 1440;

const frameCount2 = 39;
// const currentFrame = (index) =>
//   `https://laravel3.isysedge.com/gsap_try/assets/images/${(
//     index + 1
//   ).toString()}.png`;
const currentFrame2 = (index) =>
  `assets/images/yoga/${(index + 1).toString()}.png`;

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

// END LOAD CANVAS ROTATION 2
