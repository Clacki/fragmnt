type ProfileItem = {
  label: string
  value: number
  leftText?: string
  rightText?: string
}

const scentProfile: ProfileItem[] = [
  {
    label: "상쾌함",
    value: 21,
    leftText: "은은한",
    rightText: "선명한",
  },
  {
    label: "온기",
    value: 68,
    leftText: "차가운",
    rightText: "따뜻한",
  },
  {
    label: "부드러움",
    value: 48,
    leftText: "날카로운",
    rightText: "부드러운",
  },
  {
    label: "깊이감",
    value: 82,
    leftText: "가벼운",
    rightText: "깊이 있는",
  },
  {
    label: "달콤함",
    value: 78,
    leftText: "담백한",
    rightText: "달콤한",
  },
]

export default scentProfile
