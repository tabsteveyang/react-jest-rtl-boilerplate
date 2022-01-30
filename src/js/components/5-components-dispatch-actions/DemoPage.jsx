import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSettings,  // a plain object action
  startGetSettings  // a redux-thunk action
} from '@js/actions'

const DemoPage = (props) => {
  const dispatch = useDispatch()
  const { title = '' } = useSelector(state => state.settings)

  useEffect(() => {
    dispatch(setSettings({
      title: 'Title set when the component mount.'
    }))
  }, [])

  const onFetchClick = () => {
    dispatch(startGetSettings({ foo: 'bar' }))
  }

  return (
    <div className="demo-page">
      <h1>{title}</h1>
      <button onClick={onFetchClick}>fetch settings</button>
    </div>
  )
}

export default DemoPage
