// === Dance Moves Data ===
const MOVES_DATA = {
  locking: [
    {
      name: "Lock",
      nameZh: "锁定",
      level: "初级",
      desc: "Locking 的核心动作，手臂或腿部运动后突然冻结定格，制造强烈视觉停顿感。",
      tips: ["手臂动作要先快后突停", "锁定瞬间全身收紧", "眼神配合动作方向", "配合音乐重拍落锁"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="45" x2="40" y2="35" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="35" x2="35" y2="20" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="45" x2="80" y2="35" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="35" x2="85" y2="20" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="45" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="105" x2="42" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="75" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="105" x2="78" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking lock move tutorial"
    },
    {
      name: "Point",
      nameZh: "指向",
      level: "初级",
      desc: "标志性的指向动作，一臂有力地向前伸直，配合重心转移，强调方向感和自信。",
      tips: ["指尖到肩膀保持一条直线", "眼神跟随手指方向", "后手自然收到身后", "重心偏向指出方向"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="30" x2="55" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="95" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="30" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="30" y1="55" x2="20" y2="65" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="75" x2="40" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="105" x2="38" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="75" x2="70" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="105" x2="72" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking point move tutorial"
    },
    {
      name: "Wrist Roll",
      nameZh: "手腕翻转",
      level: "初级",
      desc: "双手前伸，手腕做圆圈旋转，过渡动作中增加流畅感和节奏层次。",
      tips: ["手腕放松画小圆", "双手可同步或交替转动", "保持手臂稳定不晃", "速度配合音乐节奏"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="45" x2="40" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="50" x2="30" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="25" cy="50" r="5" stroke="#f5e642" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 2"/>
        <line x1="60" y1="45" x2="80" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="50" x2="90" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="95" cy="50" r="5" stroke="#f5e642" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 2"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking wrist roll tutorial"
    },
    {
      name: "Scooby Doo",
      nameZh: "史酷比",
      level: "中级",
      desc: "双臂平行向前推出，身体后仰形成反向张力，充满卡通式的夸张表现力。",
      tips: ["双臂平行且同时推出", "身体后仰但重心稳定", "推出时配合呼气", "可加入节奏停顿"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65" cy="22" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M65 32 Q70 55 68 78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="65" y1="45" x2="35" y2="42" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="42" x2="15" y2="40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="65" y1="50" x2="35" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="50" x2="15" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="68" y1="78" x2="55" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="105" x2="50" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="68" y1="78" x2="80" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="105" x2="83" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking scooby doo move tutorial"
    },
    {
      name: "Leo Walk",
      nameZh: "狮子步",
      level: "中级",
      desc: "侧身行走步伐，一腿抬起配合手臂节奏摆动，展现从容帅气的行走姿态。",
      tips: ["侧身 45 度角前行", "抬腿时膝盖高于腰部", "手臂大幅度交替摆动", "步伐有弹性不僵硬"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="30" x2="55" y2="72" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="75" y2="32" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="32" x2="85" y2="25" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="35" y2="52" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="52" x2="25" y2="60" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="72" x2="45" y2="95" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="95" x2="40" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="72" x2="75" y2="80" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="80" x2="80" y2="65" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking leo walk tutorial"
    },
    {
      name: "Funky Chicken",
      nameZh: "疯克鸡",
      level: "中级",
      desc: "双肘外展上下抖动模仿鸡翅膀，搞怪但极具 Funk 精神的经典动作。",
      tips: ["双肘抬至肩膀高度", "快速上下抖动手肘", "身体配合上下律动", "表情夸张增加效果"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="40" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="30" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="30" y1="48" x2="32" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="80" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="38" x2="90" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="90" y1="48" x2="88" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M35 42 L30 36 M85 42 L90 36" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking funky chicken tutorial"
    },
    {
      name: "Pimp Walk",
      nameZh: "大佬步",
      level: "中级",
      desc: "昂首挺胸的夸张走路方式，一手叉腰大步迈腿，展现绝对自信和舞台统治力。",
      tips: ["挺胸抬头目视前方", "一手叉腰一手自然摆", "步伐大且有停顿感", "肩膀可左右交替倾斜"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="18" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="28" x2="55" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="42" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="55" x2="48" y2="68" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="42" x2="72" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="48" x2="80" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="75" x2="35" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="100" x2="30" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="75" x2="78" y2="95" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="78" y1="95" x2="85" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking pimp walk tutorial"
    },
    {
      name: "Stop & Go",
      nameZh: "停走",
      level: "高级",
      desc: "运动中突然急停再启动，一脚踏出配合双臂前后交替，节奏控制力的终极体现。",
      tips: ["急停要干脆利落", "启动时爆发力要强", "双臂和腿配合协调", "练习不同速度的切换"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="58" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="30" x2="58" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="42" x2="82" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="82" y1="38" x2="90" y2="30" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="45" x2="35" y2="52" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="52" x2="28" y2="62" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="75" x2="42" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="100" x2="38" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="75" x2="80" y2="90" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="90" x2="88" y2="120" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "locking stop and go tutorial"
    }
  ],
  popping: [
    {
      name: "Hit / Pop",
      nameZh: "弹击",
      level: "初级",
      desc: "Popping 核心技术，通过肌肉瞬间收缩和释放产生视觉上的弹跳效果。",
      tips: ["胸、臂、腿同时收缩", "收缩时间极短如触电", "放松和紧绷对比要大", "先慢练单个部位再组合"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="42" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="48" x2="35" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="78" y2="48" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="78" y1="48" x2="85" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="50" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="105" x2="48" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="70" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="105" x2="72" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="52" y1="35" x2="48" y2="32" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="68" y1="35" x2="72" y2="32" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="55" y1="70" x2="52" y2="73" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="65" y1="70" x2="68" y2="73" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "popping hit pop tutorial beginner"
    },
    {
      name: "Fresno",
      nameZh: "弗雷斯诺",
      level: "初级",
      desc: "双手握拳交替前后摆动配合步伐移动，Popping 基础步伐之一。",
      tips: ["握拳前后交替摆", "步伐和手臂节奏同步", "每步落地配合一次 Pop", "保持重心平稳下沉"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="40" y2="45" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="45" x2="30" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="28" cy="36" r="3" stroke="#f5e642" stroke-width="2" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="80" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="50" x2="88" y2="58" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="90" cy="60" r="3" stroke="#f5e642" stroke-width="2" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="45" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="100" x2="40" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="75" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="100" x2="80" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "popping fresno tutorial"
    },
    {
      name: "Boogaloo",
      nameZh: "布加洛",
      level: "中级",
      desc: "脊柱呈 S 形波浪弯曲，全身流动感强，膝盖微弯保持松弛律动。",
      tips: ["脊柱逐节活动像蛇", "膝盖始终微曲不锁死", "肩臀可反方向扭动", "整体动作流畅不卡顿"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="18" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M60 28 Q52 42 60 55 Q68 68 60 80" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="56" y1="38" x2="38" y2="42" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="38" y1="42" x2="30" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="64" y1="38" x2="82" y2="35" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="82" y1="35" x2="90" y2="42" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="80" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="80" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "boogaloo dance tutorial"
    },
    {
      name: "Dimestop",
      nameZh: "急停",
      level: "中级",
      desc: "运动中瞬间全身冻结定格，像按下暂停键，强调肌肉控制力。",
      tips: ["停止要毫无预兆", "全身同时锁定不是先后", "保持呼吸不要憋气", "停在各种姿势都可以"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="58" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="30" x2="58" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="42" x2="85" y2="35" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="45" x2="35" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="50" x2="30" y2="58" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="75" x2="48" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="100" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="75" x2="72" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="100" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="82" y1="30" x2="88" y2="28" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="86" y1="37" x2="92" y2="38" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "popping dimestop tutorial"
    },
    {
      name: "Tutting",
      nameZh: "图坦",
      level: "中级",
      desc: "双臂弯成直角几何形状，像埃及壁画人物，强调角度精准和线条美感。",
      tips: ["所有角度严格 90 度", "手指并拢线条干净", "切换角度要快而准", "可以加入手指 Tutting"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="40" x2="40" y2="40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="40" x2="40" y2="20" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="40" x2="80" y2="40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="40" x2="80" y2="60" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "tutting dance tutorial"
    },
    {
      name: "Gliding",
      nameZh: "滑步",
      level: "高级",
      desc: "一腿滑出，重心低，制造在地面无摩擦滑行的视觉错觉。",
      tips: ["重心腿弯曲支撑", "滑出腿贴地推送", "上身保持平稳不晃", "可组合侧滑和后滑"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="25" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="35" x2="50" y2="78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="48" x2="35" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="55" x2="28" y2="62" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="48" x2="65" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="65" y1="55" x2="72" y2="62" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="78" x2="40" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="105" x2="38" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="78" x2="80" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="100" x2="100" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M95 128 L100 130 L95 132" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      </svg>`,
      youtubeQuery: "popping gliding tutorial"
    },
    {
      name: "Waving",
      nameZh: "电流波",
      level: "高级",
      desc: "手臂从指尖到肩膀呈连续波浪弧线传递，如电流流经身体。",
      tips: ["从指尖逐关节启动", "每个关节独立控制", "速度均匀不跳过关节", "可扩展到全身 Body Wave"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M60 42 Q50 38 42 42 Q34 46 26 42 Q18 38 12 42" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M60 42 Q70 46 78 42 Q86 38 94 42 Q102 46 108 42" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="60" y1="75" x2="50" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="105" x2="48" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="70" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="105" x2="72" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "arm wave popping tutorial"
    },
    {
      name: "Robot",
      nameZh: "机器人",
      level: "初级",
      desc: "四肢呈直角机械姿势，动作生硬间断，模仿机器人的关节运动方式。",
      tips: ["每个动作之间要有停顿", "关节只做直角运动", "头部转动也是机械式", "表情僵硬配合角色"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="10" width="20" height="20" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="60" y1="30" x2="60" y2="78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="40" x2="40" y2="40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="40" x2="40" y2="60" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="40" x2="80" y2="40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="40" x2="80" y2="60" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="78" x2="45" y2="78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="78" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="78" x2="75" y2="78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="78" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="65" y1="17" x2="68" y2="14" stroke="#f5e642" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "robot dance tutorial popping"
    }
  ],
  hiphop: [
    {
      name: "Bounce",
      nameZh: "律动",
      level: "初级",
      desc: "Hip-Hop 最基础的律动，双膝弯曲随节拍上下弹动，是所有动作的根基。",
      tips: ["膝盖放松自然弯曲", "跟随音乐鼓点下沉", "上身保持放松跟随", "找到自己舒服的幅度"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="25" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="35" x2="60" y2="78" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="48" x2="42" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="55" x2="38" y2="65" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="48" x2="78" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="78" y1="55" x2="82" y2="65" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="78" x2="50" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="100" x2="48" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="78" x2="70" y2="100" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="100" x2="72" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M55 82 L60 86 L65 82" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      </svg>`,
      youtubeQuery: "hip hop bounce tutorial beginner"
    },
    {
      name: "Running Man",
      nameZh: "跑步机",
      level: "初级",
      desc: "一腿前踢一腿后蹬，双臂对应摆动，模拟原地跑步的经典 Hip-Hop 步伐。",
      tips: ["前脚落地要有力", "后脚向后滑出", "手臂自然对侧摆动", "保持节奏均匀不赶"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="18" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="28" x2="55" y2="72" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="40" x2="72" y2="32" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="32" x2="80" y2="28" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="40" x2="38" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="38" y1="50" x2="30" y2="55" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="72" x2="75" y2="85" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="85" x2="80" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="72" x2="35" y2="90" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="90" x2="25" y2="120" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "running man dance tutorial"
    },
    {
      name: "Cabbage Patch",
      nameZh: "卷心菜",
      level: "初级",
      desc: "双臂在胸前画圆，身体跟随手臂方向摇摆律动，经典的 Old School 动作。",
      tips: ["双臂握拳画圆圈", "身体跟随圆圈方向晃", "圆圈可大可小", "节奏跟紧鼓点"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M45 40 Q38 50 45 58 Q52 65 45 40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M75 40 Q82 50 75 58 Q68 65 75 40" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "cabbage patch dance tutorial"
    },
    {
      name: "Harlem Shake",
      nameZh: "哈林摇",
      level: "中级",
      desc: "肩膀大幅抖动，手臂松散甩动，全身松弛地跟随节奏震动，充满派对氛围。",
      tips: ["肩膀快速前后抖动", "手臂完全放松像面条", "膝盖配合上下律动", "越放松效果越好"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M60 40 Q48 42 42 50 Q38 58 35 65" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M60 40 Q72 38 78 45 Q84 52 88 60" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="56" y1="35" x2="53" y2="32" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="64" y1="35" x2="67" y2="32" stroke="#f5e642" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "harlem shake dance tutorial original"
    },
    {
      name: "Prep",
      nameZh: "预备步",
      level: "初级",
      desc: "双臂交叉于胸前，重心交替左右转移，简单但极具节奏表现力的基础动作。",
      tips: ["手臂在胸前交叉", "重心左右交替转移", "交叉时配合下沉", "加入转体增加变化"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="45" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="50" x2="70" y2="58" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="42" x2="75" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="50" x2="50" y2="58" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="48" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="105" x2="45" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="72" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="105" x2="75" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "hip hop prep step tutorial"
    },
    {
      name: "Smurf",
      nameZh: "蓝精灵",
      level: "中级",
      desc: "双膝外开下蹲，手臂上举欢快摆动，充满活力和派对感的经典动作。",
      tips: ["膝盖向外打开下蹲", "手臂上举左右摆动", "保持欢快的表情", "下蹲幅度配合节奏"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="20" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="30" x2="60" y2="75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="38" x2="45" y2="30" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="30" x2="38" y2="18" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="38" x2="75" y2="30" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="30" x2="82" y2="18" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="42" y2="95" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="95" x2="35" y2="120" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="75" x2="78" y2="95" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="78" y1="95" x2="85" y2="120" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "smurf dance move tutorial hip hop"
    },
    {
      name: "Reject",
      nameZh: "拒绝步",
      level: "中级",
      desc: "一腿踢出同时身体后仰，手臂向后甩，像在推拒什么东西，充满态度感。",
      tips: ["踢腿和后仰同时发生", "手臂向后自然甩开", "重心在支撑腿上稳住", "表情配合像在说不"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65" cy="22" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M65 32 Q68 50 66 75" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <line x1="65" y1="42" x2="82" y2="50" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="82" y1="50" x2="92" y2="58" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="65" y1="42" x2="80" y2="38" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="38" x2="90" y2="32" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="66" y1="75" x2="55" y2="105" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="105" x2="52" y2="130" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="66" y1="75" x2="45" y2="85" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="85" x2="30" y2="80" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "reject dance move tutorial hip hop"
    },
    {
      name: "Toe Stand",
      nameZh: "脚尖站立",
      level: "高级",
      desc: "单脚踮起保持平衡，手臂伸展维持姿态，考验核心力量和身体控制。",
      tips: ["核心收紧保持稳定", "视线固定一个点", "手臂展开帮助平衡", "先双脚练习再单脚"],
      svg: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="15" r="10" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="25" x2="60" y2="72" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="38" x2="35" y2="32" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="32" x2="20" y2="28" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="38" x2="85" y2="32" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="85" y1="32" x2="100" y2="28" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="72" x2="60" y2="120" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="120" x2="60" y2="132" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="60" cy="134" r="3" stroke="#f5e642" stroke-width="2" stroke-linecap="round"/>
        <line x1="60" y1="80" x2="75" y2="88" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="88" x2="78" y2="80" stroke="#f5e642" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      youtubeQuery: "toe stand dance balance tutorial"
    }
  ]
};

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
  cardsContainer.innerHTML = '';

  moves.forEach((move, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-svg">${move.svg}</div>
        <div class="card-info">
          <div class="card-name">${move.name}</div>
          <div class="card-name-zh">${move.nameZh}</div>
          <span class="card-level">${move.level}</span>
        </div>
      </div>
      <p class="card-desc">${move.desc}</p>
      <div class="card-details">
        <ul class="card-tips">
          ${move.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
        <a class="card-bili" href="${isMobile ? `bilibili://search?keyword=${encodeURIComponent(move.youtubeQuery)}` : `https://search.bilibili.com/all?keyword=${encodeURIComponent(move.youtubeQuery)}`}" ${isMobile ? '' : 'target="_blank" rel="noopener noreferrer"'} data-keyword="${encodeURIComponent(move.youtubeQuery)}">
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

// === Initialize ===
renderCards(currentStyle);
