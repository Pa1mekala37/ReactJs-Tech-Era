import Header from '../Header'

const NotFound = () => (
  <div>
    <Header />
    <div className="notFoundCard">
      <img
        className="notFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <h1 className="notFoundHeading">Page Not found</h1>
      <p className="notFoundInfo">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
