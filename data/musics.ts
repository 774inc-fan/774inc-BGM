import { MemberKey } from '@@/data/members'

export type Music = {
  memberId: MemberKey
  list: MusicItem[]
}

export type MusicItem = {
  tags?: string[]
  source?: string
  youtube?: string
}

export const musics = [
  // 有閑喫茶あにまーれ
  {
    memberId: 'haneru_inaba',
    list: [
      {
        youtube: 'rNsjKMSVg1Q',
      },
      {
        youtube: 'C2gxSXuo4uQ',
      },
      {
        tags: ['VakaTuber決戦', 'カチコミBGM'],
        youtube: '7iz4Sf6NGjo',
      },
    ],
  },
  {
    memberId: 'ichika_souya',
    list: [
      {
        youtube: 'SkQihFHiWt0',
      },
      {
        youtube: 'pgjwcEpjhKE',
      },
      {
        youtube: 'R6tSdHM6GKU',
      },
      {
        youtube: '2hZGLVkdjRA',
      },
      {
        youtube: 'eo7w_Pnctvg',
      },
      {
        youtube: 'aYKOc3-HOhg',
      },
      {
        tags: ['待機'],
        youtube: 'MkZSSPHp3LM',
      },
      {
        tags: ['昔使ってた'],
        youtube: '1FCjU-V9FDs',
      },
      {
        tags: ['りしーゆー！'],
        youtube: '9swXEd6SWjA',
      },
      {
        tags: ['朝配信 待機'],
        youtube: 'pKMGBSxHLsg',
      },
      {
        tags: ['朝配信 OP'],
        youtube: 'I0xCR0RfUoM',
      },
      {
        tags: ['朝配信'],
        youtube: 'n4zl8LKKSp8',
      },
      {
        tags: ['朝配信'],
        youtube: '2KzkWWkPSpU',
      },
      {
        tags: ['朝配信'],
        youtube: '4pqJA7aiVJc',
      },
      {
        tags: ['バイノーラル'],
        youtube: '7kuQFPn3uc8',
      },
      {
        tags: ['バイノーラル'],
        youtube: 'hTpmFIwhx9s',
      },
      {
        tags: ['恋するVTuber OP'],
        youtube: 'CdiJE_tMdVc',
      },
      {
        tags: ['初配信'],
        youtube: 'GJJuYze3A8k',
      },
      {
        tags: ['初期OP曲'],
        youtube: '4_5xXFsFmSc',
      },
    ],
  },
  {
    memberId: 'ran_hinokuma',
    list: [
      {
        youtube: 'S-bErFZ5bpo',
      },
      {
        youtube: '5tuhiMYovPY',
      },
      {
        youtube: 'bogzWYYz91U',
      },
      {
        tags: ['料理配信'],
        youtube: 'RT0KL9ovwuw',
      },
      {
        tags: ['料理配信'],
        youtube: '-Df1VcAMjtM',
      },
      {
        tags: ['らん太郎死す'],
        youtube: 'D-IwLexmQh0',
      },
    ],
  },
  {
    memberId: 'kuku_kazami',
    list: [
      {
        youtube: '9bYPpAEgCzo',
      },
      {
        tags: ['スパチャ返し'],
        youtube: 'w4s60v2FFfs',
      },
    ],
  },
  {
    memberId: 'izumi_yunohara',
    list: [
      {
        youtube: '723NjKyD_L8',
      },
      {
        youtube: 'Y7Zu2IruAq4',
      },
      {
        youtube: 'p1O7tSN5_Co',
      },
    ],
  },
  {
    memberId: 'shiromiya_mimi',
    list: [
      {
        youtube: 'Hn4Czfdmf5o',
      },
      {
        tags: ['料理'],
        youtube: 'YWiUeQibq6k',
      },
      {
        tags: ['ED'],
        youtube: 'CXz3SVvZiPc',
      },
    ],
  },
  {
    memberId: 'natsumi_hashiba',
    list: [
      {
        youtube: 'xO26nUocp-M',
      },
      {
        youtube: 'bJxIo_beMjg',
      },
      {
        youtube: 'OtPeKoNp6us',
      },
      {
        youtube: 'VZOyCmiSMmI',
      },
      {
        youtube: 'zf5vqokL6So',
      },
      {
        tags: ['朝配信'],
        youtube: 'b7OyyndTPVg',
      },
      {
        tags: ['収益化配信'],
        youtube: 'JofDLAhBMf4',
      },
    ],
  },
  {
    memberId: 'rui_seshima',
    list: [],
  },
  {
    memberId: 'hikari_hira',
    list: [],
  },
  // ハニーストラップ
  {
    memberId: 'mico_hnst',
    list: [
      {
        tags: ['犬'],
        youtube: 'eo7w_Pnctvg',
      },
    ],
  },
  {
    memberId: 'patra_hnst',
    list: [],
  },
  {
    memberId: 'charlotte_hnst',
    list: [
      {
        tags: ['Minecraft'],
        youtube: '2kWuQz9sdfI',
      },
    ],
  },
  {
    memberId: 'mary_hnst',
    list: [],
  },
  // シュガーリリック
  {
    memberId: 'rene_ryugasaki',
    list: [],
  },
  {
    memberId: 'anna_kojo',
    list: [],
  },
  {
    memberId: 'chrisshishio',
    list: [
      {
        tags: ['クリスチャンス'],
        youtube: '6kUUVGXcbW0',
      },
    ],
  },
  // ブイアパ
  {
    memberId: 'uge_and',
    list: [
      {
        youtube: 'Y7Zu2IruAq4',
      },
      {
        youtube: 'Mx2fNRAD6oI',
      },
      {
        youtube: 'fkdrPZPXu_o',
      },
      {
        tags: ['OP'],
        youtube: 'x_g0Y7bkwsI',
      },
      {
        tags: ['OP'],
        youtube: 'kHZGsL8sV2Q',
      },
      {
        tags: ['AFK'],
        youtube: 'pepiUg_zXWs',
      },
    ],
  },
  {
    memberId: '_kanade_kanon',
    list: [
      {
        youtube: 'Xj2LwGR8cGI',
      },
    ],
  },
  {
    memberId: 'anko_kisaki',
    list: [
      {
        youtube: 'sqG_a1-c8f4',
      },
      {
        youtube: 'Hn4Czfdmf5o',
      },
      {
        youtube: '4AUQWE8uqqY',
      },
      {
        youtube: 'fkdrPZPXu_o',
      },
    ],
  },
  {
    memberId: 'met_komori',
    list: [
      {
        youtube: '4AUQWE8uqqY',
      },
    ],
  },
  {
    memberId: 'wat_huma',
    list: [],
  },
  // その他
  {
    memberId: 'other',
    list: [
      {
        tags: ['Reality'],
        youtube: 'aQtIfqKEMyE',
      },
      {
        tags: ['Reality'],
        youtube: '6qEzh3wKVJc',
      },
      {
        tags: ['名取さな'],
        youtube: 'wpwo7CfZ0nQ',
      },
    ],
  },
  // 休止／引退
  {
    memberId: 'kuromu_inari',
    list: [],
  },
  {
    memberId: 'eli_hnst',
    list: [],
  },
  {
    memberId: 'hinako_umori',
    list: [
      {
        youtube: 'jM1q8ekc9JQ',
      },
      {
        tags: ['待機'],
        youtube: 'R97YidHjmA4',
      },
    ],
  },
  {
    memberId: 'akane_haibara',
    list: [
      {
        youtube: 'Hn4Czfdmf5o',
      },
    ],
  },
  {
    memberId: 'camomi_camomi',
    list: [],
  },
] as Music[]
