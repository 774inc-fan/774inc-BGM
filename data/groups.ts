export type GroupKey =
  | 'animare_cafe'
  | 'honey_strap'
  | 'sugar_lyric'
  | 'vtuber_apart'

export type GroupDatum = {
  key: GroupKey
  name: string
}

export const groupData : GroupDatum[] = [
  {
    key: 'animare_cafe',
    name: '有閑喫茶あにまーれ'
  },
  {
    key: 'honey_strap',
    name: 'ハニーストラップ'
  },
  {
    key: 'sugar_lyric',
    name: 'シュガーリリック'
  },
  {
    key: 'vtuber_apart',
    name: 'ブイアパ'
  }
]
