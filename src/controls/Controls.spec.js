import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import 'jest-dom/extend-expect'
import Controls from './Controls'
afterEach(cleanup)

describe('GATE', () => {
    // gate defaults to unlocked
    it('gate defaults to unlock', () => {
        const gate = render(<Controls />)

        expect(gate.getByText(/Lock Gate/i))
    })
    // gate defaults to open
    it('gate defaults to open', () => {
        const gate = render(<Controls />)

        expect(gate.getByText(/Close Gate/i))
    })
    // cannot be closed or opened if it is locked
    it('gate cannot be opened if locked', () => {
        const gate = render(<Controls locked/>)
        const closed = gate.getByTestId('toggle-closed')

        expect(closed.disabled).toBe(true)
    })
})

describe('CONTROLS', () => {
    // provide buttons to toggle the closed and locked states.
    it('renders locking button', () => {
        const gate = render(<Controls />)
        expect(gate.getByTestId(/toggle-locked/i))
    })
    it('renders closing button', () => {
        const gate = render(<Controls />)
        expect(gate.getByTestId(/toggle-closed/i))
    })
    // buttons' text changes to reflect the state the door will be in if clicked
    //locking button
    it('toggle-locked renders "lock gate" text when gate is unlocked', () => {
        const gate = render(<Controls locked={false}/>)
        expect(gate.getByText(/lock gate/i))
    })
    it('toggle-closed renders "unlock gate" text when gate is locked', () => {
        const gate = render(<Controls locked/>)
        expect(gate.getByText(/unlock gate/i))
    })
    //opening button
    it('toggle-closed renders "close gate" text when gate is open', () => {
        const gate = render(<Controls closed={false}/>)
        expect(gate.getByText(/close gate/i))
    })
    it('toggle-closed renders "open gate" text when gate is closed', () => {
        const gate = render(<Controls closed/>)
        expect(gate.getByText(/open gate/i))
    })
    // the closed toggle button is disabled if the gate is locked
    it('when gate is locked, toggle-closed is disabled', () => {
        const gate = render(<Controls locked/>)
        const btn = gate.getByTestId(/toggle-closed/i)
        expect(btn.disabled).toBe(true)
    })
    // the locked toggle button is disabled if the gate is open
    it('when gate is open, toggle-locked is disabled', () => {
        const gate = render(<Controls closed={false}/>)
        const btn = gate.getByTestId(/toggle-locked/i)
        expect(btn.disabled).toBe(true)
    })
})