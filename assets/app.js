const D=[{"secl": "AI Agents", "ey": "Realtime voice", "title": "Restaurant AI Call Agent", "desc": "A live phone agent that turns reservation calls into confirmed bookings.", "ch": "Reservation details arrive quickly and change mid-call.", "sy": "Voice AI checks tables, policies, and guest needs.", "ou": "More calls become bookings without adding front-desk workload.", "tags": ["Realtime voice", "Reservations", "Dietary notes", "Human handoff"], "im": "assets/img/img-004-001.webp"}, {"secl": "AI Agents", "ey": "Knowledge assistant", "title": "AI Knowledge Chatbot", "desc": "A grounded assistant that answers with citations, memory, and clear escalation.", "ch": "Questions require precise, policy-grounded answers.", "sy": "Retrieval, cited responses, memory, and escalation.", "ou": "Customers get faster answers while teams keep policy control.", "tags": ["Conversation design", "RAG", "Memory", "Escalation"], "im": "assets/img/img-005-002.webp"}, {"secl": "AI Agents", "ey": "Support copilot", "title": "Support Intelligence Agent", "desc": "A support copilot that drafts the answer and keeps the decision reviewable.", "ch": "Teams need speed without losing policy control.", "sy": "Intent, retrieval, suggested action, and human review.", "ou": "Routine cases move faster while reviewers focus on risk.", "tags": ["LLM orchestration", "RAG", "Tool calling", "Human review"], "im": "assets/img/img-007-004.webp"}, {"secl": "Automation", "ey": "Document workflow", "title": "AI Workflow Studio", "desc": "One click reads the documents, routes approvals, and finishes the work.", "ch": "Variable documents break rigid rule-based automation.", "sy": "AI routes extraction, decisions, approvals, and actions.", "ou": "Multi-step document work moves from coordination to one action.", "tags": ["Document AI", "Decision routing", "Approvals", "Run tracing"], "im": "assets/img/img-006-003.webp"}, {"secl": "Automation", "ey": "Event orchestration", "title": "Operations Automation Hub", "desc": "An event-driven layer that replaces fragile handoffs with observable workflows.", "ch": "Disconnected tools obscure ownership and failures.", "sy": "Validated events trigger services and record every state.", "ou": "Fewer delays, clearer ownership, and visible recovery.", "tags": ["Event triggers", "API orchestration", "Retries", "Audit trail"], "im": "assets/img/img-008-005.webp"}, {"secl": "Systems", "ey": "Enterprise platform", "title": "Enterprise Operations Suite", "desc": "CRM, projects, finance, approvals, and AI execution in one operating view.", "ch": "Fragmented tools slow operations and approvals.", "sy": "One model connects customers, projects, finance, and AI.", "ou": "One operating view reduces duplicate entry and speeds approvals.", "tags": ["CRM + projects", "Finance + approvals", "Role-based access", "One-click AI"], "im": "assets/img/img-003-000.webp"}, {"secl": "Systems", "ey": "Full-stack commerce", "title": "Modular Commerce Platform", "desc": "A commerce foundation where the storefront and operations stay in sync.", "ch": "Frontend and operations drift without shared structure.", "sy": "Typed APIs connect catalog, checkout, accounts, and orders.", "ou": "Buying stays smooth and aligned with inventory and fulfillment.", "tags": ["React", "TypeScript", "Node.js", "PostgreSQL"], "im": "assets/img/img-009-006.webp"}, {"secl": "Experience", "ey": "People-service web", "title": "Home Care Services Website", "desc": "A trust-centered site that moves families from question to consultation.", "ch": "Families need clarity, trust, and accessible guidance.", "sy": "Service paths connect needs to care and consultation.", "ou": "Families find the right care and reach consultation faster.", "tags": ["Service design", "Accessibility", "Care matching", "Booking"], "im": "assets/img/img-010-007.webp"}, {"secl": "Experience", "ey": "Industrial web", "title": "Precision Manufacturing Website", "desc": "A technical sales site that turns capability into a structured RFQ.", "ch": "Buyers need specifications, proof, and clear RFQ paths.", "sy": "Structured content links capabilities, quality, and projects.", "ou": "Buyers evaluate capability faster and submit clearer RFQs.", "tags": ["Specifications", "Quality evidence", "Project gallery", "RFQ"], "im": "assets/img/img-011-008.webp"}];
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];

/* reveal */
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){
  e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.01,rootMargin:'0px 0px -4% 0px'});
$$('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%8)*45+'ms';io.observe(el)});
requestAnimationFrame(()=>$$('.hero .rv').forEach((el,i)=>{
  el.style.transitionDelay=(i*110+80)+'ms';el.classList.add('in')}));

/* rail + progress */
const rail=$('.rail'),prog=$('.prog'),links=$$('.rail nav a');
const secs=$$('section[id]');
addEventListener('scroll',()=>{
  const y=scrollY;
  rail.classList.toggle('stuck',y>40);
  prog.style.width=(y/(document.body.scrollHeight-innerHeight)*100)+'%';
  let cur='';secs.forEach(s=>{if(y>=s.offsetTop-160)cur=s.id});
  links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur));
},{passive:true});

