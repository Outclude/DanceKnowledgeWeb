// === Dance Moves Data ===
let MOVES_DATA = {};

// === Mobile Detection ===
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

// === DOM Elements ===
const cardsContainer = document.getElementById('cardsContainer');
const tabs = document.querySelectorAll('.tab');
const heroButtons = document.querySelectorAll('.hero-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const topNav = document.getElementById('topNav');

// === State ===
let currentStyle = 'locking';

// === Render Cards ===
function renderCards(style) {
  const moves = MOVES_DATA[style];
  if (!moves) return;
  cardsContainer.innerHTML = '';

  moves.forEach((move, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="card-actions">
        <button class="card-action-btn card-move-btn" data-index="${index}" data-dir="up" title="上移" ${index === 0 ? 'disabled' : ''}>↑</button>
        <button class="card-action-btn card-move-btn" data-index="${index}" data-dir="down" title="下移" ${index === moves.length - 1 ? 'disabled' : ''}>↓</button>
        <button class="card-action-btn card-edit-btn" data-index="${index}" title="编辑">✎</button>
        <button class="card-action-btn card-delete-btn" data-index="${index}" title="删除">×</button>
      </div>
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
      if (e.target.closest('.card-bili') || e.target.closest('.card-action-btn')) return;
      card.classList.toggle('expanded');
    });

    card.querySelector('.card-edit-btn').addEventListener('click', () => openEditModal(index));
    card.querySelector('.card-delete-btn').addEventListener('click', () => deleteMove(index));
    card.querySelectorAll('.card-move-btn').forEach(btn => {
      btn.addEventListener('click', () => moveCard(parseInt(btn.dataset.index), btn.dataset.dir));
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

// === Tab Switching ===
function switchStyle(style) {
  currentStyle = style;

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

// === Scroll Effects ===
window.addEventListener('scroll', () => {
  topNav.classList.toggle('scrolled', window.scrollY > 50);
});

// === API Key Management ===
const apiModal = document.getElementById('apiModal');
const apiKeyBtn = document.getElementById('apiKeyBtn');
const apiModalClose = document.getElementById('apiModalClose');
const configSelect = document.getElementById('configSelect');
const configAdd = document.getElementById('configAdd');
const configDelete = document.getElementById('configDelete');
const configSave = document.getElementById('configSave');

const DEFAULT_CONFIG = { name: '默认方案', baseUrl: '', apiKey: '', format: 'openai', model: '' };

function loadConfigs() {
  const raw = localStorage.getItem('apiConfigs');
  if (raw) return JSON.parse(raw);
  return { configs: [{ ...DEFAULT_CONFIG }], activeIndex: 0 };
}

function saveConfigs(data) {
  localStorage.setItem('apiConfigs', JSON.stringify(data));
}

function fillForm(config) {
  document.getElementById('cfgName').value = config.name || '';
  document.getElementById('cfgUrl').value = config.baseUrl || '';
  document.getElementById('cfgKey').value = config.apiKey || '';
  document.getElementById('cfgFormat').value = config.format || 'openai';
  document.getElementById('cfgModel').value = config.model || '';
}

function readForm() {
  return {
    name: document.getElementById('cfgName').value.trim() || '未命名方案',
    baseUrl: document.getElementById('cfgUrl').value.trim(),
    apiKey: document.getElementById('cfgKey').value.trim(),
    format: document.getElementById('cfgFormat').value,
    model: document.getElementById('cfgModel').value.trim()
  };
}

function renderConfigSelector() {
  const data = loadConfigs();
  configSelect.innerHTML = data.configs.map((c, i) =>
    `<option value="${i}" ${i === data.activeIndex ? 'selected' : ''}>${c.name}</option>`
  ).join('');
  fillForm(data.configs[data.activeIndex]);
}

function openApiModal() {
  renderConfigSelector();
  apiModal.classList.add('active');
}

function closeApiModal() {
  apiModal.classList.remove('active');
}

apiKeyBtn.addEventListener('click', openApiModal);
apiModalClose.addEventListener('click', closeApiModal);
apiModal.addEventListener('click', (e) => {
  if (e.target === apiModal) closeApiModal();
});

configSelect.addEventListener('change', () => {
  const data = loadConfigs();
  data.activeIndex = parseInt(configSelect.value);
  saveConfigs(data);
  fillForm(data.configs[data.activeIndex]);
});

configAdd.addEventListener('click', () => {
  const data = loadConfigs();
  data.configs.push({ ...DEFAULT_CONFIG, name: `方案 ${data.configs.length + 1}` });
  data.activeIndex = data.configs.length - 1;
  saveConfigs(data);
  renderConfigSelector();
});

configDelete.addEventListener('click', () => {
  const data = loadConfigs();
  if (data.configs.length <= 1) return;
  data.configs.splice(data.activeIndex, 1);
  data.activeIndex = Math.min(data.activeIndex, data.configs.length - 1);
  saveConfigs(data);
  renderConfigSelector();
});

configSave.addEventListener('click', () => {
  const data = loadConfigs();
  data.configs[data.activeIndex] = readForm();
  saveConfigs(data);
  renderConfigSelector();
});

// === Edit & Delete Move ===
let editingIndex = null;

function openEditModal(index) {
  const move = MOVES_DATA[currentStyle][index];
  editingIndex = index;
  document.getElementById('editName').value = move.name;
  document.getElementById('editDesc').value = move.desc;
  document.getElementById('editTips').value = move.tips.join('\n');
  document.getElementById('editSvg').value = move.svg || '';
  document.getElementById('editSvgPreview').innerHTML = move.svg || '';
  document.getElementById('editModal').classList.add('active');
}

document.getElementById('editSvg').addEventListener('input', (e) => {
  document.getElementById('editSvgPreview').innerHTML = e.target.value;
});

function closeEditModal() {
  document.getElementById('editModal').classList.remove('active');
  editingIndex = null;
}

document.getElementById('editModalClose').addEventListener('click', closeEditModal);
document.getElementById('editModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('editModal')) closeEditModal();
});

const FIELD_PROMPTS = {
  desc: `你是一个街舞教学专家。请为舞种"{style}"中的动作"{name}"生成一句中文描述（30-50字，说明动作特征和视觉效果）。只返回描述文字，不要其他内容。`,
  tips: `你是一个街舞教学专家。请为舞种"{style}"中的动作"{name}"生成4条中文练习建议（每条10-15字）。以JSON数组格式返回，如 ["建议1","建议2","建议3","建议4"]。只返回JSON数组，不要其他内容。`,
  svg: `你是一个街舞教学专家。请为舞种"{style}"中的动作"{name}"生成一个120x140 viewBox的SVG火柴人图示，用#f5e642描边，stroke-width 2.5，展示该动作的标志性姿态。只返回SVG代码，不要其他内容。`
};

document.querySelectorAll('.ai-field-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const field = btn.dataset.field;
    const name = document.getElementById('editName').value.trim();
    if (!name) { alert('请先填写动作名称'); return; }
    btn.textContent = '...';
    btn.disabled = true;
    try {
      const prompt = FIELD_PROMPTS[field].replace('{name}', name).replace('{style}', currentStyle);
      const raw = await callAI(prompt);
      if (field === 'desc') {
        document.getElementById('editDesc').value = raw.trim().replace(/^["']|["']$/g, '');
      } else if (field === 'tips') {
        const arr = JSON.parse(raw.match(/\[[\s\S]*\]/)[0]);
        document.getElementById('editTips').value = arr.join('\n');
      } else if (field === 'svg') {
        const svg = raw.match(/<svg[\s\S]*<\/svg>/i)[0];
        document.getElementById('editSvg').value = svg;
        document.getElementById('editSvgPreview').innerHTML = svg;
      }
    } catch (err) {
      alert('AI 生成失败：' + err.message);
    } finally {
      btn.textContent = 'AI';
      btn.disabled = false;
    }
  });
});

document.getElementById('editSaveBtn').addEventListener('click', async () => {
  if (editingIndex === null) return;
  const move = MOVES_DATA[currentStyle][editingIndex];
  const updated = {
    ...move,
    name: document.getElementById('editName').value.trim(),
    desc: document.getElementById('editDesc').value.trim(),
    tips: document.getElementById('editTips').value.split('\n').filter(t => t.trim()),
    svg: document.getElementById('editSvg').value
  };
  try {
    const res = await fetch('/api/moves/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ style: currentStyle, index: editingIndex, move: updated })
    });
    if (!res.ok) throw new Error('保存失败');
    MOVES_DATA = await fetch('moves.json').then(r => r.json());
    renderCards(currentStyle);
    closeEditModal();
  } catch (err) {
    alert('保存失败：' + err.message);
  }
});

async function moveCard(index, dir) {
  const newIndex = dir === 'up' ? index - 1 : index + 1;
  try {
    const res = await fetch('/api/moves/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ style: currentStyle, from: index, to: newIndex })
    });
    if (!res.ok) throw new Error('移动失败');
    MOVES_DATA = await fetch('moves.json').then(r => r.json());
    renderCards(currentStyle);
  } catch (err) {
    alert('移动失败：' + err.message);
  }
}

async function deleteMove(index) {
  const move = MOVES_DATA[currentStyle][index];
  if (!confirm(`确定删除动作「${move.name}」？`)) return;
  try {
    const res = await fetch('/api/moves/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ style: currentStyle, index })
    });
    if (!res.ok) throw new Error('删除失败');
    MOVES_DATA = await fetch('moves.json').then(r => r.json());
    renderCards(currentStyle);
  } catch (err) {
    alert('删除失败：' + err.message);
  }
}

