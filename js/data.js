// ============================================================
// 甄嬛传人格测试 - 数据文件
// 包含人格类型、测试题目、维度定义等核心数据
// ============================================================

// ============================================================
// 人格类型数据（13种）
// ============================================================
const PERSONALITIES = [
  {
    id: 'zhenhuan',
    name: '甄嬛型',
    role: '甄嬛',
    title: '聪慧坚韧的宫廷智者',
    image: 'characters/zhenhuan.png',
    keywords: [
      '聪慧',
      '坚韧',
      '隐忍',
      '谋略',
      '成长型'
    ],
    analysis: '你拥有甄嬛式的智慧与韧性。初入宫廷时天真烂漫，经历风雨后逐渐成长为深谋远虑的宫廷智者。你善于在逆境中寻找机会，懂得审时度势，能够在复杂的环境中保护自己并最终达成目标。你的成长轨迹证明了"不经一番寒彻骨，怎得梅花扑鼻香"。',
    characterAnalysis: '甄嬛从天真少女成长为太后，经历了从单纯到深沉的蜕变。她既有善良温柔的一面，也有果断狠辣的一面。在权力斗争中，她学会了利用规则、借力打力，最终成为后宫最大的赢家。这与你在生活中展现出的适应能力和成长潜力高度契合。',
    shareText: '我测出了【甄嬛型人格】——聪慧坚韧的宫廷智者。不经一番寒彻骨，怎得梅花扑鼻香。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 4,
      emotion: 3,
      social: 4,
      stress: 5,
      moral: 3
    }
  },
  {
    id: 'huafei',
    name: '华妃型',
    role: '华妃',
    title: '骄傲热烈的宫廷玫瑰',
    image: 'characters/huafei.png',
    keywords: [
      '骄傲',
      '热烈',
      '直率',
      '专情',
      '悲剧美'
    ],
    analysis: '你拥有华妃式的骄傲与热烈。你敢爱敢恨，从不掩饰自己的情感与野心。你的骄傲源于真实的实力与家世，你的热烈源于对爱情的执着追求。虽然有时过于直率会带来麻烦，但你的真诚与热情也让你成为人群中最耀眼的存在。',
    characterAnalysis: '华妃年世兰是后宫中最骄傲的存在，她的骄傲源于年家的权势和皇帝的宠爱。她爱得热烈，恨得彻底，从不屑于玩弄心机。她的悲剧在于过于依赖外在的权力和爱情，当这些失去时，她选择了以死明志。这提醒你在追求目标时也要保持内心的独立。',
    shareText: '我测出了【华妃型人格】——骄傲热烈的宫廷玫瑰。贱人就是矫情，但本宫就是喜欢这样活着。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 5,
      emotion: 5,
      social: 2,
      stress: 2,
      moral: 2
    }
  },
  {
    id: 'shenmeizhuang',
    name: '沈眉庄型',
    role: '沈眉庄',
    title: '温婉坚定的清流君子',
    image: 'characters/shenmeizhuang.png',
    keywords: [
      '温婉',
      '坚定',
      '清高',
      '重情',
      '傲骨'
    ],
    analysis: '你拥有沈眉庄式的温婉与坚定。你外表温和大方，内心却有着不可动摇的原则与傲骨。你看重真情，不屑于虚伪的社交游戏。当被伤害后，你选择保持距离而非报复，这种清高的姿态让你在复杂的环境中保持着内心的纯净。',
    characterAnalysis: '沈眉庄是后宫中难得的清流，她出身名门，知书达理，却不愿随波逐流。被皇帝误解后，她选择了冷眼旁观，将真心给了值得的人。她与甄嬛的友情是后宫中最真挚的情感之一。她的故事告诉我们，保持本心比获得权力更重要。',
    shareText: '我测出了【沈眉庄型人格】——温婉坚定的清流君子。宁可枝头抱香死，何曾吹落北风中。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 2,
      emotion: 4,
      social: 3,
      stress: 3,
      moral: 5
    }
  },
  {
    id: 'anlingrong',
    name: '安陵容型',
    role: '安陵容',
    title: '敏感多疑的悲剧灵魂',
    image: 'characters/anlingrong.png',
    keywords: [
      '敏感',
      '自卑',
      '多疑',
      '才华',
      '悲剧'
    ],
    analysis: '你拥有安陵容式的敏感与才华。你内心细腻，善于观察，有着不输他人的才华与能力。然而，过度的敏感和自卑让你容易陷入自我怀疑，对他人的善意也常产生误解。学会接纳自己、信任他人，是你人生的重要课题。',
    characterAnalysis: '安陵容出身卑微，却有着不输他人的才华。她的悲剧源于深深的自卑和对他人善意的误解。她本可以与甄嬛成为挚友，却因多疑和嫉妒走向了对立面。她的故事警示我们，自卑和猜疑会毁掉最美好的可能性。',
    shareText: '我测出了【安陵容型人格】——敏感多疑的悲剧灵魂。人生若只如初见，何事秋风悲画扇。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 3,
      emotion: 2,
      social: 2,
      stress: 2,
      moral: 2
    }
  },
  {
    id: 'huanghou',
    name: '皇后型',
    role: '皇后',
    title: '深沉阴郁的幕后执棋人',
    image: 'characters/huanghou.png',
    keywords: [
      '深沉',
      '阴郁',
      '心机',
      '隐忍',
      '掌控欲'
    ],
    analysis: '你拥有皇后式的深沉与心机。你善于隐藏真实想法，在幕后运筹帷幄。你有着强烈的掌控欲，渴望一切都在自己的计划之中。你的隐忍和耐心让你能够等待最佳时机，但过于算计也可能让你失去人性中温暖的部分。',
    characterAnalysis: '皇后宜修是后宫最深沉的谋略家，她表面端庄贤德，实则心狠手辣。她的一生都在为保住皇后之位而算计，最终却因过于狠毒而失去一切。她的悲剧在于将权力视为一切，却忽略了真正重要的情感与人性。',
    shareText: '我测出了【皇后型人格】——深沉阴郁的幕后执棋人。臣妾做不到啊！你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 5,
      emotion: 1,
      social: 3,
      stress: 4,
      moral: 1
    }
  },
  {
    id: 'jingfei',
    name: '敬妃型',
    role: '敬妃',
    title: '沉稳持重的中流砥柱',
    image: 'characters/jingfei.png',
    keywords: [
      '沉稳',
      '持重',
      '忠诚',
      '靠谱',
      '知心'
    ],
    analysis: '你拥有敬妃式的沉稳与可靠。你不张扬，却总能在关键时刻给予最坚实的支持。你看似低调，内心却有着清晰的判断力。你忠诚于自己的选择，无论是对待朋友还是工作，都秉持着认真负责的态度。你是团队中最值得信赖的中流砥柱。',
    characterAnalysis: '敬妃是后宫中最低调却最可靠的存在。她不争不抢，却在甄嬛最需要帮助时挺身而出。她的智慧在于知道何时该进、何时该退。她的忠诚和稳重让她在波谲云诡的后宫中始终立于不败之地。',
    shareText: '我测出了【敬妃型人格】——沉稳持重的中流砥柱。不争不抢，却始终屹立不倒。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 2,
      emotion: 3,
      social: 4,
      stress: 4,
      moral: 4
    }
  },
  {
    id: 'guojunwang',
    name: '果郡王型',
    role: '果郡王',
    title: '洒脱不羁的江湖浪子',
    image: 'characters/guojunwang.png',
    keywords: [
      '洒脱',
      '不羁',
      '深情',
      '浪漫',
      '才情'
    ],
    analysis: '你拥有果郡王式的洒脱与深情。你追求自由，不愿被世俗束缚。你有着丰富的才情和浪漫的情怀，对爱情执着而专一。你的洒脱让人羡慕，但你的深情也让你容易受伤。你的魅力在于那份不受拘束的真性情。',
    characterAnalysis: '果郡王允礼是皇室中的异类，他不恋权势，只求真心。他的深情和浪漫令甄嬛为之动容，却也成为两人悲剧的根源。他的故事告诉我们，在权力至上的世界中，纯粹的情感往往是最奢侈的。',
    shareText: '我测出了【果郡王型人格】——洒脱不羁的江湖浪子。愿得一心人，白首不相离。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 1,
      emotion: 5,
      social: 4,
      stress: 3,
      moral: 3
    }
  },
  {
    id: 'yelanyi',
    name: '叶澜依型',
    role: '叶澜依',
    title: '冷傲刚烈的自由之魂',
    image: 'characters/yelanyi.png',
    keywords: [
      '冷傲',
      '刚烈',
      '自由',
      '执着',
      '真实'
    ],
    analysis: '你拥有叶澜依式的冷傲与真实。你不屑于虚与委蛇，做真实的自己是你的信条。你的冷傲是保护色，内心却有着不为人知的温柔。你对自己的选择无比执着，哪怕付出生命的代价也在所不惜。你的刚烈让人敬畏，你的真实让人动容。',
    characterAnalysis: '叶澜依是后宫中最为特立独行的存在。她出身驯马女，却比任何嫔妃都更加骄傲。她不争宠、不顺从，只为自己心中的信念而活。为了为果郡王报仇，她可以潜伏多年，最终以身殉情。她的刚烈与忠诚让人肃然起敬。',
    shareText: '我测出了【叶澜依型人格】——冷傲刚烈的自由之魂。我宁愿站着死，决不跪着生。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 2,
      emotion: 4,
      social: 2,
      stress: 5,
      moral: 4
    }
  },
  {
    id: 'huanbi',
    name: '浣碧型',
    role: '浣碧',
    title: '执着倔强的痴情女子',
    image: 'characters/huanbi.png',
    keywords: [
      '执着',
      '倔强',
      '痴情',
      '自尊',
      '好强'
    ],
    analysis: '你拥有浣碧式的执着与倔强。你有着强烈的自尊心，不愿被人轻视。你对认定的事情无比执着，为了实现目标可以忍受常人难以想象的艰辛。你对感情专一而痴情，但也因过强的好胜心而容易钻牛角尖。',
    characterAnalysis: '浣碧是甄嬛的贴身侍女，也是她同父异母的妹妹。她一生都在与自己的身份抗争，渴望得到认可。她对果郡王的痴情让她甘愿付出一切，最终为爱殉情。她的倔强和执着令人心疼，也让人看到了一个普通女子的不凡勇气。',
    shareText: '我测出了【浣碧型人格】——执着倔强的痴情女子。纵使身份卑微，也要活得有骨气。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 3,
      emotion: 4,
      social: 2,
      stress: 3,
      moral: 3
    }
  },
  {
    id: 'cuijinxi',
    name: '崔槿汐型',
    role: '崔槿汐',
    title: '通透睿智的知心伯乐',
    image: 'characters/cuijinxi.png',
    keywords: [
      '通透',
      '睿智',
      '知心',
      '慈爱',
      '沉稳'
    ],
    analysis: '你拥有崔槿汐式的通透与睿智。你阅历丰富，看人看事都有着超越常人的洞察力。你是出色的倾听者和指导者，总能在他人迷茫时给出最中肯的建议。你的沉稳和慈爱让人感到安心，你是很多人心中的定海神针。',
    characterAnalysis: '崔槿汐是甄嬛身边最得力的掌事宫女，也是她最信任的军师。她看透后宫冷暖，却依然保持善良的本心。她用自己的智慧和经验帮助甄嬛一步步走向成功，却从不居功自傲。她是甄嬛成长路上最重要的引路人之一。',
    shareText: '我测出了【崔槿汐型人格】——通透睿智的知心伯乐。看透世事，依然温柔以待。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 2,
      emotion: 3,
      social: 5,
      stress: 4,
      moral: 5
    }
  },
  {
    id: 'duanfei',
    name: '端妃型',
    role: '端妃',
    title: '隐忍坚韧的冷面深心',
    image: 'characters/duanfei.png',
    keywords: [
      '隐忍',
      '坚韧',
      '冷静',
      '隐晦',
      '抱负'
    ],
    analysis: '你拥有端妃式的隐忍与坚韧。你不轻易表露情感，表面上冷静自持，内心却有着深藏的抱负与追求。你有着极强的忍耐力，能够为了长远目标而忍受当下的困境。你的冷静和理性是你的优势，但也要注意适当表达真实情感。',
    characterAnalysis: '端妃齐月宾是宫中资历最深的嫔妃之一，却因华妃的迫害而长期隐忍。她表面与世无争，实则深藏不露。她等待了多年，最终在关键时刻选择了与甄嬛联手扳倒华妃。她的隐忍和坚韧展现了另一种生存智慧。',
    shareText: '我测出了【端妃型人格】——隐忍坚韧的冷面深心。深藏不露，只待时机。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 4,
      emotion: 1,
      social: 2,
      stress: 5,
      moral: 3
    }
  },
  {
    id: 'wenshichu',
    name: '温实初型',
    role: '温实初',
    title: '温柔专一的守护骑士',
    image: 'characters/wenshichu.png',
    keywords: [
      '温柔',
      '专一',
      '默默',
      '付出',
      '守护'
    ],
    analysis: '你拥有温实初式的温柔与专一。你不善言辞，却用行动默默表达着关心。你对在乎的人无比忠诚，愿意为对方付出一切。你的温柔不是软弱，而是一种强大的守护力量。你的专一和默默付出终将被值得的人看见。',
    characterAnalysis: '温实初是太医院的太医，也是甄嬛的青梅竹马。他一生默默守护着甄嬛，不求回报。他的温柔和专一是乱世中最珍贵的品质。他与沈眉庄的感情线展现了默默付出的人终会收获属于自己的幸福。',
    shareText: '我测出了【温实初型人格】——温柔专一的守护骑士。默默守护，是最长情的告白。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 1,
      emotion: 4,
      social: 3,
      stress: 3,
      moral: 5
    }
  },
  {
    id: 'yongzheng',
    name: '雍正型',
    role: '雍正',
    title: '冷静多谋的孤家寡人',
    image: 'characters/yongzheng.png',
    keywords: [
      '冷静',
      '多谋',
      '孤独',
      '威严',
      '猜忌'
    ],
    analysis: '你拥有雍正式的冷静与威严。你天生具有领导者的气质，冷静理性，善于运筹帷幄。你要求完美，对自己和他人都有着极高的标准。然而，高处不胜寒，你的孤独源于无人能真正理解你的内心。你有时过于猜忌，需要学会信任他人。',
    characterAnalysis: '雍正皇帝是后宫中至高无上的存在，也是所有悲剧的根源。他冷静多谋，却因猜忌而伤害了最爱的人。他的孤独是帝王之家的宿命，他的威严之下隐藏着深深的脆弱。他的故事警示我们，权力虽然诱人，但真正珍贵的是人与人之间的信任与真情。',
    shareText: '我测出了【雍正型人格】——冷静多谋的孤家寡人。朕是天子，却也是个孤独的人。你也来测测看你是《甄嬛传》里的谁？',
    weights: {
      power: 5,
      emotion: 1,
      social: 2,
      stress: 4,
      moral: 2
    }
  }
];

