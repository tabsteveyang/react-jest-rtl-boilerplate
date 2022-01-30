/* eslint-disable no-undef */
import { screen, render, cleanup } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import DataPage from '../DataPage'

afterEach(cleanup)

jest.mock('react-router-dom', () => {
  const spy = jest.fn()
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: spy
  }
})

describe('DataPage.jsx', () => {
  it('render the content if data exist', () => {
    useParams.mockImplementationOnce(() => ({
      dataId: 'data1'
    }))
    render(<DataPage />)
    screen.getByText('this is the content form data 1')
  })
  it('render the hint if data does not exist', () => {
    useParams.mockReturnValueOnce({
      dataId: ''
    })
    render(<DataPage />)
    screen.getByText('content not found')
  })
})