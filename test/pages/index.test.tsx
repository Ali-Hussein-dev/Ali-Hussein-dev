import React from 'react'
import { render } from '../testUtils'
import Index from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