/* accordion */
$$('.acc-h').forEach(h=>h.addEventListener('click',()=>{
  const a=h.parentElement,open=a.classList.contains('open');
  $$('.acc').forEach(x=>{x.classList.remove('open');$('.acc-h',x).setAttribute('aria-expanded','false')});
  if(!open){a.classList.add('open');h.setAttribute('aria-expanded','true')}
}));

/* filter */
const rowsEl=$('.rows');
$$('.chip').forEach(c=>c.addEventListener('click',()=>{
  $$('.chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');
  const f=c.dataset.f;
  $$('.row').forEach(r=>{
    const show=f==='all'||r.dataset.sec===f;
    r.classList.toggle('hide',!show);
    if(show){r.classList.remove('in');requestAnimationFrame(()=>r.classList.add('in'))}
  });
}));

/* cursor plate */
const cp=$('.cp'),cpImg=$('.cp img');
let tx=0,ty=0,cx=0,cy=0,raf=null;
const loop=()=>{cx+=(tx-cx)*.04;cy+=(ty-cy)*.04;
  const px=(cx/innerWidth-.5)*-12,py=(cy/innerHeight-.5)*-8;
  cpImg.style.transform=`translate3d(${px}px,${py}px,0)`;
  raf=requestAnimationFrame(loop)};
if(matchMedia('(hover:hover) and (min-width:861px)').matches){
  addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
  raf=requestAnimationFrame(loop);
  $$('.row').forEach(r=>{
    r.addEventListener('mouseenter',()=>{
      rowsEl.classList.add('hov');r.classList.add('act');
      cpImg.src=D[+r.dataset.i].im;cp.classList.add('on')});
    r.addEventListener('mouseleave',()=>{
      rowsEl.classList.remove('hov');r.classList.remove('act');cp.classList.remove('on')});
  });
}

/* ---- live demo ---- */
const SC={
 booking:{
  fields:[['Date',''],['Time',''],['Guests',''],['Seating',''],['Notes','']],
  cta:'Awaiting details',
  steps:[
   {w:'a',t:'Thanks for calling Nolita. How can I help?'},
   {w:'c',t:"I'd like a table this Saturday, for four.",set:{Date:'Sat, May 24',Guests:'4'}},
   {w:'a',t:'Saturday for four. What time works for you?'},
   {w:'c',t:'Around seven if you have it.',set:{Time:'7:00 PM'}},
   {w:'a',t:'Seven is open. Any seating preference?'},
   {w:'c',t:'Somewhere quiet, please.',set:{Seating:'Quiet corner'},cta:'Holding table'},
   {w:'a',t:'Noted. Anything the kitchen should know?'},
   {w:'c',t:'One severe peanut allergy.',set:{Notes:'Peanut (severe)'},cta:'Confirm reservation',ready:1},
   {w:'a',t:"You're booked. Confirmation is on its way by text.",cta:'Reservation confirmed',done:1,
    status:'Booked in {t} &middot; no staff time'}
  ]},
 change:{
  fields:[['Booking','#84271'],['Date','Fri, May 23'],['Time','8:00 PM'],['Guests','2'],['Status','Confirmed']],
  preset:['Booking','Date','Time','Guests','Status'],
  cta:'Existing reservation',
  steps:[
   {w:'c',t:'Hi, I need to move my Friday booking.'},
   {w:'a',t:'Found it. Friday, eight, table for two. What should it become?'},
   {w:'c',t:'Six thirty instead, and one more person.',set:{Time:'6:30 PM',Guests:'3'},cta:'Checking availability'},
   {w:'a',t:'Six thirty for three is open. Updating it now.',set:{Status:'Updating'},cta:'Apply change',ready:1},
   {w:'a',t:'Done. Your table is moved and the kitchen has the new count.',set:{Status:'Updated'},
    cta:'Change applied',done:1,status:'Updated in {t} &middot; no staff time'}
  ]}
};
const dChat=document.getElementById('d-chat'),dF=document.getElementById('d-fields'),
      dCta=document.getElementById('d-cta'),dTimer=document.getElementById('d-timer'),
      dStat=document.getElementById('d-status'),dWave=document.querySelector('.d-wave');
