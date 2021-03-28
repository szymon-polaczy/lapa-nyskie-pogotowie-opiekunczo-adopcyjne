import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Header from '../index'

describe('Header', () => {
  it('renders', () => {
    render(<Header/>)
  })

  it('has content', () => {
    const { getByTestId } = render(<Header/>)
    expect(getByTestId('header')).toHaveTextContent('Header')
  })
})