// ============================================================
// 测试题目数据（48题，5个维度）
// ============================================================
const QUESTIONS = [
  {
    id: 0,
    dimension: 'power',
    question: '在职场中，你更倾向于哪种处事方式？',
    options: [
      {
        text: '主动出击，掌控全局',
        weights: {
          huanghou: 2,
          huafei: 2,
          zhenhuan: 1,
          yongzheng: 2,
          duanfei: 1
        }
      },
      {
        text: '审时度势，随机应变',
        weights: {
          zhenhuan: 1,
          jingfei: 1,
          cuijinxi: 1
        }
      },
      {
        text: '安分守己，做好本分',
        weights: {
          shenmeizhuang: 2,
          guojunwang: 2,
          wenshichu: 2,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 1,
    dimension: 'power',
    question: '面对竞争对手，你通常会怎么做？',
    options: [
      {
        text: '正面较量，凭实力取胜',
        weights: {
          huafei: 2,
          yongzheng: 2,
          zhenhuan: 1,
          huanghou: 1
        }
      },
      {
        text: '暗中布局，借力打力',
        weights: {
          huanghou: 2,
          zhenhuan: 2,
          duanfei: 1,
          jingfei: 1
        }
      },
      {
        text: '避其锋芒，另辟蹊径',
        weights: {
          shenmeizhuang: 1,
          guojunwang: 1,
          wenshichu: 2,
          cuijinxi: 1
        }
      }
    ]
  },
  {
    id: 2,
    dimension: 'power',
    question: '当你有一个远大目标时，你会？',
    options: [
      {
        text: '制定详细计划，步步为营',
        weights: {
          zhenhuan: 2,
          yongzheng: 2,
          huanghou: 1,
          jingfei: 1
        }
      },
      {
        text: '全力以赴，不达目的不罢休',
        weights: {
          huafei: 2,
          yelanyi: 2,
          huanbi: 1,
          duanfei: 1
        }
      },
      {
        text: '顺其自然，尽力而为',
        weights: {
          shenmeizhuang: 2,
          guojunwang: 2,
          wenshichu: 2
        }
      }
    ]
  },
  {
    id: 3,
    dimension: 'power',
    question: '在团队合作中，你更喜欢扮演什么角色？',
    options: [
      {
        text: '领导者，把控方向和节奏',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          zhenhuan: 1,
          huafei: 1
        }
      },
      {
        text: '执行者，高效完成任务',
        weights: {
          jingfei: 2,
          wenshichu: 1,
          huanbi: 1,
          cuijinxi: 1
        }
      },
      {
        text: '协作者，维护团队和谐',
        weights: {
          shenmeizhuang: 2,
          guojunwang: 1,
          anlingrong: 1,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 4,
    dimension: 'power',
    question: '遇到不公平的待遇，你的反应是？',
    options: [
      {
        text: '当场反击，维护自己的权益',
        weights: {
          huafei: 3,
          yelanyi: 2,
          zhenhuan: 1
        }
      },
      {
        text: '默默记下，日后找机会讨回',
        weights: {
          huanghou: 2,
          duanfei: 2,
          anlingrong: 1,
          zhenhuan: 1
        }
      },
      {
        text: '看淡得失，保持内心平和',
        weights: {
          shenmeizhuang: 2,
          cuijinxi: 2,
          wenshichu: 1,
          jingfei: 1
        }
      }
    ]
  },
  {
    id: 5,
    dimension: 'power',
    question: '你认为在复杂环境中生存，最重要的是？',
    options: [
      {
        text: '实力和权谋',
        weights: {
          huanghou: 2,
          huafei: 2,
          yongzheng: 2,
          zhenhuan: 1
        }
      },
      {
        text: '人脉和智慧',
        weights: {
          zhenhuan: 2,
          cuijinxi: 2,
          jingfei: 1,
          guojunwang: 1
        }
      },
      {
        text: '坚守本心，不随波逐流',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          yelanyi: 1,
          huanbi: 1
        }
      }
    ]
  },
  {
    id: 6,
    dimension: 'power',
    question: '对于"规则"，你的态度是？',
    options: [
      {
        text: '规则由强者制定，我愿成为制定者',
        weights: {
          yongzheng: 3,
          huanghou: 2,
          huafei: 1,
          zhenhuan: 1
        }
      },
      {
        text: '在规则内灵活游走',
        weights: {
          zhenhuan: 2,
          jingfei: 1,
          cuijinxi: 1,
          guojunwang: 1
        }
      },
      {
        text: '尊重规则，不越雷池',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          anlingrong: 1,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 7,
    dimension: 'power',
    question: '当你的权威受到挑战时，你会？',
    options: [
      {
        text: '强势镇压，树立威信',
        weights: {
          huafei: 2,
          huanghou: 2,
          yongzheng: 2,
          zhenhuan: 1
        }
      },
      {
        text: '冷静应对，用实力说话',
        weights: {
          zhenhuan: 2,
          duanfei: 2,
          jingfei: 1,
          cuijinxi: 1
        }
      },
      {
        text: '反思自身，有则改之',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          anlingrong: 1,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 8,
    dimension: 'power',
    question: '面对重要的抉择，你更看重什么？',
    options: [
      {
        text: '最终的利益得失',
        weights: {
          huanghou: 2,
          huafei: 2,
          yongzheng: 2,
          zhenhuan: 1
        }
      },
      {
        text: '多方面的平衡与长远影响',
        weights: {
          zhenhuan: 2,
          jingfei: 1,
          cuijinxi: 2,
          duanfei: 1
        }
      },
      {
        text: '内心的价值观和道德感',
        weights: {
          shenmeizhuang: 2,
          guojunwang: 1,
          wenshichu: 2,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 9,
    dimension: 'power',
    question: '你如何看待"权力"？',
    options: [
      {
        text: '权力是实现抱负的工具，值得追求',
        weights: {
          yongzheng: 2,
          huanghou: 2,
          huafei: 2,
          zhenhuan: 1
        }
      },
      {
        text: '权力需要谨慎使用，适可而止',
        weights: {
          zhenhuan: 1,
          jingfei: 2,
          cuijinxi: 2,
          duanfei: 1
        }
      },
      {
        text: '身外之物，不如真情可贵',
        weights: {
          guojunwang: 2,
          shenmeizhuang: 2,
          wenshichu: 2,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 10,
    dimension: 'emotion',
    question: '在感情中，你更倾向于？',
    options: [
      {
        text: '热烈投入，毫无保留',
        weights: {
          huafei: 2,
          guojunwang: 2,
          zhenhuan: 1,
          huanbi: 1
        }
      },
      {
        text: '含蓄内敛，细水长流',
        weights: {
          shenmeizhuang: 1,
          yelanyi: 1,
          wenshichu: 1
        }
      },
      {
        text: '理性克制，保持距离',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          duanfei: 1
        }
      }
    ]
  },
  {
    id: 11,
    dimension: 'emotion',
    question: '当你爱上一个人时，你会？',
    options: [
      {
        text: '勇敢表达，主动追求',
        weights: {
          huafei: 2,
          guojunwang: 2,
          huanbi: 1,
          zhenhuan: 1
        }
      },
      {
        text: '默默守护，用行动证明',
        weights: {
          wenshichu: 2,
          shenmeizhuang: 1,
          yelanyi: 1,
          anlingrong: 1
        }
      },
      {
        text: '深藏心底，不敢表露',
        weights: {
          anlingrong: 2,
          huanghou: 1,
          duanfei: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 12,
    dimension: 'emotion',
    question: '面对感情的挫折，你的态度是？',
    options: [
      {
        text: '痛苦万分，但绝不后悔',
        weights: {
          huafei: 2,
          huanbi: 2,
          guojunwang: 1,
          yelanyi: 1
        }
      },
      {
        text: '自我疗伤，慢慢放下',
        weights: {
          zhenhuan: 1,
          shenmeizhuang: 1,
          wenshichu: 1,
          cuijinxi: 1
        }
      },
      {
        text: '冷静分析，吸取教训',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          duanfei: 1,
          jingfei: 1
        }
      }
    ]
  },
  {
    id: 13,
    dimension: 'emotion',
    question: '你认为爱情中最重要的是？',
    options: [
      {
        text: '真诚和专一',
        weights: {
          guojunwang: 2,
          wenshichu: 2,
          shenmeizhuang: 1,
          huanbi: 1
        }
      },
      {
        text: '理解和支持',
        weights: {
          zhenhuan: 2,
          cuijinxi: 2,
          jingfei: 1,
          yelanyi: 1
        }
      },
      {
        text: '激情和浪漫',
        weights: {
          huafei: 2,
          anlingrong: 1,
          guojunwang: 1,
          huanbi: 1
        }
      }
    ]
  },
  {
    id: 14,
    dimension: 'emotion',
    question: '你更倾向于哪种情感表达方式？',
    options: [
      {
        text: '直白热烈，让对方清楚知道',
        weights: {
          huafei: 2,
          guojunwang: 2,
          huanbi: 1,
          zhenhuan: 1
        }
      },
      {
        text: '温柔细腻，润物细无声',
        weights: {
          shenmeizhuang: 1,
          wenshichu: 2,
          cuijinxi: 1,
          yelanyi: 1
        }
      },
      {
        text: '不善于表达，用行动代替',
        weights: {
          anlingrong: 2,
          yongzheng: 1,
          duanfei: 1,
          jingfei: 1
        }
      }
    ]
  },
  {
    id: 15,
    dimension: 'emotion',
    question: '当你的付出得不到回应时，你会？',
    options: [
      {
        text: '继续坚持，相信终有回报',
        weights: {
          huanbi: 2,
          wenshichu: 2,
          guojunwang: 1,
          huafei: 1
        }
      },
      {
        text: '适时放手，保护自己',
        weights: {
          zhenhuan: 2,
          shenmeizhuang: 1,
          yelanyi: 1,
          cuijinxi: 1
        }
      },
      {
        text: '心怀怨恨，记在心里',
        weights: {
          anlingrong: 2,
          huanghou: 1,
          duanfei: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 16,
    dimension: 'emotion',
    question: '你如何看待"痴情"？',
    options: [
      {
        text: '痴情是爱情最美的样子',
        weights: {
          guojunwang: 2,
          huanbi: 2,
          huafei: 2,
          wenshichu: 1
        }
      },
      {
        text: '适度的痴情值得赞赏',
        weights: {
          zhenhuan: 1,
          shenmeizhuang: 1,
          yelanyi: 1,
          cuijinxi: 1
        }
      },
      {
        text: '痴情容易让人失去自我',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          duanfei: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 17,
    dimension: 'emotion',
    question: '在一段关系中，你更看重？',
    options: [
      {
        text: '彼此的心意和感情',
        weights: {
          guojunwang: 2,
          wenshichu: 2,
          huanbi: 1,
          huafei: 1
        }
      },
      {
        text: '互相尊重和理解',
        weights: {
          shenmeizhuang: 2,
          yelanyi: 1,
          cuijinxi: 1,
          zhenhuan: 1
        }
      },
      {
        text: '现实的考量和匹配度',
        weights: {
          huanghou: 2,
          yongzheng: 1,
          duanfei: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 18,
    dimension: 'emotion',
    question: '面对背叛，你的反应是？',
    options: [
      {
        text: '以牙还牙，绝不原谅',
        weights: {
          huafei: 2,
          huanbi: 2,
          huanghou: 1,
          yelanyi: 1
        }
      },
      {
        text: '内心受伤，但选择远离',
        weights: {
          shenmeizhuang: 2,
          zhenhuan: 1,
          wenshichu: 1,
          cuijinxi: 1
        }
      },
      {
        text: '默默承受，独自疗伤',
        weights: {
          anlingrong: 2,
          duanfei: 1,
          jingfei: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 19,
    dimension: 'emotion',
    question: '你相信"一见钟情"吗？',
    options: [
      {
        text: '相信，爱情就该是怦然心动',
        weights: {
          guojunwang: 2,
          huafei: 2,
          huanbi: 1,
          zhenhuan: 1
        }
      },
      {
        text: '半信半疑，日久生情更可靠',
        weights: {
          shenmeizhuang: 1,
          wenshichu: 1,
          cuijinxi: 1,
          jingfei: 1
        }
      },
      {
        text: '不相信，理性比感觉更重要',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          duanfei: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 20,
    dimension: 'social',
    question: '在社交场合中，你通常？',
    options: [
      {
        text: '积极主动，成为焦点',
        weights: {
          huafei: 2,
          zhenhuan: 1,
          guojunwang: 1
        }
      },
      {
        text: '自然得体，结交合适的人',
        weights: {
          jingfei: 2,
          cuijinxi: 2,
          shenmeizhuang: 1
        }
      },
      {
        text: '尽量低调，避免引人注目',
        weights: {
          anlingrong: 2,
          huanbi: 1,
          duanfei: 1
        }
      }
    ]
  },
  {
    id: 21,
    dimension: 'social',
    question: '你认为朋友之间最重要的是？',
    options: [
      {
        text: '真诚坦率，无话不谈',
        weights: {
          guojunwang: 2,
          huafei: 1,
          yelanyi: 1,
          shenmeizhuang: 1
        }
      },
      {
        text: '互相扶持，共同成长',
        weights: {
          zhenhuan: 2,
          jingfei: 1,
          cuijinxi: 1,
          wenshichu: 1
        }
      },
      {
        text: '彼此尊重，保持适当距离',
        weights: {
          shenmeizhuang: 1,
          anlingrong: 1,
          duanfei: 1,
          huanghou: 1
        }
      }
    ]
  },
  {
    id: 22,
    dimension: 'social',
    question: '遇到困难时，你会？',
    options: [
      {
        text: '主动寻求朋友的帮助',
        weights: {
          huafei: 1,
          guojunwang: 1,
          shenmeizhuang: 1,
          huanbi: 1
        }
      },
      {
        text: '向信任的人倾诉商量',
        weights: {
          zhenhuan: 2,
          jingfei: 2,
          cuijinxi: 2
        }
      },
      {
        text: '自己默默扛着，不愿麻烦别人',
        weights: {
          anlingrong: 2,
          duanfei: 2,
          yongzheng: 2
        }
      }
    ]
  },
  {
    id: 23,
    dimension: 'social',
    question: '你如何看待"人情世故"？',
    options: [
      {
        text: '精通并善于利用',
        weights: {
          huanghou: 2,
          cuijinxi: 2,
          zhenhuan: 1,
          jingfei: 1
        }
      },
      {
        text: '懂但不太愿意迎合',
        weights: {
          shenmeizhuang: 2,
          guojunwang: 2,
          yelanyi: 1,
          huanbi: 1
        }
      },
      {
        text: '不太擅长，觉得复杂',
        weights: {
          anlingrong: 2,
          wenshichu: 2,
          duanfei: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 24,
    dimension: 'social',
    question: '你更享受哪种社交方式？',
    options: [
      {
        text: '热闹的聚会，认识新朋友',
        weights: {
          huafei: 2,
          guojunwang: 2,
          zhenhuan: 1
        }
      },
      {
        text: '三五好友的小聚',
        weights: {
          shenmeizhuang: 1,
          jingfei: 1,
          cuijinxi: 1,
          wenshichu: 1
        }
      },
      {
        text: '独处或与一两人深交',
        weights: {
          anlingrong: 2,
          yelanyi: 2,
          duanfei: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 25,
    dimension: 'social',
    question: '当朋友需要帮助时，你会？',
    options: [
      {
        text: '毫不犹豫，全力相助',
        weights: {
          guojunwang: 2,
          wenshichu: 2,
          jingfei: 1,
          huanbi: 1
        }
      },
      {
        text: '量力而行，理性帮助',
        weights: {
          cuijinxi: 2,
          zhenhuan: 1,
          shenmeizhuang: 1,
          yelanyi: 1
        }
      },
      {
        text: '视关系亲疏而定',
        weights: {
          huanghou: 2,
          huafei: 1,
          anlingrong: 1,
          duanfei: 1
        }
      }
    ]
  },
  {
    id: 26,
    dimension: 'social',
    question: '在群体中，你通常扮演什么角色？',
    options: [
      {
        text: '活跃气氛的带动者',
        weights: {
          huafei: 2,
          guojunwang: 2,
          zhenhuan: 1
        }
      },
      {
        text: '可靠的协调者和支持者',
        weights: {
          jingfei: 2,
          cuijinxi: 2,
          shenmeizhuang: 1
        }
      },
      {
        text: '安静的观察者',
        weights: {
          anlingrong: 2,
          duanfei: 1,
          yongzheng: 1,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 27,
    dimension: 'social',
    question: '你如何看待"背叛"？',
    options: [
      {
        text: '绝不原谅，视为仇敌',
        weights: {
          huafei: 2,
          huanbi: 2,
          huanghou: 1,
          yelanyi: 1
        }
      },
      {
        text: '伤心失望，但会放下',
        weights: {
          zhenhuan: 1,
          shenmeizhuang: 1,
          cuijinxi: 1,
          jingfei: 1
        }
      },
      {
        text: '早有防备，不足为奇',
        weights: {
          huanghou: 1,
          yongzheng: 2,
          duanfei: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 28,
    dimension: 'social',
    question: '选择朋友时，你更看重？',
    options: [
      {
        text: '性格相投，相处愉快',
        weights: {
          guojunwang: 2,
          huafei: 1,
          yelanyi: 1,
          shenmeizhuang: 1
        }
      },
      {
        text: '人品可靠，值得信赖',
        weights: {
          jingfei: 2,
          wenshichu: 2,
          cuijinxi: 1,
          zhenhuan: 1
        }
      },
      {
        text: '志同道合，有共同目标',
        weights: {
          huanghou: 1,
          yongzheng: 1,
          huanbi: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 29,
    dimension: 'stress',
    question: '面对巨大的压力，你的反应是？',
    options: [
      {
        text: '迎难而上，越压越强',
        weights: {
          zhenhuan: 2,
          yelanyi: 2,
          duanfei: 1
        }
      },
      {
        text: '保持镇定，按部就班',
        weights: {
          jingfei: 1,
          cuijinxi: 1,
          huanghou: 1,
          yongzheng: 1
        }
      },
      {
        text: '焦虑不安，容易崩溃',
        weights: {
          anlingrong: 2,
          huanbi: 1,
          shenmeizhuang: 1
        }
      }
    ]
  },
  {
    id: 30,
    dimension: 'stress',
    question: '当你处于逆境时，你会？',
    options: [
      {
        text: '寻找转机，绝地反击',
        weights: {
          zhenhuan: 2,
          yelanyi: 2,
          huanghou: 1,
          duanfei: 1
        }
      },
      {
        text: '稳住阵脚，等待时机',
        weights: {
          jingfei: 2,
          cuijinxi: 1,
          yongzheng: 1,
          shenmeizhuang: 1
        }
      },
      {
        text: '感到绝望，容易放弃',
        weights: {
          anlingrong: 2,
          huanbi: 1,
          huafei: 1
        }
      }
    ]
  },
  {
    id: 31,
    dimension: 'stress',
    question: '你如何看待人生的起起落落？',
    options: [
      {
        text: '起伏是常态，泰然处之',
        weights: {
          zhenhuan: 2,
          cuijinxi: 2,
          jingfei: 1,
          yelanyi: 1
        }
      },
      {
        text: '能够接受，但会尽力避免低谷',
        weights: {
          shenmeizhuang: 1,
          duanfei: 1,
          yongzheng: 1,
          huanghou: 1
        }
      },
      {
        text: '情绪波动大，很难坦然面对',
        weights: {
          anlingrong: 2,
          huanbi: 1,
          huafei: 1,
          guojunwang: 1
        }
      }
    ]
  },
  {
    id: 32,
    dimension: 'stress',
    question: '遇到挫折时，你通常会？',
    options: [
      {
        text: '分析原因，总结经验',
        weights: {
          zhenhuan: 2,
          jingfei: 1,
          cuijinxi: 1,
          yongzheng: 1
        }
      },
      {
        text: '找人倾诉，寻求安慰',
        weights: {
          huafei: 1,
          guojunwang: 1,
          shenmeizhuang: 1,
          wenshichu: 1
        }
      },
      {
        text: '独自消化，不愿提及',
        weights: {
          anlingrong: 2,
          duanfei: 2,
          huanghou: 1,
          yelanyi: 1
        }
      }
    ]
  },
  {
    id: 33,
    dimension: 'stress',
    question: '面对突如其来的变故，你的第一反应是？',
    options: [
      {
        text: '迅速冷静，思考对策',
        weights: {
          zhenhuan: 2,
          yongzheng: 2,
          huanghou: 1,
          duanfei: 1
        }
      },
      {
        text: '寻求帮助，与人商量',
        weights: {
          jingfei: 1,
          cuijinxi: 1,
          shenmeizhuang: 1,
          guojunwang: 1
        }
      },
      {
        text: '惊慌失措，难以应对',
        weights: {
          anlingrong: 2,
          huanbi: 2,
          huafei: 1
        }
      }
    ]
  },
  {
    id: 34,
    dimension: 'stress',
    question: '你更欣赏哪种人生态度？',
    options: [
      {
        text: '永不言弃，拼搏到底',
        weights: {
          yelanyi: 2,
          zhenhuan: 2,
          huafei: 1,
          duanfei: 1
        }
      },
      {
        text: '随遇而安，知足常乐',
        weights: {
          shenmeizhuang: 1,
          guojunwang: 1,
          cuijinxi: 1,
          wenshichu: 1
        }
      },
      {
        text: '步步为营，稳中求胜',
        weights: {
          huanghou: 1,
          yongzheng: 1,
          jingfei: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 35,
    dimension: 'stress',
    question: '当你感到疲惫时，你会？',
    options: [
      {
        text: '咬牙坚持，直到完成目标',
        weights: {
          yelanyi: 2,
          duanfei: 2,
          zhenhuan: 1,
          huanbi: 1
        }
      },
      {
        text: '适当休息，调整状态再继续',
        weights: {
          cuijinxi: 2,
          jingfei: 1,
          shenmeizhuang: 1,
          wenshichu: 1
        }
      },
      {
        text: '容易放弃，需要他人鼓励',
        weights: {
          anlingrong: 2,
          huafei: 1,
          guojunwang: 1
        }
      }
    ]
  },
  {
    id: 36,
    dimension: 'stress',
    question: '你如何看待"忍耐"？',
    options: [
      {
        text: '忍耐是成大事必备的品质',
        weights: {
          zhenhuan: 2,
          duanfei: 2,
          huanghou: 1,
          yongzheng: 1
        }
      },
      {
        text: '适当忍耐有必要',
        weights: {
          jingfei: 1,
          cuijinxi: 1,
          shenmeizhuang: 1,
          wenshichu: 1
        }
      },
      {
        text: '忍无可忍无需再忍',
        weights: {
          huafei: 2,
          yelanyi: 2,
          huanbi: 1,
          guojunwang: 1
        }
      }
    ]
  },
  {
    id: 37,
    dimension: 'stress',
    question: '面对人生的重大打击，你会？',
    options: [
      {
        text: '涅槃重生，变得更加坚强',
        weights: {
          zhenhuan: 2,
          yelanyi: 2,
          duanfei: 1,
          jingfei: 1
        }
      },
      {
        text: '需要很长时间来恢复',
        weights: {
          anlingrong: 2,
          shenmeizhuang: 1,
          wenshichu: 1,
          huanbi: 1
        }
      },
      {
        text: '可能会一蹶不振',
        weights: {
          huafei: 1,
          huanghou: 1,
          guojunwang: 1
        }
      }
    ]
  },
  {
    id: 38,
    dimension: 'stress',
    question: '在逆境中，你觉得什么最重要？',
    options: [
      {
        text: '坚定的信念和意志',
        weights: {
          zhenhuan: 2,
          yelanyi: 2,
          duanfei: 1,
          huanghou: 1
        }
      },
      {
        text: '朋友的支持和帮助',
        weights: {
          jingfei: 1,
          guojunwang: 1,
          wenshichu: 1,
          cuijinxi: 1
        }
      },
      {
        text: '冷静的头脑和策略',
        weights: {
          yongzheng: 2,
          huanghou: 1,
          duanfei: 1,
          zhenhuan: 1
        }
      }
    ]
  },
  {
    id: 39,
    dimension: 'moral',
    question: '你如何看待"为达目的不择手段"？',
    options: [
      {
        text: '坚决反对，手段不正则目标无意义',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          cuijinxi: 2,
          jingfei: 1
        }
      },
      {
        text: '看情况而定，不得已时可以理解',
        weights: {
          zhenhuan: 1,
          yelanyi: 1,
          huanbi: 1,
          guojunwang: 1
        }
      },
      {
        text: '成大事者不拘小节',
        weights: {
          huanghou: 2,
          huafei: 1,
          anlingrong: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 40,
    dimension: 'moral',
    question: '面对利益的诱惑，你会？',
    options: [
      {
        text: '坚守底线，不为所动',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          cuijinxi: 2,
          jingfei: 1
        }
      },
      {
        text: '权衡利弊后谨慎决定',
        weights: {
          zhenhuan: 1,
          yelanyi: 1,
          huanbi: 1,
          huanghou: 1
        }
      },
      {
        text: '难以抗拒，先拿到再说',
        weights: {
          huafei: 1,
          anlingrong: 1,
          yongzheng: 1
        }
      }
    ]
  },
  {
    id: 41,
    dimension: 'moral',
    question: '你认为做人的基本原则是？',
    options: [
      {
        text: '以诚待人，问心无愧',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          jingfei: 1,
          cuijinxi: 1
        }
      },
      {
        text: '人不犯我我不犯人',
        weights: {
          zhenhuan: 1,
          yelanyi: 1,
          huanbi: 1,
          guojunwang: 1
        }
      },
      {
        text: '弱肉强食，适者生存',
        weights: {
          huanghou: 2,
          huafei: 1,
          yongzheng: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 42,
    dimension: 'moral',
    question: '当道德与利益冲突时，你会？',
    options: [
      {
        text: '选择道德，良心更重要',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          cuijinxi: 2,
          jingfei: 1
        }
      },
      {
        text: '尽量寻找两全其美的方案',
        weights: {
          zhenhuan: 2,
          yelanyi: 1,
          huanbi: 1,
          guojunwang: 1
        }
      },
      {
        text: '现实所迫，利益优先',
        weights: {
          huanghou: 2,
          huafei: 1,
          yongzheng: 1,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 43,
    dimension: 'moral',
    question: '你如何看待"善良"？',
    options: [
      {
        text: '善良是最宝贵的品质',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          cuijinxi: 2,
          jingfei: 1
        }
      },
      {
        text: '善良需要有底线和锋芒',
        weights: {
          zhenhuan: 2,
          yelanyi: 1,
          huanbi: 1,
          guojunwang: 1
        }
      },
      {
        text: '善良往往被人利用',
        weights: {
          huanghou: 2,
          anlingrong: 1,
          yongzheng: 1,
          huafei: 1
        }
      }
    ]
  },
  {
    id: 44,
    dimension: 'moral',
    question: '面对不正义的事情，你会？',
    options: [
      {
        text: '挺身而出，仗义执言',
        weights: {
          yelanyi: 2,
          shenmeizhuang: 2,
          wenshichu: 1,
          guojunwang: 1
        }
      },
      {
        text: '在心中评判，但明哲保身',
        weights: {
          zhenhuan: 1,
          jingfei: 1,
          cuijinxi: 1,
          anlingrong: 1
        }
      },
      {
        text: '事不关己高高挂起',
        weights: {
          huanghou: 2,
          huafei: 1,
          yongzheng: 1,
          huanbi: 1
        }
      }
    ]
  },
  {
    id: 45,
    dimension: 'moral',
    question: '你更认同哪种价值观？',
    options: [
      {
        text: '仁义礼智信的传统美德',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          cuijinxi: 2,
          jingfei: 1
        }
      },
      {
        text: '自由与个性的自我实现',
        weights: {
          guojunwang: 2,
          yelanyi: 2,
          huafei: 1,
          zhenhuan: 1
        }
      },
      {
        text: '权力和地位决定一切',
        weights: {
          huanghou: 2,
          yongzheng: 2,
          anlingrong: 1
        }
      }
    ]
  },
  {
    id: 46,
    dimension: 'moral',
    question: '你如何看待"忠诚"？',
    options: [
      {
        text: '忠诚是做人的根本',
        weights: {
          jingfei: 2,
          wenshichu: 2,
          cuijinxi: 2,
          shenmeizhuang: 1
        }
      },
      {
        text: '忠诚应该给值得的人',
        weights: {
          zhenhuan: 2,
          yelanyi: 1,
          huanbi: 1,
          guojunwang: 1
        }
      },
      {
        text: '忠诚是相互的，没有绝对',
        weights: {
          huanghou: 1,
          anlingrong: 1,
          yongzheng: 1,
          huafei: 1
        }
      }
    ]
  },
  {
    id: 47,
    dimension: 'moral',
    question: '在原则和变通之间，你更倾向于？',
    options: [
      {
        text: '坚持原则，不轻易妥协',
        weights: {
          shenmeizhuang: 2,
          wenshichu: 2,
          jingfei: 1,
          yelanyi: 1
        }
      },
      {
        text: '大事讲原则，小事可变通',
        weights: {
          zhenhuan: 2,
          cuijinxi: 2,
          guojunwang: 1,
          huanbi: 1
        }
      },
      {
        text: '一切以实际效果为准',
        weights: {
          huanghou: 2,
          yongzheng: 1,
          huafei: 1,
          anlingrong: 1
        }
      }
    ]
  }
];

// ============================================================
// 维度名称映射
// ============================================================
const DIMENSION_NAMES = {
  power: '权力取向',
  emotion: '情感偏向',
  social: '社交风格',
  stress: '抗压模式',
  moral: '道德准则'
};

// ============================================================
// 维度描述（高/中/低三个级别）
// ============================================================
const DIMENSION_DESC = {
  power: {
    high: '你有强烈的权力欲望和掌控力，善于在复杂的环境中获得主动权，是天生的领导者。',
    mid: '你有一定的进取心，懂得在适当的时候争取和退让，能够平衡权力与和谐。',
    low: '你对权力不感兴趣，更看重内心的平和与人际的和谐，不愿卷入纷争之中。'
  },
  emotion: {
    high: '你情感丰富而热烈，对爱情有着执着的追求和浪漫的想象，情感是你生活的动力。',
    mid: '你情感细腻但克制，懂得在感情中保持理性，能够平衡情感与现实的考量。',
    low: '你理性至上，善于控制情感的表达，不轻易表露内心的真实感受。'
  },
  social: {
    high: '你社交能力出众，善于在人际交往中游刃有余，拥有广泛的人脉圈。',
    mid: '你社交得体，能够在需要时展现良好的交际能力，但也享受独处的时光。',
    low: '你性格内向，不善于社交，更愿意与少数知己深交，享受安静的生活。'
  },
  stress: {
    high: '你抗压能力极强，面对逆境能够沉着冷静，化压力为动力，越挫越勇。',
    mid: '你有一定的抗压能力，能够应对常见的压力，但在巨大打击下也会感到脆弱。',
    low: '你比较敏感，面对压力容易焦虑不安，需要在支持和鼓励中恢复信心。'
  },
  moral: {
    high: '你有着坚定的道德信念和原则，无论什么情况下都能坚守底线，值得信赖。',
    mid: '你有基本的道德准则，但在特殊情况下也会灵活变通，不是非黑即白。',
    low: '你更注重实际效果而非道德教条，认为在复杂的世界中需要灵活应对。'
  }
};

// ============================================================
// 导出所有数据
// ============================================================
export { PERSONALITIES, QUESTIONS, DIMENSION_NAMES, DIMENSION_DESC };
