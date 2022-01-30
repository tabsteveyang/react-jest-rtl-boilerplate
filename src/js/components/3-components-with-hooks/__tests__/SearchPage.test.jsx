/* eslint-disable no-undef */
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchPage from '../SearchPage'
import { useSearchData } from '@js/hooks/searchData'

afterEach(cleanup)

jest.mock('@js/hooks/searchData', () => {
  const spy = jest.fn()
  return {
    useSearchData: () => {
      return [spy]
    }
  }
})

describe('SearchPage.jsx', () => {
  it('render the content if data exist', () => {
    render(<SearchPage />)
    const [search] = useSearchData()
    userEvent.click(screen.getByText('search'))
    expect(search).toHaveBeenCalled()
  })
})