for(let i=0;i<26;i++)dWave.appendChild(document.createElement('i'));
[...dWave.children].forEach((b,i)=>b.style.animationDelay=(i*47%420)+'ms');
let tok=0,tint=null,cur='booking';
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const nap=ms=>new Promise(r=>setTimeout(r,ms));
function fmt(s){return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function fld(n){return dF.querySelector(`[data-f="${CSS.escape(n)}"]`)}
function build(k){
  const s=SC[k];dChat.innerHTML='';dF.innerHTML='';
  s.fields.forEach(([n,v])=>{
    const d=document.createElement('div');
    d.innerHTML=`<dt>${n}</dt><dd data-f="${n}">${v||'—'}</dd>`;dF.appendChild(d);
    if(v)d.querySelector('dd').classList.add('set');
  });
  dCta.className='d-cta';dCta.textContent=s.cta;
  dStat.innerHTML='<i></i>Agent listening';dTimer.textContent='0:00';
  document.querySelector('.d-panel').classList.remove('done');
}
function say(w,t){
  const b=document.createElement('div');b.className='b '+w;b.textContent=t;
  dChat.appendChild(b);dChat.scrollTop=dChat.scrollHeight;
  while(dChat.children.length>7)dChat.firstChild.remove();
  return b;
}
async function run(k){
  const my=++tok;cur=k;clearInterval(tint);build(k);
  const s=SC[k];
  if(rm){s.steps.forEach(st=>{say(st.w,st.t);
    if(st.set)for(const n in st.set){const e=fld(n);e.textContent=st.set[n];e.classList.add('set')}});
    const l=s.steps[s.steps.length-1];dCta.textContent=l.cta;dCta.classList.add('done');
    dStat.innerHTML='<i></i>'+l.status.replace('{t}','0:41');dWave.classList.remove('speak');return}
  let sec=0;dTimer.textContent='0:00';
  tint=setInterval(()=>{if(tok!==my)return clearInterval(tint);dTimer.textContent=fmt(++sec)},1000);
  await nap(650);if(tok!==my)return;
  for(const st of s.steps){
    if(st.w==='a'){
      const tp=document.createElement('div');tp.className='b a t';
      tp.innerHTML='<i></i><i></i><i></i>';dChat.appendChild(tp);
      dChat.scrollTop=dChat.scrollHeight;dWave.classList.add('speak');
      await nap(520);if(tok!==my)return;tp.remove();
    }else{dWave.classList.remove('speak')}
    say(st.w,st.t);
    await nap(Math.min(2400,720+st.t.length*26));if(tok!==my)return;
    dWave.classList.remove('speak');
    if(st.set)for(const n in st.set){
      const e=fld(n);e.textContent=st.set[n];e.classList.add('set','flash');
      setTimeout(()=>e.classList.remove('flash'),1000);
    }
    if(st.cta){dCta.textContent=st.cta;dCta.classList.toggle('ready',!!st.ready);
      if(st.done){dCta.classList.remove('ready');dCta.classList.add('done')}}
    if(st.status){clearInterval(tint);document.querySelector('.d-panel').classList.add('done');
      dStat.innerHTML='<i></i>'+st.status.replace('{t}',dTimer.textContent)}
    await nap(300);if(tok!==my)return;
  }
  dWave.classList.remove('speak');
  await nap(6500);if(tok!==my)return;run(k);
}
document.querySelectorAll('.d-chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.d-chip').forEach(x=>x.classList.remove('on'));
  c.classList.add('on');run(c.dataset.s)}));
document.getElementById('d-replay').addEventListener('click',()=>run(cur));
build('booking');
const hio=new IntersectionObserver(e=>{if(e[0].isIntersecting){run('booking');hio.disconnect()}},
  {threshold:.4});
hio.observe(document.querySelector('.d-panel'));

/* modal */
const mo=$('.mo');let idx=0,last=null;
function fill(i){
  const d=D[i];idx=i;
  $('.mo-fig img').src=d.im;$('.mo-fig img').alt=d.title+' interface';
  $('.mo-ey').textContent=d.secl+' — '+d.ey;
  $('.mo-i h3').textContent=d.title;$('.mo-d').textContent=d.desc;
  $('#mo-ch').textContent=d.ch;$('#mo-sy').textContent=d.sy;$('#mo-ou').textContent=d.ou;
  $('.mo-t').innerHTML=d.tags.map(t=>`<li>${t}</li>`).join('');
  $('.mo-p').scrollTop=0;
}
function open(i,src){last=src;fill(i);mo.classList.add('on');document.body.style.overflow='hidden';
  $('.mo-nav button:last-child').focus()}
function close(){mo.classList.remove('on');document.body.style.overflow='';
  cp.classList.remove('on');rowsEl.classList.remove('hov');
  $$('.row').forEach(r=>r.classList.remove('act'));if(last)last.focus()}
$$('.row').forEach(r=>r.addEventListener('click',()=>open(+r.dataset.i,r)));
$('.mo-bg').addEventListener('click',close);
$('#mo-x').addEventListener('click',close);
$('#mo-prev').addEventListener('click',()=>fill((idx-1+D.length)%D.length));
$('#mo-next').addEventListener('click',()=>fill((idx+1)%D.length));
addEventListener('keydown',e=>{
  if(!mo.classList.contains('on'))return;
  if(e.key==='Escape')close();
  if(e.key==='ArrowRight')fill((idx+1)%D.length);
  if(e.key==='ArrowLeft')fill((idx-1+D.length)%D.length);
});