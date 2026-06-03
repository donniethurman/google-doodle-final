// google doodle animation

// G flower animation 
gsap.set([".flower-1", ".flower-2"], {
  transformOrigin: "50% 80%"
});

gsap.to(".flower-1", {
  rotation: 6,
  x: -10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".flower-2", {
  rotation: -5,
  x: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// crown animation
  gsap.to(".lowercase-o", {
  y: -10,
  rotation: 2,
  scale: 1,
  transformOrigin: "50% 50%",
  duration: 1.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// knight animation 
gsap.set(".knight-hair", {
  transformOrigin: "50% 0%",
  svgOrigin: "100 50"
});

gsap.to(".knight-hair", {
  x: 6,
  rotation: 7,
  skewX: 2,
  duration: 1,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// gsap.to(".knight-eyes", {
//   scale: 1.1,
//   duration: 2,
//   repeat: -1,
// })

gsap.timeline({ repeat: -1, repeatDelay: 2 })
  .to(".knight-eyes", {
    scaleY: 0.6,
    scaleX: 1.1,
    duration: 0.5,
    transformOrigin: "center",
    ease: "power1.out"
  })
  .to(".knight-eyes", {
    scaleY: 1,
    scaleX: 1,
    duration: 0.5,
    ease: "power1.inOut"
  }, "+=2");


// second g flower animation
gsap.to(".flower-3", {
  rotation: 4,
  x: 2,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// sword animation
gsap.fromTo(".sword",
  {
    y: -400,
    rotation: -20,
    scale: 1.05
  },
  {
    y: 0,
    rotation: 0,
    scale: 1,
    duration: 1,
    ease: "bounce.out"
  }
);

// lowercase e
const leaf = ".last-e path:nth-child(2)";

 gsap.to("#last-leaf", {
  x: -200,
  y: 90,
  rotation: 260,
  scale: 0.5,
  opacity: 0,
  duration: 2.5,
  delay: 2,
  ease: "power2.inOut"
});





// gsap dev tool
// GSDevTools.create();