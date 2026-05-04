import { Link } from "@tanstack/react-router"

const SharedFooter = () => {
  return (
    <footer className=" text-center">
      <nav
        aria-label="공유 결과 액션"
        className=" flex w-full flex-col items-center gap-md"
      >
        <Link
          to="/"
          className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-lg text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          Find My Scent
        </Link>

        <Link
          to="/scent-list"
          className="text-sm font-medium uppercase tracking-[0.18em] text-primary/50 transition-opacity hover:opacity-80"
        >
          Explore Fragrances
        </Link>
      </nav>

      <small className="mt-lg block text-xs font-medium tracking-[0.2em] text-primary/30">
        FRAGMNT
      </small>
    </footer>
  )
}

export default SharedFooter
