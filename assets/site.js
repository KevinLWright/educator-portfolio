'use strict';
const grid = document.getElementById('standards-grid');
const detail = document.getElementById('standard-detail');
const nav = document.getElementById('site-nav');
const menu = document.querySelector('.menu-button');
document.getElementById('year').textContent = new Date().getFullYear();
menu.addEventListener('click', () => { const opened = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!opened)); nav.classList.toggle('open', !opened); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const el = (tag, cls, text) => {const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n;};
let data = null;
function showStandard(id, scroll=true){
  if(!data)return;
  const standard=data.standards.find(s=>s.id===id);if(!standard)return;
  grid.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.standard===id)));
  detail.replaceChildren(); detail.hidden=false;
  const top=el('div','detail-top'); const head=el('div');
  head.append(el('span','detail-label','NAEYC Standard '+id),el('h3','',standard.name));
  head.querySelector('h3').id='detail-title';
  const close=el('button','close-detail','Close ✕');close.type='button';close.addEventListener('click',()=>{detail.hidden=true;grid.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed','false'));grid.querySelector('[data-standard="'+id+'"]').focus();});
  top.append(head,close);detail.append(top,el('p','detail-description',standard.description));
  const artifacts=el('div','artifacts');
  const assigned=data.assignments.filter(a=>a.standard===id);
  if(!assigned.length)artifacts.append(el('p','empty-note','Artifacts for this standard will be added as the portfolio develops.'));
  assigned.forEach(a=>{
    const card=el('article','artifact');card.append(el('div','artifact-meta',a.topic+' · '+a.date),el('h4','',a.title));
    if(a.file){
      const link=el('a','','Read assignment ↗');link.href=a.file;link.target='_blank';link.rel='noopener noreferrer';card.append(link);
    }else{card.append(el('span','artifact-status','Artifact coming soon'));}
    const justification=el('div','justification');justification.append(el('strong','','Connection to this standard'));
    justification.append(el('p','',a.justification || 'Justification statement to be added: explain what this assignment demonstrates about the standard, using specific examples from your work.'));
    card.append(justification);artifacts.append(card);
  });
  detail.append(artifacts);
  if(scroll)detail.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
fetch('portfolio-data.json').then(r=>{if(!r.ok)throw Error('Data unavailable');return r.json();}).then(result=>{
  data=result;
  result.standards.forEach(s=>{
    const b=el('button','standard-card');b.type='button';b.dataset.standard=s.id;b.setAttribute('aria-pressed','false');b.setAttribute('aria-controls','standard-detail');
    b.append(el('span','standard-number',s.id.padStart(2,'0')),el('span','standard-name',s.name));
    const foot=el('span','standard-bottom');foot.append(el('span','',result.assignments.filter(a=>a.standard===s.id).length+' course artifacts'),el('span','arrow','↗'));b.append(foot);
    b.addEventListener('click',()=>showStandard(s.id));grid.append(b);
  });
  document.querySelectorAll('[data-open-standard]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showStandard(a.dataset.openStandard);}));
  const hash=window.location.hash.match(/^#standard-([1-6])$/);if(hash)showStandard(hash[1],false);
}).catch(()=>{
  grid.append(el('p','empty-note','Portfolio content could not load. Please view this site using GitHub Pages or a local web server, rather than opening index.html directly from your computer.'));
});
