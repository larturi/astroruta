(() => {
'use strict';
const STORE_KEY = 'astroruta-v1';
const defaults = {completed:{},correct:{},notes:{},bookmarks:[],theme:'dark'};
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch(e) { saved = {}; }
const data = {...defaults, ...saved};
if (!Array.isArray(data.bookmarks)) data.bookmarks=[];
const ui = {answers:{}, flipped:false,reviewIndex:0,reviewOrder:[],filter:'',glossaryFilter:''};
const $app=document.getElementById('app');
const $toast=document.getElementById('toast');
let toastTimer;
const ESC = s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const normalize=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const pad=x=>String(x).padStart(2,'0');
const localDay=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const plusDays=(d,n)=>{ const z=new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);return z;};
const done=i=>!!data.completed[i];
const correct=i=>!!data.correct[i];
const completeCount=()=>Object.keys(data.completed).filter(i=>done(i)).length;
const correctCount=()=>Object.keys(data.correct).filter(i=>correct(i)).length;
const xp=()=>100*completeCount()+20*correctCount();
const pct=()=>Math.round(completeCount()/LESSONS.length*100);
const nextIndex=()=>LESSONS.findIndex((_,i)=>!done(i));
const chapterOf=i=>CHAPTERS.findIndex(c=>i+1>=c.start&&i+1<=c.end);
function chapterDone(c){let total=0;for(let i=c.start-1;i<c.end;i++)if(done(i))total++;return total;}
function save(){try{localStorage.setItem(STORE_KEY,JSON.stringify(data));}catch(e){console.warn('No se pudo guardar el progreso local.',e);}}
function streak(){
 const set=new Set(Object.values(data.completed).filter(Boolean));
 let d=new Date();if(!set.has(localDay(d)))d=plusDays(d,-1);
 let n=0;while(set.has(localDay(d))){n++;d=plusDays(d,-1);}return n;
}
function showToast(msg){clearTimeout(toastTimer);$toast.textContent=msg;$toast.classList.add('show');toastTimer=setTimeout(()=>$toast.classList.remove('show'),3200);}
function confetti(){
 const colors=['#f1ca8f','#bb9ffa','#8bd2e5','#9bd8bc','#efafbf'];
 for(let i=0;i<24;i++){
  const e=document.createElement('i');e.className='burst';e.style.left=(46+Math.random()*8)+'vw';e.style.top=(42+Math.random()*12)+'vh';
  e.style.background=colors[i%colors.length];e.style.setProperty('--dx',(Math.random()*440-220)+'px');e.style.setProperty('--dy',(Math.random()*390-190)+'px');
  document.body.appendChild(e);setTimeout(()=>e.remove(),1100);
 }
}
function route(){const h=decodeURI(location.hash||'#/ruta'); if(h.startsWith('#/leccion/')){const n=Number(h.split('/')[2]);return Number.isInteger(n)&&n>=1&&n<=28?{page:'lesson',i:n-1}:{page:'home'};}if(h==='#/repaso')return{page:'review'};if(h==='#/glosario')return{page:'glossary'};if(h==='#/progreso')return{page:'progress'};return{page:'home'};}
function go(h){if(location.hash===h){render();window.scrollTo(0,0);}else location.hash=h;}
function navigation(active){const items=[['home','Mi ruta','#/ruta'],['review','Repaso','#/repaso'],['glossary','Glosario','#/glosario'],['progress','Progreso','#/progreso']];return `<header class="topbar"><div class="container navrow">
<a class="brand" href="#/ruta" aria-label="AstroRuta, ir al inicio"><span class="brandmark"><span>✦</span></span> AstroRuta</a>
<nav class="navlinks" aria-label="Navegación principal">${items.map(([id,label,hash])=>`<button data-route="${hash}" class="${active===id?'active':''}" ${active===id?'aria-current="page"':''}>${label}</button>`).join('')}</nav>
<div class="navend"><span class="xpchip">✧ ${xp()} XP</span><button class="themebtn" type="button" data-theme-toggle title="Cambiar tema" aria-label="Cambiar tema">${data.theme==='dark'?'☼':'☾'}</button></div>
</div></header>`;}
function footer(){return `<footer class="container disclaimer"><strong>Un mapa simbólico, no una ciencia predictiva.</strong> AstroRuta presenta conceptos de la astrología como tradición cultural e interpretativa. Las posiciones de los astros son calculables; sus supuestas influencias sobre la personalidad o el futuro no están demostradas científicamente. La ruta y las notas se guardan únicamente en este navegador. <span> Hecho para aprender con curiosidad ✦</span></footer>`;}
function statCards(){return `<div class="statgrid">
<div class="stat"><span class="icon">✦</span><div class="num">${completeCount()}<span style="font-size:17px;color:var(--muted)"> / 28</span></div><div class="label">Lecciones completadas</div></div>
<div class="stat"><span class="icon">↗</span><div class="num">${pct()}%</div><div class="label">De la ruta recorrida</div></div>
<div class="stat"><span class="icon">♧</span><div class="num">${streak()}</div><div class="label">Días de racha actual</div></div>
<div class="stat"><span class="icon">✧</span><div class="num">${xp()}</div><div class="label">Puntos de experiencia</div></div>
</div>`;}
function chapterList(filter=''){
 const q=normalize(filter.trim());let visible=0;
 const list=CHAPTERS.map((c,ci)=>{
  const rows=LESSONS.map((l,i)=>({...l,i})).filter(l=>chapterOf(l.i)===ci&&(!q||normalize(`${l.title} ${l.summary} ${l.tag} ${c.name}`).includes(q)));
  visible+=rows.length;if(!rows.length)return '';
  return `<section class="chapter" style="--ch:${c.color}"><div class="chapter-top"><div class="chapter-orb">${c.glyph}</div><div><h3>Capítulo ${ci+1}. ${ESC(c.name)}</h3><p>${ESC(c.sub)}</p></div><div class="chapter-progress">${chapterDone(c)} de ${c.end-c.start+1}<div class="mini-progress"><div style="width:${Math.round(chapterDone(c)/(c.end-c.start+1)*100)}%"></div></div></div></div>
  <div class="lessonlist">${rows.map(l=>`<button class="lessonrow ${done(l.i)?'done':''}" data-route="#/leccion/${l.i+1}"><span class="daynum">${done(l.i)?'✓':pad(l.i+1)}</span><span><span class="rowtitle">${ESC(l.title)}</span><span class="rowmeta">Día ${l.i+1} · ${l.time} min ${correct(l.i)?'· Quiz superado':''}</span></span><span class="arrow" aria-hidden="true">→</span></button>`).join('')}</div></section>`;
 }).join('');
 return visible?list:'<div class="empty">No encontré lecciones con esa búsqueda. Probá otro concepto.</div>';
}
function home(){const n=nextIndex();const i=n<0?27:n;const l=LESSONS[i];return `${navigation('home')}
<main class="container"><section class="hero">
<div><div class="eyebrow">✦ Un viaje de 28 días · Nivel inicial a avanzado</div><h1>Un universo de ideas, <span class="accent">a tu ritmo.</span></h1>
<p class="hero-copy">Aprendé astrología desde cero con lecciones breves, ejemplos claros, preguntas para desafiarte y misiones prácticas. Un concepto por día. Sin apuro, sin memorizar todo de golpe.</p>
<div class="hero-actions"><button class="btn primary" data-route="#/leccion/${i+1}">${n<0?'Repasar el último día':'Empezar el día '+(i+1)} <span aria-hidden="true">↗</span></button><button class="btn secondary" data-route="#/repaso">Practicar con tarjetas ↗</button></div>
<div class="hero-sub"><span>28 lecciones completas</span><span>Guardado automático</span><span>Sin registrarte</span></div></div>
<div class="cosmos" aria-hidden="true"><div class="orbit three"><div class="body">♄</div></div><div class="orbit two"><div class="body">♀</div></div><div class="orbit one"><div class="body">☿</div></div><div class="sun">☼</div><div class="cosmos-label">Explorá · Comprendé · Conectá</div></div>
</section>
${statCards()}
<div class="focus-card"><div><div class="tiny">${n<0?'Ruta completada · Felicitaciones':'Tu próxima parada · Día '+(i+1)}</div><h3>${n<0?'Ya recorriste todo el zodíaco':ESC(l.title)}</h3><p>${n<0?'Volvé a las tarjetas y comprobá cuánto recordás.':ESC(l.summary)}</p></div><button class="btn primary" data-route="${n<0?'#/repaso':'#/leccion/'+(i+1)}">${n<0?'Ir al repaso':'Continuar lección'} →</button></div>
<div class="section-head road-heading" id="ruta"><div><div class="eyebrow">TU MAPA DE ESTUDIO</div><h2>La ruta completa</h2><p>Podés seguir el orden propuesto o explorar cualquier concepto.</p></div><input class="search" id="lessonSearch" placeholder="⌕  Buscar una lección..." value="${ESC(ui.filter)}" aria-label="Buscar lecciones"></div>
<div class="chapters" id="chapterCollection">${chapterList(ui.filter)}</div>
</main>${footer()}`;}
function lessonPage(i){const l=LESSONS[i],chapter=CHAPTERS[chapterOf(i)];const choice=ui.answers[i];const hasChoice=choice!==undefined;const isRight=choice===l.quiz.correct;
const chips=l.keys.map(k=>`<div class="key">${ESC(k)}</div>`).join('');
return `${navigation('lesson')}<main class="container"><div class="crumb"><button data-route="#/ruta">Mi ruta</button><span>›</span><span>Capítulo ${chapterOf(i)+1}</span><span>›</span><span>Día ${i+1}</span></div>
<div class="lesson-hero"><div class="heading"><div class="eyebrow">DÍA ${pad(i+1)} / 28 · ${ESC(chapter.name)}</div><h1>${ESC(l.title)}</h1><p>${ESC(l.summary)}</p><div class="lesson-meta"><span>◷ ${l.time} minutos</span><span>✦ ${ESC(l.tag)}</span><span>${done(i)?'✓ Lección completada':'○ Pendiente'}</span></div></div><div class="lesson-planet" aria-hidden="true">${l.symbol}</div></div>
<div class="progress-track lesson-progress"><div style="width:${(i+1)/28*100}%"></div></div>
<div class="learn-grid"><article class="article"><div class="summary-callout"><div class="eyebrow">EN UNA IDEA</div><p>${ESC(l.summary)}</p></div>
${l.sections.map(([title,body])=>`<section class="article-block"><h2>${ESC(title)}</h2><p>${ESC(body)}</p></section>`).join('')}
<section class="article-block"><h2>Cuatro ideas para llevarte</h2><div class="keygrid">${chips}</div></section>
<section class="article-block"><h2>Un ejemplo concreto</h2><div class="example"><p>${ESC(l.example)}</p></div></section>
<section class="article-block challenge"><div class="eyebrow">MINI MISIÓN</div><h2>Ahora te toca a vos</h2><p>${ESC(l.challenge)}</p><label class="smallcap" for="note-${i}">Tu cuaderno personal</label><textarea id="note-${i}" data-note-index="${i}" placeholder="Escribí tu reflexión acá...">${ESC(data.notes[i]||'')}</textarea><div class="saved">Tus notas se guardan en este dispositivo mientras escribís.</div></section>
<section class="article-block quizpanel" id="quiz"><div class="eyebrow">DESAFÍO DEL DÍA · +20 XP</div><h2>Comprobá lo que aprendiste</h2><div class="qtitle">${ESC(l.quiz.q)}</div>
<div class="quizoptions">${l.quiz.a.map((a,j)=>`<button data-quiz="${i}" data-option="${j}" class="quizopt ${hasChoice&&j===choice?(isRight?'correct':'wrong'):''} ${hasChoice&&j===l.quiz.correct?'correct':''}" aria-label="Opción ${String.fromCharCode(65+j)}: ${ESC(a)}"><span class="letter">${String.fromCharCode(65+j)}</span> ${ESC(a)}</button>`).join('')}</div>
${hasChoice?`<div class="quizresponse ${isRight?'success':'error'}">${isRight?'✓ ¡Correcto!':'↻ Todavía no. Probá otra opción.'} ${ESC(l.quiz.why)}</div>`:''}
</section>
${done(i)?'<div class="completion-banner">✓ Lección completada. Podés releerla, editar tus notas y practicar cuando quieras.</div>':''}
<div class="lessonbottom"><div class="buttonrow">${i>0?`<button class="btn secondary" data-route="#/leccion/${i}">← Día anterior</button>`:''}<button class="btn primary" data-complete="${i}">${done(i)?'✓ Aprendido':'Marcar como aprendido · +100 XP'}</button></div><div class="buttonrow"><button class="bookmark ${data.bookmarks.includes(i)?'on':''}" data-bookmark="${i}">${data.bookmarks.includes(i)?'★ Guardado':'☆ Guardar'}</button>${i<27?`<button class="btn secondary" data-route="#/leccion/${i+2}">Día siguiente →</button>`:'<button class="btn secondary" data-route="#/progreso">Ver mi progreso →</button>'}</div></div>
</article>
<aside class="sidepanel"><div class="widget"><div class="smallcap">✦ PARA RECORDAR</div><h3>Tu truco del día</h3><p>${ESC(l.memory)}</p></div>
<div class="widget"><div class="smallcap">TARJETA DEL DÍA</div><h3>¿Lo recordás?</h3><button class="flashcard" data-flip-lesson="1"><small>${ui.flipped?'Respuesta':'Tocá para revelar'}</small><span>${ESC(ui.flipped?l.flashA:l.flashQ)}</span><small>${ui.flipped?'↺ Volver a la pregunta':'↻ Dar vuelta'}</small></button></div>
<div class="widget"><div class="smallcap">TU PROGRESO</div><h3>${completeCount()} de 28 días</h3><div class="progress-track"><div style="width:${pct()}%"></div></div><p style="margin-top:12px">${pct()}% del recorrido. Cada día suma, aunque avances a tu ritmo.</p></div></aside></div>
<div class="backpath"><button class="btn small secondary" data-route="#/ruta">← Volver a las 28 lecciones</button></div>
</main>${footer()}`;}
function shuffled(){const a=Array.from({length:LESSONS.length},(_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function review(){if(!ui.reviewOrder.length)ui.reviewOrder=shuffled();ui.reviewIndex=Math.max(0,Math.min(ui.reviewIndex,ui.reviewOrder.length-1));const idx=ui.reviewOrder[ui.reviewIndex],l=LESSONS[idx];return `${navigation('review')}<main class="container"><div class="pagehead"><div class="eyebrow">LABORATORIO DE MEMORIA</div><h1>Jugá a recordar.</h1><p>28 tarjetas, una por concepto. Primero intentá responder sin mirar; después da vuelta la tarjeta. La práctica de recuperación ayuda a fijar lo aprendido.</p></div>
<div class="review-wrap"><div class="review-card"><div class="eyebrow">TARJETA ${ui.reviewIndex+1} / 28 · DÍA ${idx+1}</div><h2 class="${ui.flipped?'answer':''}">${ESC(ui.flipped?l.flashA:l.flashQ)}</h2><div class="review-tools"><button class="btn primary" data-review-flip>${ui.flipped?'Ver pregunta ↶':'Revelar respuesta ↗'}</button><button class="btn secondary" data-review-next>Siguiente tarjeta →</button></div></div><aside class="infobox"><div class="smallcap">CÓMO JUGAR</div><h3>Recordá, revelá, repetí</h3><p>1. Leé la pregunta.<br>2. Intentá responder en voz alta.<br>3. Revelá la respuesta.<br>4. Pasá a la siguiente tarjeta.</p><p>Las tarjetas se mezclan al entrar por primera vez. Podés practicar incluso las lecciones que todavía no completaste.</p><button class="btn small secondary" data-review-shuffle>⇄ Mezclar tarjetas</button><div style="margin-top:21px"><div class="smallcap">LA LECCIÓN ORIGINAL</div><p style="margin:7px 0">${ESC(l.title)}</p><button class="btn small secondary" data-route="#/leccion/${idx+1}">Ir al día ${idx+1} →</button></div></aside></div>
</main>${footer()}`;}
const GLOSSARY=[
['Aspecto','Ángulo entre dos posiciones planetarias o puntos de la carta.'],['Ascendente','Punto zodiacal que aparece sobre el horizonte este al nacer.'],['Carta natal','Mapa del cielo de una fecha, hora y lugar de nacimiento.'],['Casa','Sector de la carta asociado con un ámbito simbólico de vida.'],['Conjunción','Aspecto de aproximadamente 0° de separación.'],['Cuadratura','Aspecto de aproximadamente 90°.'],['Dignidad','Valoración tradicional de un planeta según el signo que ocupa.'],['Directo','Movimiento aparente habitual de un planeta sobre el zodíaco.'],['Domicilio','Signo regido tradicionalmente por un planeta.'],['Eclipse','Alineación en la que un cuerpo oculta la luz de otro o entra en su sombra.'],['Elemento','Grupo simbólico de signos: Fuego, Tierra, Aire o Agua.'],['Estación planetaria','Transición aparente entre movimiento directo y retrógrado.'],['Exaltación','Condición tradicional considerada especialmente favorable a un planeta.'],['Fondo del Cielo (IC)','Punto opuesto al MC, ligado simbólicamente con raíces y hogar.'],['Luna progresada','Posición simbólica de la Luna en una técnica de progresiones.'],['Medio Cielo (MC)','Punto asociado con vocación, reputación y vida pública.'],['Modalidad','Cualidad cardinal, fija o mutable de cada signo.'],['Nodo lunar','Punto donde la órbita de la Luna cruza la eclíptica.'],['Oposición','Aspecto de aproximadamente 180°.'],['Orbe','Margen de tolerancia para considerar un aspecto.'],['Planeta regente','Planeta tradicional o modernamente asociado a un signo.'],['Progresión secundaria','Técnica simbólica que equipara un día posterior al nacimiento con un año de vida.'],['Retrógrado','Movimiento aparente hacia atrás en el fondo zodiacal visto desde la Tierra.'],['Retorno de Saturno','Vuelta aproximada de Saturno a su longitud natal cada 29,5 años.'],['Revolución solar','Carta del momento de retorno del Sol a su longitud natal.'],['Sextil','Aspecto de aproximadamente 60°.'],['Signo solar','Signo que ocupaba el Sol en el momento de nacer.'],['Sinastría','Comparación de dos cartas natales.'],['Tránsito','Comparación del cielo actual con una carta natal.'],['Trígono','Aspecto de aproximadamente 120°.'],['Zodíaco tropical','Sistema zodiacal que comienza en el equinoccio de marzo.']
];
function glossaryList(q){const list=GLOSSARY.filter(([a,b])=>normalize(a+' '+b).includes(normalize(q)));return list.length?list.map(([a,b])=>`<div class="glossary-card"><h3>${ESC(a)}</h3><p>${ESC(b)}</p></div>`).join(''):'<div class="empty">No encontré ese término. Probá con otra palabra.</div>';}
function glossary(){return `${navigation('glossary')}<main class="container"><div class="pagehead"><div class="eyebrow">TU DICCIONARIO ESTELAR</div><h1>Palabras del universo.</h1><p>Un glosario sin vueltas para consultar mientras estudiás. Escribí cualquier término para encontrarlo.</p><input class="search" id="glossarySearch" placeholder="⌕  Buscar término..." value="${ESC(ui.glossaryFilter)}" aria-label="Buscar término en glosario"></div><div class="glossary-grid" id="glossaryCollection">${glossaryList(ui.glossaryFilter)}</div></main>${footer()}`;}
function progress(){const badges=[
['✶','Primera estrella','Completaste tu primera lección.',completeCount()>=1],
['◈','Primer capítulo','Completaste los cinco primeros días.',CHAPTERS.some(c=>chapterDone(c)===c.end-c.start+1)],
['☾','Explorador/a celeste','Completaste 14 lecciones.',completeCount()>=14],
['✺','Mente curiosa','Superaste diez mini quizzes.',correctCount()>=10],
['♕','Maestría astral','Completaste las 28 lecciones.',completeCount()===28]
];const bookmarks=data.bookmarks.slice().sort((a,b)=>a-b);
return `${navigation('progress')}<main class="container"><div class="pagehead"><div class="eyebrow">BITÁCORA DE VIAJE</div><h1>Tu universo crece.</h1><p>Lo importante no es correr, sino volver con curiosidad. Mirá todo lo que ya aprendiste.</p></div>${statCards()}
<div class="progress-layout"><div class="progress-dial"><div class="smallcap">RUTA COMPLETA</div><div class="ring" style="--value:${pct()}%"><div class="ring-inner"><b>${pct()}%</b><span>${completeCount()} de 28 días</span></div></div><p>Tu conocimiento se construye una lección por vez.</p><button class="btn primary" data-route="#/leccion/${Math.max(0,nextIndex())+1}">Seguir aprendiendo →</button></div>
<div><h3 style="font-family:Georgia,serif;font-size:26px;margin:0 0 16px">Tus insignias</h3>${badges.map(([sym,name,desc,yes])=>`<div class="achievement ${yes?'earned':'locked'}"><div class="badgeicon">${sym}</div><div><strong>${ESC(name)} ${yes?'· Desbloqueada':'· Bloqueada'}</strong><p>${ESC(desc)}</p></div></div>`).join('')}</div></div>
${bookmarks.length?`<section style="margin-bottom:38px"><h3 style="font-family:Georgia,serif">Tus lecciones guardadas</h3><div class="chapters"><section class="chapter"><div class="lessonlist">${bookmarks.map(i=>`<button class="lessonrow" data-route="#/leccion/${i+1}"><span class="daynum">${pad(i+1)}</span><span class="rowtitle">${ESC(LESSONS[i].title)}</span><span class="arrow">→</span></button>`).join('')}</div></section></div></section>`:''}
<section class="calendar"><div class="eyebrow">UN CONCEPTO POR DÍA</div><h3 style="font-family:Georgia,serif;font-size:27px;margin:8px 0">Llevá tu ruta al calendario</h3><p>Descargá un calendario con 28 sesiones de 15 minutos, una por día desde hoy. Después podés importarlo en Google Calendar, Outlook o el calendario de tu celular. Los eventos quedan en tu calendario; esta web no envía avisos por sí sola.</p><div class="controls"><label for="calendarTime">Horario preferido</label><input type="time" id="calendarTime" value="20:30"><button class="btn primary" data-export>Descargar plan de 28 días ↓</button></div></section>
</main>${footer()}`;}
function render(){
 document.body.dataset.theme=data.theme;const r=route();if(r.page==='lesson')ui.flipped=false;
 $app.innerHTML=r.page==='home'?home():r.page==='lesson'?lessonPage(r.i):r.page==='review'?review():r.page==='glossary'?glossary():progress();
 document.title=(r.page==='lesson'?`${LESSONS[r.i].title} | `:r.page==='review'?'Repaso | ':r.page==='glossary'?'Glosario | ':r.page==='progress'?'Tu progreso | ':'')+'AstroRuta';
}
function answerQuiz(i,j){const l=LESSONS[i];ui.answers[i]=j;const wasCorrect=correct(i);if(j===l.quiz.correct&&!wasCorrect){data.correct[i]=true;save();showToast('¡Excelente! +20 XP por superar el quiz ✦');}else if(j!==l.quiz.correct)showToast('Casi. Probá otra respuesta y revisá la explicación.');else showToast('¡Ya dominás este concepto!');
 render();document.getElementById('quiz')?.scrollIntoView({block:'center',behavior:'smooth'});
}
function markComplete(i){if(done(i)){showToast('Esta lección ya está completada. ¡Buen trabajo!');return;}data.completed[i]=localDay(new Date());save();confetti();render();showToast('¡Día '+(i+1)+' completado! Sumaste 100 XP ✦');}
function exportICS(){const v=document.getElementById('calendarTime')?.value||'20:30';const [hour,minute]=v.split(':').map(Number);const stamp=d=>`${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
const utcstamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//AstroRuta//28 dias//ES','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
const now=new Date();LESSONS.forEach((l,i)=>{const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i,hour,minute);const end=new Date(d.getTime()+15*60000);const subject=`AstroRuta - Día ${i+1}: ${l.title}`.replace(/,/g,'\\,').replace(/;/g,'\\;');
lines.push('BEGIN:VEVENT',`UID:astroruta-${i+1}-${localDay(now)}@astroruta.local`,`DTSTAMP:${utcstamp}`,`DTSTART:${stamp(d)}`,`DTEND:${stamp(end)}`,`SUMMARY:${subject}`,`DESCRIPTION:15 minutos para aprender astrología. Día ${i+1} de 28. Abrí AstroRuta para leer y practicar.`, 'END:VEVENT');});lines.push('END:VCALENDAR');
const blob=new Blob([lines.join('\r\n')+'\r\n'],{type:'text/calendar;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='astroruta-plan-28-dias.ics';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast('Calendario listo para importar ✦');}
window.addEventListener('hashchange',()=>{ui.flipped=false;render();window.scrollTo({top:0,behavior:'instant'});});
$app.addEventListener('input',e=>{
 if(e.target.id==='lessonSearch'){ui.filter=e.target.value;document.getElementById('chapterCollection').innerHTML=chapterList(ui.filter);}
 if(e.target.id==='glossarySearch'){ui.glossaryFilter=e.target.value;document.getElementById('glossaryCollection').innerHTML=glossaryList(ui.glossaryFilter);}
 if(e.target.matches('[data-note-index]')){data.notes[e.target.dataset.noteIndex]=e.target.value;save();}
});
$app.addEventListener('click',e=>{
 const btn=e.target.closest('button');if(!btn)return;
 if(btn.dataset.route){go(btn.dataset.route);return;}
 if(btn.hasAttribute('data-theme-toggle')){data.theme=data.theme==='dark'?'light':'dark';save();render();return;}
 if(btn.hasAttribute('data-quiz')){answerQuiz(Number(btn.dataset.quiz),Number(btn.dataset.option));return;}
 if(btn.hasAttribute('data-complete')){markComplete(Number(btn.dataset.complete));return;}
 if(btn.hasAttribute('data-bookmark')){const i=Number(btn.dataset.bookmark);data.bookmarks=data.bookmarks.includes(i)?data.bookmarks.filter(n=>n!==i):[...data.bookmarks,i];save();render();showToast(data.bookmarks.includes(i)?'Lección guardada en tu bitácora':'Lección quitada de guardados');return;}
 if(btn.hasAttribute('data-flip-lesson')){ui.flipped=!ui.flipped;const id=route().i;const l=LESSONS[id];btn.querySelector('span').textContent=ui.flipped?l.flashA:l.flashQ;btn.querySelector('small').textContent=ui.flipped?'Respuesta':'Tocá para revelar';btn.querySelectorAll('small')[1].textContent=ui.flipped?'↺ Volver a la pregunta':'↻ Dar vuelta';return;}
 if(btn.hasAttribute('data-review-flip')){ui.flipped=!ui.flipped;render();return;}
 if(btn.hasAttribute('data-review-next')){ui.reviewIndex=(ui.reviewIndex+1)%28;ui.flipped=false;render();return;}
 if(btn.hasAttribute('data-review-shuffle')){ui.reviewOrder=shuffled();ui.reviewIndex=0;ui.flipped=false;render();showToast('Tarjetas mezcladas ✧');return;}
 if(btn.hasAttribute('data-export')){exportICS();return;}
});
if(!location.hash)history.replaceState(null,'','#/ruta');
render();
})();
