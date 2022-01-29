import { useSelector } from 'react-redux'

// component-rely-on-reducer
const UserInfoV2 = (props) => {
  const {
    userId = '',
    userName = '',
    userImg = ''
  } = useSelector(state => state.userInfo)

  return (
    <div className="user-info">
      {
        userId && <div className="user-info__user-id">{userId}</div>
      }
      {
        userName && <div className="user-info__user-name">{userName}</div>
      }
      {
        userImg && <div className="user-info__user-img">
          <img src={userImg} />
        </div>
      }
    </div>
  )
}

export default UserInfoV2
