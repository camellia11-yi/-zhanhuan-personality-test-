// 导入数据模块
import { PERSONALITIES, QUESTIONS, DIMENSION_NAMES, DIMENSION_DESC } from './data.js';

// 应用状态
let currentPage = 'index';
let currentQuestion = 0;
let answers = [];
let scores = {};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initPetals();
  initPersonalitySwiper();
  initScores();
});

// 初始化分数
function initScores() {
  scores = {};
  PERSONALITIES.forEach(p => {
    scores[p.id] = 0;
  });
  answers = [];
  currentQuestion = 0;
}

// 创建粒子
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 5 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 4 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(particle);
  }
}

// 创建花瓣
function initPetals() {
  const container = document.getElementById('petals');
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 6 + 's';
    petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
    petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    container.appendChild(petal);
  }
}

// 初始化人格轮播
function initPersonalitySwiper() {
  const container = document.getElementById('personalitySwiper');
  if (!container) return;

  PERSONALITIES.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'persona-card glass-card gold-outline' + (index === 0 ? ' active' : '');
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="persona-image" onerror="this.style.display='none'">
      <div class="persona-info">
        <h3 class="title-md text-gold">${p.name}</h3>
        <p class="persona-role">${p.title}</p>
        <div class="persona-tags">
          ${p.keywords.map(k => `<span class="persona-tag">${k}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // 自动轮播
  let currentIndex = 0;
  setInterval(() => {
    const cards = container.querySelectorAll('.persona-card');
    cards[currentIndex].classList.remove('active');
    cards[currentIndex].classList.add('prev');

    currentIndex = (currentIndex + 1) % PERSONALITIES.length;

    cards.forEach((card, i) => {
      if (i !== currentIndex) {
        card.classList.remove('prev');
      }
    });
    cards[currentIndex].classList.add('active');
  }, 3500);
}

// 开始测试
function startTest() {
  initScores();
  currentPage = 'test';
  renderTestPage();
}

// 渲染测试页
function renderTestPage() {
  document.body.innerHTML = `
    <div class="page-shell test-page">
      <div class="aurora"></div>
      <div class="bg-particles" id="particles"></div>
      <div class="petal-layer" id="petals"></div>

      <div class="page-content">
        <div class="test-top">
          <div class="test-top-row">
            <span class="top-link" onclick="goHome()">返回首页</span>
            <span class="top-link" onclick="showConfirmReset()">重新开始</span>
          </div>

          <div class="progress-box glass-card gold-outline">
            <div class="progress-head">
              <span class="progress-title">测试进度</span>
              <span class="progress-value" id="progressValue">1 / 48</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" id="progressFill" style="width: 2%"></div>
            </div>
            <p class="dimension-text" id="dimensionText">当前维度：权力取向</p>
          </div>
        </div>

        <div class="question-card glass-card gold-outline" id="questionCard">
          <!-- 动态生成 -->
        </div>

        <div class="footer-actions">
          <button class="btn-secondary nav-btn" id="prevBtn" onclick="prevQuestion()" disabled>上一题</button>
          <button class="btn-primary nav-btn" id="nextBtn" onclick="nextQuestion()" disabled>下一题</button>
        </div>
      </div>
    </div>
  `;

  initParticles();
  initPetals();
  renderQuestion();
}

// 渲染题目
function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const card = document.getElementById('questionCard');

  const progress = ((currentQuestion + 1) / QUESTIONS.length * 100).toFixed(0);
  document.getElementById('progressValue').textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('dimensionText').textContent = '当前维度：' + DIMENSION_NAMES[question.dimension];

  const selectedAnswer = answers[currentQuestion];

  let optionsHtml = question.options.map((opt, i) => {
    const letters = ['A', 'B', 'C'];
    const isActive = selectedAnswer === i ? ' active' : '';
    return `
      <div class="option-item${isActive}" onclick="selectOption(${i})">
        <div class="option-left">
          <span class="option-letter">${letters[i]}</span>
          <span class="option-text">${opt.text}</span>
        </div>
        <span class="option-check">${selectedAnswer === i ? '✓ 已选' : ''}</span>
      </div>
    `;
  }).join('');

  card.innerHTML = `
    <span class="question-no">第 ${currentQuestion + 1} 题</span>
    <h2 class="question-title">${question.question}</h2>
    <div class="option-list">${optionsHtml}</div>
  `;

  // 更新按钮状态
  document.getElementById('prevBtn').disabled = currentQuestion === 0;

  const nextBtn = document.getElementById('nextBtn');
  if (currentQuestion === QUESTIONS.length - 1) {
    nextBtn.textContent = '查看结果';
    nextBtn.disabled = selectedAnswer === undefined;
  } else {
    nextBtn.textContent = '下一题';
    nextBtn.disabled = selectedAnswer === undefined;
  }
}

// 选择选项
function selectOption(index) {
  answers[currentQuestion] = index;
  renderQuestion();
}

// 上一题
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

// 下一题
function nextQuestion() {
  if (answers[currentQuestion] === undefined) return;

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    calculateResult();
  }
}

// 计算结果
function calculateResult() {
  // 重置分数
  PERSONALITIES.forEach(p => scores[p.id] = 0);

  // 累加分数
  answers.forEach((answerIndex, qIndex) => {
    const question = QUESTIONS[qIndex];
    const selectedOption = question.options[answerIndex];
    if (selectedOption && selectedOption.weights) {
      Object.entries(selectedOption.weights).forEach(([personalityId, weight]) => {
        if (scores[personalityId] !== undefined) {
          scores[personalityId] += weight;
        }
      });
    }
  });

  // 找出最高分的人格
  let maxScore = 0;
  let resultPersonality = PERSONALITIES[0];

  Object.entries(scores).forEach(([id, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultPersonality = PERSONALITIES.find(p => p.id === id);
    }
  });

  // 计算维度分数
  const dimensionScores = calculateDimensionScores();

  // 计算相似人格排行
  const rankings = calculateRankings();

  // 渲染结果页
  renderResultPage(resultPersonality, dimensionScores, rankings);
}

// 计算维度分数
function calculateDimensionScores() {
  const dimensions = ['power', 'emotion', 'social', 'stress', 'moral'];
  const result = {};

  dimensions.forEach(dim => {
    let total = 0;
    let count = 0;

    QUESTIONS.forEach((q, i) => {
      if (q.dimension === dim && answers[i] !== undefined) {
        const option = q.options[answers[i]];
        // 简化计算：A选项=高分，B选项=中分，C选项=低分
        if (answers[i] === 0) total += 3;
        else if (answers[i] === 1) total += 2;
        else total += 1;
        count++;
      }
    });

    const avgScore = count > 0 ? total / count : 2;
    result[dim] = {
      score: avgScore,
      level: avgScore >= 2.5 ? 'high' : (avgScore >= 1.5 ? 'mid' : 'low')
    };
  });

  return result;
}

// 计算排行
function calculateRankings() {
  const sorted = Object.entries(scores)
    .map(([id, score]) => ({
      id,
      score,
      personality: PERSONALITIES.find(p => p.id === id)
    }))
    .sort((a, b) => b.score - a.score);

  const maxScore = sorted[0].score;
  return sorted.slice(0, 5).map(item => ({
    ...item,
    percentage: maxScore > 0 ? Math.round((item.score / maxScore) * 100) : 0
  }));
}

// 渲染结果页
function renderResultPage(personality, dimensionScores, rankings) {
  currentPage = 'result';

  const dimensionHtml = Object.entries(dimensionScores).map(([dim, data]) => `
    <div class="dimension-item">
      <div class="dimension-top">
        <span class="dimension-label">${DIMENSION_NAMES[dim]}</span>
        <span class="dimension-letter">${data.level === 'high' ? '高' : (data.level === 'mid' ? '中' : '低')}</span>
      </div>
      <p class="dimension-desc">${DIMENSION_DESC[dim][data.level]}</p>
    </div>
  `).join('');

  const rankingHtml = rankings.slice(1).map((r, i) => `
    <div class="ranking-item">
      <div class="ranking-top">
        <span class="ranking-name">${r.personality.name}</span>
        <span class="ranking-rate">${r.percentage}%</span>
      </div>
      <div class="ranking-bar">
        <div class="ranking-bar-inner" style="width: ${r.percentage}%"></div>
      </div>
    </div>
  `).join('');

  document.body.innerHTML = `
    <div class="page-shell result-page">
      <div class="aurora"></div>
      <div class="bg-particles" id="particles"></div>
      <div class="petal-layer" id="petals"></div>

      <div class="page-content">
        <div class="result-hero glass-card gold-outline">
          <img src="${personality.image}" alt="${personality.name}" class="result-image" onerror="this.style.background='linear-gradient(135deg, rgba(102, 55, 144, 0.3), rgba(132, 21, 40, 0.3))'">
          <div class="result-overlay"></div>
          <div class="hero-content">
            <h1 class="title-xl text-gold">${personality.name}</h1>
            <p class="hero-sub">${personality.title}</p>
            <div class="keyword-list">
              ${personality.keywords.map(k => `<span class="keyword-item">${k}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="card-block glass-card gold-outline">
          <h3 class="title-md text-gold block-title">性格分析</h3>
          <p class="block-text">${personality.analysis}</p>
        </div>

        <div class="card-block glass-card gold-outline">
          <h3 class="title-md text-gold block-title">角色解析</h3>
          <p class="block-text">${personality.characterAnalysis}</p>
        </div>

        <div class="card-block glass-card gold-outline">
          <h3 class="title-md text-gold block-title">五维画像</h3>
          <div class="dimension-list">${dimensionHtml}</div>
        </div>

        <div class="card-block glass-card gold-outline">
          <h3 class="title-md text-gold block-title">相似人格</h3>
          <p class="ranking-title">与你性格相似的其他人格类型</p>
          <div class="ranking-list">${rankingHtml}</div>
        </div>

        <div class="card-block glass-card gold-outline">
          <h3 class="title-md text-gold block-title">分享文案</h3>
          <p class="share-text">${personality.shareText}</p>
          <button class="btn-secondary action-btn" onclick="copyShareText('${personality.id}')">复制文案</button>
        </div>

        <div class="poster-actions">
          <button class="btn-primary poster-btn" onclick="generatePoster('${personality.id}')">生成分享海报</button>
          <button class="btn-secondary poster-btn" onclick="goHome()">重新测试</button>
        </div>
      </div>
    </div>
    <canvas id="posterCanvas" width="750" height="1334"></canvas>
  `;

  initParticles();
  initPetals();
}

// 返回首页
function goHome() {
  currentPage = 'index';
  initScores();
  location.reload();
}

// 确认重置
function showConfirmReset() {
  if (confirm('确定要重新开始测试吗？当前进度将丢失。')) {
    startTest();
  }
}

// 复制分享文案
function copyShareText(personalityId) {
  const personality = PERSONALITIES.find(p => p.id === personalityId);
  if (personality && navigator.clipboard) {
    navigator.clipboard.writeText(personality.shareText).then(() => {
      alert('文案已复制到剪贴板！');
    }).catch(() => {
      fallbackCopy(personality.shareText);
    });
  } else {
    fallbackCopy(personality.shareText);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('文案已复制！');
}

// 生成海报
function generatePoster(personalityId) {
  const personality = PERSONALITIES.find(p => p.id === personalityId);
  const canvas = document.getElementById('posterCanvas');
  const ctx = canvas.getContext('2d');

  // 背景渐变
  const gradient = ctx.createLinearGradient(0, 0, 0, 1334);
  gradient.addColorStop(0, '#0d0712');
  gradient.addColorStop(0.3, '#160a1c');
  gradient.addColorStop(0.7, '#24112f');
  gradient.addColorStop(1, '#11070f');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 750, 1334);

  // 装饰边框
  ctx.strokeStyle = 'rgba(232, 197, 122, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, 690, 1274);

  // 标题
  ctx.fillStyle = '#e8c57a';
  ctx.font = 'bold 48px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('甄嬛传人格测试', 375, 100);

  // 人格名称
  ctx.font = 'bold 64px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(personality.name, 375, 200);

  // 副标题
  ctx.fillStyle = 'rgba(247, 234, 214, 0.8)';
  ctx.font = '32px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(personality.title, 375, 260);

  // 关键词
  ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#f6d694';
  const keywords = personality.keywords.join(' · ');
  ctx.fillText(keywords, 375, 320);

  // 角色图片区域
  ctx.fillStyle = 'rgba(49, 24, 62, 0.5)';
  roundRect(ctx, 75, 360, 600, 500, 20);
  ctx.fill();

  // 尝试绘制图片
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    ctx.drawImage(img, 75, 360, 600, 500);
    drawPosterText(ctx, personality);
  };
  img.onerror = function() {
    drawPosterText(ctx, personality);
  };
  img.src = personality.image;

  // 如果图片加载失败，直接绘制文字
  setTimeout(() => {
    drawPosterText(ctx, personality);
  }, 100);
}

function drawPosterText(ctx, personality) {
  // 分割线
  ctx.strokeStyle = 'rgba(232, 197, 122, 0.3)';
  ctx.beginPath();
  ctx.moveTo(100, 900);
  ctx.lineTo(650, 900);
  ctx.stroke();

  // 性格分析
  ctx.fillStyle = '#e8c57a';
  ctx.font = 'bold 36px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('性格分析', 75, 960);

  ctx.fillStyle = 'rgba(247, 234, 214, 0.8)';
  ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
  wrapText(ctx, personality.analysis, 75, 1010, 600, 40);

  // 底部信息
  ctx.fillStyle = 'rgba(247, 234, 214, 0.5)';
  ctx.font = '24px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('扫码测测你是《甄嬛传》里的谁', 375, 1280);

  // 导出图片
  setTimeout(() => {
    const link = document.createElement('a');
    link.download = `甄嬛传人格测试-${personality.name}.png`;
    link.href = document.getElementById('posterCanvas').toDataURL('image/png');
    link.click();
  }, 200);
}

// 圆角矩形
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// 文字换行
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let currentY = y;

  for (let i = 0; i < chars.length; i++) {
    const testLine = line + chars[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, x, currentY);
      line = chars[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}

// 将函数挂载到 window 对象，使内联事件可以访问
window.startTest = startTest;
window.goHome = goHome;
window.showConfirmReset = showConfirmReset;
window.selectOption = selectOption;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.copyShareText = copyShareText;
window.generatePoster = generatePoster;
