let MOVES_DATA = {};

const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

const cardsContainer = document.getElementById('cardsContainer');
const tabs = document.querySelectorAll('.tab');
const heroButtons = document.querySelectorAll('.hero-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const topNav = document.getElementById('topNav');

let currentStyle = 'locking';

function renderCards(style) {
  cardsContainer.innerHTML = '';
  const moves = MOVES_DATA[style];
  if (!moves) return;
  const query = (document.getElementById('moveSearch').value || '').trim().toLowerCase();

  moves.forEach((move, index) => {
    if (query && !move.name.toLowerCase().includes(query)) return;
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-svg">${move.svg}</div>
        <div class="card-info">
          <div class="card-name">${move.name}</div>
        </div>
      </div>
      <p class="card-desc">${move.desc}</p>
      <div class="card-details">
        <ul class="card-tips">
          ${move.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
        <a class="card-bili" href="${isMobile ? `bilibili://search?keyword=${encodeURIComponent(move.bilibiliQuery)}` : `https://search.bilibili.com/all?keyword=${encodeURIComponent(move.bilibiliQuery)}`}" ${isMobile ? '' : 'target="_blank" rel="noopener noreferrer"'} data-keyword="${encodeURIComponent(move.bilibiliQuery)}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.124.929.373.249.249.373.551.373.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>
          搜索教程
        </a>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-bili')) return;
      card.classList.toggle('expanded');
    });

    if (isMobile) {
      const biliLink = card.querySelector('.card-bili');
      biliLink.addEventListener('click', (e) => {
        e.preventDefault();
        const keyword = decodeURIComponent(biliLink.dataset.keyword);
        const webUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
        const appUrl = `bilibili://search?keyword=${encodeURIComponent(keyword)}`;
        const start = Date.now();
        window.location.href = appUrl;
        setTimeout(() => {
          if (Date.now() - start < 1500) {
            window.location.href = webUrl;
          }
        }, 800);
      });
    }

    cardsContainer.appendChild(card);
  });
}

document.getElementById('moveSearch').addEventListener('input', () => {
  renderCards(currentStyle);
});

function switchStyle(style) {
  currentStyle = style;
  document.getElementById('moveSearch').value = '';
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.style === style);
  });
  renderCards(style);
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => switchStyle(tab.dataset.style));
});

heroButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switchStyle(btn.dataset.style);
    document.getElementById('styles').scrollIntoView({ behavior: 'smooth' });
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.dataset.style) {
      e.preventDefault();
      switchStyle(link.dataset.style);
      document.getElementById('styles').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', () => {
  topNav.classList.toggle('scrolled', window.scrollY > 50);
});

fetch('moves.json')
  .then(res => res.json())
  .then(data => {
    MOVES_DATA = data;
    renderCards(currentStyle);
  });
