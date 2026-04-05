
/* ═══════════════════════════════════════
   ROLES DATABASE
═══════════════════════════════════════ */
const RDB = {
  mafia:{icon:'😈',name:'مافيا',team:'فريق المافيا',tc:'var(--red)',
    border:'rgba(232,64,64,.4)',color:'var(--red2)',tid:'mafia',real:true,
    desc:'أنت من فريق المافيا. تتعاون سراً مع زملائك لتصفية المواطنين.',
    goal:'🎯 اقتل لاعباً كل ليلة حتى تتساوى أعداد المافيا مع المواطنين.',
    tip:'تظاهر بأنك مواطن عادي. لا تتصرف بريبة أمام الجميع.',
    ex:'بالنهار صوّت على مواطن بريء لتشتيت الأنظار. بالليل استهدف الشرطي أو الدكتور أولاً.'},
  doctor:{icon:'💉',name:'دكتور',team:'فريق المواطنين',tc:'var(--green)',
    border:'rgba(46,204,113,.4)',color:'var(--green2)',tid:'citizen',real:true,
    desc:'تستطيع إنقاذ لاعب واحد من الموت كل ليلة.',
    goal:'🎯 خمّن من ستقتله المافيا وأنقذه قبل فوات الأوان.',
    tip:'يمكنك إنقاذ نفسك مرة واحدة. راقب من يتكلم كثيراً — المافيا تستهدفه.',
    ex:'إذا كشف أحمد مشتبهين، المافيا ستقتله. أنقذه الليلة.'},
  police:{icon:'👮',name:'شرطي',team:'فريق المواطنين',tc:'var(--blue)',
    border:'rgba(58,123,213,.4)',color:'var(--blue2)',tid:'citizen',real:true,
    desc:'تكشف هوية لاعب كل ليلة وتعرف إذا كان مافيا أم بريء.',
    goal:'🎯 اكشف المافيا ووجّه الأصوات نحوهم بذكاء.',
    tip:'لا تكشف نفسك مباشرة — قد تُقتل. تصرف بطريقة غير مباشرة.',
    ex:'إذا عرفت أن سارة مافيا، اقترح التصويت عليها بدون كشف سببك الحقيقي.'},
  guard:{icon:'🛡️',name:'حارس',team:'فريق المواطنين',tc:'var(--blue)',
    border:'rgba(58,123,213,.35)',color:'var(--blue2)',tid:'citizen',real:true,
    desc:'تحمي لاعباً من أي هجوم كل ليلة.',
    goal:'🎯 احمِ اللاعبين المهمين كالشرطي والدكتور.',
    tip:'الفرق بينك وبين الدكتور: أنت تمنع الهجوم، هو يشفي.',
    ex:'إذا ظننت المافيا تعرف هوية الشرطي، احمِه الليلة.'},
  sniper:{icon:'🎯',name:'قناص',team:'فريق المواطنين',tc:'var(--orange)',
    border:'rgba(245,158,11,.4)',color:'var(--orange)',tid:'citizen',real:true,
    desc:'لديك رصاصة واحدة فقط تستخدمها طوال اللعبة.',
    goal:'🎯 استخدم رصاصتك على شخص متأكد أنه مافيا.',
    tip:'لا تتسرع. رصاصتك الوحيدة قيّمة جداً. انتظر.',
    ex:'إذا تصرف خالد بريبة لأكثر من جولتين، استخدم رصاصتك.'},
  serial_killer:{icon:'🔪',name:'القاتل المتسلسل',team:'الطرف الثالث',tc:'var(--red)',
    border:'rgba(232,64,64,.5)',color:'var(--red2)',tid:'third',real:true,
    desc:'تقتل لاعباً كل ليلة بشكل مستقل عن المافيا.',
    goal:'🎯 كن الناجي الوحيد — اقتل الجميع.',
    tip:'أنت تعمل لوحدك. لا تثق بالمافيا ولا المواطنين.',
    ex:'اقتل أي لاعب كل ليلة. الجميع عدوك.'},
  deceiver:{icon:'🃏',name:'المخادع',team:'الطرف الثالث',tc:'var(--purple)',
    border:'rgba(139,92,246,.4)',color:'var(--purple2)',tid:'third',real:false,
    desc:'عند موتك، تظهر هويتك كدور عشوائي يُربك الجميع.',
    goal:'🎯 ابقَ على قيد الحياة أطول فترة ممكنة.',
    tip:'تصرف كأنك مواطن عادي. قوتك تظهر فقط عند موتك.',
    ex:'إذا مُتّ، يظن الجميع أنك كنت مافيا أو شرطياً.'},
  joker:{icon:'😂',name:'المهرج',team:'الطرف الثالث',tc:'var(--purple)',
    border:'rgba(139,92,246,.4)',color:'var(--purple2)',tid:'third',real:false,
    desc:'تفوز إذا طردك الناس بالتصويت!',
    goal:'🎯 اجعل الجميع يصوتون عليك.',
    tip:'تصرف بريبة وكأنك مافيا. اجعلهم يشتبهون بك.',
    ex:'اتهم الجميع وتصرف بعصبية حتى يصوتوا عليك.'},
  citizen:{icon:'👤',name:'مواطن',team:'فريق المواطنين',tc:'var(--text2)',
    border:'rgba(100,100,150,.3)',color:'var(--text2)',tid:'citizen',real:false,
    desc:'مواطن عادي. لا قدرة خاصة — لكن صوتك مهم.',
    goal:'🎯 اكشف المافيا بالنقاش والتصويت الذكي.',
    tip:'راقب من يتغير موقفه كثيراً. الصمت أحياناً يكشف المافيا.',
    ex:'بالنهار ناقش وراقب. من يتجنب الاتهامات بشكل غير طبيعي؟'},
};

