// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Split text into characters
const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((el) => {
  const bg = el.closest('section').dataset.bgColor;
  const fg = el.closest('section').dataset.fgColor;

  const split = new SplitType(el, { types: 'chars' });

  gsap.fromTo(split.chars, 
    { color: bg },
    {
      color: fg,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: 'top 100%',
        end: 'top 10%',
        scrub: true,
      }
    }
  );
});
