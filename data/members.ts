import { GroupKey } from './groups'

export type MemberKey =
  // 有閑喫茶あにまーれ
  | 'haneru_inaba'
  | 'ichika_souya'
  | 'ran_hinokuma'
  | 'kuku_kazami'
  | 'izumi_yunohara'
  | 'shiromiya_mimi'
  | 'natsumi_hashiba'
  | 'rui_seshima'
  | 'hikari_hira'
  // ハニーストラップ
  | 'mico_hnst'
  | 'patra_hnst'
  | 'charlotte_hnst'
  | 'mary_hnst'
  // シュガーリリック
  | 'rene_ryugasaki'
  | 'anna_kojo'
  | 'chrisshishio'
  // ブイアパ
  | 'uge_and'
  | '_kanade_kanon'
  | 'anko_kisaki'
  | 'met_komori'
  | 'wat_huma'

export type MemberDatum = {
  key: MemberKey
  group: GroupKey
  name: string
}

export const memberData : MemberDatum[] = [
  // 有閑喫茶あにまーれ
  {
    key: 'haneru_inaba',
    group: 'animare_cafe',
    name: '因幡はねる'
  },
  {
    key: 'ichika_souya',
    group: 'animare_cafe',
    name: '宗谷いちか'
  },
  {
    key: 'ran_hinokuma',
    group: 'animare_cafe',
    name: '日ノ隈らん'
  },
  {
    key: 'kuku_kazami',
    group: 'animare_cafe',
    name: '風見くく'
  },
  {
    key: 'izumi_yunohara',
    group: 'animare_cafe',
    name: '柚原いづみ'
  },
  {
    key: 'shiromiya_mimi',
    group: 'animare_cafe',
    name: '白宮みみ'
  },
  {
    key: 'natsumi_hashiba',
    group: 'animare_cafe',
    name: '羽柴なつみ'
  },
  {
    key: 'rui_seshima',
    group: 'animare_cafe',
    name: '瀬島るい'
  },
  {
    key: 'hikari_hira',
    group: 'animare_cafe',
    name: '飛良ひかり'
  },
  // ハニーストラップ
  {
    key: 'mico_hnst',
    group: 'honey_strap',
    name: '堰代ミコ'
  },
  {
    key: 'patra_hnst',
    group: 'honey_strap',
    name: '周防パトラ'
  },
  {
    key: 'charlotte_hnst',
    group: 'honey_strap',
    name: '島村シャルロット'
  },
  {
    key: 'mary_hnst',
    group: 'honey_strap',
    name: '西園寺メアリ'
  },
  // シュガーリリック
  {
    key: 'rene_ryugasaki',
    group: 'sugar_lyric',
    name: '龍ケ崎リン'
  },
  {
    key: 'anna_kojo',
    group: 'sugar_lyric',
    name: '虎城アンナ'
  },
  {
    key: 'chrisshishio',
    group: 'sugar_lyric',
    name: '獅子王クリス'
  },
  // ブイアパ
  {
    key: 'uge_and',
    group: 'vtuber_apart',
    name: '安戸ゆげ'
  },
  {
    key: '_kanade_kanon',
    group: 'vtuber_apart',
    name: '花奏かのん'
  },
  {
    key: 'anko_kisaki',
    group: 'vtuber_apart',
    name: '季咲あんこ'
  },
  {
    key: 'met_komori',
    group: 'vtuber_apart',
    name: '小森めと'
  },
  {
    key: 'wat_huma',
    group: 'vtuber_apart',
    name: '不磨わっと'
  }
]
