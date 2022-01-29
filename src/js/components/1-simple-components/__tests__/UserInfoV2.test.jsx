/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'  // renderer for snapshot test
import MockProvider from '@jest/mock/MockProvider'
import createMockStore from '@jest/mock/store/createMockStore'
import UserInfoV2 from '../UserInfoV2'

afterEach(cleanup)

describe('UserInfoV2.jsx', () => {
  it('snapshot renders correctly, truthy values', () => {
    const store = createMockStore({
      userInfo: {
        userId: '202200001',
        userName: 'Test User',
        userImg: './test_user.img'
      }
    })
    const tree = renderer
      .create(<MockProvider mockStore={store}>
        <UserInfoV2 />
      </MockProvider>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('snapshot renders correctly, falsy values', () => {
    const store = createMockStore({
      userInfo: {
        userId: '',
        userName: '',
        userImg: ''
      }
    })
    const tree = renderer
      .create(<MockProvider mockStore={store}>
        <UserInfoV2 />
      </MockProvider>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
