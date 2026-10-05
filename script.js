'use strict';
// Rasmlar: barchasi shu yerda. Rasmni almashtirish uchun faqat URL ni o‘zgartiring (yoki assets/images/ ga joylab, "assets/images/dubay.jpg" deb yozing).
const C = 'https://commons.wikimedia.org/wiki/Special:FilePath/';
const img = (f) => C + encodeURIComponent(f) + '?width=1200';
const TOURS = [
 {n:'Turkiya',f:'🇹🇷',d:'7 kecha',m:'Nonushta (BB)',p:700,img:'Hagia Sophia Mars 2013.jpg',alt:'Istanbul: Ayasofya va shahar manzarasi',t:'Turkiya — tarixiy Istanbul, Kappadokiya vodiylari va Antalya sohillari bilan mashhur. Madaniyat va dengiz dam olishini uyg‘unlashtiradi.'},
 {n:'Vyetnam — Nyachang',f:'🇻🇳',d:'7+1 kecha',m:'Nonushta (BB)',p:850,img:'Nha Trang beach.jpg',alt:'Nyachang sohili va Vyetnam dengizi',t:'Nyachang — uzun qumli plyajlar, iliq dengiz va orolga sayohatlar bilan tanilgan Vyetnam kurorti.'},
 {n:'Vyetnam — Fukuok',f:'🇻🇳',d:'7 kecha',m:'Nonushta (BB)',p:520,img:'Phu Quoc beach.jpg',alt:'Fukuok orolidagi tropik plyaj',t:'Fukuok — tinch plyajlari, tropik tabiati va dengiz mahsulotlari bilan mashhur Vyetnam oroli.'},
 {n:'Misr — Sharm el-Sheyx',f:'🇪🇬',d:'7 kecha',m:'All Inclusive',p:500,img:'Sharm El Sheikh.jpg',alt:'Sharm el-Sheyx va Qizil dengiz sohili',t:'Sharm el-Sheyx — Qizil dengiz sohilidagi kurort: marjon riflari, snorkling va yil bo‘yi iliq ob-havo.'},
 {n:'Maldiv orollari',f:'🇲🇻',d:'7 kecha',m:'Nonushta (BB)',p:850,img:'Maldives.jpg',alt:'Maldiv orollari va turkuaz okean',t:'Maldiv orollari — turkuaz lagunalar, oq qumli plyajlar va suv ustidagi bungalolar bilan mashhur orollar.'},
 {n:'Dubay',f:'🇦🇪',d:'7 kecha',m:'Nonushta (BB)',p:400,img:'Burj Khalifa.jpg',alt:'Dubay osmono‘par binolari va Burj Xalifa',t:'Dubay — zamonaviy arxitektura, hashamatli savdo markazlari, cho‘l manzaralari va Fors ko‘rfazi sohillari bilan mashhur.'},
 {n:'Langkavi + Kuala-Lumpur',f:'🇲🇾',d:'6+1 kecha',m:'Nonushta (BB)',p:1080,img:'Petronas Towers.jpg',alt:'Kuala-Lumpurdagi Petronas minoralari',t:'Langkavi orolining tropik plyajlarini va Kuala-Lumpurning Petronas minoralari joylashgan zamonaviy shahrini birga ko‘ring.'},
 {n:'Xitoy — Xaynan',f:'🇨🇳',d:'7+1 kecha',m:'Nonushta (BB)',p:720,img:'Sanya Hainan.jpg',alt:'Xaynan orolidagi tropik sohil',t:'Xaynan — «Xitoy Gavayisi» deb ataladigan tropik orol: iliq dengiz, plyajlar va yam-yashil tabiat.'},
 {n:'Xitoy — Guanchjou',f:'🇨🇳',d:'7 kecha',m:'Nonushta (BB)',p:1100,img:'Guangzhou skyline.jpg',alt:'Guanchjou zamonaviy shahar manzarasi',t:'Guanchjou — janubiy Xitoyning yirik shahri: zamonaviy osmono‘par binolar, an’anaviy oshxona va zamonaviy shahar hayoti.'},
 {n:'Tailand — Pattaya',f:'🇹🇭',d:'7+1 kecha',m:'Nonushta (BB)',p:645,img:'Pattaya beach.jpg',alt:'Pattaya sohili va shahar',t:'Pattaya — dengiz sohili, orol sayohatlari, ko‘ngilochar markazlar va jonli shahar hayoti bilan tanilgan kurort.'},
 {n:'Tailand — Phuket',f:'🇹🇭',d:'7 kecha',m:'Nonushta (BB)',p:675,img:'Phuket beach.jpg',alt:'Phuketdagi tropik plyaj',t:'Phuket — Tailandning eng katta oroli: go‘zal plyajlar, Andaman dengizi va yaqin orollarga sayohatlar.'},
 {n:'Gruziya — Tbilisi',f:'🇬🇪',d:'7 kecha',m:'Nonushta (BB)',p:750,img:'Tbilisi old town.jpg',alt:'Tbilisining eski shahri',t:'Tbilisi — tor ko‘chalari, issiq buloqlari, mehmondo‘st muhiti va gruzin oshxonasi bilan sevimli shahar.'},
 {n:'Ozarbayjon — Baku',f:'🇦🇿',d:'7 kecha',m:'Nonushta (BB)',p:490,img:'Flame Towers Baku.jpg',alt:'Bakudagi Alanga minoralari',t:'Baku — Kaspiy sohilidagi zamonaviy shahar: Alanga minoralari, Ichari Shahar va dengiz bo‘yi xiyoboni.'}
];
const $ = (s, r = document) => r.querySelector(s);
const FEAT = TOURS[4], DUBAI = TOURS[5];

