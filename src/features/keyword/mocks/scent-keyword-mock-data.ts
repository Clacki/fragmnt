export type KeywordItem = {
  keywordId: number
  keywordName: string
}

export type KeywordSection = {
  title: string
  keywordDivision: string
  keywords: KeywordItem[]
}

export const scentKeywordMockData: KeywordSection[] = [
  {
    title: "PLACE",
    keywordDivision: "Place",
    keywords: [
      { keywordId: 1, keywordName: "안락한 침실" },
      { keywordId: 2, keywordName: "화사한 거실" },
      { keywordId: 3, keywordName: "집중의 서재" },
      { keywordId: 4, keywordName: "청결한 욕실/현관" },
      { keywordId: 5, keywordName: "프라이빗 드레스룸" },
    ],
  },
  {
    title: "MOOD",
    keywordDivision: "MD",
    keywords: [
      { keywordId: 6, keywordName: "미니멀 & 정제된" },
      { keywordId: 7, keywordName: "우아함 & 고급스러운" },
      { keywordId: 8, keywordName: "로맨틱 & 달콤한" },
      { keywordId: 9, keywordName: "내추럴 & 안정적인" },
      { keywordId: 10, keywordName: "볼드 & 강렬한" },
    ],
  },
  {
    title: "TEXTURE",
    keywordDivision: "Texture",
    keywords: [
      { keywordId: 11, keywordName: "보송한 리넨" },
      { keywordId: 12, keywordName: "매끄러운 벨벳" },
      { keywordId: 13, keywordName: "드라이한 나무" },
      { keywordId: 14, keywordName: "촉촉한 이슬" },
      { keywordId: 15, keywordName: "포근한 캐시미어" },
    ],
  },
  {
    title: "TIME & SEASON",
    keywordDivision: "Time & Season",
    keywords: [
      { keywordId: 16, keywordName: "눈부신 아침" },
      { keywordId: 17, keywordName: "고요한 저녁" },
      { keywordId: 18, keywordName: "싱그러운 봄/여름" },
      { keywordId: 19, keywordName: "깊어지는 가을/겨울" },
      { keywordId: 20, keywordName: "비 온 뒤" },
    ],
  },
  {
    title: "SCENT NOTES",
    keywordDivision: "Scent Notes",
    keywords: [
      { keywordId: 21, keywordName: "시트러스 (상쾌함)" },
      { keywordId: 22, keywordName: "우디 (묵직함)" },
      { keywordId: 23, keywordName: "플로럴 (화사함)" },
      { keywordId: 24, keywordName: "머스크 (포근함)" },
      { keywordId: 25, keywordName: "허벌 & 스파이시 (개성)" },
    ],
  },
]
