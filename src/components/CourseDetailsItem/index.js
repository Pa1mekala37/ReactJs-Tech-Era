import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="courseDetailsCard">
      <div className="courseDetailsContainer">
        <img className="courseDetailsImage" src={imageUrl} alt={name} />
        <div className="courseInfoContainer">
          <h1 className="courseDetailsTitle">{name}</h1>
          <p className="courseDetailsInfo">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
