import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

export default function GoBack(props) {
  const { className, size, variant } = props
  const navigate = useNavigate()

  return(
      <Button
        className={className}
        size={size}
        variant={variant}
        onClick={() => navigate('../')}
      >
        Go back
      </Button>
  )
}