/* ═══════════════════════════════════════
   DISTRIBUTIONS
═══════════════════════════════════════ */
const DIST = {
  party:{
    4:['mafia','police','citizen','citizen'],
    5:['mafia','police','doctor','citizen','citizen'],
    6:['mafia','mafia','police','doctor','citizen','citizen'],
    7:['mafia','mafia','police','doctor','citizen','citizen','citizen'],
    8:['mafia','mafia','police','doctor','citizen','citizen','citizen','citizen'],
    9:['mafia','mafia','mafia','police','doctor','citizen','citizen','citizen','citizen'],
    10:['mafia','mafia','mafia','police','doctor','guard','citizen','citizen','citizen','citizen'],
    11:['mafia','mafia','mafia','police','doctor','guard','citizen','citizen','citizen','citizen','citizen'],
    12:['mafia','mafia','mafia','mafia','police','doctor','guard','citizen','citizen','citizen','citizen','citizen'],
  },
  quick:{
    4:['mafia','police','doctor','citizen'],
    5:['mafia','police','doctor','citizen','citizen'],
    6:['mafia','mafia','police','doctor','citizen','citizen'],
    7:['mafia','mafia','police','doctor','guard','citizen','citizen'],
    8:['mafia','mafia','police','doctor','guard','sniper','citizen','citizen'],
    9:['mafia','mafia','mafia','police','doctor','guard','sniper','citizen','citizen'],
    10:['mafia','mafia','mafia','police','doctor','guard','sniper','citizen','citizen','citizen'],
    11:['mafia','mafia','mafia','police','doctor','guard','sniper','citizen','citizen','citizen','citizen'],
    12:['mafia','mafia','mafia','mafia','police','doctor','guard','sniper','citizen','citizen','citizen','citizen'],
  },
  normal:{
    4:['mafia','police','doctor','citizen'],
    5:['mafia','police','doctor','guard','citizen'],
    6:['mafia','mafia','police','doctor','guard','citizen'],
    7:['mafia','mafia','police','doctor','guard','sniper','citizen'],
    8:['mafia','mafia','police','doctor','guard','sniper','joker','citizen'],
    9:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','citizen'],
    10:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','citizen','citizen'],
    11:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','citizen','citizen','citizen'],
    12:['mafia','mafia','mafia','mafia','police','doctor','guard','sniper','joker','citizen','citizen','citizen'],
  },
  pro:{
    4:['mafia','police','doctor','citizen'],
    5:['mafia','police','doctor','guard','joker'],
    6:['mafia','mafia','police','doctor','guard','joker'],
    7:['mafia','mafia','police','doctor','guard','sniper','joker'],
    8:['mafia','mafia','police','doctor','guard','sniper','joker','serial_killer'],
    9:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','serial_killer'],
    10:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','serial_killer','deceiver'],
    11:['mafia','mafia','mafia','police','doctor','guard','sniper','joker','serial_killer','deceiver','citizen'],
    12:['mafia','mafia','mafia','mafia','police','doctor','guard','sniper','joker','serial_killer','deceiver','citizen'],
  },
};

/* ═══════════════════════════════════════
   RANDOM EVENTS
═══════════════════════════════════════ */
const EVENTS = [
  {em:'🌩️',title:'انقطاع الكهرباء!',desc:'الفوضى تعمّ القرية — لا تصويت هذه الجولة!',effect:'no_vote'},
  {em:'🔥',title:'حريق مفاجئ!',desc:'اشتعلت النيران — لاعب عشوائي في خطر الليلة!',effect:'random_kill'},
  {em:'😵',title:'شائعة كاذبة!',desc:'انتشرت شائعة — أصوات التصويت تُعكس هذه الجولة!',effect:'reverse_vote'},
  {em:'🛡️',title:'ليلة الهدنة!',desc:'اتفق الجميع على وقف إطلاق النار — لا قتل الليلة!',effect:'no_kill'},
  {em:'🎭',title:'قناع الهوية!',desc:'تبادلت أدوار لاعبين عشوائياً هذه الجولة!',effect:'swap_roles'},
];

/* ═══════════════════════════════════════
   ACHIEVEMENTS
═══════════════════════════════════════ */
const ACHIEVEMENTS = {
  survivor:  {em:'🏅',name:'الناجي',     desc:'نجوت حتى نهاية اللعبة'},
  first_win: {em:'🥇',name:'الفوز الأول',desc:'فزت بأول لعبة تلعبها'},
  revealed:  {em:'🔍',name:'المحقق',     desc:'كشفت عضو مافيا بالتصويت'},
  silent:    {em:'🤐',name:'الصامت',     desc:'لم تُصوَّت عليك طوال اللعبة'},
  guardian:  {em:'🛡️',name:'الحارس',    desc:'أنقذت لاعباً من الموت'},
};

/* ═══════════════════════════════════════
   PLAYER TITLES
═══════════════════════════════════════ */
const PLAYER_TITLES = [
  {em:'👑',name:'أذكى لاعب',     cond:(p,G)=>G.votes&&Object.values(G.votes).filter(v=>v===G.players.indexOf(p)).length===0&&p.alive},
  {em:'🎭',name:'أكبر مخادع',    cond:(p,G)=>p.role==='mafia'&&p.alive},
  {em:'😈',name:'أخطر مافيا',    cond:(p,G)=>p.role==='mafia'&&G.kills&&G.killCount&&G.killCount[G.players.indexOf(p)]>0},
  {em:'💉',name:'أفضل منقذ',     cond:(p,G)=>p.role==='doctor'},
  {em:'🔥',name:'أكثر اتهاماً', cond:(p,G)=>{const i=G.players.indexOf(p);return G.voteHistory&&G.voteHistory.filter(v=>v===i).length>=2;}},
  {em:'🤐',name:'الأكثر صمتاً', cond:(p,G)=>{const i=G.players.indexOf(p);return G.voteHistory&&G.voteHistory.filter(v=>v===i).length===0&&!p.alive;}},
  {em:'🕵️',name:'المحقق',       cond:(p,G)=>p.role==='police'},
  {em:'🛡️',name:'حارس الليل',   cond:(p,G)=>p.role==='guard'},
  {em:'🎯',name:'الرامي الدقيق', cond:(p,G)=>p.role==='sniper'&&G.sniperUsed},
  {em:'😂',name:'ملك الفوضى',   cond:(p,G)=>p.role==='joker'},
];

