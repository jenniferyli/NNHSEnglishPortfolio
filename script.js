// gsap.from(".col-md-6", {
//   duration: 1,
//   x: "-100%",
//   ease: "power2.in",
//   stagger: 2,
// });
// gsap.from(".col-md-6", { duration: 1, opacity: 0, stagger: 2 });
// ????????????????????????????????????????????????????????????????????????????????????
// const timeline = gsap.timeline({
//   defaults: { duration: 1 },
//   scrollTrigger: {
//     trigger: "row",
//   },
// });

// timeline
//   .from(".leftCol", {
//     x: "-100%",
//     opacity: 0,
//     ease: "power2.in",
//     scrub: 1,
//     stagger: 2,
//   })
//   .from(
//     ".rightCol",
//     {
//       x: "100%",
//       opacity: 0,
//       ease: "power2.in",
//       scrub: 1,
//       stagger: 2,
//     },
//     "<"
//   );
// ????????????????????????????????????????????????????????????????????????????????????
// FIRST ROW
// gsap.from(".leftCol1", {
//   scrollTrigger: {
//     trigger: ".leftCol1",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "-100%",
//   ease: "power2.in",
// });

// gsap.from(".rightCol1", {
//   scrollTrigger: {
//     trigger: ".leftCol1",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "100%",
//   ease: "power2.in",
// });

// SECOND ROW

// gsap.from(".leftCol2", {
//   scrollTrigger: {
//     trigger: ".leftCol2",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "-100%",
//   ease: "power2.in",
// });

// gsap.from(".rightCol2", {
//   scrollTrigger: {
//     trigger: ".leftCol2",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "100%",
//   ease: "power2.in",
// });

// THREE ROW

// gsap.from(".leftCol3", {
//   scrollTrigger: {
//     trigger: ".leftCol3",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "-100%",
//   ease: "power2.in",
// });

// gsap.from(".rightCol3", {
//   scrollTrigger: {
//     trigger: ".leftCol3",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "100%",
//   ease: "power2.in",
// });

// FOR ROW

// gsap.from(".leftCol4", {
//   scrollTrigger: {
//     trigger: ".leftCol4",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "-100%",
//   ease: "power2.in",
// });

// gsap.from(".rightCol4", {
//   scrollTrigger: {
//     trigger: ".leftCol4",
//   },
//   duration: 1,
//   opacity: 0,
//   x: "100%",
//   ease: "power2.in",
// });
// ????????????????????????????????????????????????????????????????????????????????????

// const { innerHeight } = window;

// gsap.from(".leftCol1", {
//   scale: 500,
//   stager: 0.25,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".test",
//     pin: true,
//     end: `+=${innerHeight * 1}`,
//     scrub: 3,
//   },
// });
