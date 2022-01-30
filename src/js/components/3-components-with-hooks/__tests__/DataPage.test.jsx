/* eslint-disable no-undef */
import { screen, render, cleanup } from '@testing-library/react'
import DataPage from '../DataPage'

afterEach(cleanup)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    dataId: 'data1'
  })
}))

describe('DataPage.jsx', () => {
  it('render the content if data exist', () => {
    render(<DataPage />)
    screen.getByText('this is the content form data 1')
  })
})