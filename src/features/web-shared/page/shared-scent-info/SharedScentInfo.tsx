import type { WebSharedScent } from "../../types/web-shared.types"

type SharedScentInfoProps = {
  scent: WebSharedScent
}

const SharedScentInfo = ({ scent }: SharedScentInfoProps) => {
  const formattedDescription = scent.description.replace(/\.\s*/g, ".\n").trim()

  return (
    <section
      aria-labelledby="shared-scent-title"
      className=" flex flex-col items-center text-center gap-md"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/55">
        {scent.eng_name}
      </p>

      <h1
        id="shared-scent-title"
        className=" text-[2rem] font-medium leading-tight tracking-tight text-primary md:text-[2.6rem]"
      >
        {scent.name}
      </h1>

      <ul
        aria-label="향기 태그"
        className=" flex flex-wrap justify-center gap-sm"
      >
        {scent.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full px-md py-xs text-sm font-medium text-primary/60"
          >
            #{tag}
          </li>
        ))}
      </ul>
      <blockquote className="mx-auto mt-lg max-w-[34rem] px-md">
        <p className="whitespace-pre-line break-keep text-sm leading-relaxed text-primary/70 md:text-md">
          “{formattedDescription}”
        </p>
      </blockquote>
    </section>
  )
}

export default SharedScentInfo