const AVC=['#d4a84b','#3a7bd5','#2ecc71','#8b5cf6','#f59e0b','#ec4899','#e84040','#14b8a6','#06b6d4','#f97316','#84cc16','#a78bfa'];

const MODE_DESC={
  party:'🎉 أدوار أساسية فقط، بدون تعقيد. مثالي للمجالس والعائلة!',
  quick:'⚡ أدوار أساسية + بعض المتقدمة. سريع وممتع.',
  normal:'🎯 توازن ممتاز. الاختيار الأفضل لمعظم المجموعات.',
  pro:'🏆 جميع الأدوار + الطرف الثالث. للمحترفين فقط!',
};

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let G={
  n:6, mode:'party',
  opts:{events:false,titles:false,ach:false,horror:false},
  players:[], round:1, revealIdx:0,
  kills:[], killCount:{}, saved:null, guardTarget:null,
  sniperTarget:null, sniperUsed:false,
  jokerWon:false, skWon:false,
  currentEvent:null, noVote:false, noKill:false, reverseVote:false,
  votes:{}, voteHistory:[], voteIdx:0, aliveAtVote:[],
  _hcb:null, _prcb:null,
  _prFired:true, _prTimer:null, _prNext:null,
};

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
function initSetup(){
  document.getElementById('cnt-val').textContent=G.n;
  updateModeDesc();updateRolePrev();renderNames();
}
function updateModeDesc(){document.getElementById('mode-desc').textContent=MODE_DESC[G.mode];}
function updateRolePrev(){
  const d=(DIST[G.mode]||DIST.party)[G.n]||[];
  const c={};d.forEach(r=>c[r]=(c[r]||0)+1);
  document.getElementById('role-prev').innerHTML=Object.entries(c).map(([r,n])=>`${RDB[r]?.icon||'👤'} ${RDB[r]?.name||r}×${n}`).join(' &nbsp;|&nbsp; ');
}
function chg(d){G.n=Math.max(4,Math.min(12,G.n+d));document.getElementById('cnt-val').textContent=G.n;updateRolePrev();renderNames();}
function setMode(btn){
  G.mode=btn.dataset.m;
  document.querySelectorAll('.seg-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  updateModeDesc();updateRolePrev();
}
function togOpt(k){
  G.opts[k]=!G.opts[k];
  document.getElementById('tog-'+k).classList.toggle('on',G.opts[k]);
  if(k==='horror') document.body.classList.toggle('horror',G.opts[k]);
}
function renderNames(){
  const el=document.getElementById('name-list'),old=[];
  for(let i=0;i<12;i++){const x=document.getElementById('pi-'+i);if(x)old[i]=x.value;}
  el.innerHTML='';
  for(let i=0;i<G.n;i++)
    el.innerHTML+=`<div class="prow"><div class="pnum">${i+1}</div><input type="text" id="pi-${i}" placeholder="اسم اللاعب ${i+1}" value="${old[i]||''}" maxlength="16"/></div>`;
}

/* ═══════════════════════════════════════
   START
═══════════════════════════════════════ */
function startGame(){
  const btn=document.getElementById('start-btn');
  if(btn.disabled)return;btn.disabled=true;
  const names=[];
  for(let i=0;i<G.n;i++){
    const v=(document.getElementById('pi-'+i)?.value||'').trim();
    if(!v){toast('⚠️ أدخل اسم اللاعب '+(i+1));btn.disabled=false;return;}
    if(names.includes(v)){toast('⚠️ الاسم "'+v+'" مكرر!');btn.disabled=false;return;}
    names.push(v);
  }
  let roles=[...(DIST[G.mode]||DIST.party)[G.n]||DIST.party[6]];
  while(roles.length<G.n)roles.push('citizen');
  roles=roles.slice(0,G.n);
  shuffle(roles);
  G.players=names.map((name,i)=>({name,role:roles[i],alive:true}));
  G.round=1;G.revealIdx=0;G.kills=[];G.killCount={};G.saved=null;
  G.guardTarget=null;G.sniperTarget=null;G.sniperUsed=false;
  G.jokerWon=false;G.skWon=false;
  G.currentEvent=null;G.noVote=false;G.noKill=false;G.reverseVote=false;
  G.votes={};G.voteHistory=[];G.voteIdx=0;G.aliveAtVote=[];
  G._prFired=true;G._prTimer=null;G._prNext=null; // reset police state
  btn.disabled=false;
  handoff(0,()=>doReveal(0));
}

function quickRematch(){
  const names=G.players.map(p=>p.name);
  go('s-setup');
  setTimeout(()=>{ for(let i=0;i<names.length;i++){const inp=document.getElementById('pi-'+i);if(inp)inp.value=names[i];} },100);
}

/* ═══════════════════════════════════════
   HANDOFF — one-shot + lock
═══════════════════════════════════════ */
function handoff(idx,cb,opts={}){
  let fired=false;
  G._hcb=()=>{if(fired)return;fired=true;cb();};
  document.getElementById('hand-to').textContent=opts.to||'أعطِ الجوال لـ';
  document.getElementById('hand-name').textContent=opts.name||(G.players[idx]?G.players[idx].name:'—');
  document.getElementById('hand-hint').textContent=opts.hint||'اضغط عندما يكون وحده وجاهز';
  const btn=document.getElementById('hand-btn');
  btn.textContent=opts.btn||'جاهز 👁️';btn.disabled=false;
  const nb=btn.cloneNode(true);btn.replaceWith(nb);
  nb.addEventListener('click',function(){this.disabled=true;if(G._hcb)G._hcb();},{once:true});
  go('s-hand');
}

/* ═══════════════════════════════════════
   ROLE REVEAL
═══════════════════════════════════════ */
function doReveal(idx){
  const p=G.players[idx],r=RDB[p.role]||RDB.citizen;
  document.getElementById('rc-wrap').innerHTML=`
    <div class="rc" style="border-color:${r.border};color:${r.color};">
      <span class="rc-em">${r.icon}</span>
      <div class="rc-name">${r.name}</div>
      <div class="rc-team" style="color:${r.tc}">${r.team}</div>
      <div class="rc-desc">${r.desc}</div>
      <div class="rc-goal">${r.goal}</div>
    </div>`;
  document.getElementById('role-tip').innerHTML=`<strong style="color:var(--gold)">💡 </strong>${r.tip}`;
  document.getElementById('role-ex').textContent=r.ex||'';
  const btn=document.getElementById('role-ok');
  btn.textContent='التالي ←';btn.disabled=false;
  const nb=btn.cloneNode(true);btn.replaceWith(nb);
  nb.addEventListener('click',function(){this.disabled=true;doAction(G.revealIdx);},{once:true});
  go('s-role');
}

/* ═══════════════════════════════════════
   ACTION SCREEN — identical for ALL
═══════════════════════════════════════ */
function doAction(idx){
  const p=G.players[idx];
  document.getElementById('act-em').textContent=G.opts.horror?'🩸':'🌙';
  document.getElementById('act-title').textContent='اختر لاعباً';
  const list=document.getElementById('act-list');list.innerHTML='';
  G.players.forEach((tp,ti)=>{
    if(!tp.alive)return;
    if(RDB[p.role]?.tid==='mafia'&&RDB[tp.role]?.tid==='mafia')return;
    if((p.role==='police')&&ti===idx)return;
    const btn=document.createElement('button');
    btn.className='pick-btn';btn.dataset.i=ti;
    btn.innerHTML=`<div class="pav" style="background:${AVC[ti%AVC.length]};">${tp.name.charAt(0)}</div><span>${tp.name}</span>`;
    btn.addEventListener('click',()=>{
      list.querySelectorAll('.pick-btn').forEach(b=>b.classList.remove('sel'));
      btn.classList.add('sel');cb.disabled=false;
    });
    list.appendChild(btn);
  });
  const oldcb=document.getElementById('act-confirm');
  const cb=oldcb.cloneNode(true);cb.disabled=true;cb.textContent='تأكيد ✓';
  oldcb.replaceWith(cb);
  cb.addEventListener('click',function(){
    this.disabled=true;
    const sel=list.querySelector('.pick-btn.sel');
    const ti=sel?parseInt(sel.dataset.i):null;
    const r=RDB[p.role];
    if(r?.real&&ti!==null){
      if(p.role==='mafia'){G.kills.push(ti);G.killCount[idx]=(G.killCount[idx]||0)+1;}
      else if(p.role==='doctor')G.saved=ti;
      else if(p.role==='guard')G.guardTarget=ti;
      else if(p.role==='sniper'&&!G.sniperUsed){G.sniperTarget=ti;G.sniperUsed=true;}
      else if(p.role==='serial_killer'){G.kills.push(ti);G.killCount[idx]=(G.killCount[idx]||0)+1;}
      else if(p.role==='police'){doPoliceResult(ti);return;}
    }
    showConfirmed();
  },{once:true});
  go('s-action');
}

/* ═══════════════════════════════════════
   CONFIRMED OVERLAY
═══════════════════════════════════════ */
function showConfirmed(){
  const ov=document.getElementById('conf-ov');ov.style.display='flex';
  // ★ innerHTML ينشئ الزر من جديد في كل مرة — لا مشكلة في الجولات المتعاقبة
  ov.innerHTML=`
    <div style="font-size:5rem;margin-bottom:16px;animation:pi .4s cubic-bezier(.34,1.56,.64,1)">✅</div>
    <div style="font-size:1.7rem;font-weight:900;color:var(--gold);margin-bottom:8px;">تم تسجيل اختيارك</div>
    <div style="font-size:.85rem;color:var(--muted);margin-bottom:36px;">أعطِ الجوال للاعب التالي</div>
    <button id="conf-btn" style="padding:15px 48px;background:linear-gradient(135deg,var(--gold),var(--gold2));border:none;border-radius:12px;font-family:Tajawal,sans-serif;font-size:1rem;font-weight:700;color:#1a0f00;cursor:pointer;">التالي ←</button>`;
  // ★ onclick مباشر + fired guard — يعمل في جميع الجولات
  let confFired=false;
  document.getElementById('conf-btn').onclick=function(){
    if(confFired)return;confFired=true;
    this.disabled=true;
    ov.style.display='none';
    nextReveal();
  };
}

/* ═══════════════════════════════════════
   POLICE RESULT
═══════════════════════════════════════ */
function doPoliceResult(ti){
  // ★ نحفظ الـ callback في متغير عام بسيط — بدون cloneNode
  G._prFired=false;
  G._prNext=function(){
    if(G._prFired)return;
    G._prFired=true;
    if(G._prTimer){clearTimeout(G._prTimer);G._prTimer=null;}
    showConfirmed();
  };

  const tp=G.players[ti],r=RDB[tp.role]||RDB.citizen;
  document.getElementById('pr-name').textContent=tp.name;
  document.getElementById('pr-em').textContent=r.icon;
  document.getElementById('pr-rname').textContent=r.name;
  document.getElementById('pr-team').textContent=r.team;
  document.getElementById('pr-box').style.borderColor=r.border;
  document.getElementById('pr-box').style.color=r.color;

  // ★ نضع onclick مباشرة — يعمل في كل الجولات بدون استثناء
  const btn=document.getElementById('pr-ok');
  btn.disabled=false;
  btn.onclick=function(){
    this.disabled=true;
    G._prNext();
  };

  go('s-police');

  // ★ fallback: إذا لم يضغط خلال 60 ثانية ينتقل تلقائياً (حماية من التوقف)
  if(G._prTimer)clearTimeout(G._prTimer);
  G._prTimer=setTimeout(()=>{G._prNext();},60000);
}

/* ═══════════════════════════════════════
   NEXT REVEAL
═══════════════════════════════════════ */
function nextReveal(){
  // ★ مسح أي timer شرطي معلّق قبل الانتقال
  if(G._prTimer){clearTimeout(G._prTimer);G._prTimer=null;}
  G._prFired=true; // اعتبره منتهياً دائماً

  G.revealIdx++;
  if(G.revealIdx>=G.players.length){resolveNight();return;}
  // ★ نقل صحيح — نحفظ القيمة محلياً لتفادي race condition
  const nextIdx=G.revealIdx;
  handoff(nextIdx,()=>doReveal(nextIdx),{to:'الآن أعطِ الجوال لـ'});
}

/* ═══════════════════════════════════════
   RANDOM EVENT
═══════════════════════════════════════ */
function maybeEvent(callback){
  if(!G.opts.events||Math.random()>.35){callback();return;}
  const ev=EVENTS[Math.floor(Math.random()*EVENTS.length)];
  G.currentEvent=ev;
  // Apply effect flags
  if(ev.effect==='no_vote')G.noVote=true;
  if(ev.effect==='no_kill')G.noKill=true;
  if(ev.effect==='reverse_vote')G.reverseVote=true;
  // Show event card
  document.getElementById('event-bg').style.display='block';
  document.getElementById('event-card-wrap').innerHTML=`
    <div class="event-card">
      <span class="event-em">${ev.em}</span>
      <div class="event-title">${ev.title}</div>
      <div class="event-desc">${ev.desc}</div>
      <div style="height:20px;"></div>
      <button id="ev-ok" style="padding:13px 40px;background:linear-gradient(135deg,var(--orange),var(--gold));border:none;border-radius:12px;font-family:Tajawal,sans-serif;font-size:1rem;font-weight:700;color:#1a0f00;cursor:pointer;">حسناً!</button>
    </div>`;
  document.getElementById('ev-ok').addEventListener('click',function(){
    document.getElementById('event-bg').style.display='none';
    document.getElementById('event-card-wrap').innerHTML='';
    callback();
  },{once:true});
}

/* ═══════════════════════════════════════
   RESOLVE NIGHT
═══════════════════════════════════════ */
function resolveNight(){
  const log=[];
  // Reset event flags
  G.noVote=false;G.noKill=false;G.reverseVote=false;G.currentEvent=null;

  maybeEvent(()=>{
    // Sniper
    if(G.sniperTarget!==null){
      const st=G.players[G.sniperTarget];
      if(G.saved===G.sniperTarget||G.guardTarget===G.sniperTarget){
        log.push({t:'save',msg:`🛡️ ${st.name} كان هدف القناص لكن تم إنقاذه!`});
      } else {
        st.alive=false;
        log.push({t:'kill',msg:`🎯 ${st.name} تم قنصه الليلة!`});
      }
    }

    // Random kill event
    if(G.currentEvent?.effect==='random_kill'){
      const alive=G.players.filter(p=>p.alive);
      if(alive.length>1){
        const victim=alive[Math.floor(Math.random()*alive.length)];
        if(G.saved===G.players.indexOf(victim)||G.guardTarget===G.players.indexOf(victim)){
          log.push({t:'save',msg:`🔥 الحريق اشتعل لكن ${victim.name} أُنقذ في آخر لحظة!`});
        } else {
          victim.alive=false;
          log.push({t:'event',msg:`🔥 الحريق التهم ${victim.name}!`});
        }
      }
    }

    // Mafia kills
    if(!G.noKill){
      [...new Set(G.kills)].forEach(ki=>{
        const kp=G.players[ki];if(!kp?.alive)return;
        if(G.saved===ki){log.push({t:'save',msg:`💉 ${kp.name} كان في خطر لكن الدكتور أنقذه!`});}
        else if(G.guardTarget===ki){log.push({t:'save',msg:`🛡️ ${kp.name} كان في خطر لكن الحارس حماه!`});}
        else{kp.alive=false;log.push({t:'kill',msg:`💀 ${kp.name} وُجد مقتولاً هذا الصباح`});}
      });
    } else {
      log.push({t:'event',msg:`🛡️ ليلة الهدنة — لم يُقتل أحد بأمر الأحداث!`});
    }

    if(log.length===0)log.push({t:'quiet',msg:'😴 مرّ الليل بهدوء — لم يُقتل أحد'});

    G.kills=[];G.saved=null;G.guardTarget=null;G.sniperTarget=null;
    renderDay(log);

    const w=checkWin();
    const dayBtn=document.getElementById('day-btn');
    if(w){
      dayBtn.textContent='🏆 كشف النتيجة';
      const nb=dayBtn.cloneNode(true);dayBtn.replaceWith(nb);
      nb.addEventListener('click',()=>endGame(w),{once:true});
    } else {
      dayBtn.textContent='🗳️ ابدأ التصويت';
      const nb=dayBtn.cloneNode(true);dayBtn.replaceWith(nb);
      nb.addEventListener('click',startVote,{once:true});
    }
    go('s-day');
  });
}

function renderDay(log){
  document.getElementById('day-badge').textContent=`جولة ${G.round}`;
  const logEl=document.getElementById('day-log');logEl.innerHTML='';
  log.forEach(e=>logEl.innerHTML+=`<div class="log-e le-${e.t}">${e.msg}</div>`);
  if(G.currentEvent)logEl.innerHTML+=`<div class="log-e le-event">${G.currentEvent.em} حدث: ${G.currentEvent.title}</div>`;
  const pe=document.getElementById('day-players');pe.innerHTML='';
  G.players.forEach((p,i)=>{
    const tag=p.alive?`<span class="ptag tag-a">حي</span>`:`<span class="ptag tag-d">💀</span>`;
    pe.innerHTML+=`<div class="prow2">
      <div class="pav" style="background:${AVC[i%AVC.length]};">${p.name.charAt(0)}</div>
      <div style="font-weight:700;${!p.alive?'opacity:.4;text-decoration:line-through;':''}">${p.name}</div>
      ${tag}</div>`;
  });
}

/* ═══════════════════════════════════════
   VOTE
═══════════════════════════════════════ */
function startVote(){
  if(G.noVote){toast('🌩️ انقطاع الكهرباء — لا تصويت هذه الجولة!');setTimeout(()=>{G.round++;G.revealIdx=0;handoff(0,()=>doReveal(0),{to:`🌙 جولة ${G.round} — أعطِ الجوال لـ`});},1500);return;}
  G.votes={};G.aliveAtVote=G.players.map((p,i)=>p.alive?i:-1).filter(i=>i>=0);G.voteIdx=0;
  nextVoter();
}

function nextVoter(){
  if(G.voteIdx>=G.aliveAtVote.length){resolveVotes();return;}
  const pi=G.aliveAtVote[G.voteIdx];
  handoff(pi,()=>voteScreen(pi),{to:'🗳️ دور التصويت لـ',hint:'أعطه الجوال وحده',btn:'صوّت 🗳️'});
}

function voteScreen(vi){
  document.getElementById('vote-name').textContent=G.players[vi].name;
  document.getElementById('vote-prog').textContent=`${G.voteIdx+1}/${G.aliveAtVote.length}`;
  const list=document.getElementById('vote-list');list.innerHTML='';
  G.players.forEach((p,i)=>{
    if(!p.alive||i===vi)return;
    const btn=document.createElement('button');btn.className='pick-btn';btn.dataset.i=i;
    btn.innerHTML=`<div class="pav" style="background:${AVC[i%AVC.length]};">${p.name.charAt(0)}</div><span>${p.name}</span>`;
    btn.addEventListener('click',()=>{list.querySelectorAll('.pick-btn').forEach(b=>b.classList.remove('sel'));btn.classList.add('sel');vc.disabled=false;});
    list.appendChild(btn);
  });
  const oldvc=document.getElementById('vote-ok');
  const vc=oldvc.cloneNode(true);vc.disabled=true;vc.textContent='تأكيد التصويت ✓';oldvc.replaceWith(vc);
  vc.addEventListener('click',function(){
    this.disabled=true;
    const sel=list.querySelector('.pick-btn.sel');
    if(sel){G.votes[vi]=parseInt(sel.dataset.i);G.voteHistory.push(parseInt(sel.dataset.i));}
    G.voteIdx++;nextVoter();
  },{once:true});
  const oldsk=document.getElementById('vote-skip');
  const sk=oldsk.cloneNode(true);oldsk.replaceWith(sk);
  sk.addEventListener('click',function(){this.disabled=true;G.voteIdx++;nextVoter();},{once:true});
  go('s-vote');
}

function resolveVotes(){
  const tally={};
  Object.entries(G.votes).forEach(([voter,target])=>{
    const t=G.reverseVote?parseInt(voter):target;
    tally[t]=(tally[t]||0)+1;
  });
  const total=Object.values(G.votes).length;
  const barsEl=document.getElementById('vr-bars');barsEl.innerHTML='';
  G.players.forEach((p,i)=>{
    if(!p.alive)return;
    const c=tally[i]||0,pct=total?Math.round(c/total*100):0;
    const r=RDB[p.role]||RDB.citizen;
    barsEl.innerHTML+=`<div class="vr-row">
      <div class="vr-top"><span>${r.icon} ${p.name}</span><span style="color:var(--gold)">${c} 🗳️</span></div>
      <div class="vr-bg"><div class="vr-fill" style="width:${pct}%"></div></div>
    </div>`;
  });
  let maxV=0,elims=[];
  Object.entries(tally).forEach(([idx,c])=>{if(c>maxV){maxV=c;elims=[+idx];}else if(c===maxV)elims.push(+idx);});
  const elimEl=document.getElementById('elim-box');
  if(!maxV||elims.length>1){
    elimEl.innerHTML=`<div style="color:var(--muted);font-size:1.05rem;">🤷 تعادل — لم يُطرد أحد</div>`;
  } else {
    const ep=G.players[elims[0]],er=RDB[ep.role]||RDB.citizen;
    ep.alive=false;
    if(ep.role==='joker')G.jokerWon=true;
    // Deceiver: show fake role
    const shownRole = ep.role==='deceiver' ? Object.keys(RDB)[Math.floor(Math.random()*Object.keys(RDB).length)] : ep.role;
    const sr=RDB[shownRole]||er;
    elimEl.innerHTML=`
      <div style="color:var(--red2);margin-bottom:8px;font-size:.85rem;">طُرد من اللعبة</div>
      <div style="font-size:2rem;font-weight:900;margin-bottom:6px;">${ep.name}</div>
      <div style="font-size:1.1rem;color:${sr.color};">${sr.icon} كان ${sr.name}</div>
      <div style="font-size:.75rem;color:var(--muted);margin-top:3px;">${sr.team}</div>
      ${ep.role==='joker'?`<div style="margin-top:10px;color:var(--purple2);font-weight:700;">🃏 المهرج فاز بهدفه!</div>`:''}
      ${ep.role==='deceiver'&&shownRole!==ep.role?`<div style="margin-top:8px;color:var(--muted);font-size:.72rem;">(الدور الحقيقي سيُكشف في النهاية)</div>`:''}`;
  }
  const nb2=document.getElementById('next-btn').cloneNode(true);
  document.getElementById('next-btn').replaceWith(nb2);
  nb2.addEventListener('click',function(){
    this.disabled=true;
    if(G.jokerWon){endGame('joker');return;}
    const w=checkWin();if(w){endGame(w);return;}
    G.round++;G.revealIdx=0;
    handoff(0,()=>doReveal(0),{to:`🌙 جولة ${G.round} — أعطِ الجوال لـ`});
  },{once:true});
  go('s-vresult');
}

/* ═══════════════════════════════════════
   WIN CHECK
═══════════════════════════════════════ */
function checkWin(){
  if(G.jokerWon)return'joker';
  const aM=G.players.filter(p=>RDB[p.role]?.tid==='mafia'&&p.alive).length;
  const aO=G.players.filter(p=>RDB[p.role]?.tid!=='mafia'&&p.alive).length;
  const aSK=G.players.filter(p=>p.role==='serial_killer'&&p.alive).length;
  if(aSK>0&&aM===0&&aO===1)return'serial_killer';
  if(aM===0)return'citizens';
  if(aM>=aO)return'mafia';
  return null;
}

/* ═══════════════════════════════════════
   END GAME + TITLES + ACHIEVEMENTS
═══════════════════════════════════════ */
function endGame(winner){
  const cfgs={
    mafia:    {em:'😈',title:'فازت المافيا!',   sub:'سيطرت المافيا على القرية',    col:'var(--red2)'},
    citizens: {em:'🎉',title:'فاز المواطنون!',  sub:'تم القضاء على المافيا',        col:'var(--green2)'},
    joker:    {em:'😂',title:'فاز المهرج!',      sub:'نجح المهرج في مخططه الغريب',  col:'var(--purple2)'},
    serial_killer:{em:'🔪',title:'فاز القاتل المتسلسل!',sub:'القاتل لم يرحم أحداً',col:'var(--red)'},
  };
  const cfg=cfgs[winner]||{em:'🏆',title:'انتهت اللعبة',sub:'',col:'var(--gold)'};
  document.getElementById('win-em').textContent=cfg.em;
  document.getElementById('win-title').textContent=cfg.title;
  document.getElementById('win-title').style.color=cfg.col;
  document.getElementById('win-sub').textContent=cfg.sub;
  document.getElementById('win-stats').textContent=`${G.round} جولة | ${G.n} لاعب`;

  // Full reveal
  const rev=document.getElementById('win-reveal');rev.innerHTML='';
  G.players.forEach((p,i)=>{
    const r=RDB[p.role]||RDB.citizen;
    const stag=p.alive
      ?`<span class="ptag tag-a">حي</span>`
      :`<span class="ptag tag-d">💀</span>`;
    rev.innerHTML+=`<div class="rev-row">
      <div style="display:flex;align-items:center;gap:10px;">
        <div class="pav" style="background:${AVC[i%AVC.length]};">${p.name.charAt(0)}</div>
        <div><div style="font-weight:700;">${p.name}</div><div style="font-size:.75rem;color:${r.color};">${r.icon} ${r.name}</div></div>
      </div>${stag}</div>`;
  });

  // Titles
  const titSec=document.getElementById('titles-section');
  if(G.opts.titles){
    const assigned=[];
    const usedPlayers=new Set();
    PLAYER_TITLES.forEach(t=>{
      const p=G.players.find(p=>!usedPlayers.has(p)&&t.cond(p,G));
      if(p){assigned.push({...t,player:p.name});usedPlayers.add(p);}
    });
    // Fill remaining with random funny titles
    const funnyTitles=[
      {em:'🤡',name:'أكثر لاعب حظاً',player:''},
      {em:'💬',name:'الأكثر كلاماً',player:''},
      {em:'🎪',name:'روح المجلس',player:''},
    ];
    const unassigned=G.players.filter(p=>!usedPlayers.has(p));
    unassigned.forEach((p,i)=>{
      if(funnyTitles[i]){assigned.push({...funnyTitles[i],player:p.name});}
    });
    if(assigned.length>0){
      titSec.innerHTML=`<div class="lbl" style="margin:0 0 8px;">👑 ألقاب اللاعبين</div>`+
        assigned.map(t=>`<div class="title-card"><div class="title-em">${t.em}</div><div><div class="title-name">${t.name}</div><div class="title-player">${t.player}</div></div></div>`).join('')+
        `<div class="sp"></div>`;
    }
  } else titSec.innerHTML='';

  // Achievements
  const achSec=document.getElementById('ach-section');
  if(G.opts.ach){
    const earned=[];
    const survivors=G.players.filter(p=>p.alive&&p.role!=='mafia'&&winner==='citizens');
    if(survivors.length>0)earned.push(ACHIEVEMENTS.survivor);
    if(G.round===1&&winner)earned.push(ACHIEVEMENTS.first_win);
    const detectives=G.players.filter(p=>p.role==='police'&&p.alive&&winner==='citizens');
    if(detectives.length>0)earned.push(ACHIEVEMENTS.revealed);
    if(earned.length>0){
      achSec.innerHTML=`<div class="lbl" style="margin:0 0 8px;">🏆 إنجازات هذه الجولة</div>`+
        earned.map(a=>`<div class="ach-card"><div class="ach-em">${a.em}</div><div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div></div></div>`).join('')+
        `<div class="sp"></div>`;
    }
  } else achSec.innerHTML='';

  go('s-win');
}

/* ═══════════════════════════════════════
   MODALS
═══════════════════════════════════════ */
function openMod(html){document.getElementById('mcont').innerHTML=html;document.getElementById('mbg').classList.add('on');}
function closeMod(e){if(e&&e.target!==document.getElementById('mbg'))return;document.getElementById('mbg').classList.remove('on');}
const _closeBtn=`<div class="sp"></div><button class="btn btn-dark" onclick="closeMod({target:document.getElementById('mbg')})">إغلاق</button>`;

function showGuide(){openMod(`
  <div class="mtitle">📖 كيف تلعب المافيا؟</div>
  <div class="guide-row"><div style="font-size:1.6rem">🌙</div><div><div style="font-weight:700;margin-bottom:3px;">الليل</div><div style="font-size:.82rem;color:var(--text2);">كل لاعب يمسك الجوال وحده، يرى دوره، ويختار لاعباً. الاختيار سري تماماً.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">☀️</div><div><div style="font-weight:700;margin-bottom:3px;">النهار</div><div style="font-size:.82rem;color:var(--text2);">يُكشف من مات الليلة. يتناقش الجميع ويتهمون ويدافعون.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">🗳️</div><div><div style="font-weight:700;margin-bottom:3px;">التصويت</div><div style="font-size:.82rem;color:var(--text2);">كل لاعب يصوت سراً. الأكثر أصواتاً يُطرد ويُكشف دوره.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">🔄</div><div><div style="font-weight:700;margin-bottom:3px;">التكرار</div><div style="font-size:.82rem;color:var(--text2);">ليل → نهار → تصويت حتى يفوز أحد الطرفين.</div></div></div>
  <div style="margin-top:14px;background:var(--s2);border-radius:11px;padding:12px 14px;">
    <div style="font-size:.85rem;font-weight:700;color:var(--gold);margin-bottom:6px;">💡 نصائح للمبتدئين</div>
    <div style="font-size:.8rem;color:var(--text2);line-height:1.8;">• راقب من يتغير موقفه كثيراً<br>• من يهاجم بقوة قد يكون يشتت الأنظار<br>• الصمت أحياناً يكشف المافيا<br>• لا تكشف دورك إلا عند الضرورة</div>
  </div>
  ${_closeBtn}`);}

function showRules(){openMod(`
  <div class="mtitle">📜 قوانين اللعبة</div>
  <div class="guide-row"><div style="font-size:1.6rem">😈</div><div><div style="font-weight:700;margin-bottom:3px;">متى تفوز المافيا؟</div><div style="font-size:.82rem;color:var(--text2);">عندما يتساوى عدد المافيا مع المواطنين أو يتجاوزهم.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">👥</div><div><div style="font-weight:700;margin-bottom:3px;">متى يفوز المواطنون؟</div><div style="font-size:.82rem;color:var(--text2);">عندما يُقضى على جميع أفراد المافيا.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">😂</div><div><div style="font-weight:700;margin-bottom:3px;">متى يفوز المهرج؟</div><div style="font-size:.82rem;color:var(--text2);">إذا طرده المواطنون بالتصويت — يفوز لوحده!</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">🤷</div><div><div style="font-weight:700;margin-bottom:3px;">التعادل</div><div style="font-size:.82rem;color:var(--text2);">في حال تعادل الأصوات، لا يُطرد أحد في تلك الجولة.</div></div></div>
  <div class="guide-row"><div style="font-size:1.6rem">🔒</div><div><div style="font-weight:700;margin-bottom:3px;">قواعد السرية</div><div style="font-size:.82rem;color:var(--text2);">ممنوع إظهار شاشة دورك للآخرين. المقتول لا يتكلم بعد موته.</div></div></div>
  ${_closeBtn}`);}

function showAllRoles(){
  const teams={'فريق المافيا':'mafia','فريق المواطنين':'citizen','الطرف الثالث':'third'};
  let html=`<div class="mtitle">🎭 جميع الأدوار</div>`;
  Object.entries(teams).forEach(([tn,tid])=>{
    const rs=Object.values(RDB).filter(r=>r.tid===tid);
    html+=`<div class="lbl" style="margin:12px 0 6px;">${tn}</div>`;
    rs.forEach(r=>{
      html+=`<div class="guide-row">
        <div style="font-size:1.7rem;">${r.icon}</div>
        <div><div style="font-size:.9rem;font-weight:700;">${r.name}</div>
        <div style="font-size:.78rem;color:var(--text2);margin-top:2px;">${r.desc}</div>
        <div style="font-size:.72rem;color:var(--gold);margin-top:3px;">${r.goal}</div></div>
      </div>`;
    });
  });
  html+=_closeBtn;openMod(html);
}

/* ═══════════════════════════════════════
   NAV + UTILS
═══════════════════════════════════════ */
function go(id){
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  window.scrollTo(0,0);
}
function toast(msg){
  const t=document.createElement('div');
  t.style.cssText='position:fixed;top:18px;left:50%;transform:translateX(-50%);background:var(--gold);color:#1a0f00;padding:11px 24px;border-radius:50px;font-weight:700;font-size:.88rem;z-index:9999;animation:fu .3s ease;white-space:nowrap;';
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>t.remove(),2500);
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}

initSetup();
