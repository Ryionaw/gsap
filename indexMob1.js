// console.clear();
gsap.registerPlugin(ScrollTrigger);
const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section1Mob",
      scrub: 5,
      start: "top top",
      end: "+=450%",
      // markers: "true",
      pin: true,
      pinType: "fixed",
      pinnedContainer: ".section1Mob",
      preventOverlaps: true,
      refreshPriority: 1,
    },
  })
  // Set Animation Gone
  // .set("#animation1Mob", { yPercent: -100 })
  .set("#firstWordMob", { opacity: 0 })
  .set("#secondWordMob", { opacity: 0 })
  .set("#thirdWordMob", { opacity: 0 })
  .set("#fourthWordMob", { opacity: 0 })

  .set(".videoPlay", {
    scale: 1,
    ease: "none",
    yPercent: 50,
  })

  .to(".videoPlay", {
    scale: 1,
    ease: "slow",
    yPercent: 10,
    transformOrigin: "center top",
  })

  // .to("#animation1Mob", 0, {
  //   duration: 2,
  //   ease: "slow(0.5, 0.5, false)",
  //   yPercent: 0,
  // })
  // .to(".videoPlay", 1, {
  //   opacity: 0,
  // })

  // SET TEXT TO COME
  .to("#firstWordMob", 0, {
    ease: "slow",
    opacity: 1,
    y: 40,
  })
  // SET LAPTOP TO RIGHT AFTER CENTER
  .to("#secondWordMob", 0, { ease: "power1", y: 40, opacity: 1 })
  .to("#thirdWordMob", 0, { ease: "power1", y: 40, opacity: 1 })

  // FADE AWAY MOMENT
  .to("#fourthWordMob", 3, { ease: "power1", y: 80, opacity: 1 })
  .to("#firstWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#secondWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#thirdWordMob", 1, { ease: "power1", opacity: 0 })
  .to("#animation1Mob", 1, {
    duration: 10,
    ease: "slow(0.2, 0.2, false)",
    xPercent: -500,
  })
  .to("#fourthWordMob", 1, { ease: "power1", opacity: 0 });
//   .to("#animation1Mob", 1, { ease: "power1", opacity: 0 });

// LOAD CANVAS ROTATION 1

// END LOAD CANVAS ROTATION 1
