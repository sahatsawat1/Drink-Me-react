/* global describe test expect */
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar Component', () => {
  test('should contain logo text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/logo/gi)).toBeInTheDocument()
  })
  test('should have link navigate to home ,about,contact,and story', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/home/gi)).toBeInTheDocument()
    expect(getByText(/home/gi).closest('a')).toHaveAttribute('href', '/')
    expect(getByText(/about/gi)).toBeInTheDocument()
    expect(getByText(/about/gi).closest('a')).toHaveAttribute('href', '/about')
    expect(getByText(/contact/gi)).toBeInTheDocument()
    expect(getByText(/contact/gi).closest('a')).toHaveAttribute('href', '/contact')
    expect(getByText(/story/gi)).toBeInTheDocument()
    expect(getByText(/story/gi).closest('a')).toHaveAttribute('href', '/story')
  })
  test('should render layout correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
