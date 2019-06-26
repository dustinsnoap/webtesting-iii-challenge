import React from 'react'
import {render, cleanup} from '@testing-library/react'
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard'
afterEach(cleanup)

describe('dashboard', () => {
    //shows the controls and display
    it('renders', () => {
        const dashboard = render(<Dashboard />)
        expect(dashboard.baseElement).toMatchSnapshot()
    })
})