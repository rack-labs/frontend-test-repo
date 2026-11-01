// Tabs over a stack of viewer frames: the rig section on the home page and the lens chapter
// of How it works. Each .hw-frame in a .hw-frames stack holds a still (or a placeholder) and
// an iframe whose page is in data-src. The frame shows the still until its page has drawn
// its first frame and posted {hw:'ready'}; then the page fades in over it. Only the active
// frame is visible, and switching tabs only changes which one, so once a page is loaded the
// switch is immediate and nothing of the previous page lingers. The active page loads when
// the stack comes near the screen; the others load on hover or focus of their tab, or in
// idle time once the active one is ready. Pages are told to pause while hidden or off screen
// ({hw:'pause'} / {hw:'resume'}); a page that is a scrolling document rather than a fixed
// drawing can ask for the stack to take its height ({hw:'size', h}); and a .hw-opt button in
// the tab row toggles one of a page's layers ({hw:'show', key, on}).
export function mountViewerTabs(root, { preload = true, margin = '300px 0px' } = {}) {
  const list = root.querySelector('.hw-tabs');
  const tabs = list ? [...list.querySelectorAll('[role=tab]')] : [];
  const opts = list ? [...list.querySelectorAll('.hw-opt')] : [];
  const stack = root.querySelector('.hw-frames');
  const frames = [...stack.querySelectorAll(':scope > .hw-frame')];
  const panels = [...root.querySelectorAll('.hw-panel')];
  const byPage = (id) => frames.find((f) => f.dataset.page === id);
  const win = (f) => f.querySelector('iframe').contentWindow;
  const post = (f, msg) => { if (!f || !f.classList.contains('ready')) return; try { win(f).postMessage(msg, '*'); } catch (_) { /* not loaded */ } };
  const active = () => frames.find((f) => f.classList.contains('on'));
  const load = (f) => { if (!f) return; const fr = f.querySelector('iframe'); if (!fr.getAttribute('src')) fr.src = fr.dataset.src; };
  const idle = (fn) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 4000 }) : setTimeout(fn, 1500));
  let near = false, onScreen = true;

  const show = (id) => {
    tabs.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.page === id)));
    opts.forEach((b) => { b.hidden = b.dataset.for !== id; });
    panels.forEach((p) => { p.hidden = p.dataset.page !== id; });
    frames.forEach((f) => {
      const on = f.dataset.page === id;
      f.classList.toggle('on', on); f.toggleAttribute('inert', !on); f.setAttribute('aria-hidden', String(!on));
      post(f, { hw: on && onScreen ? 'resume' : 'pause' });
    });
    if (list) list.dataset.page = id;
    if (near) load(byPage(id));
  };
  tabs.forEach((b) => {
    b.addEventListener('click', () => show(b.dataset.page));
    const warm = () => { if (near) load(byPage(b.dataset.page)); };
    b.addEventListener('pointerenter', warm); b.addEventListener('focus', warm);
  });
  opts.forEach((b) => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on));
    post(byPage(b.dataset.for), { hw: 'show', key: b.dataset.opt, on });
  }));

  addEventListener('message', (e) => {
    const m = e.data; if (!m || !m.hw) return;
    const f = frames.find((x) => win(x) === e.source); if (!f) return;
    if (m.hw === 'ready') {
      f.classList.add('ready');
      if (!f.classList.contains('on') || !onScreen) post(f, { hw: 'pause' });
      opts.forEach((b) => { if (b.dataset.for === f.dataset.page && b.getAttribute('aria-pressed') === 'true') post(f, { hw: 'show', key: b.dataset.opt, on: true }); });
      if (preload && f === active()) idle(() => frames.forEach((x) => { if (x !== f) load(x); }));
    } else if (m.hw === 'size' && m.h > 0 && frames.length === 1) {
      stack.style.height = Math.ceil(m.h) + 'px'; stack.classList.add('sized');
      // the page was opened at an anchor further down: the browser scrolled there before this stack
      // grew, so put the anchor back in view, unless the reader has scrolled since
      const target = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
      if (target && !moved && stack.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) target.scrollIntoView();
    }
  });
  let moved = false;
  ['wheel', 'touchstart', 'keydown'].forEach((ev) => addEventListener(ev, () => { moved = true; }, { once: true, passive: true }));

  const start = () => { near = true; load(active()); };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); start(); } }, { rootMargin: margin });
    io.observe(stack);
    new IntersectionObserver((es) => {
      onScreen = es.some((e) => e.isIntersecting);
      post(active(), { hw: onScreen ? 'resume' : 'pause' });
    }, { threshold: 0.05 }).observe(stack);
  } else start();

  // #<page> in the address opens that tab (How it works keeps its old chapter anchors this way)
  const fromHash = () => { const id = location.hash.slice(1); if (id && byPage(id) && (!list || list.dataset.page !== id)) show(id); };
  addEventListener('hashchange', fromHash); fromHash();
  return { show };
}
