import type {
  ScentAxisLabel,
  ScentFamily,
  VisualTheme,
} from "../../types/web-shared.types"

export const FAMILY_THEME_MAP: Record<ScentFamily, VisualTheme[]> = {
  floral: [
    {
      blobClassName:
        "bg-gradient-to-br from-rose-500 via-pink-400 to-fuchsia-400",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-purple-500 via-violet-400 to-rose-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-rose-400 via-pink-300 to-purple-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  citrus: [
    {
      blobClassName:
        "bg-gradient-to-br from-yellow-400 via-lime-300 to-sky-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-orange-400 via-yellow-300 to-lime-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-amber-400 via-yellow-300 to-cyan-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  woody: [
    {
      blobClassName:
        "bg-gradient-to-br from-amber-500 via-orange-300 to-lime-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-stone-500 via-amber-400 to-emerald-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-orange-500 via-amber-400 to-stone-400",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  musk: [
    {
      blobClassName: "bg-gradient-to-br from-zinc-300 via-slate-200 to-sky-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-stone-200 via-zinc-200 to-emerald-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-slate-300 via-zinc-200 to-cyan-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  green: [
    {
      blobClassName:
        "bg-gradient-to-br from-emerald-500 via-lime-300 to-teal-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-lime-400 via-emerald-300 to-green-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-green-500 via-emerald-300 to-cyan-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  aquatic: [
    {
      blobClassName: "bg-gradient-to-br from-sky-500 via-cyan-300 to-teal-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-blue-400 via-sky-300 to-emerald-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName: "bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  spicy: [
    {
      blobClassName:
        "bg-gradient-to-br from-red-400 via-orange-400 to-amber-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-amber-500 via-red-300 to-stone-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-orange-500 via-amber-400 to-rose-300",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
  powdery: [
    {
      blobClassName:
        "bg-gradient-to-br from-rose-200 via-violet-200 to-stone-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-zinc-200 via-pink-200 to-purple-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
    {
      blobClassName:
        "bg-gradient-to-br from-stone-200 via-rose-200 to-slate-200",
      lineClassName: "bg-black/35",
      labelClassName: "bg-white/80 text-black/60",
    },
  ],
}

export const SCENT_AXIS_LABELS: ScentAxisLabel[] = [
  {
    positionClassName: "left-4 top-1/2 -translate-y-1/2",
    label: "차분함",
  },
  {
    positionClassName: "right-4 top-1/2 -translate-y-1/2",
    label: "산뜻함",
  },
  {
    positionClassName: "left-1/2 top-6 -translate-x-1/2",
    label: "포근함",
  },
  {
    positionClassName: "bottom-6 left-1/2 -translate-x-1/2",
    label: "부드러움",
  },
]
