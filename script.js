document.addEventListener("DOMContentLoaded", function () {
  // Ensure GSAP and SplitType are loaded
  if (typeof gsap === "undefined" || typeof SplitType === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelector(".reveal-type");
  if (!el) return;

  const split = new SplitType(el, { types: "chars" });

  gsap.fromTo(
    split.chars,
    { color: "#999999", y: 20, opacity: 0 },
    {
      color: "#00cc99",
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        scrub: true
      }
    }
  );
});
