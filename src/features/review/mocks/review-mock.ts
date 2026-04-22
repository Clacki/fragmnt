import ScentMock01 from "@/assets/images/mocks/scent-mock-01.jpg"
export type ReviewData = {
  recommendation: {
    id: number
    name: string
    imageSrc: string
    imageAlt: string
    scentFamily: string
    category: string
    brand: string
  }
  rating: number
  feedback: string
}

export const mockReviewData = {
  recommendation: {
    id: 1,
    name: "Blossom Dream",
    imageSrc: ScentMock01,
    imageAlt: "Blossom Dream 향수 이미지",
    scentFamily: "WOODY WARM",
    category: "우디",
    brand: "fragmnt",
  },
  rating: 0,
  feedback: "",
}
