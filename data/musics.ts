import { MemberKey } from 'app/data/members'

type MusicAuthor =
  | '★本人'
  | '☆ファン'
  | 'beco（騒音のない世界）'
  | 'DOVA-SYNDROME'
  | 'Music is VFR'
  | 'MusMus'
  | 'PeriTune'
  | 'こんとどぅふぇ'

export type MusicDaum = {
  name: string
  author: MusicAuthor
  youtube: string
  members: {
    member: MemberKey
    tags: string[]
  }[]
}

export const musicData: MusicDaum[] = [
  {
    name: 'Tiny',
    author: 'DOVA-SYNDROME',
    youtube: 'rNsjKMSVg1Q',
    members: [
      { member: 'haneru_inaba', tags: [] }
    ]
  },
  {
    name: 'ポップコーン',
    author: 'DOVA-SYNDROME',
    youtube: 'C2gxSXuo4uQ',
    members: [
      { member: 'haneru_inaba', tags: [] }
    ]
  },
  {
    name: '弔い合戦',
    author: 'DOVA-SYNDROME',
    youtube: '7iz4Sf6NGjo',
    members: [
      { member: 'haneru_inaba', tags: ['VakaTuber決戦', 'カチコミBGM'] }
    ]
  },
  {
    name: 'SUMMER TRIANGLE',
    author: 'DOVA-SYNDROME',
    youtube: 'SkQihFHiWt0',
    members: [
      { member: 'ichika_souya', tags: [] },
      { member: 'met_komori', tags: [] }
    ]
  },
  {
    name: '10℃',
    author: 'DOVA-SYNDROME',
    youtube: 'pgjwcEpjhKE',
    members: [
      { member: 'ichika_souya', tags: [] }
    ]
  },
  {
    name: 'Hey So Jungle',
    author: 'DOVA-SYNDROME',
    youtube: 'R6tSdHM6GKU',
    members: [
      { member: 'ichika_souya', tags: [] }
    ]
  },
  {
    name: 'ヒトツダケ',
    author: 'DOVA-SYNDROME',
    youtube: '2hZGLVkdjRA',
    members: [
      { member: 'ichika_souya', tags: [] }
    ]
  },
  {
    name: 'なんでしょう？',
    author: 'DOVA-SYNDROME',
    youtube: 'eo7w_Pnctvg',
    members: [
      { member: 'ichika_souya', tags: [] },
      { member: 'mico_hnst', tags: ['犬'] }
    ]
  },
  {
    name: '野良猫は宇宙を目指した',
    author: 'DOVA-SYNDROME',
    youtube: 'aYKOc3-HOhg',
    members: [
      { member: 'ichika_souya', tags: [] },
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: 'プリティアイドル',
    author: 'こんとどぅふぇ',
    youtube: 'MkZSSPHp3LM',
    members: [
      { member: 'ichika_souya', tags: ['待機'] }
    ]
  },
  {
    name: 'じゃんじゃんじゃんじゃんっ！',
    author: 'DOVA-SYNDROME',
    youtube: '1FCjU-V9FDs',
    members: [
      { member: 'ichika_souya', tags: ['昔使ってた'] }
    ]
  },
  {
    name: 'Shall we meet？',
    author: 'DOVA-SYNDROME',
    youtube: '9swXEd6SWjA',
    members: [
      { member: 'ichika_souya', tags: ['りしーゆー！'] }
    ]
  },
  {
    name: 'Let\'s!',
    author: 'DOVA-SYNDROME',
    youtube: 'pKMGBSxHLsg',
    members: [
      { member: 'ichika_souya', tags: ['朝配信 待機'] }
    ]
  },
  {
    name: 'SHISE NI NARU',
    author: '☆ファン',
    youtube: 'I0xCR0RfUoM',
    members: [
      { member: 'ichika_souya', tags: ['朝配信 OP'] }
    ]
  },
  {
    name: 'Positive_Happy',
    author: 'PeriTune',
    youtube: 'n4zl8LKKSp8',
    members: [
      { member: 'ichika_souya', tags: ['朝配信'] }
    ]
  },
  {
    name: 'Morning',
    author: 'DOVA-SYNDROME',
    youtube: '2KzkWWkPSpU',
    members: [
      { member: 'ichika_souya', tags: ['朝配信'] }
    ]
  },
  {
    name: 'パステルハウス',
    author: 'DOVA-SYNDROME',
    youtube: '4pqJA7aiVJc',
    members: [
      { member: 'ichika_souya', tags: ['朝配信'] }
    ]
  },
  {
    name: 'ゆりかご',
    author: 'DOVA-SYNDROME',
    youtube: '7kuQFPn3uc8',
    members: [
      { member: 'ichika_souya', tags: ['バイノーラル'] }
    ]
  },
  {
    name: 'おやすみオルゴール',
    author: 'DOVA-SYNDROME',
    youtube: 'hTpmFIwhx9s',
    members: [
      { member: 'ichika_souya', tags: ['バイノーラル'] }
    ]
  },
  {
    name: 'いちごホイップ',
    author: 'DOVA-SYNDROME',
    youtube: 'CdiJE_tMdVc',
    members: [
      { member: 'ichika_souya', tags: ['恋するVTuber OP'] }
    ]
  },
  {
    name: 'TALK and WALK',
    author: 'DOVA-SYNDROME',
    youtube: 'GJJuYze3A8k',
    members: [
      { member: 'ichika_souya', tags: ['初配信'] }
    ]
  },
  {
    name: 'Cosmic Mini',
    author: 'DOVA-SYNDROME',
    youtube: '4_5xXFsFmSc',
    members: [
      { member: 'ichika_souya', tags: ['初期OP曲'] }
    ]
  },
  {
    name: 'Laid_Back',
    author: 'PeriTune',
    youtube: 'S-bErFZ5bpo',
    members: [
      { member: 'ran_hinokuma', tags: [] }
    ]
  },
  {
    name: '花火',
    author: 'beco（騒音のない世界）',
    youtube: '5tuhiMYovPY',
    members: [
      { member: 'ran_hinokuma', tags: [] }
    ]
  },
  {
    name: 'かえるのピアノ',
    author: 'DOVA-SYNDROME',
    youtube: 'bogzWYYz91U',
    members: [
      { member: 'ran_hinokuma', tags: [] }
    ]
  },
  {
    name: '急げ急げ！',
    author: 'DOVA-SYNDROME',
    youtube: 'RT0KL9ovwuw',
    members: [
      { member: 'ran_hinokuma', tags: ['料理配信'] }
    ]
  },
  {
    name: 'かけっこ競争',
    author: 'DOVA-SYNDROME',
    youtube: '-Df1VcAMjtM',
    members: [
      { member: 'ran_hinokuma', tags: ['料理配信'] }
    ]
  },
  {
    name: 'ひらひらり',
    author: 'DOVA-SYNDROME',
    youtube: 'D-IwLexmQh0',
    members: [
      { member: 'ran_hinokuma', tags: ['らん太郎死す'] }
    ]
  },
  {
    name: 'キミにあげる！',
    author: 'MusMus',
    youtube: '9bYPpAEgCzo',
    members: [
      { member: 'kuku_kazami', tags: [] }
    ]
  },
  {
    name: 'プラスチックアドベンチャー',
    author: 'MusMus',
    youtube: 'w4s60v2FFfs',
    members: [
      { member: 'kuku_kazami', tags: ['スパチャ返し'] }
    ]
  },
  {
    name: '楽しく愉快に',
    author: 'DOVA-SYNDROME',
    youtube: '723NjKyD_L8',
    members: [
      { member: 'izumi_yunohara', tags: [] }
    ]
  },
  {
    name: 'so sweet',
    author: 'DOVA-SYNDROME',
    youtube: 'Y7Zu2IruAq4',
    members: [
      { member: 'izumi_yunohara', tags: [] },
      { member: 'uge_and', tags: [] }
    ]
  },
  {
    name: '昼下がり気分',
    author: 'DOVA-SYNDROME',
    youtube: 'p1O7tSN5_Co',
    members: [
      { member: 'izumi_yunohara', tags: [] }
    ]
  },
  {
    name: '夕餉の街並み',
    author: 'MusMus',
    youtube: 'Hn4Czfdmf5o',
    members: [
      { member: 'shiromiya_mimi', tags: [] },
      { member: 'anko_kisaki', tags: [] }
    ]
  },
  {
    name: 'Mealtime_Rag',
    author: 'PeriTune',
    youtube: 'YWiUeQibq6k',
    members: [
      { member: 'shiromiya_mimi', tags: ['料理'] }
    ]
  },
  {
    name: 'いっしょに！',
    author: '★本人',
    youtube: 'CXz3SVvZiPc',
    members: [
      { member: 'shiromiya_mimi', tags: ['ED'] }
    ]
  },
  {
    name: '晴れた日は更新',
    author: 'Music is VFR',
    youtube: 'xO26nUocp-M',
    members: [
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: '魔女っ婆タヱさん',
    author: 'MusMus',
    youtube: 'bJxIo_beMjg',
    members: [
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: '古き良き日々',
    author: 'MusMus',
    youtube: 'OtPeKoNp6us',
    members: [
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: 'In That Mood',
    author: 'Music is VFR',
    youtube: 'VZOyCmiSMmI',
    members: [
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: '空白と静寂',
    author: 'Music is VFR',
    youtube: 'zf5vqokL6So',
    members: [
      { member: 'natsumi_hashiba', tags: [] }
    ]
  },
  {
    name: '春宵闇ニ咲ク',
    author: 'MusMus',
    youtube: 'b7OyyndTPVg',
    members: [
      { member: 'natsumi_hashiba', tags: ['朝配信'] }
    ]
  },
  {
    name: '真夏のレモネード',
    author: 'MusMus',
    youtube: 'JofDLAhBMf4',
    members: [
      { member: 'natsumi_hashiba', tags: ['収益化配信'] }
    ]
  },
  {
    name: 'ゆきうさぎ',
    author: 'MusMus',
    youtube: '2kWuQz9sdfI',
    members: [
      { member: 'charlotte_hnst', tags: ['Minecraft'] }
    ]
  },
  {
    name: 'Trick style',
    author: 'DOVA-SYNDROME',
    youtube: 'elZZpZCes48',
    members: [
      { member: 'rene_ryugasaki', tags: ['事件簿'] }
    ]
  },
  {
    name: '間抜けな行進曲',
    author: 'DOVA-SYNDROME',
    youtube: 'g58eY1th86Y',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: '残滓念',
    author: 'DOVA-SYNDROME',
    youtube: 'r65mQAq78No',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: 'Killing Party',
    author: 'DOVA-SYNDROME',
    youtube: '6kUUVGXcbW0',
    members: [
      { member: 'chrisshishio', tags: ['クリスチャンス'] }
    ]
  },
  {
    name: 'ぼーっと陽だまり',
    author: 'Music is VFR',
    youtube: 'Mx2fNRAD6oI',
    members: [
      { member: 'uge_and', tags: [] }
    ]
  },
  {
    name: '雪と子供',
    author: 'MusMus',
    youtube: 'fkdrPZPXu_o',
    members: [
      { member: 'uge_and', tags: [] },
      { member: 'anko_kisaki', tags: [] }
    ]
  },
  {
    name: '強欲な娘',
    author: 'beco（騒音のない世界）',
    youtube: 'x_g0Y7bkwsI',
    members: [
      { member: 'uge_and', tags: ['OP'] }
    ]
  },
  {
    name: '冬の踊り子',
    author: 'beco（騒音のない世界）',
    youtube: 'kHZGsL8sV2Q',
    members: [
      { member: 'uge_and', tags: ['OP'] }
    ]
  },
  {
    name: 'どんぐりころころ',
    author: 'beco（騒音のない世界）',
    youtube: 'pepiUg_zXWs',
    members: [
      { member: 'uge_and', tags: ['AFK'] }
    ]
  },
  {
    name: 'なんということはない日常',
    author: 'DOVA-SYNDROME',
    youtube: 'Xj2LwGR8cGI',
    members: [
      { member: '_kanade_kanon', tags: [] }
    ]
  },
  {
    name: '電脳漂流記',
    author: 'MusMus',
    youtube: 'sqG_a1-c8f4',
    members: [
      { member: 'anko_kisaki', tags: [] }
    ]
  },
  {
    name: 'BT GIRLS',
    author: 'MusMus',
    youtube: '4AUQWE8uqqY',
    members: [
      { member: 'anko_kisaki', tags: [] },
      { member: 'met_komori', tags: [] }
    ]
  },
  {
    name: 'ホワイトベル',
    author: 'DOVA-SYNDROME',
    youtube: 'CrzApeSovcg',
    members: [
      { member: 'anko_kisaki', tags: [] }
    ]
  },
  {
    name: 'キラリきらめく',
    author: 'DOVA-SYNDROME',
    youtube: '85zT7xyUk48',
    members: [
      { member: 'rui_seshima', tags: [] }
    ]
  },
  {
    name: 'かしこい猫ですけどなにか問題でもっ？',
    author: 'DOVA-SYNDROME',
    youtube: 'GUdoL7P56Mc',
    members: [
      { member: 'rui_seshima', tags: [] }
    ]
  },
  {
    name: 'リコーダービート',
    author: 'DOVA-SYNDROME',
    youtube: 'oDV2_FtsWmQ',
    members: [
      { member: 'haneru_inaba', tags: ['ツブナイ'] }
    ]
  },
  {
    name: 'プレゼントボックス',
    author: 'DOVA-SYNDROME',
    youtube: 'DUh_MoCHv_E',
    members: [
      { member: 'hikari_hira', tags: [] }
    ]
  },
  {
    name: '2:23 AM',
    author: 'DOVA-SYNDROME',
    youtube: '16Bj6aPi1A8',
    members: [
      { member: 'met_komori', tags: [] }
    ]
  },
  {
    name: '週末京都現実逃避',
    author: 'DOVA-SYNDROME',
    youtube: 'C1_NatQvewY',
    members: [
      { member: 'met_komori', tags: [] }
    ]
  },
  {
    name: '料理が作れそうな曲',
    author: 'DOVA-SYNDROME',
    youtube: 'qx9jEcOZlqI',
    members: [
      { member: 'ran_hinokuma', tags: [] }
    ]
  },
  {
    name: 'わくわく☆かわいい',
    author: 'DOVA-SYNDROME',
    youtube: '97XYVcolGXw',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: 'はりきっちゃう時のテーマ',
    author: 'DOVA-SYNDROME',
    youtube: '04wyv6F85KQ',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: '探偵事務所',
    author: 'DOVA-SYNDROME',
    youtube: 'fDtc6_c9VgQ',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: '間抜けな行進曲',
    author: 'DOVA-SYNDROME',
    youtube: 'g58eY1th86Y',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  },
  {
    name: '残滓念',
    author: 'DOVA-SYNDROME',
    youtube: 'r65mQAq78No',
    members: [
      { member: 'rene_ryugasaki', tags: [] }
    ]
  }
]
