type IMember = {
  id: IMemberKey
  text: string
  img: string
}

export type IMemberKey =
  | 'haneru_inaba'
  | 'ichika_souya'
  | 'ran_hinokuma'
  | 'kuku_kazami'
  | 'izumi_yunohara'
  | 'shiromiya_mimi'
  | 'natsumi_hashiba'
  | 'mico_hnst'
  | 'patra_hnst'
  | 'charlotte_hnst'
  | 'mary_hnst'
  | 'rene_ryugasaki'
  | 'anna_kojo'
  | 'chrisshishio'
  | 'uge_and'
  | 'camomi_camomi'
  | '_kanade_kanon'
  | 'anko_kisaki'
  | 'met_komori'
  | 'wat_huma'
  | 'other'
  | 'kuromu_inari'
  | 'eli_hnst'
  | 'hinako_umori'
  | 'akane_haibara'

export const members = [
  {
    id: 'haneru_inaba',
    text: '因幡はねる',
    img: 'haneru_inaba.jpg'
  },
  {
    id: 'ichika_souya',
    text: '宗谷いちか',
    img: 'ichika_souya.jpg'
  },
  {
    id: 'ran_hinokuma',
    text: '日ノ隈らん',
    img: 'ran_hinokuma.jpg'
  },
  {
    id: 'kuku_kazami',
    text: '風見くく',
    img: 'kuku_kazami.jpg'
  },
  {
    id: 'izumi_yunohara',
    text: '柚原いづみ',
    img: 'izumi_yunohara.jpg'
  },
  {
    id: 'shiromiya_mimi',
    text: '白宮みみ',
    img: 'shiromiya_mimi.jpg'
  },
  {
    id: 'natsumi_hashiba',
    text: '羽柴なつみ',
    img: 'natsumi_hashiba.jpg'
  },
  {
    id: 'mico_hnst',
    text: '堰代ミコ',
    img: 'mico_hnst.jpg'
  },
  {
    id: 'patra_hnst',
    text: '周防パトラ',
    img: 'patra_hnst.jpg'
  },
  {
    id: 'charlotte_hnst',
    text: '島村シャルロット',
    img: 'charlotte_hnst.jpg'
  },
  {
    id: 'mary_hnst',
    text: '西園寺メアリ',
    img: 'mary_hnst.jpg'
  },
  {
    id: 'rene_ryugasaki',
    text: '龍ケ崎リン',
    img: 'rene_ryugasaki.jpg'
  },
  {
    id: 'anna_kojo',
    text: '虎城アンナ',
    img: 'anna_kojo.jpg'
  },
  {
    id: 'chrisshishio',
    text: '獅子王クリス',
    img: 'chrisshishio.jpg'
  },
  {
    id: 'uge_and',
    text: '安戸ゆげ',
    img: 'uge_and.jpg'
  },
  {
    id: 'camomi_camomi',
    text: '鴨見カモミ',
    img: 'camomi_camomi.jpg'
  },
  {
    id: '_kanade_kanon',
    text: '花奏かのん',
    img: '_kanade_kanon.jpg'
  },
  {
    id: 'anko_kisaki',
    text: '季咲あんこ',
    img: 'anko_kisaki.jpg'
  },
  {
    id: 'met_komori',
    text: '小森めと',
    img: 'met_komori.jpg'
  },
  {
    id: 'wat_huma',
    text: '不磨わっと',
    img: 'wat_huma.jpg'
  },
  {
    id: 'other',
    text: 'その他'
  },
  {
    id: 'kuromu_inari',
    text: '稲荷くろむ',
    img: 'kuromu_inari.jpg'
  },
  {
    id: 'eli_hnst',
    text: '蒼月エリ',
    img: 'eli_hnst.jpg'
  },
  {
    id: 'hinako_umori',
    text: '宇森ひなこ',
    img: 'hinako_umori.jpg'
  },
  {
    id: 'akane_haibara',
    text: '灰原あかね',
    img: 'akane_haibara.jpg'
  }
] as IMember[]
