
/* ============ DATA ============ */
const EVENTS = [
  {id:1,title:"Battle of Bands",cat:"Music",type:"official",date:"Mar 6",time:"11 AM onwards",venue:"Main Stage",prize:"₹50,000",team:"3–8 members",desc:"The loudest morning of OORJA. Five shortlisted bands battle through originals + covers across rock, fusion and metal. Professional sound, screaming crowd, judges from the indie circuit.",rules:"20 min per band incl. soundcheck. No pre-recorded backing beyond drums click. Originals get bonus marks.",img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"},
  {id:2,title:"Nritya — Solo & Crew Dance",cat:"Dance",type:"official",date:"Mar 6",time:"2 PM onwards",venue:"Amphitheatre",prize:"₹30,000",team:"Solo / 4–12",desc:"From kathak to krump — solo showdowns in the afternoon, crew battles at sunset. The amphitheatre steps become the loudest stadium on campus.",rules:"Solo: 2–3 min. Crew: 5–7 min. Props allowed, fire & glass strictly prohibited.",img:"https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop"},
  {id:3,title:"Sur — Classical & Bollywood Vocals",cat:"Music",type:"official",date:"Mar 7",time:"10 AM onwards",venue:"Seminar Hall A",prize:"₹20,000",team:"Solo / Duet",desc:"A morning of goosebumps. Hindustani, Carnatic and Bollywood vocals judged by working playback artists. Tanpura provided; magic expected.",rules:"One classical + one choice piece. Karaoke allowed for Bollywood round only. 6 min total.",img:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop"},
  {id:4,title:"Nukkad Natak — Street Play",cat:"Theatre",type:"official",date:"Mar 7",time:"12 PM onwards",venue:"Nukkad Chowk",prize:"₹25,000",team:"8–20 members",desc:"Dhol, circle, and truth bombs. 12 teams, social themes, zero mics — just voice, energy and a crowd that gathers itself.",rules:"15–20 min incl. setup. Hindi / English / Hinglish. No recorded music; live dhol & props only.",img:"https://images.unsplash.com/photo-1507924538820-ede94bff19d2?q=80&w=800&auto=format&fit=crop"},
  {id:5,title:"Vastra — Fashion Show",cat:"Fashion",type:"official",date:"Mar 7",time:"5 PM onwards",venue:"Main Stage Ramp",prize:"₹35,000",team:"8–16 members",desc:"Desi-futurism on the ramp. Themes, choreography, garments stitched in hostel rooms at 3 AM — judged by Delhi designers.",rules:"8–10 min walk. Theme note mandatory. Pre-recorded music to be submitted 24 hrs prior.",img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"},
  {id:6,title:"HackOORJA — 24 Hr Hackathon",cat:"Tech",type:"official",date:"Mar 7–8",time:"9 AM – 9 AM",venue:"Seminar Block",prize:"₹75,000",team:"2–4 members",desc:"Code through DJ Night (if you can resist). Build for campus: sustainability, safety, culture. Mentors, unlimited chai, beanbags, glory.",rules:"Fresh code only. Any stack. APIs allowed. Final demo 5 min + 2 min Q&A.",img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"},
  {id:7,title:"Rhyme & Rhythm — Rap Battle",cat:"Music",type:"official",date:"Mar 8",time:"1 PM onwards",venue:"Hip-Hop Corner",prize:"₹15,000",team:"Solo",desc:"Cyphers, beatbox, diss battles. Delhi's underground meets campus poets. Crowd decides the finalist by noise meter.",rules:"90-sec rounds. No hate speech or slurs. Beat provided or acapella — your call.",img:"https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=800&auto=format&fit=crop"},
  {id:8,title:"Shutter Up — Photography",cat:"Art",type:"official",date:"All 3 Days",time:"Submission by Mar 8, 2 PM",venue:"Online + Exhibit Wall",prize:"₹12,000",team:"Solo",desc:"Shoot the fest as it breathes. Best 30 prints exhibited near the food lane on Day 3. Theme: 'Energy in Motion'.",rules:"Shot on any device during OORJA '26. Max 3 entries. Basic edits only, no composites.",img:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop"},
  {id:9,title:"Campus Quest — Treasure Hunt",cat:"Fun",type:"unofficial",date:"Mar 6",time:"9 AM onwards",venue:"Starts at Gate 1",prize:"Goodies + ₹5K",team:"3–5 members",desc:"Cryptic clues across 2 km of campus — rooftops, canteens, secret stairs seniors never told you about. First team to the OORJA flag wins.",rules:"No vehicles. One phone per team for clues. Volunteers at every checkpoint.",img:"https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop"},
  {id:10,title:"Gully Cricket — Box Tournament",cat:"Sports",type:"unofficial",date:"Mar 6–7",time:"8 AM onwards",venue:"Sports Ground Nets",prize:"Trophy + ₹8K",team:"6 + 1 sub",desc:"Tennis-ball chaos with commentary louder than the IPL. 5-over thrillers, gully rules, legendary sledging (friendly).",rules:"5 overs per innings. Underarm for mixed teams optional. Umpire's call is final — and loud.",img:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop"},
  {id:11,title:"BGMI Showdown — Gaming Arena",cat:"Gaming",type:"unofficial",date:"Mar 7",time:"11 AM onwards",venue:"Gaming Zone, SAC Hall",prize:"₹10,000",team:"Solo / Squad",desc:"Erangel on the big screen with live shoutcasting. 64 players, 3 maps, one chicken dinner that actually matters.",rules:"Own device + earphones. No emulators or hacks — instant ban. Points + placement scoring.",img:"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"},
  {id:12,title:"Open Mic & Poetry Slam",cat:"Literary",type:"unofficial",date:"Mar 8",time:"11 AM onwards",venue:"Poetry Corner, Lawns",prize:"Goodies + Feature",team:"Solo",desc:"Shayari, standup, stories and songs under the trees. Fairy lights, floor cushions, snaps instead of claps.",rules:"4 min per performer. Original pieces preferred. Slots fill fast — arrive 30 min early.",img:"https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop"},
  {id:13,title:"Food Carnival Cook-Off",cat:"Food",type:"unofficial",date:"All 3 Days",time:"4 PM onwards",venue:"Food Lane",prize:"₹6K + Stall Feature",team:"1–3 members",desc:"Hostel chefs vs. home chefs. Mystery-box challenge judged by actual food bloggers. Plus 30+ stalls to eat your feelings.",rules:"Veg only. 45 min cook time. Hygiene check mandatory. Ingredients partly provided.",img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"},
  {id:14,title:"Reels & Memes Challenge",cat:"Creator",type:"unofficial",date:"All 3 Days",time:"Post by Mar 8, 6 PM",venue:"Online",prize:"Merch + ₹5K",team:"Solo",desc:"Film the fest, meme the fest, go viral at the fest. Best reel screened on Star Night main screen before fireworks.",rules:"Tag @oorja.fest + #MyOorjaMoment. Original content only. No drones without permission.",img:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"},
];

const TEAM = [
  {name:"Aarav Mehta",role:"President",dept:"Core",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",quote:"If it's not fun, we're doing it wrong."},
  {name:"Diya Sharma",role:"Vice President",dept:"Core",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",quote:"Behind every stage is a spreadsheet."},
  {name:"Rohan Kapoor",role:"General Secretary",dept:"Core",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",quote:"Logistics is my love language."},
  {name:"Ananya Iyer",role:"Cultural Head",dept:"Cultural",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",quote:"Dance first, meeting later."},
  {name:"Kabir Singh",role:"Music Head",dept:"Cultural",img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",quote:"Soundcheck at 6 AM. Worth it."},
  {name:"Ishita Verma",role:"Dance Head",dept:"Cultural",img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",quote:"Choreographing chaos since '24."},
  {name:"Aditya Rao",role:"Tech Head",dept:"Technical",img:"https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop",quote:"Have you tried turning the stage off and on?"},
  {name:"Sneha Patel",role:"Design Lead",dept:"Technical",img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop",quote:"This website? You're welcome."},
  {name:"Yash Thakur",role:"Sponsorship Head",dept:"Marketing",img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",quote:"I can sell ice to a snowman."},
  {name:"Priya Nair",role:"Marketing & PR",dept:"Marketing",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",quote:"Viral is a strategy, not luck."},
  {name:"Arjun Malhotra",role:"Logistics Head",dept:"Logistics",img:"https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=600&auto=format&fit=crop",quote:"Walkie-talkie is my personality."},
  {name:"Simran Kaur",role:"Hospitality Head",dept:"Logistics",img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",quote:"Guests first, sleep never."},
  {name:"Dev Patel",role:"Content Lead",dept:"Creative",img:"https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=600&auto=format&fit=crop",quote:"Every caption is a poem."},
  {name:"Meera Joshi",role:"Decor Head",dept:"Creative",img:"https://images.unsplash.com/photo-1488426862028-3ee34a7d66df?q=80&w=600&auto=format&fit=crop",quote:"Fairy lights fix everything."},
  {name:"Vihaan Shah",role:"Photography Lead",dept:"Creative",img:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop",quote:"Smile, you're in the aftermovie."},
];

const GALLERY = [
  {src:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",cat:"Crowd",cap:"Star Night crowd '25 — 5,000 strong"},
  {src:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"Main Stage lights, Day 3 finale"},
  {src:"https://images.unsplash.com/photo-1576089172869-4f5c6f315251?q=80&w=800&auto=format&fit=crop",cat:"Culture",cap:"Colours of Bhangra Night"},
  {src:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"DJ Night — hands in the air"},
  {src:"https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",cat:"Dance",cap:"Nritya finals, amphitheatre"},
  {src:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",cat:"Fun",cap:"Sparklers at the food lane"},
  {src:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"Encore! Nobody wanted to leave"},
  {src:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"Behind the decks"},
  {src:"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",cat:"Culture",cap:"Live art wall, Day 1"},
  {src:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop",cat:"Crowd",cap:"Sunset crowd before Star Night"},
  {src:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",cat:"Crowd",cap:"When the whole ground sings along"},
  {src:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",cat:"Fun",cap:"Midnight maggi hits different"},
  {src:"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",cat:"Culture",cap:"Vastra fashion show backstage"},
  {src:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"Headliner soundcheck"},
  {src:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",cat:"Fun",cap:"Squad goals, OORJA edition"},
  {src:"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop",cat:"Dance",cap:"DJ Night dance pit"},
  {src:"https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop",cat:"Crowd",cap:"Treasure hunt flag-off"},
  {src:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",cat:"Concerts",cap:"Fireworks over Main Ground"},
];

let eventType="all", eventCat="all", teamDept="all", galCat="all", currentEvent=null, lbIndex=0, lbList=[];
const PASS_PRICES={day1:299,day2:349,full:699,squad:1999};
const PASS_NAMES={day1:"Day 1 — Bhangra Night Pass",day2:"Day 2 — DJ Night Pass",full:"Full 3-Day Pass",squad:"Squad Pass × 4"};
let passType="full", passQty=1;

/* ============ ROUTER ============ */
function navigateTo(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===page));
  document.getElementById('mobileMenu').classList.add('hidden');
  resetHamburger();
  window.scrollTo({top:0,behavior:'instant'});
  requestAnimationFrame(()=>observeReveals());
}
function goHomeSection(id){
  const home=document.getElementById('page-home');
  if(!home.classList.contains('active')) navigateTo('home');
  document.getElementById('mobileMenu').classList.add('hidden'); resetHamburger();
  setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),80);
}
function toggleMobileMenu(){
  const m=document.getElementById('mobileMenu');
  m.classList.toggle('hidden');
  const open=!m.classList.contains('hidden');
  document.getElementById('hb1').style.transform=open?'rotate(45deg) translate(5px,5px)':'';
  document.getElementById('hb2').style.opacity=open?'0':'1';
  document.getElementById('hb3').style.transform=open?'rotate(-45deg) translate(5px,-5px)':'';
}
function resetHamburger(){
  document.getElementById('hb1').style.transform='';
  document.getElementById('hb2').style.opacity='1';
  document.getElementById('hb3').style.transform='';
}

/* ============ REVEAL / COUNTERS ============ */
let revealObs;
function observeReveals(){
  const els=document.querySelectorAll('.page.active .reveal,.page.active .reveal-left,.page.active .reveal-right,.page.active .reveal-scale');
  if(revealObs) revealObs.disconnect();
  revealObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target);} });
  },{threshold:.12});
  els.forEach(el=>revealObs.observe(el));
  // counters
  const counters=document.querySelectorAll('.page.active .counter');
  const cObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target, target=+el.dataset.target; let cur=0;
        const step=Math.max(1,Math.ceil(target/60));
        const t=setInterval(()=>{cur+=step; if(cur>=target){cur=target;clearInterval(t);} el.textContent=cur.toLocaleString('en-IN');},25);
        cObs.unobserve(el);
      }
    });
  },{threshold:.4});
  counters.forEach(c=>cObs.observe(c));
}

/* ============ COUNTDOWN ============ */
function getTarget(){
  const now=new Date(); let year=now.getFullYear();
  let end=new Date(year,2,8,23,59,59);
  if(now>end) year+=1;
  return new Date(year,2,6,18,0,0);
}
function tickCountdown(){
  const t=getTarget()-new Date();
  const d=Math.max(0,Math.floor(t/864e5)),h=Math.max(0,Math.floor(t/36e5)%24),m=Math.max(0,Math.floor(t/6e4)%60),s=Math.max(0,Math.floor(t/1e3)%60);
  const pd=n=>String(n).padStart(2,'0');
  if(document.getElementById('cd-d')){document.getElementById('cd-d').textContent=pd(d);document.getElementById('cd-h').textContent=pd(h);document.getElementById('cd-m').textContent=pd(m);document.getElementById('cd-s').textContent=pd(s);}
}
setInterval(tickCountdown,1000); tickCountdown();

/* ============ EVENTS ============ */
const CATS=["all","Music","Dance","Theatre","Fashion","Tech","Art","Fun","Sports","Gaming","Food","Literary","Creator"];
function buildCatFilters(){
  document.getElementById('catFilters').innerHTML=CATS.map(c=>`<button class="filter-pill ${c==='all'?'active':''}" onclick="setEventCat('${c}',this)">${c==='all'?'All Categories':c}</button>`).join('');
}
function setEventType(t,btn){eventType=t;document.querySelectorAll('#typeFilters .filter-pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderEvents();}
function setEventCat(c,btn){eventCat=c;document.querySelectorAll('#catFilters .filter-pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderEvents();}
function resetEventFilters(){eventType='all';eventCat='all';document.getElementById('eventSearch').value='';document.querySelectorAll('#typeFilters .filter-pill').forEach((b,i)=>b.classList.toggle('active',i===0));buildCatFilters();renderEvents();}
function typeBadge(e){
  if(e.type==='official') return `<span class="bg-terracotta text-ivory text-[10px] font-grotesk font-bold tracking-widest px-2 py-1 border border-charcoal">OFFICIAL • ${e.cat.toUpperCase()}</span>`;
  return `<span class="bg-olive text-ivory text-[10px] font-grotesk font-bold tracking-widest px-2 py-1 border border-charcoal">UNOFFICIAL • ${e.cat.toUpperCase()}</span>`;
}
function eventCard(e){
  return `<div class="event-card bg-paper border-[2.5px] border-charcoal hard overflow-hidden flex flex-col">
    <div class="h-52 overflow-hidden border-b-[2.5px] border-charcoal relative">
      <img src="${e.img}" loading="lazy" class="w-full h-full object-cover" alt="${e.title}" />
      <div class="absolute top-3 left-3">${typeBadge(e)}</div>
      <div class="absolute bottom-3 right-3 bg-mustard text-charcoal font-grotesk font-bold text-[11px] px-2.5 py-1 border-2 border-charcoal">${e.prize}</div>
    </div>
    <div class="p-5 flex flex-col flex-1">
      <h3 class="font-grotesk font-bold text-lg leading-tight">${e.title}</h3>
      <div class="text-[11px] font-bold tracking-wider text-smoke mt-1.5 flex flex-wrap gap-x-3 gap-y-1"><span><i class="fa-solid fa-calendar-days text-terracotta"></i> ${e.date}</span><span><i class="fa-solid fa-location-dot text-terracotta"></i> ${e.venue}</span></div>
      <p class="text-sm text-smoke mt-2.5 leading-relaxed flex-1">${e.desc.slice(0,110)}…</p>
      <div class="flex gap-2 mt-4">
        <button onclick="openEventModal(${e.id})" class="btn btn-terra flex-1 py-2.5 text-[11px]">Details + Register</button>
        <button onclick="openEventModal(${e.id})" class="btn w-11 py-2.5 border-charcoal hover:bg-charcoal hover:text-ivory"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div></div>`;
}
function renderEvents(){
  const q=(document.getElementById('eventSearch').value||'').toLowerCase();
  const filt=EVENTS.filter(e=>(eventType==='all'||e.type===eventType)&&(eventCat==='all'||e.cat===eventCat)&&(e.title.toLowerCase().includes(q)||e.cat.toLowerCase().includes(q)||e.desc.toLowerCase().includes(q)||e.venue.toLowerCase().includes(q)));
  const off=filt.filter(e=>e.type==='official'), un=filt.filter(e=>e.type==='unofficial');
  document.getElementById('officialGrid').innerHTML=off.map(eventCard).join('')||'<p class="text-smoke col-span-full">No official events match.</p>';
  document.getElementById('unofficialGrid').innerHTML=un.map(eventCard).join('')||'<p class="text-smoke col-span-full">No carnival events match.</p>';
  document.getElementById('officialWrap').style.display=(eventType==='unofficial')?'none':'';
  document.getElementById('unofficialWrap').style.display=(eventType==='official')?'none':'';
  document.getElementById('noEvents').classList.toggle('hidden',filt.length>0);
}
function openEventModal(id){
  currentEvent=EVENTS.find(e=>e.id===id);
  document.getElementById('em-img').src=currentEvent.img.replace('w=800','w=1200');
  document.getElementById('em-title').textContent=currentEvent.title;
  document.getElementById('em-tag').textContent=(currentEvent.type==='official'?'OFFICIAL • ':'UNOFFICIAL • ')+currentEvent.cat.toUpperCase();
  document.getElementById('em-date').textContent=currentEvent.date;
  document.getElementById('em-time').textContent=currentEvent.time;
  document.getElementById('em-venue').textContent=currentEvent.venue;
  document.getElementById('em-prize').textContent=currentEvent.prize;
  document.getElementById('em-desc').textContent=currentEvent.desc+` Team: ${currentEvent.team}.`;
  document.getElementById('em-rules').textContent=currentEvent.rules;
  const m=document.getElementById('eventModal'); m.classList.remove('hidden'); m.classList.add('flex'); document.body.style.overflow='hidden';
}
function closeEventModal(){const m=document.getElementById('eventModal');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}
function registerEvent(e){e.preventDefault();const n=document.getElementById('e-name').value;closeEventModal();showToast(`Registered! Good luck, ${n.split(' ')[0]} — see you at ${currentEvent.title}.`,'success');e.target.reset();}

/* ============ TEAM ============ */
function setTeamDept(d,btn){teamDept=d;document.querySelectorAll('#teamFilters .filter-pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderTeam();}
const DEPT_COLORS={Core:'bg-terracotta text-ivory',Cultural:'bg-mustard text-charcoal',Technical:'bg-charcoal text-ivory',Marketing:'bg-warmorange text-ivory',Logistics:'bg-olive text-ivory',Creative:'bg-ivory text-charcoal'};
function renderTeam(){
  const list=TEAM.filter(t=>teamDept==='all'||t.dept===teamDept);
  document.getElementById('teamGrid').innerHTML=list.map((t,i)=>`
    <div class="team-card bg-paper border-[2.5px] border-charcoal hard overflow-hidden">
      <div class="h-72 overflow-hidden border-b-[2.5px] border-charcoal relative">
        <img src="${t.img}" loading="lazy" class="w-full h-full object-cover" style="filter:saturate(1.05) contrast(1.03)" alt="${t.name}" />
        <span class="absolute top-3 left-3 ${DEPT_COLORS[t.dept]} font-grotesk font-bold text-[10px] tracking-widest px-2.5 py-1.5 border-2 border-charcoal">${t.dept.toUpperCase()}</span>
      </div>
      <div class="p-5">
        <h3 class="font-grotesk font-bold text-lg">${t.name}</h3>
        <div class="font-grotesk text-xs font-bold tracking-widest text-terracotta">${t.role.toUpperCase()}</div>
        <p class="font-hand text-lg text-smoke mt-1">“${t.quote}”</p>
        <div class="flex gap-2 mt-3">
          <button onclick="showToast('Opening ${t.name.split(' ')[0]}’s Instagram…','success')" class="flex-1 border-2 border-charcoal py-2 text-xs font-grotesk font-bold tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"><i class="fa-brands fa-instagram mr-1"></i>INSTA</button>
          <button onclick="showToast('Opening LinkedIn…','success')" class="flex-1 border-2 border-charcoal py-2 text-xs font-grotesk font-bold tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"><i class="fa-brands fa-linkedin mr-1"></i>LINKEDIN</button>
        </div>
      </div>
    </div>`).join('');
}

/* ============ GALLERY ============ */
function setGalCat(c,btn){galCat=c;document.querySelectorAll('#galFilters .filter-pill').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderGallery();}
function renderGallery(){
  lbList=GALLERY.filter(g=>galCat==='all'||g.cat===galCat);
  const rots=['rotate-[-1deg]','rotate-[1deg]','rotate-0'];
  document.getElementById('galleryGrid').innerHTML=lbList.map((g,i)=>`
    <div class="gal-item bg-white border-[2.5px] border-charcoal hard-sm overflow-hidden cursor-pointer ${rots[i%3]} hover:!rotate-0 transition-transform" onclick="openLightbox(${i})">
      <div class="overflow-hidden"><img src="${g.src}" loading="lazy" class="w-full object-cover ${i%4===0?'h-80':i%4===1?'h-56':i%4===2?'h-72':'h-64'}" alt="${g.cap}" /></div>
      <div class="p-3 flex justify-between items-center border-t-2 border-charcoal bg-paper"><span class="font-hand text-lg leading-none">${g.cap}</span><span class="font-grotesk text-[9px] font-bold tracking-widest bg-cream border border-charcoal px-2 py-1 shrink-0 ml-2">${g.cat.toUpperCase()}</span></div>
    </div>`).join('');
}
function openLightbox(i){lbIndex=i;updateLightbox();const m=document.getElementById('lightbox');m.classList.remove('hidden');m.classList.add('flex');document.body.style.overflow='hidden';}
function updateLightbox(){const g=lbList[lbIndex];document.getElementById('lb-img').src=g.src.replace('w=800','w=1400');document.getElementById('lb-cap').textContent=g.cap;document.getElementById('lb-count').textContent=(lbIndex+1)+' / '+lbList.length;}
function stepLightbox(d){lbIndex=(lbIndex+d+lbList.length)%lbList.length;updateLightbox();}
function closeLightbox(){const m=document.getElementById('lightbox');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLightbox();closeEventModal();closePassModal();}if(!document.getElementById('lightbox').classList.contains('hidden')){if(e.key==='ArrowRight')stepLightbox(1);if(e.key==='ArrowLeft')stepLightbox(-1);}});

/* ============ PASSES ============ */
function openPassModal(type){
  if(type) selectPassSilent(type);
  document.getElementById('passStep1').classList.remove('hidden');
  document.getElementById('passStep2').classList.add('hidden');
  const m=document.getElementById('passModal');m.classList.remove('hidden');m.classList.add('flex');document.body.style.overflow='hidden';
  updatePassUI();
}
function closePassModal(){const m=document.getElementById('passModal');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}
function selectPass(t,btn){selectPassSilent(t);updatePassUI();}
function selectPassSilent(t){passType=t;if(t==='squad')passQty=1;}
function changeQty(d){passQty=Math.min(8,Math.max(1,passQty+d));updatePassUI();}
function updatePassUI(){
  document.querySelectorAll('.pass-opt').forEach(b=>{
    const on=b.dataset.pass===passType;
    b.classList.toggle('bg-charcoal',on);b.classList.toggle('text-ivory',on);b.classList.toggle('bg-paper',!on);
  });
  document.getElementById('passQty').textContent=passQty;
  document.getElementById('passTotal').textContent='₹'+(PASS_PRICES[passType]*passQty).toLocaleString('en-IN');
}
function confirmPass(){
  const n=document.getElementById('p-name').value.trim(),ph=document.getElementById('p-phone').value.trim(),em=document.getElementById('p-email').value.trim(),cl=document.getElementById('p-college').value.trim();
  if(!n||!ph||!em||!cl){showToast('Please fill all details to book your pass.','error');return;}
  if(ph.replace(/\D/g,'').length<10){showToast('Please enter a valid phone number.','error');return;}
  document.getElementById('ticketId').textContent='OORJA-'+Math.random().toString(36).slice(2,8).toUpperCase();
  document.getElementById('ticketDetail').textContent=`${PASS_NAMES[passType]} × ${passQty} • ${n.split(' ')[0]} • ₹${(PASS_PRICES[passType]*passQty).toLocaleString('en-IN')}`;
  document.getElementById('passStep1').classList.add('hidden');
  document.getElementById('passStep2').classList.remove('hidden');
  fireConfetti();
}
function fireConfetti(){
  const c=document.getElementById('confetti'),x=c.getContext('2d');
  c.classList.remove('hidden');c.width=innerWidth;c.height=innerHeight;
  const colors=['#C65332','#D97732','#D4A72C','#66734A','#242321','#F7F1E5'];
  const ps=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*200,y:innerHeight/2,vx:(Math.random()-.5)*12,vy:Math.random()*-11-2,s:Math.random()*8+4,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,col:colors[Math.floor(Math.random()*colors.length)],life:1}));
  let f=0;
  (function anim(){
    x.clearRect(0,0,c.width,c.height);f++;
    ps.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life-=.008;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=Math.max(0,p.life);x.fillStyle=p.col;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore();});
    if(f<180)requestAnimationFrame(anim);else{c.classList.add('hidden');}
  })();
}

/* ============ CONTACT / MISC ============ */
function submitContact(e){
  e.preventDefault();
  const btn=document.getElementById('contactBtn');btn.innerHTML='Sending… <i class="fa-solid fa-spinner fa-spin"></i>';btn.disabled=true;
  setTimeout(()=>{btn.innerHTML='Send Message <i class="fa-solid fa-paper-plane"></i>';btn.disabled=false;e.target.reset();showToast('Message sent! The committee will reply within 24 hrs.','success');},1200);
}
function subscribeNews(e){e.preventDefault();showToast('Subscribed! Welcome to the OORJA fam.','success');document.getElementById('newsEmail').value='';}
function toggleFaq(btn){const item=btn.parentElement;const was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));if(!was)item.classList.add('open');}
function showToast(msg,type='success'){
  const w=document.getElementById('toastWrap');
  const t=document.createElement('div');
  t.className=`toast w-full flex items-center gap-3 px-5 py-3.5 border-[2.5px] border-charcoal hard-sm font-grotesk font-bold text-sm ${type==='success'?'bg-olive text-ivory':'bg-terracotta text-ivory'}`;
  t.innerHTML=`<span class="w-8 h-8 shrink-0 bg-ivory ${type==='success'?'text-olive':'text-terracotta'} rounded-full flex items-center justify-center"><i class="fa-solid ${type==='success'?'fa-check':'fa-triangle-exclamation'}"></i></span><span>${msg}</span>`;
  w.appendChild(t);
  setTimeout(()=>{t.style.transition='all .4s';t.style.opacity='0';t.style.transform='translateY(10px)';setTimeout(()=>t.remove(),400);},3400);
}

/* ============ SCROLL FX ============ */
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('scrollProgress').style.width=pct+'%';
  const nav=document.getElementById('navbar');
  nav.classList.toggle('shadow-[0_4px_0_rgba(36,35,33,1)]',h.scrollTop>10);
  const bt=document.getElementById('backTop');
  if(h.scrollTop>600){bt.classList.remove('hidden');bt.classList.add('flex');}else{bt.classList.add('hidden');bt.classList.remove('flex');}
},{passive:true});

/* ============ INIT ============ */
// React mounts the original markup before this script is injected, so initialize
// immediately instead of waiting for window.load (which may have already fired).
buildCatFilters();renderEvents();renderTeam();renderGallery();observeReveals();
let p=0;const bar=document.getElementById('loaderBar');
const iv=setInterval(()=>{p+=25;bar.style.width=p+'%';if(p>=100){clearInterval(iv);setTimeout(()=>document.getElementById('preloader')?.classList.add('hidden'),250);}},180);
