export type Choice = {
  context: string
  nextState: string
  end?: boolean
}

export type QuestionType = {
  state: string
  context: string
  choices: Choice[]
}

export const questions: QuestionType[] = [
  {
    state: "1",
    context: "あなたの投資の旅、どんな冒険を求めますか？",
    choices: [
      {
        context: "急速に宝を見つけるスリル",
        nextState: "2"
      },
      {
        context: "長い旅路での発見と成長",
        nextState: "3"
      },
      {
        context: "安定した収入のオアシス",
        nextState: "4"
      }
    ]
  },
  {
    state: "2",
    context: "スリル満点のジェットコースターと穏やかな観覧車、どちらを選びますか？",
    choices: [
      {
        context: "ジェットコースター",
        nextState: "5"
      },
      {
        context: "観覧車",
        nextState: "6"
      }
    ]
  },
  {
    state: "3",
    context: "未知の世界への冒険に出る勇者になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "7"
      },
      {
        context: "いいえ",
        nextState: "8"
      }
    ]
  },
  {
    state: "4",
    context: "穏やかな楽園を守る守護者になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "9"
      },
      {
        context: "いいえ",
        nextState: "10"
      }
    ]
  },
  {
    state: "5",
    context: "未来を創る魔法使いになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "テクノロジー",
        end: true
      },
      {
        context: "いいえ",
        nextState: "11"
      }
    ]
  },
  {
    state: "6",
    context: "毎日の暮らしを彩るマジシャンになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "消費財",
        end: true
      },
      {
        context: "いいえ",
        nextState: "不動産",
        end: true
      }
    ]
  },
  {
    state: "7",
    context: "人々の健康を守るヒーローになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "ヘルスケア",
        end: true
      },
      {
        context: "いいえ",
        nextState: "12"
      }
    ]
  },
  {
    state: "8",
    context: "富と繁栄の地図を探す冒険者になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "金融",
        end: true
      },
      {
        context: "いいえ",
        nextState: "13"
      }
    ]
  },
  {
    state: "9",
    context: "灯りを絶やさない守護者になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "インフラ",
        end: true
      },
      {
        context: "いいえ",
        nextState: "14"
      }
    ]
  },
  {
    state: "10",
    context: "世界を変えるヒーローになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "ESG（環境・社会・ガバナンス）",
        end: true
      },
      {
        context: "いいえ",
        nextState: "15"
      }
    ]
  },
  {
    state: "11",
    context: "未来の製品を生み出す発明家になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "工業",
        end: true
      },
      {
        context: "いいえ",
        nextState: "通信",
        end: true
      }
    ]
  },
  {
    state: "12",
    context: "自然の力を操るエネルギーマスターになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "エネルギー",
        end: true
      },
      {
        context: "いいえ",
        nextState: "16"
      }
    ]
  },
  {
    state: "13",
    context: "世界中の心をつかむストーリーテラーになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "エンターテイメント",
        end: true
      },
      {
        context: "いいえ",
        nextState: "通信",
        end: true
      }
    ]
  },
  {
    state: "14",
    context: "都市の風景を変える設計師になりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "不動産",
        end: true
      },
      {
        context: "いいえ",
        nextState: "インフラ",
        end: true
      }
    ]
  },
  {
    state: "15",
    context: "未来の乗り物を作り出すエンジニアになりたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "工業",
        end: true
      },
      {
        context: "いいえ",
        nextState: "消費財",
        end: true
      }
    ]
  },
  {
    state: "16",
    context: "クリーンエネルギーで地球を守りたいですか？",
    choices: [
      {
        context: "はい",
        nextState: "エネルギー",
        end: true
      },
      {
        context: "いいえ",
        nextState: "金融",
        end: true
      }
    ]
  }
]
