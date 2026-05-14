import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"

export const fragranceDetailMockMap: Record<
  number,
  ScentDetailResponse["data"]
> = {
  1: {
    id: 1,
    name: "블라썸 드림",
    eng_name: "Blossom Dream",
    description:
      "체리 블라썸과 머스크, 바닐라가 부드럽게 어우러진 향입니다. 사랑스럽고 포근한 분위기를 더해 주며, 공간 안에 로맨틱한 여운을 남깁니다.",
    categories: "floral",
    tags: ["warm", "soft", "sweet", "romantic"],
    keywords: ["벚꽃", "로맨틱", "포근함"],
    intensity: 76,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["체리 블라썸", "베르가못", "핑크 페퍼"],
        title: "탑 노트",
        description: "화사하게 피어나는 첫 꽃잎의 향",
      },
      middle: {
        items: ["로즈", "피오니", "화이트 머스크"],
        title: "미들 노트",
        description: "부드럽고 사랑스러운 플로럴 무드",
      },
      base: {
        items: ["바닐라", "샌달우드", "머스크"],
        title: "베이스 노트",
        description: "따뜻하고 포근하게 남는 잔향",
      },
    },
    profile: {
      depth: 54,
      warmth: 72,
      softness: 82,
      freshness: 48,
      sweetness: 76,
    },
    season: ["spring", "autumn"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "포근하고 로맨틱한 분위기를 만들기 좋은 침실",
      },
      {
        name: "Dressing Room",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "외출 전 부드러운 기분을 더해 주는 공간",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "은은한 꽃향으로 분위기를 밝히는 거실",
      },
    ],
    similar_scents: [
      {
        id: 5,
        name: "체리 베일",
        tags: ["sweet", "lovely"],
        description: "은은한 과실감과 꽃잎의 부드러움이 함께 감도는 향",
        thumbnail_url: "/mock-images/cherry-veil.jpg",
      },
      {
        id: 3,
        name: "화이트 피오니",
        tags: ["clear", "light"],
        description: "깨끗한 화이트 페탈의 느낌을 담은 플로럴 향",
        thumbnail_url: "/mock-images/white-peony.jpg",
      },
      {
        id: 29,
        name: "페어 벨벳",
        tags: ["lovely", "bright"],
        description: "배의 은은한 과즙감과 머스크가 만난 향",
        thumbnail_url: "/mock-images/pear-velvet.jpg",
      },
    ],
    thumbnail_url: "/mock-images/blossom-dream.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  2: {
    id: 2,
    name: "로즈 미스트",
    eng_name: "Rose Mist",
    description:
      "이슬 맺힌 장미 정원을 떠올리게 하는 향입니다. 우아하고 차분한 플로럴 톤이 공간을 정돈된 분위기로 채워 줍니다.",
    categories: "floral",
    tags: ["elegant", "calm", "floral", "tidy"],
    keywords: ["장미", "정돈", "우아함"],
    intensity: 64,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["로즈 워터", "리치", "베르가못"],
        title: "탑 노트",
        description: "촉촉하게 열리는 맑은 장미 향",
      },
      middle: {
        items: ["다마스크 로즈", "제라늄", "바이올렛"],
        title: "미들 노트",
        description: "우아하고 차분하게 이어지는 플로럴 중심",
      },
      base: {
        items: ["화이트 머스크", "시더우드", "앰버"],
        title: "베이스 노트",
        description: "정돈된 느낌으로 부드럽게 남는 잔향",
      },
    },
    profile: {
      depth: 48,
      warmth: 46,
      softness: 73,
      freshness: 58,
      sweetness: 42,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Powder Room",
        imageUrl:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        matchScore: 94,
        description: "정갈하고 우아한 인상을 더하기 좋은 공간",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "차분한 플로럴 향으로 휴식을 돕는 침실",
      },
      {
        name: "Entryway",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "첫인상을 부드럽고 깔끔하게 만드는 현관",
      },
    ],
    similar_scents: [
      {
        id: 4,
        name: "벨벳 블룸",
        tags: ["elegant", "deep"],
        description: "짙은 꽃잎의 질감처럼 풍부한 플로럴 향",
        thumbnail_url: "/mock-images/velvet-bloom.jpg",
      },
      {
        id: 6,
        name: "아이리스 페탈",
        tags: ["calm", "luxurious"],
        description: "파우더리한 아이리스가 주는 고급스러운 향",
        thumbnail_url: "/mock-images/iris-petal.jpg",
      },
      {
        id: 1,
        name: "블라썸 드림",
        tags: ["warm", "soft"],
        description: "체리 블라썸과 머스크, 바닐라가 어우러진 향",
        thumbnail_url: "/mock-images/blossom-dream.jpg",
      },
    ],
    thumbnail_url: "/mock-images/rose-mist.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  3: {
    id: 3,
    name: "화이트 피오니",
    eng_name: "White Peony",
    description:
      "깨끗한 화이트 페탈의 느낌을 담은 플로럴 향입니다. 가볍고 맑은 분위기가 공간에 부드럽게 스며들어 산뜻한 인상을 남깁니다.",
    categories: "floral",
    tags: ["clear", "light", "fresh", "clean"],
    keywords: ["화이트 플로럴", "산뜻함", "깨끗함"],
    intensity: 58,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["화이트 티", "페어", "레몬 제스트"],
        title: "탑 노트",
        description: "투명하고 산뜻하게 퍼지는 첫 향",
      },
      middle: {
        items: ["피오니", "프리지아", "뮤게"],
        title: "미들 노트",
        description: "깨끗한 꽃잎의 결이 느껴지는 중심 향",
      },
      base: {
        items: ["클린 머스크", "블론드 우드", "소프트 앰버"],
        title: "베이스 노트",
        description: "가볍고 맑은 잔향으로 마무리되는 향",
      },
    },
    profile: {
      depth: 34,
      warmth: 32,
      softness: 68,
      freshness: 76,
      sweetness: 38,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "깨끗하고 산뜻한 인상을 오래 유지하는 욕실",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 89,
        description: "가볍고 맑은 무드로 쉬기 좋은 침실",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 84,
        description: "부담 없이 산뜻한 집중감을 주는 작업 공간",
      },
    ],
    similar_scents: [
      {
        id: 14,
        name: "레몬 리넨",
        tags: ["clean", "light"],
        description: "세탁한 리넨과 레몬 껍질의 산뜻함이 느껴지는 향",
        thumbnail_url: "/mock-images/lemon-linen.jpg",
      },
      {
        id: 15,
        name: "베르가못 에어",
        tags: ["clear", "fresh"],
        description: "베르가못이 공기처럼 가볍게 퍼지는 향",
        thumbnail_url: "/mock-images/bergamot-air.jpg",
      },
      {
        id: 18,
        name: "코튼 베일",
        tags: ["subtle", "soft"],
        description: "얇은 코튼 천처럼 가볍고 부드러운 머스크 향",
        thumbnail_url: "/mock-images/cotton-veil.jpg",
      },
    ],
    thumbnail_url: "/mock-images/white-peony.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  4: {
    id: 4,
    name: "벨벳 블룸",
    eng_name: "Velvet Bloom",
    description:
      "짙은 꽃잎의 질감처럼 매끄럽고 풍부한 향입니다. 지나치게 화려하지 않지만 분명한 존재감을 지녀 공간을 우아하게 채워 줍니다.",
    categories: "floral",
    tags: ["elegant", "deep", "rich", "mature"],
    keywords: ["딥 플로럴", "우아함", "존재감"],
    intensity: 73,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["블랙커런트", "만다린", "핑크 페퍼"],
        title: "탑 노트",
        description: "풍부하고 선명하게 열리는 첫 인상",
      },
      middle: {
        items: ["다크 로즈", "자스민", "오키드"],
        title: "미들 노트",
        description: "짙은 꽃잎의 질감을 닮은 플로럴 향",
      },
      base: {
        items: ["패출리", "앰버", "머스크"],
        title: "베이스 노트",
        description: "깊고 우아하게 공간에 남는 잔향",
      },
    },
    profile: {
      depth: 74,
      warmth: 66,
      softness: 62,
      freshness: 28,
      sweetness: 58,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 93,
        description: "우아한 존재감으로 분위기를 잡아 주는 거실",
      },
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "깊이 있는 플로럴 무드가 잘 어울리는 라운지",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "차분하고 성숙한 분위기의 침실",
      },
    ],
    similar_scents: [
      {
        id: 2,
        name: "로즈 미스트",
        tags: ["elegant", "calm"],
        description: "이슬 맺힌 장미 정원을 떠올리게 하는 향",
        thumbnail_url: "/mock-images/rose-mist.jpg",
      },
      {
        id: 30,
        name: "골든 앰버",
        tags: ["warm", "luxurious"],
        description: "따뜻한 앰버가 고급스러운 무드를 더하는 향",
        thumbnail_url: "/mock-images/golden-amber.jpg",
      },
      {
        id: 10,
        name: "앰버 우드",
        tags: ["warm", "weighty"],
        description: "나무결 위로 앰버의 온기가 얹힌 향",
        thumbnail_url: "/mock-images/amber-wood.jpg",
      },
    ],
    thumbnail_url: "/mock-images/velvet-bloom.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  5: {
    id: 5,
    name: "체리 베일",
    eng_name: "Cherry Veil",
    description:
      "은은한 과실감과 꽃잎의 부드러움이 함께 감도는 향입니다. 발랄함보다는 섬세하고 여린 인상에 가까워 작은 공간에 잘 어울립니다.",
    categories: "floral",
    tags: ["sweet", "lovely", "delicate", "subtle"],
    keywords: ["체리", "섬세함", "작은 공간"],
    intensity: 62,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["체리", "라즈베리", "베르가못"],
        title: "탑 노트",
        description: "은은한 과실감이 가볍게 번지는 첫 향",
      },
      middle: {
        items: ["체리 블라썸", "피오니", "로즈 페탈"],
        title: "미들 노트",
        description: "여린 꽃잎처럼 부드럽게 이어지는 향",
      },
      base: {
        items: ["화이트 머스크", "바닐라", "블론드 우드"],
        title: "베이스 노트",
        description: "달콤하지만 가볍게 남는 섬세한 잔향",
      },
    },
    profile: {
      depth: 40,
      warmth: 52,
      softness: 78,
      freshness: 44,
      sweetness: 72,
    },
    season: ["spring", "autumn"],
    recommended_places: [
      {
        name: "Dressing Room",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "은은하고 사랑스러운 인상을 더하기 좋은 공간",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "작은 공간을 부드럽게 감싸는 침실",
      },
      {
        name: "Vanity Area",
        imageUrl:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "섬세한 무드를 더하는 개인 공간",
      },
    ],
    similar_scents: [
      {
        id: 1,
        name: "블라썸 드림",
        tags: ["warm", "soft"],
        description: "체리 블라썸과 머스크, 바닐라가 어우러진 향",
        thumbnail_url: "/mock-images/blossom-dream.jpg",
      },
      {
        id: 29,
        name: "페어 벨벳",
        tags: ["lovely", "bright"],
        description: "배의 과즙감과 부드러운 머스크가 만난 향",
        thumbnail_url: "/mock-images/pear-velvet.jpg",
      },
      {
        id: 3,
        name: "화이트 피오니",
        tags: ["clear", "light"],
        description: "깨끗한 화이트 페탈의 느낌을 담은 플로럴 향",
        thumbnail_url: "/mock-images/white-peony.jpg",
      },
    ],
    thumbnail_url: "/mock-images/cherry-veil.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  6: {
    id: 6,
    name: "아이리스 페탈",
    eng_name: "Iris Petal",
    description:
      "파우더리한 아이리스와 투명한 꽃향이 만나 차분하고 고급스러운 인상을 만들어 줍니다. 과하지 않게 정갈한 공간감이 돋보이는 향입니다.",
    categories: "floral",
    tags: ["calm", "luxurious", "soft", "neat"],
    keywords: ["아이리스", "파우더리", "정갈함"],
    intensity: 59,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["알데하이드", "베르가못", "화이트 티"],
        title: "탑 노트",
        description: "투명하고 정돈된 첫 인상",
      },
      middle: {
        items: ["아이리스", "바이올렛", "뮤게"],
        title: "미들 노트",
        description: "고운 파우더 질감의 차분한 플로럴 향",
      },
      base: {
        items: ["클린 머스크", "샌달우드", "소프트 파우더"],
        title: "베이스 노트",
        description: "부드럽고 고급스럽게 남는 잔향",
      },
    },
    profile: {
      depth: 46,
      warmth: 44,
      softness: 83,
      freshness: 52,
      sweetness: 28,
    },
    season: ["spring", "winter"],
    recommended_places: [
      {
        name: "Study Room",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 93,
        description: "차분하고 정갈한 집중감을 주는 서재",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "부드러운 파우더 향이 어울리는 침실",
      },
      {
        name: "Powder Room",
        imageUrl:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "고급스럽고 깨끗한 인상을 더하는 공간",
      },
    ],
    similar_scents: [
      {
        id: 24,
        name: "소프트 파우더",
        tags: ["cozy", "powdery"],
        description: "고운 파우더가 흩날리는 듯한 부드러운 향",
        thumbnail_url: "/mock-images/soft-powder.jpg",
      },
      {
        id: 25,
        name: "캐시미어 더스트",
        tags: ["cozy", "warm"],
        description: "캐시미어 니트의 포근한 촉감을 닮은 향",
        thumbnail_url: "/mock-images/cashmere-dust.jpg",
      },
      {
        id: 2,
        name: "로즈 미스트",
        tags: ["elegant", "calm"],
        description: "이슬 맺힌 장미 정원을 떠올리게 하는 향",
        thumbnail_url: "/mock-images/rose-mist.jpg",
      },
    ],
    thumbnail_url: "/mock-images/iris-petal.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  7: {
    id: 7,
    name: "세린 우즈",
    eng_name: "Serene Woods",
    description:
      "깊은 숲속을 천천히 거닐 때 느껴지는 고요함을 닮은 향입니다. 묵직하지만 답답하지 않고, 공간에 차분한 중심을 만들어 줍니다.",
    categories: "woody",
    tags: ["calm", "deep", "natural", "stable"],
    keywords: ["숲", "고요함", "안정감"],
    intensity: 72,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["사이프러스", "베르가못", "그린 리프"],
        title: "탑 노트",
        description: "숲의 입구처럼 차분하게 열리는 향",
      },
      middle: {
        items: ["시더우드", "파인 니들", "세이지"],
        title: "미들 노트",
        description: "깊은 나무결과 허브가 만드는 안정감",
      },
      base: {
        items: ["베티버", "오크모스", "머스크"],
        title: "베이스 노트",
        description: "고요하고 자연스럽게 남는 우디 잔향",
      },
    },
    profile: {
      depth: 76,
      warmth: 48,
      softness: 42,
      freshness: 52,
      sweetness: 14,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Study Room",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "차분한 중심을 잡아 주는 서재",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "자연스러운 안정감을 더하는 거실",
      },
      {
        name: "Reading Nook",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "조용한 독서 시간과 잘 어울리는 공간",
      },
    ],
    similar_scents: [
      {
        id: 9,
        name: "시더 아워",
        tags: ["dry", "tidy"],
        description: "건조한 나무결과 은은한 허브가 조화로운 향",
        thumbnail_url: "/mock-images/cedar-hour.jpg",
      },
      {
        id: 11,
        name: "오크 리추얼",
        tags: ["weighty", "deep"],
        description: "오크와 베티버의 묵직한 구조감이 느껴지는 향",
        thumbnail_url: "/mock-images/oak-ritual.jpg",
      },
      {
        id: 21,
        name: "그린 포즈",
        tags: ["fresh", "natural"],
        description: "식물의 숨을 들이마시는 순간을 닮은 향",
        thumbnail_url: "/mock-images/green-pause.jpg",
      },
    ],
    thumbnail_url: "/mock-images/serene-woods.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  8: {
    id: 8,
    name: "샌달 콰이어트",
    eng_name: "Sandal Quiet",
    description:
      "부드러운 샌달우드가 중심이 되는 향으로, 과하게 무겁지 않고 따뜻한 안정감을 오래 남깁니다. 편안한 휴식 공간에 잘 어울립니다.",
    categories: "woody",
    tags: ["cozy", "soft", "calm", "warm"],
    keywords: ["샌달우드", "휴식", "따뜻함"],
    intensity: 68,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["카다멈", "베르가못", "화이트 페퍼"],
        title: "탑 노트",
        description: "은은한 스파이스로 부드럽게 열리는 향",
      },
      middle: {
        items: ["샌달우드", "시더우드", "아이리스"],
        title: "미들 노트",
        description: "크리미한 나무결이 중심을 이루는 향",
      },
      base: {
        items: ["머스크", "앰버", "통카빈"],
        title: "베이스 노트",
        description: "따뜻하고 포근하게 오래 남는 잔향",
      },
    },
    profile: {
      depth: 62,
      warmth: 74,
      softness: 76,
      freshness: 24,
      sweetness: 34,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "따뜻하고 편안한 휴식감을 주는 침실",
      },
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "부드러운 우디 향이 자연스럽게 퍼지는 라운지",
      },
      {
        name: "Reading Nook",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "느린 시간을 보내기 좋은 조용한 공간",
      },
    ],
    similar_scents: [
      {
        id: 10,
        name: "앰버 우드",
        tags: ["warm", "weighty"],
        description: "나무결 위로 앰버의 따뜻한 빛이 얹힌 향",
        thumbnail_url: "/mock-images/amber-wood.jpg",
      },
      {
        id: 25,
        name: "캐시미어 더스트",
        tags: ["cozy", "warm"],
        description: "캐시미어 니트의 포근한 촉감을 닮은 향",
        thumbnail_url: "/mock-images/cashmere-dust.jpg",
      },
      {
        id: 17,
        name: "소프트 리넨",
        tags: ["clean", "cozy"],
        description: "깨끗한 머스크와 리넨의 포근함이 중심인 향",
        thumbnail_url: "/mock-images/soft-linen.jpg",
      },
    ],
    thumbnail_url: "/mock-images/sandal-quiet.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  9: {
    id: 9,
    name: "시더 아워",
    eng_name: "Cedar Hour",
    description:
      "건조한 나무결과 은은한 허브가 조화롭게 이어지는 향입니다. 단정하고 절제된 분위기가 공간을 안정적으로 정리해 줍니다.",
    categories: "woody",
    tags: ["dry", "tidy", "deep", "serene"],
    keywords: ["시더우드", "단정함", "허브"],
    intensity: 66,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["베르가못", "클라리 세이지", "레몬 peel"],
        title: "탑 노트",
        description: "건조하고 깔끔하게 시작되는 허브 향",
      },
      middle: {
        items: ["시더우드", "로즈마리", "사이프러스"],
        title: "미들 노트",
        description: "단정한 나무결이 중심을 잡는 향",
      },
      base: {
        items: ["베티버", "머스크", "드라이 앰버"],
        title: "베이스 노트",
        description: "절제된 무드로 안정적으로 남는 잔향",
      },
    },
    profile: {
      depth: 68,
      warmth: 42,
      softness: 38,
      freshness: 46,
      sweetness: 12,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "단정하고 절제된 집중감을 주는 작업 공간",
      },
      {
        name: "Study Room",
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "차분하게 생각을 정리하기 좋은 서재",
      },
      {
        name: "Entryway",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
        matchScore: 84,
        description: "공간의 첫인상을 깔끔하게 정리해 주는 현관",
      },
    ],
    similar_scents: [
      {
        id: 7,
        name: "세린 우즈",
        tags: ["calm", "deep"],
        description: "깊은 숲속의 고요함을 닮은 우디 향",
        thumbnail_url: "/mock-images/serene-woods.jpg",
      },
      {
        id: 11,
        name: "오크 리추얼",
        tags: ["weighty", "deep"],
        description: "오크와 베티버의 묵직한 구조감이 느껴지는 향",
        thumbnail_url: "/mock-images/oak-ritual.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        tags: ["herbal", "clear"],
        description: "바질과 허브의 선명한 초록향이 느껴지는 향",
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
    ],
    thumbnail_url: "/mock-images/cedar-hour.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  10: {
    id: 10,
    name: "앰버 우드",
    eng_name: "Amber Wood",
    description:
      "나무의 단단한 결 위로 앰버의 따뜻한 빛이 얹힌 향입니다. 공간을 깊고 안정적으로 감싸면서도 지나치게 무겁지 않은 균형이 특징입니다.",
    categories: "woody",
    tags: ["warm", "weighty", "luxurious", "stable"],
    keywords: ["앰버", "우디", "안정감"],
    intensity: 74,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["베르가못", "넛맥", "엘레미"],
        title: "탑 노트",
        description: "따뜻한 빛감으로 열리는 스파이시 우디 향",
      },
      middle: {
        items: ["시더우드", "샌달우드", "라브다넘"],
        title: "미들 노트",
        description: "단단한 나무결과 앰버가 겹쳐지는 중심 향",
      },
      base: {
        items: ["앰버", "바닐라 우드", "머스크"],
        title: "베이스 노트",
        description: "깊고 안정적으로 감싸는 따뜻한 잔향",
      },
    },
    profile: {
      depth: 78,
      warmth: 82,
      softness: 56,
      freshness: 18,
      sweetness: 42,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "깊고 안정적인 분위기를 만들기 좋은 거실",
      },
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 92,
        description: "따뜻한 무드가 오래 머무는 라운지",
      },
      {
        name: "Dining Room",
        imageUrl:
          "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "공간에 고급스러운 온기를 더하는 다이닝룸",
      },
    ],
    similar_scents: [
      {
        id: 30,
        name: "골든 앰버",
        tags: ["warm", "luxurious"],
        description: "따뜻한 햇빛이 오래 머문 듯한 앰버 향",
        thumbnail_url: "/mock-images/golden-amber.jpg",
      },
      {
        id: 8,
        name: "샌달 콰이어트",
        tags: ["cozy", "soft"],
        description: "부드러운 샌달우드가 중심이 되는 향",
        thumbnail_url: "/mock-images/sandal-quiet.jpg",
      },
      {
        id: 27,
        name: "스파이스 베일",
        tags: ["exotic", "warm"],
        description: "클로브와 앰버가 따뜻하게 겹쳐지는 향",
        thumbnail_url: "/mock-images/spice-veil.jpg",
      },
    ],
    thumbnail_url: "/mock-images/amber-wood.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  11: {
    id: 11,
    name: "오크 리추얼",
    eng_name: "Oak Ritual",
    description:
      "오크와 베티버의 묵직한 구조감이 공간을 차분하게 눌러 주는 향입니다. 조용한 성찰과 몰입이 필요한 순간에 특히 잘 어울립니다.",
    categories: "woody",
    tags: ["weighty", "deep", "restrained", "focused"],
    keywords: ["오크", "몰입", "성찰"],
    intensity: 79,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["블랙 페퍼", "베르가못", "사이프러스"],
        title: "탑 노트",
        description: "절제된 스파이스와 우디함으로 열리는 향",
      },
      middle: {
        items: ["오크우드", "베티버", "시더우드"],
        title: "미들 노트",
        description: "묵직한 구조감이 중심을 잡는 향",
      },
      base: {
        items: ["패출리", "오크모스", "드라이 머스크"],
        title: "베이스 노트",
        description: "차분하고 깊게 남는 우디 잔향",
      },
    },
    profile: {
      depth: 84,
      warmth: 46,
      softness: 30,
      freshness: 26,
      sweetness: 10,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Study Room",
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "몰입과 성찰이 필요한 순간에 잘 맞는 서재",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 92,
        description: "공간을 차분하게 눌러 주는 작업 공간",
      },
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "무게감 있는 분위기를 만들기 좋은 라운지",
      },
    ],
    similar_scents: [
      {
        id: 12,
        name: "스모크드 팀버",
        tags: ["smoky", "intense"],
        description: "그을린 나무결과 스파이스가 더해진 향",
        thumbnail_url: "/mock-images/smoked-timber.jpg",
      },
      {
        id: 7,
        name: "세린 우즈",
        tags: ["calm", "deep"],
        description: "깊은 숲속의 고요함을 닮은 향",
        thumbnail_url: "/mock-images/serene-woods.jpg",
      },
      {
        id: 9,
        name: "시더 아워",
        tags: ["dry", "tidy"],
        description: "건조한 나무결과 은은한 허브가 조화로운 향",
        thumbnail_url: "/mock-images/cedar-hour.jpg",
      },
    ],
    thumbnail_url: "/mock-images/oak-ritual.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  12: {
    id: 12,
    name: "스모크드 팀버",
    eng_name: "Smoked Timber",
    description:
      "나무의 그을린 결 위에 은은한 스파이스가 더해진 향입니다. 지나치게 강하지 않지만 분명한 존재감으로 공간의 인상을 또렷하게 바꿔 줍니다.",
    categories: "woody",
    tags: ["smoky", "intense", "deep", "weighty"],
    keywords: ["스모키", "스파이스", "존재감"],
    intensity: 83,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["블랙 페퍼", "클로브", "베르가못"],
        title: "탑 노트",
        description: "스파이스의 선명한 긴장감으로 시작되는 향",
      },
      middle: {
        items: ["스모크드 우드", "시더", "가이악 우드"],
        title: "미들 노트",
        description: "그을린 나무결의 깊은 존재감",
      },
      base: {
        items: ["레더", "패출리", "앰버"],
        title: "베이스 노트",
        description: "짙고 선명하게 남는 스모키 잔향",
      },
    },
    profile: {
      depth: 88,
      warmth: 64,
      softness: 24,
      freshness: 12,
      sweetness: 18,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "공간의 인상을 또렷하게 바꾸는 라운지",
      },
      {
        name: "Dining Room",
        imageUrl:
          "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "깊은 무드와 존재감이 필요한 다이닝룸",
      },
      {
        name: "Study Room",
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
        matchScore: 84,
        description: "무게감 있는 분위기를 만드는 서재",
      },
    ],
    similar_scents: [
      {
        id: 11,
        name: "오크 리추얼",
        tags: ["weighty", "deep"],
        description: "오크와 베티버의 묵직한 구조감이 느껴지는 향",
        thumbnail_url: "/mock-images/oak-ritual.jpg",
      },
      {
        id: 27,
        name: "스파이스 베일",
        tags: ["exotic", "warm"],
        description: "클로브와 앰버가 따뜻하게 겹쳐지는 향",
        thumbnail_url: "/mock-images/spice-veil.jpg",
      },
      {
        id: 10,
        name: "앰버 우드",
        tags: ["warm", "weighty"],
        description: "나무결 위로 앰버의 온기가 얹힌 향",
        thumbnail_url: "/mock-images/amber-wood.jpg",
      },
    ],
    thumbnail_url: "/mock-images/smoked-timber.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  13: {
    id: 13,
    name: "시트러스 던",
    eng_name: "Citrus Dawn",
    description:
      "이른 아침의 깨끗한 공기처럼 밝고 선명한 시트러스 향입니다. 공간을 산뜻하게 환기시키며 가벼운 에너지를 더해 줍니다.",
    categories: "citrus",
    tags: ["refreshing", "bright", "light", "clean"],
    keywords: ["아침", "환기", "상쾌함"],
    intensity: 57,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["레몬", "오렌지", "그레이프프루트"],
        title: "탑 노트",
        description: "밝고 선명하게 터지는 시트러스 향",
      },
      middle: {
        items: ["네롤리", "그린 티", "민트"],
        title: "미들 노트",
        description: "가볍고 맑은 에너지가 이어지는 향",
      },
      base: {
        items: ["화이트 머스크", "블론드 우드", "앰버"],
        title: "베이스 노트",
        description: "깨끗하고 산뜻하게 정리되는 잔향",
      },
    },
    profile: {
      depth: 22,
      warmth: 24,
      softness: 36,
      freshness: 88,
      sweetness: 34,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Kitchen",
        imageUrl:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "밝고 산뜻하게 환기되는 주방",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "가벼운 에너지를 더하는 작업 공간",
      },
      {
        name: "Entryway",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "상쾌한 첫인상을 만드는 현관",
      },
    ],
    similar_scents: [
      {
        id: 15,
        name: "베르가못 에어",
        tags: ["clear", "fresh"],
        description: "베르가못이 공기처럼 가볍게 퍼지는 향",
        thumbnail_url: "/mock-images/bergamot-air.jpg",
      },
      {
        id: 16,
        name: "그레이프프루트 글로우",
        tags: ["cheerful", "bright"],
        description: "그레이프프루트의 쌉싸름한 상큼함이 느껴지는 향",
        thumbnail_url: "/mock-images/grapefruit-glow.jpg",
      },
      {
        id: 14,
        name: "레몬 리넨",
        tags: ["clean", "light"],
        description: "리넨과 레몬 껍질의 산뜻함이 만난 향",
        thumbnail_url: "/mock-images/lemon-linen.jpg",
      },
    ],
    thumbnail_url: "/mock-images/citrus-dawn.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  14: {
    id: 14,
    name: "레몬 리넨",
    eng_name: "Lemon Linen",
    description:
      "막 세탁한 리넨에 레몬 껍질의 산뜻함이 얹힌 듯한 향입니다. 깨끗하고 가벼운 분위기로 일상 공간을 환하게 정돈해 줍니다.",
    categories: "citrus",
    tags: ["clean", "light", "fresh", "tidy"],
    keywords: ["리넨", "세탁", "청결함"],
    intensity: 52,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["레몬 제스트", "라임", "베르가못"],
        title: "탑 노트",
        description: "레몬 껍질처럼 산뜻하게 퍼지는 첫 향",
      },
      middle: {
        items: ["린넨 어코드", "화이트 티", "네롤리"],
        title: "미들 노트",
        description: "막 세탁한 천처럼 깨끗한 중심 향",
      },
      base: {
        items: ["클린 머스크", "코튼", "블론드 우드"],
        title: "베이스 노트",
        description: "가볍고 보송하게 남는 잔향",
      },
    },
    profile: {
      depth: 18,
      warmth: 20,
      softness: 58,
      freshness: 84,
      sweetness: 22,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Laundry Room",
        imageUrl:
          "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "보송하고 깨끗한 인상을 살리는 세탁 공간",
      },
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 92,
        description: "청결하고 산뜻한 무드가 어울리는 욕실",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "가볍고 깨끗한 휴식감을 주는 침실",
      },
    ],
    similar_scents: [
      {
        id: 17,
        name: "소프트 리넨",
        tags: ["clean", "cozy"],
        description: "깨끗한 머스크와 막 마른 리넨의 포근함이 중심인 향",
        thumbnail_url: "/mock-images/soft-linen.jpg",
      },
      {
        id: 20,
        name: "클린 베일",
        tags: ["clean", "daily"],
        description: "깨끗한 비누 향과 머스크가 가볍게 겹쳐지는 향",
        thumbnail_url: "/mock-images/clean-veil.jpg",
      },
      {
        id: 13,
        name: "시트러스 던",
        tags: ["refreshing", "bright"],
        description: "이른 아침의 깨끗한 공기 같은 시트러스 향",
        thumbnail_url: "/mock-images/citrus-dawn.jpg",
      },
    ],
    thumbnail_url: "/mock-images/lemon-linen.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  15: {
    id: 15,
    name: "베르가못 에어",
    eng_name: "Bergamot Air",
    description:
      "베르가못의 투명한 시트러스가 공기처럼 가볍게 퍼지는 향입니다. 밝고 맑은 인상으로 답답한 공간을 환기해 줍니다.",
    categories: "citrus",
    tags: ["clear", "fresh", "transparent", "light"],
    keywords: ["베르가못", "공기감", "투명함"],
    intensity: 54,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["베르가못", "유자", "레몬"],
        title: "탑 노트",
        description: "투명한 시트러스가 가볍게 열리는 향",
      },
      middle: {
        items: ["그린 티", "네롤리", "페티그레인"],
        title: "미들 노트",
        description: "맑고 산뜻한 공기감이 이어지는 향",
      },
      base: {
        items: ["화이트 머스크", "시더우드", "앰버"],
        title: "베이스 노트",
        description: "가볍고 깨끗하게 사라지는 잔향",
      },
    },
    profile: {
      depth: 20,
      warmth: 18,
      softness: 44,
      freshness: 90,
      sweetness: 24,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "답답함을 덜어 주고 맑은 집중감을 주는 공간",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 89,
        description: "가볍게 환기된 분위기를 만드는 거실",
      },
      {
        name: "Balcony",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "바람이 드는 공간과 잘 어울리는 향",
      },
    ],
    similar_scents: [
      {
        id: 13,
        name: "시트러스 던",
        tags: ["refreshing", "bright"],
        description: "밝고 선명한 시트러스가 공간을 환기하는 향",
        thumbnail_url: "/mock-images/citrus-dawn.jpg",
      },
      {
        id: 16,
        name: "그레이프프루트 글로우",
        tags: ["cheerful", "bright"],
        description: "쌉싸름한 상큼함이 공간에 생기를 더하는 향",
        thumbnail_url: "/mock-images/grapefruit-glow.jpg",
      },
      {
        id: 3,
        name: "화이트 피오니",
        tags: ["clear", "light"],
        description: "깨끗한 화이트 페탈의 느낌을 담은 향",
        thumbnail_url: "/mock-images/white-peony.jpg",
      },
    ],
    thumbnail_url: "/mock-images/bergamot-air.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  16: {
    id: 16,
    name: "그레이프프루트 글로우",
    eng_name: "Grapefruit Glow",
    description:
      "그레이프프루트 특유의 쌉싸름한 상큼함이 공간에 생기를 더하는 향입니다. 밝고 경쾌한 무드가 필요한 낮 시간에 특히 잘 어울립니다.",
    categories: "citrus",
    tags: ["cheerful", "bright", "refreshing", "vibrant"],
    keywords: ["자몽", "생기", "낮 시간"],
    intensity: 56,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["그레이프프루트", "오렌지", "라임"],
        title: "탑 노트",
        description: "쌉싸름하고 경쾌하게 터지는 첫 향",
      },
      middle: {
        items: ["네롤리", "민트", "그린 티"],
        title: "미들 노트",
        description: "밝고 생기 있는 무드가 이어지는 향",
      },
      base: {
        items: ["화이트 머스크", "시더우드", "앰버"],
        title: "베이스 노트",
        description: "깨끗하고 가볍게 마무리되는 잔향",
      },
    },
    profile: {
      depth: 24,
      warmth: 22,
      softness: 34,
      freshness: 86,
      sweetness: 38,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Kitchen",
        imageUrl:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
        matchScore: 94,
        description: "상쾌하고 생기 있는 무드가 어울리는 주방",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "낮 시간의 경쾌한 집중감을 더하는 공간",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "밝고 가벼운 에너지를 주는 거실",
      },
    ],
    similar_scents: [
      {
        id: 13,
        name: "시트러스 던",
        tags: ["refreshing", "bright"],
        description: "밝고 선명한 시트러스가 공간을 환기하는 향",
        thumbnail_url: "/mock-images/citrus-dawn.jpg",
      },
      {
        id: 15,
        name: "베르가못 에어",
        tags: ["clear", "fresh"],
        description: "베르가못의 투명한 시트러스가 퍼지는 향",
        thumbnail_url: "/mock-images/bergamot-air.jpg",
      },
      {
        id: 28,
        name: "오션 브레스",
        tags: ["refreshing", "cool"],
        description: "바닷바람처럼 시원하고 깨끗한 향",
        thumbnail_url: "/mock-images/ocean-breath.jpg",
      },
    ],
    thumbnail_url: "/mock-images/grapefruit-glow.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  17: {
    id: 17,
    name: "소프트 리넨",
    eng_name: "Soft Linen",
    description:
      "깨끗한 머스크와 막 마른 리넨의 포근함이 중심인 향입니다. 과하지 않게 부드러운 존재감으로 일상 공간을 편안하게 만들어 줍니다.",
    categories: "musk",
    tags: ["clean", "cozy", "soft", "subtle"],
    keywords: ["리넨", "머스크", "일상"],
    intensity: 49,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["화이트 티", "알데하이드", "베르가못"],
        title: "탑 노트",
        description: "깨끗하고 보송하게 열리는 첫 향",
      },
      middle: {
        items: ["린넨 어코드", "코튼", "뮤게"],
        title: "미들 노트",
        description: "막 마른 리넨처럼 포근한 중심 향",
      },
      base: {
        items: ["클린 머스크", "화이트 우드", "앰버"],
        title: "베이스 노트",
        description: "부드럽고 편안하게 남는 머스크 잔향",
      },
    },
    profile: {
      depth: 24,
      warmth: 38,
      softness: 86,
      freshness: 68,
      sweetness: 18,
    },
    season: ["spring", "summer", "autumn"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "깨끗하고 포근한 휴식감을 주는 침실",
      },
      {
        name: "Laundry Room",
        imageUrl:
          "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "보송한 리넨 무드가 잘 어울리는 공간",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 85,
        description: "일상 공간을 편안하게 감싸는 거실",
      },
    ],
    similar_scents: [
      {
        id: 18,
        name: "코튼 베일",
        tags: ["subtle", "soft"],
        description: "얇은 코튼 천처럼 가볍고 부드러운 머스크 향",
        thumbnail_url: "/mock-images/cotton-veil.jpg",
      },
      {
        id: 20,
        name: "클린 베일",
        tags: ["clean", "daily"],
        description: "비누 향과 머스크가 가볍게 겹쳐지는 향",
        thumbnail_url: "/mock-images/clean-veil.jpg",
      },
      {
        id: 14,
        name: "레몬 리넨",
        tags: ["clean", "light"],
        description: "세탁한 리넨과 레몬의 산뜻함이 느껴지는 향",
        thumbnail_url: "/mock-images/lemon-linen.jpg",
      },
    ],
    thumbnail_url: "/mock-images/soft-linen.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  18: {
    id: 18,
    name: "코튼 베일",
    eng_name: "Cotton Veil",
    description:
      "얇은 코튼 천처럼 가볍고 부드러운 머스크 향입니다. 눈에 띄기보다 배경처럼 공간을 편안하게 감싸 주는 데 강점이 있습니다.",
    categories: "musk",
    tags: ["subtle", "soft", "clean", "light"],
    keywords: ["코튼", "은은함", "배경 향"],
    intensity: 44,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["알데하이드", "화이트 티", "베르가못"],
        title: "탑 노트",
        description: "가볍고 깨끗하게 스치는 첫 향",
      },
      middle: {
        items: ["코튼", "뮤게", "소프트 플로럴"],
        title: "미들 노트",
        description: "얇은 천처럼 부드럽게 감싸는 향",
      },
      base: {
        items: ["화이트 머스크", "블론드 우드", "앰버"],
        title: "베이스 노트",
        description: "은은하고 편안하게 남는 잔향",
      },
    },
    profile: {
      depth: 18,
      warmth: 28,
      softness: 88,
      freshness: 62,
      sweetness: 16,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "은은한 향으로 편안하게 감싸는 침실",
      },
      {
        name: "Nursery Room",
        imageUrl:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        matchScore: 89,
        description: "자극적이지 않은 부드러운 무드의 공간",
      },
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 85,
        description: "깨끗하고 가벼운 인상을 주는 욕실",
      },
    ],
    similar_scents: [
      {
        id: 17,
        name: "소프트 리넨",
        tags: ["clean", "cozy"],
        description: "깨끗한 머스크와 리넨의 포근함이 중심인 향",
        thumbnail_url: "/mock-images/soft-linen.jpg",
      },
      {
        id: 19,
        name: "퓨어 허시",
        tags: ["minimal", "clean"],
        description: "소리 없이 가까워지는 듯한 깨끗한 머스크 향",
        thumbnail_url: "/mock-images/pure-hush.jpg",
      },
      {
        id: 3,
        name: "화이트 피오니",
        tags: ["clear", "light"],
        description: "깨끗한 화이트 페탈의 느낌을 담은 플로럴 향",
        thumbnail_url: "/mock-images/white-peony.jpg",
      },
    ],
    thumbnail_url: "/mock-images/cotton-veil.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  19: {
    id: 19,
    name: "퓨어 허시",
    eng_name: "Pure Hush",
    description:
      "소리 없이 가까워지는 듯한 깨끗한 머스크 향입니다. 미니멀하고 정제된 공간에 잘 어울리며, 존재감은 적지만 분위기를 확실히 다듬어 줍니다.",
    categories: "musk",
    tags: ["minimal", "clean", "quiet", "restrained"],
    keywords: ["미니멀", "고요함", "정제됨"],
    intensity: 41,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["화이트 티", "알데하이드", "베르가못"],
        title: "탑 노트",
        description: "조용하고 깨끗하게 열리는 첫 향",
      },
      middle: {
        items: ["클린 코튼", "아이리스", "뮤게"],
        title: "미들 노트",
        description: "미니멀하게 정제된 부드러운 향",
      },
      base: {
        items: ["화이트 머스크", "앰버", "블론드 우드"],
        title: "베이스 노트",
        description: "존재감은 낮지만 선명하게 정돈되는 잔향",
      },
    },
    profile: {
      depth: 16,
      warmth: 22,
      softness: 76,
      freshness: 66,
      sweetness: 10,
    },
    season: ["spring", "summer", "autumn"],
    recommended_places: [
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "미니멀하고 정제된 집중감을 주는 작업 공간",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "조용한 휴식감을 주는 침실",
      },
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 87,
        description: "깨끗한 분위기를 유지하기 좋은 욕실",
      },
    ],
    similar_scents: [
      {
        id: 18,
        name: "코튼 베일",
        tags: ["subtle", "soft"],
        description: "얇은 코튼 천처럼 가볍고 부드러운 머스크 향",
        thumbnail_url: "/mock-images/cotton-veil.jpg",
      },
      {
        id: 20,
        name: "클린 베일",
        tags: ["clean", "daily"],
        description: "비누 향과 머스크가 가볍게 겹쳐지는 향",
        thumbnail_url: "/mock-images/clean-veil.jpg",
      },
      {
        id: 14,
        name: "레몬 리넨",
        tags: ["clean", "light"],
        description: "세탁한 리넨과 레몬의 산뜻함이 느껴지는 향",
        thumbnail_url: "/mock-images/lemon-linen.jpg",
      },
    ],
    thumbnail_url: "/mock-images/pure-hush.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  20: {
    id: 20,
    name: "클린 베일",
    eng_name: "Clean Veil",
    description:
      "깨끗한 비누 향과 머스크가 가볍게 겹쳐지는 향입니다. 무난하지만 지루하지 않은 인상으로 어떤 공간에도 편안하게 어울립니다.",
    categories: "musk",
    tags: ["clean", "daily", "soft", "comfortable"],
    keywords: ["비누", "데일리", "편안함"],
    intensity: 46,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["솝 어코드", "베르가못", "알데하이드"],
        title: "탑 노트",
        description: "비누처럼 깨끗하게 시작되는 향",
      },
      middle: {
        items: ["코튼", "화이트 플로럴", "뮤게"],
        title: "미들 노트",
        description: "부드럽고 무난하게 이어지는 데일리 무드",
      },
      base: {
        items: ["클린 머스크", "앰버", "화이트 우드"],
        title: "베이스 노트",
        description: "편안하고 깨끗하게 남는 잔향",
      },
    },
    profile: {
      depth: 20,
      warmth: 30,
      softness: 80,
      freshness: 72,
      sweetness: 14,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "비누처럼 깨끗한 인상이 잘 어울리는 욕실",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "무난하고 편안한 휴식감을 주는 침실",
      },
      {
        name: "Entryway",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "누구에게나 편안한 첫인상을 주는 현관",
      },
    ],
    similar_scents: [
      {
        id: 17,
        name: "소프트 리넨",
        tags: ["clean", "cozy"],
        description: "깨끗한 머스크와 리넨의 포근함이 중심인 향",
        thumbnail_url: "/mock-images/soft-linen.jpg",
      },
      {
        id: 19,
        name: "퓨어 허시",
        tags: ["minimal", "clean"],
        description: "소리 없이 가까워지는 듯한 깨끗한 머스크 향",
        thumbnail_url: "/mock-images/pure-hush.jpg",
      },
      {
        id: 14,
        name: "레몬 리넨",
        tags: ["clean", "light"],
        description: "세탁한 리넨과 레몬의 산뜻함이 느껴지는 향",
        thumbnail_url: "/mock-images/lemon-linen.jpg",
      },
    ],
    thumbnail_url: "/mock-images/clean-veil.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  21: {
    id: 21,
    name: "그린 포즈",
    eng_name: "Green Pause",
    description:
      "잠시 창문을 열고 식물의 숨을 들이마시는 순간을 닮은 향입니다. 생기 있지만 과하게 날카롭지 않아 공간에 자연스러운 여유를 만들어 줍니다.",
    categories: "green",
    tags: ["fresh", "natural", "airy", "comfortable"],
    keywords: ["플랜테리어", "산책", "싱그러움"],
    intensity: 61,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["그린 리프", "바질", "베르가못"],
        title: "탑 노트",
        description: "싱그럽게 열리는 초록빛 향",
      },
      middle: {
        items: ["무화과잎", "세이지", "갈바넘"],
        title: "미들 노트",
        description: "식물의 결이 살아 있는 향",
      },
      base: {
        items: ["시더우드", "머스크", "모스"],
        title: "베이스 노트",
        description: "자연스럽게 잔향을 남기는 향",
      },
    },
    profile: {
      depth: 43,
      warmth: 28,
      softness: 46,
      freshness: 79,
      sweetness: 17,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "식물이 많은 거실과 잘 어울리는 향",
      },
      {
        name: "Sunroom",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        matchScore: 92,
        description: "햇살과 초록빛이 머무는 공간",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "숨이 트이는 느낌을 주는 작업 공간",
      },
    ],
    similar_scents: [
      {
        id: 22,
        name: "피그 가든",
        tags: ["fresh", "elegant"],
        description: "무화과잎의 싱그러움과 크리미한 과육 느낌이 조화로운 향",
        thumbnail_url: "/mock-images/fig-garden.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        tags: ["herbal", "clear"],
        description: "바질과 허브의 선명한 초록향이 느껴지는 향",
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
      {
        id: 7,
        name: "세린 우즈",
        tags: ["calm", "deep"],
        description: "깊은 숲속의 고요함을 닮은 우디 향",
        thumbnail_url: "/mock-images/serene-woods.jpg",
      },
    ],
    thumbnail_url: "/mock-images/green-pause.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  22: {
    id: 22,
    name: "피그 가든",
    eng_name: "Fig Garden",
    description:
      "무화과잎의 싱그러움과 크리미한 과육 느낌이 조화로운 향입니다. 자연스럽고 세련된 무드로 공간에 여유로운 결을 더해 줍니다.",
    categories: "green",
    tags: ["fresh", "elegant", "natural", "relaxed"],
    keywords: ["무화과", "여유", "세련됨"],
    intensity: 67,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["무화과잎", "베르가못", "그린 리프"],
        title: "탑 노트",
        description: "싱그럽고 부드럽게 열리는 초록 향",
      },
      middle: {
        items: ["피그 밀크", "세이지", "아이리스"],
        title: "미들 노트",
        description: "크리미한 과육감과 식물의 결이 어우러진 향",
      },
      base: {
        items: ["시더우드", "머스크", "코코넛 우드"],
        title: "베이스 노트",
        description: "세련되고 여유롭게 남는 잔향",
      },
    },
    profile: {
      depth: 48,
      warmth: 38,
      softness: 62,
      freshness: 72,
      sweetness: 36,
    },
    season: ["spring", "summer", "autumn"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "자연스럽고 세련된 여유를 더하는 거실",
      },
      {
        name: "Sunroom",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        matchScore: 93,
        description: "초록빛과 햇살이 어울리는 공간",
      },
      {
        name: "Balcony",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "식물과 바람이 함께하는 휴식 공간",
      },
    ],
    similar_scents: [
      {
        id: 21,
        name: "그린 포즈",
        tags: ["fresh", "natural"],
        description: "식물의 숨을 들이마시는 순간을 닮은 향",
        thumbnail_url: "/mock-images/green-pause.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        tags: ["herbal", "clear"],
        description: "바질과 허브의 선명한 초록향이 느껴지는 향",
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
      {
        id: 8,
        name: "샌달 콰이어트",
        tags: ["cozy", "soft"],
        description: "부드러운 샌달우드가 중심이 되는 향",
        thumbnail_url: "/mock-images/sandal-quiet.jpg",
      },
    ],
    thumbnail_url: "/mock-images/fig-garden.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  23: {
    id: 23,
    name: "바질 셰이드",
    eng_name: "Basil Shade",
    description:
      "바질과 허브의 선명한 초록향이 공간을 시원하게 정리해 줍니다. 개운하고 또렷한 분위기를 좋아하는 취향에 잘 맞는 향입니다.",
    categories: "green",
    tags: ["herbal", "clear", "airy", "dry"],
    keywords: ["바질", "허브", "개운함"],
    intensity: 63,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["바질", "라임", "그린 리프"],
        title: "탑 노트",
        description: "허브의 선명함이 시원하게 열리는 향",
      },
      middle: {
        items: ["로즈마리", "세이지", "페티그레인"],
        title: "미들 노트",
        description: "또렷하고 개운한 초록빛 중심 향",
      },
      base: {
        items: ["시더우드", "베티버", "머스크"],
        title: "베이스 노트",
        description: "건조하고 깔끔하게 남는 허벌 잔향",
      },
    },
    profile: {
      depth: 36,
      warmth: 20,
      softness: 34,
      freshness: 84,
      sweetness: 8,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Kitchen",
        imageUrl:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "허브의 개운함이 잘 어울리는 주방",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "시원하게 정리되는 집중감을 주는 작업 공간",
      },
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "개운하고 맑은 인상을 주는 욕실",
      },
    ],
    similar_scents: [
      {
        id: 21,
        name: "그린 포즈",
        tags: ["fresh", "natural"],
        description: "식물의 숨을 들이마시는 순간을 닮은 향",
        thumbnail_url: "/mock-images/green-pause.jpg",
      },
      {
        id: 22,
        name: "피그 가든",
        tags: ["fresh", "elegant"],
        description: "무화과잎의 싱그러움과 크리미한 과육 느낌이 조화로운 향",
        thumbnail_url: "/mock-images/fig-garden.jpg",
      },
      {
        id: 9,
        name: "시더 아워",
        tags: ["dry", "tidy"],
        description: "건조한 나무결과 은은한 허브가 조화로운 향",
        thumbnail_url: "/mock-images/cedar-hour.jpg",
      },
    ],
    thumbnail_url: "/mock-images/basil-shade.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  24: {
    id: 24,
    name: "소프트 파우더",
    eng_name: "Soft Powder",
    description:
      "고운 파우더가 살짝 흩날리는 듯한 부드럽고 정적인 향입니다. 피부 가까이에 머무는 듯한 포근함이 있어 침실이나 개인 공간에 잘 어울립니다.",
    categories: "powdery",
    tags: ["cozy", "powdery", "soft", "quiet"],
    keywords: ["파우더", "포근함", "개인 공간"],
    intensity: 51,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["알데하이드", "화이트 티", "베르가못"],
        title: "탑 노트",
        description: "가볍고 보송하게 시작되는 첫 향",
      },
      middle: {
        items: ["아이리스", "바이올렛", "소프트 플로럴"],
        title: "미들 노트",
        description: "고운 파우더 질감이 느껴지는 중심 향",
      },
      base: {
        items: ["머스크", "바닐라", "샌달우드"],
        title: "베이스 노트",
        description: "피부 가까이에 머무는 듯한 포근한 잔향",
      },
    },
    profile: {
      depth: 34,
      warmth: 52,
      softness: 88,
      freshness: 36,
      sweetness: 32,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "포근하고 정적인 분위기를 만들기 좋은 침실",
      },
      {
        name: "Vanity Area",
        imageUrl:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "부드러운 파우더 무드가 어울리는 개인 공간",
      },
      {
        name: "Reading Nook",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 85,
        description: "조용하게 쉬기 좋은 작은 휴식 공간",
      },
    ],
    similar_scents: [
      {
        id: 25,
        name: "캐시미어 더스트",
        tags: ["cozy", "warm"],
        description: "캐시미어 니트의 포근한 촉감을 닮은 향",
        thumbnail_url: "/mock-images/cashmere-dust.jpg",
      },
      {
        id: 6,
        name: "아이리스 페탈",
        tags: ["calm", "luxurious"],
        description: "파우더리한 아이리스가 주는 고급스러운 향",
        thumbnail_url: "/mock-images/iris-petal.jpg",
      },
      {
        id: 18,
        name: "코튼 베일",
        tags: ["subtle", "soft"],
        description: "얇은 코튼 천처럼 가볍고 부드러운 머스크 향",
        thumbnail_url: "/mock-images/cotton-veil.jpg",
      },
    ],
    thumbnail_url: "/mock-images/soft-powder.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  25: {
    id: 25,
    name: "캐시미어 더스트",
    eng_name: "Cashmere Dust",
    description:
      "캐시미어 니트의 포근한 촉감과 잔잔한 파우더 향을 닮은 향입니다. 부드럽고 따뜻한 인상이 차분한 공간을 천천히 채워 줍니다.",
    categories: "powdery",
    tags: ["cozy", "warm", "soft", "snug"],
    keywords: ["캐시미어", "따뜻함", "차분함"],
    intensity: 57,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["화이트 티", "베르가못", "핑크 페퍼"],
        title: "탑 노트",
        description: "부드럽고 따뜻하게 시작되는 첫 향",
      },
      middle: {
        items: ["아이리스", "캐시미어 우드", "헬리오트로프"],
        title: "미들 노트",
        description: "니트의 촉감처럼 포근하게 감싸는 향",
      },
      base: {
        items: ["머스크", "바닐라", "샌달우드"],
        title: "베이스 노트",
        description: "따뜻하고 차분하게 남는 파우더리 잔향",
      },
    },
    profile: {
      depth: 42,
      warmth: 68,
      softness: 90,
      freshness: 22,
      sweetness: 38,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "따뜻하고 포근한 휴식을 주는 침실",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "차분한 온기를 더하는 거실",
      },
      {
        name: "Reading Nook",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "느린 휴식과 잘 어울리는 독서 공간",
      },
    ],
    similar_scents: [
      {
        id: 24,
        name: "소프트 파우더",
        tags: ["cozy", "powdery"],
        description: "고운 파우더가 흩날리는 듯한 부드러운 향",
        thumbnail_url: "/mock-images/soft-powder.jpg",
      },
      {
        id: 8,
        name: "샌달 콰이어트",
        tags: ["cozy", "soft"],
        description: "부드러운 샌달우드가 중심이 되는 향",
        thumbnail_url: "/mock-images/sandal-quiet.jpg",
      },
      {
        id: 30,
        name: "골든 앰버",
        tags: ["warm", "luxurious"],
        description: "따뜻한 햇빛이 오래 머문 듯한 앰버 향",
        thumbnail_url: "/mock-images/golden-amber.jpg",
      },
    ],
    thumbnail_url: "/mock-images/cashmere-dust.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  26: {
    id: 26,
    name: "핑크 페퍼 데이",
    eng_name: "Pink Pepper Day",
    description:
      "핑크 페퍼의 가벼운 스파이스가 공간에 활기와 긴장감을 동시에 더하는 향입니다. 무겁지 않으면서도 분명한 개성을 드러냅니다.",
    categories: "spicy",
    tags: ["vibrant", "distinctive", "spicy", "clear"],
    keywords: ["핑크 페퍼", "개성", "활기"],
    intensity: 65,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["핑크 페퍼", "베르가못", "자몽"],
        title: "탑 노트",
        description: "가볍고 톡 쏘는 스파이스로 시작되는 향",
      },
      middle: {
        items: ["로즈마리", "제라늄", "카다멈"],
        title: "미들 노트",
        description: "활기와 선명함이 이어지는 중심 향",
      },
      base: {
        items: ["시더우드", "머스크", "앰버"],
        title: "베이스 노트",
        description: "개성은 남기되 가볍게 정리되는 잔향",
      },
    },
    profile: {
      depth: 38,
      warmth: 44,
      softness: 28,
      freshness: 62,
      sweetness: 20,
    },
    season: ["spring", "autumn"],
    recommended_places: [
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        matchScore: 94,
        description: "활기와 긴장감을 더하는 작업 공간",
      },
      {
        name: "Entryway",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
        matchScore: 89,
        description: "개성 있는 첫인상을 주는 현관",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 84,
        description: "밝은 스파이스 포인트가 필요한 거실",
      },
    ],
    similar_scents: [
      {
        id: 27,
        name: "스파이스 베일",
        tags: ["exotic", "warm"],
        description: "클로브와 앰버가 따뜻하게 겹쳐지는 향",
        thumbnail_url: "/mock-images/spice-veil.jpg",
      },
      {
        id: 16,
        name: "그레이프프루트 글로우",
        tags: ["cheerful", "bright"],
        description: "쌉싸름한 상큼함이 공간에 생기를 더하는 향",
        thumbnail_url: "/mock-images/grapefruit-glow.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        tags: ["herbal", "clear"],
        description: "허브의 선명한 초록향이 공간을 정리하는 향",
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
    ],
    thumbnail_url: "/mock-images/pink-pepper-day.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  27: {
    id: 27,
    name: "스파이스 베일",
    eng_name: "Spice Veil",
    description:
      "클로브와 앰버가 얇게 겹쳐지며 따뜻하고 이국적인 인상을 남기는 향입니다. 공간을 단숨에 특별하게 바꿔 주는 존재감이 있습니다.",
    categories: "spicy",
    tags: ["exotic", "warm", "intense", "special"],
    keywords: ["클로브", "이국적", "특별함"],
    intensity: 77,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["클로브", "핑크 페퍼", "오렌지"],
        title: "탑 노트",
        description: "따뜻한 스파이스가 선명하게 열리는 향",
      },
      middle: {
        items: ["시나몬", "카다멈", "라브다넘"],
        title: "미들 노트",
        description: "이국적인 온기가 겹쳐지는 중심 향",
      },
      base: {
        items: ["앰버", "바닐라", "샌달우드"],
        title: "베이스 노트",
        description: "특별한 존재감으로 오래 남는 잔향",
      },
    },
    profile: {
      depth: 72,
      warmth: 86,
      softness: 44,
      freshness: 16,
      sweetness: 46,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Dining Room",
        imageUrl:
          "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "따뜻하고 특별한 분위기를 만드는 다이닝룸",
      },
      {
        name: "Lounge",
        imageUrl:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "이국적인 존재감이 잘 어울리는 라운지",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 86,
        description: "공간을 단숨에 따뜻하게 바꾸는 거실",
      },
    ],
    similar_scents: [
      {
        id: 26,
        name: "핑크 페퍼 데이",
        tags: ["vibrant", "distinctive"],
        description: "핑크 페퍼의 가벼운 스파이스가 느껴지는 향",
        thumbnail_url: "/mock-images/pink-pepper-day.jpg",
      },
      {
        id: 30,
        name: "골든 앰버",
        tags: ["warm", "luxurious"],
        description: "따뜻한 햇빛이 오래 머문 듯한 앰버 향",
        thumbnail_url: "/mock-images/golden-amber.jpg",
      },
      {
        id: 12,
        name: "스모크드 팀버",
        tags: ["smoky", "intense"],
        description: "그을린 나무결과 은은한 스파이스가 더해진 향",
        thumbnail_url: "/mock-images/smoked-timber.jpg",
      },
    ],
    thumbnail_url: "/mock-images/spice-veil.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  28: {
    id: 28,
    name: "오션 브레스",
    eng_name: "Ocean Breath",
    description:
      "바닷바람이 창문을 스치듯 시원하고 깨끗한 향입니다. 무겁지 않은 청량감이 공간을 넓고 가볍게 느껴지도록 만들어 줍니다.",
    categories: "aquatic",
    tags: ["refreshing", "cool", "spacious", "light"],
    keywords: ["바닷바람", "청량감", "넓은 공간"],
    intensity: 53,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["마린 어코드", "레몬", "민트"],
        title: "탑 노트",
        description: "바닷바람처럼 시원하게 열리는 향",
      },
      middle: {
        items: ["워터 릴리", "그린 티", "세이지"],
        title: "미들 노트",
        description: "깨끗하고 넓게 퍼지는 청량한 향",
      },
      base: {
        items: ["화이트 머스크", "드리프트 우드", "앰버"],
        title: "베이스 노트",
        description: "가볍고 깨끗하게 남는 잔향",
      },
    },
    profile: {
      depth: 20,
      warmth: 14,
      softness: 38,
      freshness: 92,
      sweetness: 12,
    },
    season: ["summer"],
    recommended_places: [
      {
        name: "Bathroom",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        matchScore: 96,
        description: "시원하고 깨끗한 청량감이 어울리는 욕실",
      },
      {
        name: "Balcony",
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "바람이 드는 공간을 더 넓게 느끼게 하는 향",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 85,
        description: "무겁지 않은 청량감을 더하는 거실",
      },
    ],
    similar_scents: [
      {
        id: 13,
        name: "시트러스 던",
        tags: ["refreshing", "bright"],
        description: "밝고 선명한 시트러스가 공간을 환기하는 향",
        thumbnail_url: "/mock-images/citrus-dawn.jpg",
      },
      {
        id: 15,
        name: "베르가못 에어",
        tags: ["clear", "fresh"],
        description: "베르가못이 공기처럼 가볍게 퍼지는 향",
        thumbnail_url: "/mock-images/bergamot-air.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        tags: ["herbal", "clear"],
        description: "바질과 허브의 선명한 초록향이 느껴지는 향",
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
    ],
    thumbnail_url: "/mock-images/ocean-breath.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  29: {
    id: 29,
    name: "페어 벨벳",
    eng_name: "Pear Velvet",
    description:
      "잘 익은 배의 은은한 과즙감과 부드러운 머스크가 만나 밝고 사랑스러운 무드를 연출하는 향입니다. 과하지 않게 기분을 환하게 바꿔 줍니다.",
    categories: "fruity",
    tags: ["lovely", "bright", "juicy", "soft"],
    keywords: ["배", "과즙감", "사랑스러움"],
    intensity: 60,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["페어", "베르가못", "애플"],
        title: "탑 노트",
        description: "맑은 과즙감이 밝게 퍼지는 첫 향",
      },
      middle: {
        items: ["피오니", "프리지아", "화이트 로즈"],
        title: "미들 노트",
        description: "부드러운 꽃향과 과일 향이 어우러진 중심",
      },
      base: {
        items: ["머스크", "바닐라", "블론드 우드"],
        title: "베이스 노트",
        description: "사랑스럽고 부드럽게 남는 잔향",
      },
    },
    profile: {
      depth: 32,
      warmth: 38,
      softness: 70,
      freshness: 62,
      sweetness: 66,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 93,
        description: "밝고 사랑스러운 무드를 더하는 침실",
      },
      {
        name: "Dressing Room",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
        matchScore: 90,
        description: "외출 전 기분을 환하게 바꿔 주는 공간",
      },
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 85,
        description: "부드러운 과즙감이 어울리는 거실",
      },
    ],
    similar_scents: [
      {
        id: 5,
        name: "체리 베일",
        tags: ["sweet", "lovely"],
        description: "은은한 과실감과 꽃잎의 부드러움이 함께 감도는 향",
        thumbnail_url: "/mock-images/cherry-veil.jpg",
      },
      {
        id: 1,
        name: "블라썸 드림",
        tags: ["warm", "soft"],
        description: "체리 블라썸과 머스크, 바닐라가 어우러진 향",
        thumbnail_url: "/mock-images/blossom-dream.jpg",
      },
      {
        id: 3,
        name: "화이트 피오니",
        tags: ["clear", "light"],
        description: "깨끗한 화이트 페탈의 느낌을 담은 플로럴 향",
        thumbnail_url: "/mock-images/white-peony.jpg",
      },
    ],
    thumbnail_url: "/mock-images/pear-velvet.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
  30: {
    id: 30,
    name: "골든 앰버",
    eng_name: "Golden Amber",
    description:
      "따뜻한 햇빛이 오래 머문 듯한 앰버 계열의 향입니다. 부드러운 온기와 깊은 여운이 함께 남아 공간에 고급스러운 무드를 더해 줍니다.",
    categories: "amber",
    tags: ["warm", "luxurious", "deep", "cozy"],
    keywords: ["앰버", "온기", "고급스러움"],
    intensity: 78,
    is_bestseller: true,
    scent_notes: {
      top: {
        items: ["만다린", "핑크 페퍼", "베르가못"],
        title: "탑 노트",
        description: "따뜻한 빛감으로 부드럽게 열리는 향",
      },
      middle: {
        items: ["앰버", "라브다넘", "바닐라 오키드"],
        title: "미들 노트",
        description: "고급스러운 온기가 중심을 이루는 향",
      },
      base: {
        items: ["샌달우드", "머스크", "통카빈"],
        title: "베이스 노트",
        description: "깊고 포근하게 오래 남는 앰버 잔향",
      },
    },
    profile: {
      depth: 80,
      warmth: 90,
      softness: 64,
      freshness: 12,
      sweetness: 48,
    },
    season: ["autumn", "winter"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        matchScore: 97,
        description: "고급스럽고 따뜻한 무드를 더하는 거실",
      },
      {
        name: "Bedroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 91,
        description: "부드러운 온기가 오래 머무는 침실",
      },
      {
        name: "Dining Room",
        imageUrl:
          "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "깊은 여운이 잘 어울리는 다이닝룸",
      },
    ],
    similar_scents: [
      {
        id: 10,
        name: "앰버 우드",
        tags: ["warm", "weighty"],
        description: "나무결 위로 앰버의 따뜻한 빛이 얹힌 향",
        thumbnail_url: "/mock-images/amber-wood.jpg",
      },
      {
        id: 27,
        name: "스파이스 베일",
        tags: ["exotic", "warm"],
        description: "클로브와 앰버가 따뜻하게 겹쳐지는 향",
        thumbnail_url: "/mock-images/spice-veil.jpg",
      },
      {
        id: 25,
        name: "캐시미어 더스트",
        tags: ["cozy", "warm"],
        description: "캐시미어 니트의 포근한 촉감을 닮은 향",
        thumbnail_url: "/mock-images/cashmere-dust.jpg",
      },
    ],
    thumbnail_url: "/mock-images/golden-amber.jpg",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
}

export const getFragranceDetailMock = (
  scentId: number
): ScentDetailResponse | undefined => {
  const scent = fragranceDetailMockMap[scentId]

  if (!scent) {
    return undefined
  }

  return {
    data: scent,
  }
}
