(() => {
  const navigation = document.querySelector('.nav-sections');
  const header = document.querySelector('.site-header');
  if (!navigation || !header) return;

  const sections = Array.from(navigation.querySelectorAll('a[href^="#"]'))
    .map(link => ({ link, target: document.getElementById(link.hash.slice(1)) }))
    .filter(section => section.target);
  if (!sections.length) return;

  let currentLink;
  let viewportWidth;
  let scheduled = false;

  function update() {
    scheduled = false;
    const resized = window.innerWidth !== viewportWidth;
    viewportWidth = window.innerWidth;
    const horizontal = window.matchMedia('(max-width: 1199px)').matches;
    const offset = horizontal ? header.getBoundingClientRect().height + 16 : 40;
    document.documentElement.style.setProperty('--section-offset', `${offset}px`);

    let current = sections[0];
    for (const section of sections) {
      if (section.target.getBoundingClientRect().top <= offset + 8) current = section;
    }
    // Short final sections cannot reach the top before the page ends.
    const pageHeight = document.documentElement.scrollHeight;
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= pageHeight - 2) {
      current = sections[sections.length - 1];
    }
    if (current.link === currentLink && !resized) return;

    for (const section of sections) section.link.removeAttribute('aria-current');
    current.link.setAttribute('aria-current', 'location');
    currentLink = current.link;

    // Reveal the active mobile link without moving the page vertically.
    if (horizontal) {
      const rail = navigation.getBoundingClientRect();
      const link = currentLink.getBoundingClientRect();
      if (link.left < rail.left) navigation.scrollLeft += link.left - rail.left - 4;
      else if (link.right > rail.right) navigation.scrollLeft += link.right - rail.right + 4;
    }
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  update();
})();
