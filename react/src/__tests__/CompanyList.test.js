import React from 'react'
import App from '../components/App'
import CompanyList from '../components/CompanyList'
import Company from '../components/Company'
import { fireEvent, getByText, render, screen } from '@testing-library/react'

it ('renders a list of companies with select buttons', () => {
	const component = render(<App />)
	const companies = component.getAllByText(/revenue/)
	const editButtons = component.getAllByText('select')
	expect(companies.length).toEqual(2)	
	expect(editButtons.length).toEqual(2)		
})

it ('valid props on company', () => {
	const fn = jest.fn()
	const component = render(<Company item={{ name: 'test', employees: 100, revenue: 1000 }} onSelect={fn} />)
	const deleteButtons = component.getAllByText('select')
	fireEvent.click(deleteButtons[0])
	expect(fn).toHaveBeenCalled()
})

it ('select a company', () => {
	const component = render(<App />)
	const selectButtons = component.getAllByText('select')
	const select = selectButtons[0]
	fireEvent.click(select)
	const details = component.getByText('Details for acme inc')
	expect(details).toBeTruthy()
})

it ('cancel selection', () => {
	const component = render(<App />)
	const selectButtons = component.getAllByText('select')
	const select = selectButtons[0]
	fireEvent.click(select)
	const cancelButton = component.getByText('cancel')
	fireEvent.click(cancelButton)
	const companies = component.getAllByText(/revenue/)
	expect(companies.length).toEqual(2)	
})