// Rasm yuklanmasa, gradient fon ko‘rinib turadi
function load(el, file) { el.addEventListener('error', () => { el.style.opacity = 0; }, {once:true}); el.src = img(file); }
load($('#heroImg'), 'Maldives.jpg'); load($('#featImg'), 'Maldives.jpg'); load($('#priceImg'), 'Burj Khalifa.jpg');

const grid = $('#grid');
const hues = ['#8fe3ee,#2a8fd0','#ffd6a5,#ff9a62','#a8e6cf,#19b5c4','#bde0fe,#6fa8e8'];
TOURS.forEach((t, i) => {
  const li = document.createElement('article');
  li.className = 'card reveal'; li.style.setProperty('--bg', `linear-gradient(160deg,${hues[i % 4]})`);
  li.innerHTML = `<img alt="${t.alt}" loading="lazy" decoding="async"><span class="flag" aria-hidden="true">${t.f}</span>
  <div class="info"><h3>${t.n}</h3><div class="meta"><span>${t.d}</span><span>🍽 ${t.m}</span></div>
  <div class="row"><span class="pr">$${t.p} dan</span><button class="btn btn-solid" data-open="${i}" aria-label="${t.n} haqida batafsil">Batafsil</button></div></div>`;
  load($('img', li), t.img);
  // mobil: birinchi bosish kartani faollashtiradi
  li.addEventListener('click', (e) => { if (!e.target.closest('button')) { document.querySelectorAll('.card.on').forEach(c => c !== li && c.classList.remove('on')); li.classList.toggle('on'); } });
  grid.append(li);
});

// Modal
const modal = $('#modal'); let last;
function open(i) {
  const t = TOURS[i]; last = document.activeElement;
  $('#mImg').alt = t.alt; load($('#mImg'), t.img); $('#mImg').style.opacity = 1;
  $('#mTitle').textContent = `${t.f} ${t.n}`;
  $('#mFacts').innerHTML = `<li>${t.d}</li><li>🍽 ${t.m}</li><li>$${t.p} dan</li>`;
  $('#mDesc').textContent = t.t;
  $('#mBook').href = 'https://t.me/Akmus_Ruxshona?text=' + encodeURIComponent(`Assalomu alaykum! ${t.n} (${t.d}, $${t.p} dan) turi bo‘yicha ma’lumot olmoqchiman.`);
  modal.hidden = false; document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => { modal.classList.add('show'); $('#close').focus(); });
}
function close() { modal.classList.remove('show'); document.body.style.overflow = ''; setTimeout(() => { modal.hidden = true; last && last.focus(); }, 350); }
document.addEventListener('click', (e) => { const b = e.target.closest('[data-open]'); if (b) open(+b.dataset.open); });
$('#close').onclick = close;
modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { if (!modal.hidden) close(); else toggle(false); }
  if (e.key === 'Tab' && !modal.hidden) { const f = [...modal.querySelectorAll('button,a[href]')]; const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
});

// Mobil menyu
const burger = $('#burger'), menu = $('#menu');
function toggle(s) { const on = s ?? !menu.classList.contains('open'); menu.classList.toggle('open', on); burger.setAttribute('aria-expanded', on); burger.setAttribute('aria-label', on ? 'Menyuni yopish' : 'Menyuni ochish'); }
burger.onclick = () => toggle();
menu.addEventListener('click', (e) => e.target.closest('a') && toggle(false));

// Navbar, parallax
const nav = $('#nav'), px = [...document.querySelectorAll('[data-parallax]')];
const still = matchMedia('(prefers-reduced-motion: reduce)').matches; let tick = false;
function onScroll() {
  nav.classList.toggle('small', scrollY > 40);
  if (!still) px.forEach(el => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) el.style.transform = `translate3d(0,${(-r.top * el.dataset.parallax).toFixed(1)}px,0)`; });
  tick = false;
}
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, {passive:true}); onScroll();

// Scroll reveal
const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

// Faol menyu
const links = [...document.querySelectorAll('#menu a:not(.btn)')];
const so = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id)); }), {rootMargin:'-45% 0px -50% 0px'});
['bosh', 'yonalishlar', 'paketlar', 'haqimizda', 'aloqa'].forEach(id => so.observe(document.getElementById(id)));
