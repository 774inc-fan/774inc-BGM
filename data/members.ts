export type Member = {
  id: MemberKey
  name: string
  img: string
}

export type MemberKey =
  // 有閑喫茶あにまーれ
  | 'haneru_inaba'
  | 'ichika_souya'
  | 'ran_hinokuma'
  | 'kuku_kazami'
  | 'izumi_yunohara'
  | 'shiromiya_mimi'
  | 'natsumi_hashiba'
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
  // その他
  | 'other'
  // 休止／引退
  | 'kuromu_inari'
  | 'eli_hnst'
  | 'hinako_umori'
  | 'akane_haibara'
  | 'camomi_camomi'

export const members = [
  // 有閑喫茶あにまーれ
  {
    id: 'haneru_inaba',
    name: '因幡はねる',
    img: 'haneru_inaba.jpg',
  },
  {
    id: 'ichika_souya',
    name: '宗谷いちか',
    img: 'ichika_souya.jpg',
  },
  {
    id: 'ran_hinokuma',
    name: '日ノ隈らん',
    img: 'ran_hinokuma.jpg',
  },
  {
    id: 'kuku_kazami',
    name: '風見くく',
    img: 'kuku_kazami.jpg',
  },
  {
    id: 'izumi_yunohara',
    name: '柚原いづみ',
    img: 'izumi_yunohara.jpg',
  },
  {
    id: 'shiromiya_mimi',
    name: '白宮みみ',
    img: 'shiromiya_mimi.jpg',
  },
  {
    id: 'natsumi_hashiba',
    name: '羽柴なつみ',
    img: 'natsumi_hashiba.jpg',
  },
  // ハニーストラップ
  {
    id: 'mico_hnst',
    name: '堰代ミコ',
    img: 'mico_hnst.jpg',
  },
  {
    id: 'patra_hnst',
    name: '周防パトラ',
    img: 'patra_hnst.jpg',
  },
  {
    id: 'charlotte_hnst',
    name: '島村シャルロット',
    img: 'charlotte_hnst.jpg',
  },
  {
    id: 'mary_hnst',
    name: '西園寺メアリ',
    img: 'mary_hnst.jpg',
  },
  // シュガーリリック
  {
    id: 'rene_ryugasaki',
    name: '龍ケ崎リン',
    img: 'rene_ryugasaki.jpg',
  },
  {
    id: 'anna_kojo',
    name: '虎城アンナ',
    img: 'anna_kojo.jpg',
  },
  {
    id: 'chrisshishio',
    name: '獅子王クリス',
    img: 'chrisshishio.jpg',
  },
  // ブイアパ
  {
    id: 'uge_and',
    name: '安戸ゆげ',
    img: 'uge_and.jpg',
  },
  {
    id: '_kanade_kanon',
    name: '花奏かのん',
    img: '_kanade_kanon.jpg',
  },
  {
    id: 'anko_kisaki',
    name: '季咲あんこ',
    img: 'anko_kisaki.jpg',
  },
  {
    id: 'met_komori',
    name: '小森めと',
    img: 'met_komori.jpg',
  },
  {
    id: 'wat_huma',
    name: '不磨わっと',
    img: 'wat_huma.jpg',
  },
  // その他
  {
    id: 'other',
    name: 'その他',
  },
  // 休止／引退
  {
    id: 'kuromu_inari',
    name: '稲荷くろむ',
    img: 'kuromu_inari.jpg',
  },
  {
    id: 'eli_hnst',
    name: '蒼月エリ',
    img: 'eli_hnst.jpg',
  },
  {
    id: 'hinako_umori',
    name: '宇森ひなこ',
    img: 'hinako_umori.jpg',
  },
  {
    id: 'akane_haibara',
    name: '灰原あかね',
    img: 'akane_haibara.jpg',
  },
  {
    id: 'camomi_camomi',
    name: '鴨見カモミ',
    img: 'camomi_camomi.jpg',
  },
] as Member[]
