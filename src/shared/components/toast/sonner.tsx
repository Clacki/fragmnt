import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      position="top-center"
      toastOptions={{ unstyled: true }}
      {...props}
    />
  )
}

export { Toaster }
