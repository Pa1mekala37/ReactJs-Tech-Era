import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="navHeader">
    <Link to="/">
      <img
        className="websiteLogo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </div>
)

export default withRouter(Header)