// === Add Move ===
const addMoveModal = document.getElementById('addMoveModal');
const addMoveBtn = document.getElementById('addMoveBtn');
const addMoveModalClose = document.getElementById('addMoveModalClose');
const generateBtn = document.getElementById('generateBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const confirmAddBtn = document.getElementById('confirmAddBtn');
const generateLoading = document.getElementById('generateLoading');
const generateActions = document.getElementById('generateActions');
const previewArea = document.getElementById('previewArea');
const previewCard = document.getElementById('previewCard');

let pendingMove = null;

function getActiveConfig() {
  const data = loadConfigs();
  return data.configs[data.activeIndex];
}

const GENERATE_PROMPT = `你是一个街舞教学专家。请为以下舞蹈动作生成信息：
动作名称：{name}
舞种：{style}

请以 JSON 格式返回，包含：
1. "desc": 一句话中文描述（30-50字，说明动作特征和视觉效果）
2. "tips": 4条中文练习建议的数组（每条10-15字）
3. "svg": 一个120x140 viewBox的SVG火柴人图示（用#f5e642描边，stroke-width 2.5，展示该动作的标志性姿态）
4. "bilibiliQuery": B站搜索关键词（英文动作名+教学）

只返回JSON，不要其他内容。`;

async function callAI(prompt) {
  const config = getActiveConfig();
  if (!config.baseUrl || !config.apiKey) {
    throw new Error('请先在 API Key 管理中配置 API 信息');
  }

  if (config.format === 'anthropic') {
    const res = await fetch(`${config.baseUrl}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: config.model,
        max_tokens: 2048,
        system: '你是一个街舞教学专家，擅长生成舞蹈动作的描述和SVG图示。',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    return data.content[0].text;
  } else {
    const res = await fetch(`${config.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: 'system', content: '你是一个街舞教学专家，擅长生成舞蹈动作的描述和SVG图示。' },
          { role: 'user', content: prompt }
        ]
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
    return data.choices[0].message.content;
  }
}

function parseAIResponse(text) {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('AI 返回格式错误，未找到 JSON');
  return JSON.parse(jsonMatch[0]);
}

function renderPreview(move) {
  previewCard.innerHTML = `
    <div class="card-svg">${move.svg}</div>
    <div class="card-name">${move.name}</div>
    <p class="card-desc">${move.desc}</p>
    <ul class="card-tips">
      ${move.tips.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
}

async function doGenerate() {
  const name = document.getElementById('moveNameInput').value.trim();
  const style = document.getElementById('moveStyleSelect').value;
  if (!name) { alert('请输入动作英文名'); return; }

  generateActions.style.display = 'none';
  previewArea.style.display = 'none';
  generateLoading.style.display = 'flex';

  try {
    const prompt = GENERATE_PROMPT.replace('{name}', name).replace('{style}', style);
    const raw = await callAI(prompt);
    const result = parseAIResponse(raw);
    pendingMove = { name, ...result, _style: style };
    renderPreview(pendingMove);
    generateLoading.style.display = 'none';
    previewArea.style.display = 'block';
  } catch (err) {
    generateLoading.style.display = 'none';
    generateActions.style.display = 'flex';
    alert('生成失败：' + err.message);
  }
}

async function doConfirmAdd() {
  if (!pendingMove) return;
  const { _style, ...move } = pendingMove;
  try {
    const res = await fetch('/api/moves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ style: _style, move })
    });
    if (!res.ok) throw new Error('保存失败');
    const freshData = await fetch('moves.json').then(r => r.json());
    MOVES_DATA = freshData;
    switchStyle(_style);
    closeAddMoveModal();
  } catch (err) {
    alert('保存失败：' + err.message);
  }
}

function openAddMoveModal() {
  document.getElementById('moveNameInput').value = '';
  generateActions.style.display = 'flex';
  generateLoading.style.display = 'none';
  previewArea.style.display = 'none';
  pendingMove = null;
  addMoveModal.classList.add('active');
}

function closeAddMoveModal() {
  addMoveModal.classList.remove('active');
}

addMoveBtn.addEventListener('click', openAddMoveModal);
addMoveModalClose.addEventListener('click', closeAddMoveModal);
addMoveModal.addEventListener('click', (e) => {
  if (e.target === addMoveModal) closeAddMoveModal();
});
generateBtn.addEventListener('click', doGenerate);
regenerateBtn.addEventListener('click', doGenerate);
confirmAddBtn.addEventListener('click', doConfirmAdd);

// === Initialize ===
fetch('moves.json')
  .then(res => res.json())
  .then(data => {
    MOVES_DATA = data;
    renderCards(currentStyle);
  });
