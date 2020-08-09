import { MemberKey } from '@@/data/members'

export type Group = {
  name: string
  members: MemberKey[]
}

export const groups = [
  {
    name: '有閑喫茶あにまーれ',
    members: [
      'haneru_inaba',
      'ichika_souya',
      'ran_hinokuma',
      'kuku_kazami',
      'izumi_yunohara',
      'shiromiya_mimi',
      'natsumi_hashiba',
    ],
  },
  {
    name: 'ハニーストラップ',
    members: ['mico_hnst', 'patra_hnst', 'charlotte_hnst', 'mary_hnst'],
  },
  {
    name: 'シュガーリリック',
    members: ['rene_ryugasaki', 'anna_kojo', 'chrisshishio'],
  },
  {
    name: 'ブイアパ',
    members: [
      'uge_and',
      'camomi_camomi',
      '_kanade_kanon',
      'anko_kisaki',
      'met_komori',
      'wat_huma',
    ],
  },
  {
    name: 'その他',
    members: ['other'],
  },
  {
    name: '休止／引退',
    members: ['kuromu_inari', 'eli_hnst', 'hinako_umori', 'akane_haibara'],
  },
] as Group[]
