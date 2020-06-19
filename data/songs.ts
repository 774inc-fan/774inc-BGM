import { IMemberKey } from '@@/data/members'

type ISong = {
  memberId: IMemberKey
  list: ISongItem[]
}

type ISongItem = {
  tags?: string[]
  source?: string
  youtube?: string
}

export const songs = [
  // 有閑喫茶あにまーれ
  {
    memberId: 'haneru_inaba',
    list: [
      {
        tags: ['VakaTuber決戦', 'カチコミBGM'],
        youtube: '7iz4Sf6NGjo'
      },
      {
        youtube: 'rNsjKMSVg1Q'
      },
      {
        youtube: 'C2gxSXuo4uQ'
      }
    ]
  },
  {
    memberId: 'ichika_souya',
    list: [
      {
        youtube: '2hZGLVkdjRA'
      },
      {
        youtube: 'eo7w_Pnctvg'
      },
      {
        tags: ['待機'],
        youtube: 'MkZSSPHp3LM'
      },
      {
        tags: ['昔使ってた'],
        youtube: '1FCjU-V9FDs'
      },
      {
        tags: ['りしーゆー！'],
        youtube: '9swXEd6SWjA'
      },
      {
        tags: ['朝配信 待機'],
        youtube: 'pKMGBSxHLsg'
      },
      {
        tags: ['朝配信 OP'],
        youtube: 'I0xCR0RfUoM'
      },
      {
        tags: ['朝配信'],
        youtube: 'n4zl8LKKSp8'
      },
      {
        tags: ['朝配信'],
        youtube: '2KzkWWkPSpU'
      },
      {
        tags: ['朝配信'],
        youtube: '4pqJA7aiVJc'
      },
      {
        tags: ['バイノーラル'],
        youtube: '7kuQFPn3uc8'
      },
      {
        tags: ['恋するVTuber OP'],
        youtube: 'CdiJE_tMdVc'
      },
      {
        tags: ['初配信'],
        youtube: 'GJJuYze3A8k'
      },
      {
        tags: ['初期OP曲'],
        youtube: '4_5xXFsFmSc'
      },
      {
        tags: ['（どこで使ってるっけ）'],
        youtube: '9oSBQLdw4-E'
      }
    ]
  },
  {
    memberId: 'ran_hinokuma',
    list: [
      {
        youtube: '5tuhiMYovPY'
      },
      {
        youtube: 'bogzWYYz91U'
      },
      {
        tags: ['料理配信'],
        youtube: 'RT0KL9ovwuw'
      },
      {
        tags: ['料理配信'],
        youtube: '-Df1VcAMjtM'
      },
      {
        tags: ['らん太郎死す'],
        youtube: 'D-IwLexmQh0'
      }
    ]
  },
  {
    memberId: 'kuku_kazami',
    list: [
      {
        tags: ['スパチャ返し'],
        youtube: 'w4s60v2FFfs'
      }
    ]
  },
  {
    memberId: 'izumi_yunohara',
    list: [
      {
        youtube: '723NjKyD_L8'
      },
      {
        youtube: 'Y7Zu2IruAq4'
      },
      {
        youtube: 'p1O7tSN5_Co'
      }
    ]
  },
  {
    memberId: 'shiromiya_mimi',
    list: [
      {
        youtube: 'Hn4Czfdmf5o'
      },
      {
        tags: ['ED'],
        youtube: 'CXz3SVvZiPc'
      }
    ]
  },
  {
    memberId: 'natsumi_hashiba',
    list: [
      {
        youtube: 'bJxIo_beMjg'
      },
      {
        tags: ['朝配信'],
        youtube: 'b7OyyndTPVg'
      }
    ]
  },
  // ハニーストラップ
  {
    memberId: 'mico_hnst',
    list: [
      {
        tags: ['犬'],
        youtube: 'eo7w_Pnctvg'
      }
    ]
  },
  {
    memberId: 'patra_hnst',
    list: []
  },
  {
    memberId: 'charlotte_hnst',
    list: []
  },
  {
    memberId: 'mary_hnst',
    list: []
  },
  // シュガーリリック
  {
    memberId: 'rene_ryugasaki',
    list: []
  },
  {
    memberId: 'anna_kojo',
    list: []
  },
  {
    memberId: 'chrisshishio',
    list: [
      {
        tags: ['クリスチャンス'],
        youtube: '6kUUVGXcbW0'
      }
    ]
  },
  // ブイアパ
  {
    memberId: 'uge_and',
    list: [
      {
        tags: ['OP'],
        youtube: 'x_g0Y7bkwsI'
      }
    ]
  },
  {
    memberId: 'camomi_camomi',
    list: []
  },
  {
    memberId: '_kanade_kanon',
    list: [
      {
        youtube: 'Xj2LwGR8cGI'
      }
    ]
  },
  {
    memberId: 'anko_kisaki',
    list: [
      {
        youtube: 'sqG_a1-c8f4'
      },
      {
        youtube: 'Hn4Czfdmf5o'
      },
      {
        youtube: '4AUQWE8uqqY'
      },
      {
        youtube: 'fkdrPZPXu_o'
      }
    ]
  },
  {
    memberId: 'met_komori',
    list: []
  },
  {
    memberId: 'wat_huma',
    list: []
  },
  // その他
  {
    memberId: 'other',
    list: [
      {
        tags: ['Reality'],
        youtube: 'aQtIfqKEMyE'
      },
      {
        tags: ['Reality'],
        youtube: '6qEzh3wKVJc'
      },
      {
        tags: ['名取さな'],
        youtube: 'wpwo7CfZ0nQ'
      }
    ]
  },
  // 休止／引退
  {
    memberId: 'kuromu_inari',
    list: []
  },
  {
    memberId: 'eli_hnst',
    list: []
  },
  {
    memberId: 'hinako_umori',
    list: [
      {
        youtube: 'jM1q8ekc9JQ'
      },
      {
        tags: ['待機'],
        youtube: 'R97YidHjmA4'
      }
    ]
  },
  {
    memberId: 'akane_haibara',
    list: [
      {
        youtube: 'Hn4Czfdmf5o'
      }
    ]
  }
] as ISong[]
