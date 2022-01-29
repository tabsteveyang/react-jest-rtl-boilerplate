/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'  // renderer for snapshot test
import UserInfo from '../UserInfo'

afterEach(cleanup)

describe('UserInfo.jsx', () => {
  it('snapshot renders correctly, truthy values', () => {
    const tree = renderer
      .create(<UserInfo
          userId="202200001"
          userName="Test User"
          userImg="./test_user.img"
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('snapshot renders correctly, falsy values', () => {
    const tree = renderer
      .create(<UserInfo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})