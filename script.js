document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll(".reveal-type");

  elements.forEach((el) => {
    const bgColor = el.dataset.bgColor || "#999999";
    const fgColor = el.dataset.fgColor || "#00cc99";

    const split = new SplitType(el, { types: "chars" });

    gsap.fromTo(
      split.chars,
      { color: bgColor, y: 20, opacity: 0 },
      {
        color: fgColor,
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
});
