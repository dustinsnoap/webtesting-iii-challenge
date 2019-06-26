import React from 'react'
import {render, cleanup} from '@testing-library/react'
import 'jest-dom/extend-expect'
afterEach(cleanup)

import Display from './Display'

describe('display', () => {
    // displays if gate is open/closed and if it is locked/unlocked
    it('renders', () => {
        const display = render(<Display />)
        expect(display.baseElement).toMatchSnapshot()
    })
    // displays 'Closed' if the closed prop is true and 'Open' if otherwise
    it('displays "closed" when closed', () => {
        const display = render(<Display closed />)

        expect(display.getByText(/closed/i))
    })
    it('displays "open" when open', () => {
        const display = render(<Display closed={false} />)

        expect(display.getByText(/open/i))
    })
    // displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
    it('displays "unlocked" when unlocked', () => {
        const display = render(<Display locked />)

        expect(display.getByText(/locked/i))
    })
    it('displays "locked" when locked', () => {
        const display = render(<Display locked={false} />)

        expect(display.getByText(/unlocked/i))
    })
    // when unlocked or open use the green-led class
    it('locked panel sets classname to "green-led" when unlocked', () => {
        const display = render(<Display locked={false} />)
        const panel = display.getByTestId(/locked-panel/i)

        expect(panel.classList[1]).toBe('green-led')
    })
    it('closed panel sets classname to "green-led" when open', () => {
        const display = render(<Display closed={false} />)
        const panel = display.getByTestId(/closed-panel/i)

        expect(panel.classList[1]).toBe('green-led')
    })
    // when locked or closed use the red-led class
    it('locked panel sets classname to "red led" when locked', () => {
        const display = render(<Display locked />)
        const panel = display.getByTestId(/locked-panel/i)

        expect(panel.classList[1]).toBe('red-led')
    })
    it('closed panel sets classname to "red led" when closed', () => {
        const display = render(<Display closed />)
        const panel = display.getByTestId(/closed-panel/i)

        expect(panel.classList[1]).toBe('red-led')
    })
})