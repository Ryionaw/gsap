// console.clear();
gsap.registerPlugin(ScrollTrigger);
const tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section3Mob",
      scrub: 5,
      start: "top top",
      end: "+=400%",
      markers: "true",
      pin: true,
      pinType: "fixed",
      pinnedContainer: ".section3Mob",
      preventOverlaps: true,
      refreshPriority: 1,
    },
  })
  // Set Animation Gone
  .set("#animation3Mob", { opacity: 0 })
  .set("#ninthWordMob", { opacity: 0 })
  .set("#tenthWordMob", { opacity: 0 })
  .set("#eleventhWordMob", { opacity: 0 })

  // SET TEXT TO COME
  .to("#ninthWordMob", 1, {
    ease: "power1",
    opacity: 1,
    y: "50vh",
  })
  // SET LAPTOP TO RIGHT AFTER CENTER
  .to("#animation3Mob", { opacity: 1 })
  .to("#tenthWordMob", 0, { ease: "power1", y: "50vh", opacity: 1 })
  .to("#eleventhWordMob", 0, { ease: "power1", y: "50vh", opacity: 1 })

  // FADE AWAY MOMENT
  .to("#ninthWordMob", 2, { ease: "power1", opacity: 0 })
  .to("#tenthWordMob", 2, { ease: "power1", opacity: 0 })
  .to("#eleventhWordMob", 2, { ease: "power1", opacity: 0 })
  .to("#animation3Mob", 1, {
    duration: 4,
    ease: "slow(0.2, 0.2, false)",
    xPercent: -500,
  });

// LOAD CANVAS ROTATION 2
const canvas3 = document.getElementById("animation3Mob");
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

for (let i = 0; i < frameCount3; i++) {
  const img = new Image();
  if (i >= 0) {
    img.src = currentFrame3(i);
    images3.push(img);
  }
  // console.log(img.src);
}

tl3.to(laptops3, {
  frame: frameCount3 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".animate",
    scrub: 0.5,
  },
  onUpdate: render3, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images3[0].onload = render;

function render3() {
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  context3.drawImage(images3[laptops3.frame], 0, 0);
  // console.clear();
}

// END LOAD CANVAS ROTATION 3
