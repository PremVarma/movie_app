import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props: any) => {
  return (
    <div className="AppSearchHeader">
      <div className="AppMenu">
        <Link className="link" to="/home">
          <h3>Home</h3>
        </Link>
        <Link className="link" to="/">
          <h3>Landing</h3>
        </Link>
      </div>
      {props.children}
    </div>
  )
}

export default Header
