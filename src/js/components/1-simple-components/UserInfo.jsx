
// component-rely-on-props
const UserInfo = ({
  userId = '',
  userName = '',
  userImg = ''
}) => (
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

UserInfo.propTypes = {
  userIdL: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string
}

export default UserInfo
