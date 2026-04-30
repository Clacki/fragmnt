export const handleScroll = (selector: string) => {
  const quickStartDiv = document.querySelector(selector)
  if (!quickStartDiv) return

  quickStartDiv.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}
