import codingImg from '@img/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  startSetSettings
} from '../actions'

const MainPage = (props) => {
  const dispatch = useDispatch()
  const { fetched, title = '' } = useSelector(state => state.settings)
  useEffect(() => {
    if (!fetched) {
      dispatch(startSetSettings())
    }
  }, [fetched])

  return (
    <div className="main-page">
      <h1>{title}</h1>
      <div className="img-block">
        <p>Image from HTML:</p>
        <img src={codingImg} alt="coding image" />
        {/* https://unsplash.com/photos/BfrQnKBulYQ */}
      </div>
      <div className="img-block">
        <p>Image from scss:</p>
        <div className="img-block__img"></div>
        {/* https://unsplash.com/photos/f77Bh3inUpE */}
      </div>
    </div>
  )
}

MainPage.propTypes = {
  text: PropTypes.string
}

export default MainPage
