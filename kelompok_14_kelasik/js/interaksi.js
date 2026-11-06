/* interaksi.js - Team 14 */
(function () {
  'use strict';

  /* ================= GAYA (disuntikkan lewat JS) ================= */
  const gaya = document.createElement('style');
  gaya.textContent = `
    html { scroll-behavior: smooth; }

    /* ---------- Tombol tema ---------- */
    .theme-btn {
      padding: 6px 14px; border: 1px solid currentColor; border-radius: 999px;
      background: transparent; color: inherit; font: inherit; font-size: .8rem;
      cursor: pointer; white-space: nowrap;
    }

    /* ---------- Accordion ---------- */
    .learning-card h2 { cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    .learning-card h2::after { content: "+"; font-weight: 400; }
    .learning-card.open h2::after { content: "–"; }
    .learning-card:not(.open) > p { display: none; }

    /* ---------- Reveal ---------- */
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
    .reveal.visible { opacity: 1; transform: none; }

    /* ---------- Kembali ke atas ---------- */
    #backToTop {
      position: fixed; right: 20px; bottom: 20px; z-index: 900;
      width: 42px; height: 42px; border: 0; border-radius: 50%;
      background: #2563eb; color: #fff; font-size: 1.2rem; cursor: pointer;
      box-shadow: 0 6px 18px rgba(0,0,0,.25);
      opacity: 0; visibility: hidden; transform: translateY(10px);
      transition: opacity .3s, transform .3s, visibility .3s;
    }
    #backToTop.tampil { opacity: 1; visibility: visible; transform: none; }

    /* ---------- Filter anggota ---------- */
    .filter-anggota {
      display: block; margin: 0 auto 24px; padding: 10px 16px;
      width: min(90vw, 320px); border: 1px solid #999; border-radius: 999px;
      font: inherit; font-size: .9rem; text-align: center;
    }
    .anggota li.sembunyi { display: none; }
    .tidak-ada { text-align: center; opacity: .7; }

    /* ---------- Percantik interaksi ---------- */
    body { animation: halamanMasuk .5s ease both; }
    @keyframes halamanMasuk { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

    .navbar nav a { position: relative; }
    .navbar nav a::after {
      content: ""; position: absolute; left: 0; right: 0; bottom: -4px; height: 2px;
      background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform .3s ease;
    }
    .navbar nav a:hover::after { transform: scaleX(1); }

    .logo img { transition: transform .35s ease; }
    .logo:hover img { transform: rotate(-6deg) scale(1.08); }

    .tombol, .tombol-biru, .tombol-garis, .toggle-all, .theme-btn, .kembali {
      transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
    }
    .tombol:hover, .tombol-biru:hover, .tombol-garis:hover, .toggle-all:hover, .theme-btn:hover {
      transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,.22); filter: brightness(1.08);
    }
    .tombol:active, .tombol-biru:active, .tombol-garis:active, .toggle-all:active, .theme-btn:active {
      transform: translateY(0) scale(.97); box-shadow: none;
    }
    .kembali:hover { transform: translateX(-4px); }

    .hero-kartu { transition: transform .4s ease, box-shadow .4s ease; }
    .hero-kartu:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,.3); }

    .anggota li { animation: kartuMasuk .6s ease both; }
    .anggota li:nth-child(1) { animation-delay: .05s; }
    .anggota li:nth-child(2) { animation-delay: .15s; }
    .anggota li:nth-child(3) { animation-delay: .25s; }
    .anggota li:nth-child(4) { animation-delay: .35s; }
    .anggota li:nth-child(5) { animation-delay: .45s; }
    @keyframes kartuMasuk { from { opacity: 0; transform: translateY(26px) scale(.95); } to { opacity: 1; transform: none; } }
    .kartu-anggota { transition: transform .3s ease; }
    .kartu-anggota:hover { transform: translateY(-8px); }
    .foto-bulat, .foto-persegi { overflow: hidden; }
    .foto-bulat { transition: box-shadow .3s ease; }
    .kartu-anggota:hover .foto-bulat { box-shadow: 0 14px 30px rgba(0,0,0,.35); }
    .foto-bulat img, .foto-persegi img { transition: transform .5s ease; }
    .kartu-anggota:hover .foto-bulat img { transform: scale(1.1); }
    .foto-persegi:hover img { transform: scale(1.05); }
    .panel-detail { animation: kartuMasuk .6s ease both; }

    .form-kontak input, .form-kontak textarea { transition: box-shadow .25s ease, transform .25s ease; }
    .form-kontak input:focus, .form-kontak textarea:focus {
      outline: none; box-shadow: 0 0 0 3px rgba(100,150,255,.45); transform: translateY(-1px);
    }
    .kontak-kartu { transition: box-shadow .3s ease; }
    .kontak-kartu:hover { box-shadow: 0 16px 40px rgba(0,0,0,.25); }

    .learning-card { transition: transform .3s ease, box-shadow .3s ease; }
    .learning-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,.2); }

    a:focus-visible, button:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; border-radius: 6px; }

    /* ======================= MODE GELAP (semua halaman) ======================= */
    html[data-theme="dark"] body { background: #0f1115 !important; color: #e5e7eb !important; }
    html[data-theme="dark"] .hero,
    html[data-theme="dark"] .halaman,
    html[data-theme="dark"] .halaman-tengah { background: transparent !important; }

    /* Navbar */
    html[data-theme="dark"] .navbar { background: #161a22 !important; border-bottom: 1px solid #2a3140 !important; }
    html[data-theme="dark"] .navbar a,
    html[data-theme="dark"] .navbar .theme-btn { color: #f1f5f9 !important; }
    html[data-theme="dark"] .navbar nav a:hover { color: #8ab4ff !important; }
    html[data-theme="dark"] .navbar a[aria-current="page"] { color: #8ab4ff !important; border-bottom: 2px solid #8ab4ff; }

    /* Judul & teks */
    html[data-theme="dark"] h1,
    html[data-theme="dark"] h2,
    html[data-theme="dark"] .judul { color: #ffffff !important; }
    html[data-theme="dark"] .label-nama,
    html[data-theme="dark"] .identitas,
    html[data-theme="dark"] .identitas span,
    html[data-theme="dark"] .detail-isi p,
    html[data-theme="dark"] .sapa,
    html[data-theme="dark"] label { color: #e5e7eb !important; }

    /* Panel & kartu */
    html[data-theme="dark"] .panel-detail,
    html[data-theme="dark"] .kontak-kartu,
    html[data-theme="dark"] .form-kontak { background: #1a1f29 !important; color: #e5e7eb !important; border-color: #2a3140 !important; }

    /* Form */
    html[data-theme="dark"] input,
    html[data-theme="dark"] textarea { background: #232a36 !important; color: #ffffff !important; border: 1px solid #3a4352 !important; }

    /* Tombol */
    html[data-theme="dark"] .tombol { background: #2563eb !important; color: #fff !important; }
    html[data-theme="dark"] .tombol-garis { color: #e5e7eb !important; border-color: #6b7280 !important; }
    html[data-theme="dark"] .kembali { color: #8ab4ff !important; }
    html[data-theme="dark"] .filter-anggota { background: #232a36; color: #fff; border-color: #3a4352; }

    /* Kartu Learning */
    html[data-theme="dark"] .learning-card {
      background: #1a1f29 !important; color: #e5e7eb !important;
      border-color: #2a3140 !important; border-top-color: #60a5fa !important;
      box-shadow: none !important;
    }
    html[data-theme="dark"] .learning-card h2 { color: #ffffff !important; }
    html[data-theme="dark"] .learning-card.open h2 { border-bottom-color: #2a3140 !important; }
    html[data-theme="dark"] .learning-card strong { color: #93c5fd !important; }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
    }
  `;
  document.head.appendChild(gaya);

  /* ================= 1. DARK MODE ================= */
  const root = document.documentElement;

  // Buat tombol tema otomatis di navbar kalau belum ada
  let tombolTema = document.getElementById('themeToggle');
  if (!tombolTema) {
    const ul = document.querySelector('.navbar nav ul');
    if (ul) {
      const li = document.createElement('li');
      tombolTema = document.createElement('button');
      tombolTema.id = 'themeToggle';
      tombolTema.type = 'button';
      tombolTema.className = 'theme-btn';
      li.appendChild(tombolTema);
      ul.appendChild(li);
    }
  }

  function terapkanTema(tema) {
    root.setAttribute('data-theme', tema);
    if (tombolTema) tombolTema.textContent = tema === 'dark' ? '☀️ Terang' : '🌙 Gelap';
  }

  let temaTersimpan = 'light';
  try { temaTersimpan = localStorage.getItem('tema') || 'light'; } catch (e) {}
  terapkanTema(temaTersimpan);

  if (tombolTema) {
    tombolTema.addEventListener('click', function () {
      const baru = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      terapkanTema(baru);
      try { localStorage.setItem('tema', baru); } catch (e) {}
    });
  }

  /* ================= 2. ACCORDION ================= */
  const kartu = document.querySelectorAll('.learning-card');
  const tombolSemua = document.getElementById('toggleAll');

  function perbaruiTombolSemua() {
    if (!tombolSemua) return;
    const semua = Array.from(kartu).every(function (k) { return k.classList.contains('open'); });
    tombolSemua.textContent = semua ? 'Tutup semua' : 'Buka semua';
  }

  kartu.forEach(function (k, i) {
    const judul = k.querySelector('h2');
    if (!judul) return;
    judul.setAttribute('tabindex', '0');
    judul.setAttribute('role', 'button');
    judul.setAttribute('aria-expanded', 'false');

    function toggle() {
      const buka = k.classList.toggle('open');
      judul.setAttribute('aria-expanded', String(buka));
      perbaruiTombolSemua();
    }
    judul.addEventListener('click', toggle);
    judul.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    if (i === 0) { k.classList.add('open'); judul.setAttribute('aria-expanded', 'true'); }
  });

  if (tombolSemua) {
    perbaruiTombolSemua();
    tombolSemua.addEventListener('click', function () {
      const semua = Array.from(kartu).every(function (k) { return k.classList.contains('open'); });
      kartu.forEach(function (k) {
        k.classList.toggle('open', !semua);
        const h = k.querySelector('h2');
        if (h) h.setAttribute('aria-expanded', String(!semua));
      });
      perbaruiTombolSemua();
    });
  }

  /* ================= 3. REVEAL SAAT SCROLL ================= */
  const elemenReveal = document.querySelectorAll('.reveal');
  if (elemenReveal.length) {
    if ('IntersectionObserver' in window) {
      const pengamat = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.15 });
      elemenReveal.forEach(function (el) { pengamat.observe(el); });
    } else {
      elemenReveal.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* ================= 4. KEMBALI KE ATAS ================= */
  const tombolAtas = document.getElementById('backToTop');
  if (tombolAtas) {
    window.addEventListener('scroll', function () {
      tombolAtas.classList.toggle('tampil', window.scrollY > 300);
    }, { passive: true });
    tombolAtas.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================= 5. FILTER ANGGOTA (about.html) ================= */
  const daftarAnggota = document.querySelector('ul.anggota');
  if (daftarAnggota) {
    const input = document.createElement('input');
    input.type = 'search';
    input.className = 'filter-anggota';
    input.placeholder = 'Cari anggota...';
    input.setAttribute('aria-label', 'Cari anggota');
    daftarAnggota.parentNode.insertBefore(input, daftarAnggota);

    const pesan = document.createElement('p');
    pesan.className = 'tidak-ada';
    pesan.textContent = 'Anggota tidak ditemukan.';
    pesan.hidden = true;
    daftarAnggota.parentNode.insertBefore(pesan, daftarAnggota.nextSibling);

    input.addEventListener('input', function () {
      const kata = input.value.trim().toLowerCase();
      let cocok = 0;
      daftarAnggota.querySelectorAll('li').forEach(function (li) {
        const tampil = li.textContent.toLowerCase().indexOf(kata) !== -1;
        li.classList.toggle('sembunyi', !tampil);
        if (tampil) cocok++;
      });
      pesan.hidden = cocok !== 0;
    });
  }
})();