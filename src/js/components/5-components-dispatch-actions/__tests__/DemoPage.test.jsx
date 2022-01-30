/* eslint-disable no-undef */
import { screen, render, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MockProvider from '@jest/mock/MockProvider'
import createMockStore from '@jest/mock/store/createMockStore'
import DemoPage from '../DemoPage'
import * as actions from '@js/actions'

afterEach(cleanup)

jest.mock('@js/actions', () => ({
  // keep the functionallity of the action module
  ...jest.requireActual('@js/actions'),
  // replace the thunk-action into a plain object action,
  // to test the received parameters.
  startGetSettings: parameters => ({ type: 'MOCK', parameters })
}))

describe('DemoPage.jsx', () => {
  it('should dispatch setSettings action when the component mount', () => {
    const mockStore = createMockStore({
      settings: {}
    })
    render(<MockProvider mockStore={mockStore}>
      <DemoPage />
    </MockProvider>)
    // the Nth element from the result of the getActions method
    // will be the object sent by Nth dispatch.
    expect(mockStore.getActions()[0].type).toBe(actions.SET_SETTINGS)
    expect(mockStore.getActions()[0].data.title).toBe('Title set when the component mount.')
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
  })
  it('should dispatch startGetSettings action when user click the button', async () => {
    const mockStore = createMockStore({
      settings: {}
    })
    render(<MockProvider mockStore={mockStore}>
      <DemoPage />
    </MockProvider>)
    userEvent.click(screen.getByText('fetch settings'))
    await waitFor(() => {
      expect(mockStore.getActions()[1].parameters).toEqual({ foo: 'bar' })
      expect(mockStore.dispatch).toHaveBeenCalledTimes(2)
    })
  })
})