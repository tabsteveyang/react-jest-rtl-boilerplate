import { render, screen } from '@testing-library/react'
import TestPage from '../TestPage'

describe('TextPage.jsx', () => {
  it('renders Hello World', () => {
    render(<TestPage />)
    const linkElement = screen.getByText(/Hello World/i)
    expect(linkElement).toBeInTheDocument()
  })
})
