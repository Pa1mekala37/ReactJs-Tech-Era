import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link className="anchor-link" to={`/courses/${id}`}>
      <li className="courseListItem">
        <img className="courseLogo" src={logoUrl} alt={name} />
        <p className="courseName">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
