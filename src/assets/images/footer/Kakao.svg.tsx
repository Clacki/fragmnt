import type { SvgProps } from "@/shared/types"

const Kakao = (props: SvgProps) => {
  return (
    <svg
      {...props}
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5481 4.23865C7.83182 4.23865 3.99988 7.52361 3.99988 11.5503C3.99988 14.0935 5.57196 16.3188 7.83182 17.6964L7.24229 21.1933L10.8777 18.6501C11.369 18.7561 11.9585 18.7561 12.4498 18.7561C17.166 18.7561 20.998 15.4711 20.998 11.4444C21.0962 7.52361 17.2643 4.23865 12.5481 4.23865Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Kakao
