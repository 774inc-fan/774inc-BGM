import { IMemberKey } from '@@/data/members'

type IGroup = {
  text: string
  members: IMemberKey[]
}

export const groups = [
  {
    text: '有閑喫茶あにまーれ',
    members: [
      'haneru_inaba',
      'ichika_souya',
      'ran_hinokuma',
      'kuku_kazami',
      'izumi_yunohara',
      'shiromiya_mimi',
      'natsumi_hashiba'
    ]
  },
  {
    text: 'ハニーストラップ',
    members: ['mico_hnst', 'patra_hnst', 'charlotte_hnst', 'mary_hnst']
  },
  {
    text: 'シュガーリリック',
    members: ['rene_ryugasaki', 'anna_kojo', 'chrisshishio']
  },
  {
    text: 'ブイアパ',
    members: [
      'uge_and',
      'camomi_camomi',
      '_kanade_kanon',
      'anko_kisaki',
      'met_komori',
      'wat_huma'
    ]
  },
  {
    text: 'その他',
    members: ['reality']
  },
  {
    text: '休止／引退',
    members: ['kuromu_inari', 'eli_hnst', 'hinako_umori', 'akane_haibara']
  }
] as IGroup[]
