import { Link } from "@tanstack/react-router"

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-card py-xs shadow-md md:py-md">
      <div className="flex items-center justify-center px-md">
        <Link
          to="/"
          className="font-league-gothic text-lg font-bold text-foreground"
          aria-label="메인 페이지로 이동"
        >
          fragmnt
        </Link>
      </div>
    </header>
  )
}

export default Header
