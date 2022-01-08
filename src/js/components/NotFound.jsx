import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div className="not-found-page">
      <div>
        <h1>
          404 <Link to="/">Back to the Main Page</Link>.
        </h1>
      </div>
    </div>
  )
}
export default NotFound
