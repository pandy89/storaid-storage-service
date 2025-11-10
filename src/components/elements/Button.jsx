import { Link } from "react-router-dom"

const Button = ({name, to, onClick}) => {
  if (to) {
    return (
    <Link to={to} className="btn" onClick={onClick}>
      {name}
    </Link>
    )
  }
}

export default Button