(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const boot = document.getElementById('saoBoot');
  let seen = false;
  try { seen = sessionStorage.getItem('blazebyte-intro') === 'seen'; } catch {}
  function dismissBoot() {
    if (!boot || boot.hidden) return;
    boot.classList.add('leaving');
    window.setTimeout(() => { boot.hidden = true; }, 450);
    try { sessionStorage.setItem('blazebyte-intro', 'seen'); } catch {}
  }
  if (boot && !seen && !reduced) {
    boot.hidden = false;
    document.getElementById('saoSkip').addEventListener('click', dismissBoot);
    window.setTimeout(dismissBoot, 1700);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') dismissBoot(); });
  }
  const menu = document.getElementById('saoMenu');
  const links = document.querySelector('.nav-links');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('sao-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? 'Close' : 'Menu';
    });
    const close = () => { links.classList.remove('sao-open'); menu.setAttribute('aria-expanded','false'); menu.textContent='Menu'; };
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  }
  let scheduled = false;
  const progress = () => {
    const height = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--sao-progress', String(height > 0 ? Math.min(1, Math.max(0, scrollY / height)) : 0));
    scheduled = false;
  };
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(progress); } }, {passive:true});
  addEventListener('resize', progress, {passive:true});
  progress();
  if (!reduced) document.addEventListener('click', e => {
    if (!e.target.closest('.pill') || !e.isTrusted || (e.clientX === 0 && e.clientY === 0)) return;
    for(let i=0;i<6;i++) {
      const spark=document.createElement('span');
      spark.className='sao-spark'; spark.setAttribute('aria-hidden','true');
      spark.style.left=e.clientX+'px'; spark.style.top=e.clientY+'px';
      const angle=i*Math.PI/3;
      spark.style.setProperty('--x',Math.cos(angle)*35+'px'); spark.style.setProperty('--y',Math.sin(angle)*35+'px');
      document.body.append(spark); setTimeout(()=>spark.remove(),500);
    }
  });
})();
