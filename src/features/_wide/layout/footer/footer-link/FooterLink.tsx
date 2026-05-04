import { Link, type LinkProps } from "@tanstack/react-router"
import clsx from "clsx"

type FooterButtonProps = {
  to: LinkProps["to"]
  isDim?: boolean
  children: string
  className?: string
}
const FooterLink = ({ to, isDim, children, className }: FooterButtonProps) => {
  return (
    <Link
      className={clsx(
        "text-sm text-left cursor-pointer",
        isDim ? "text-text-disabled" : "text-text-footer",
        className
      )}
      to={to}
    >
      {children}
    </Link>
  )
}

export default FooterLink
