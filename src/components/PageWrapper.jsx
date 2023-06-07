import { useEffect } from "react"

export default function PageWrapper(props) {
  const { title, element } = props

  useEffect(() => {
    document.title = title || ''
  }, [title])

  return element
}