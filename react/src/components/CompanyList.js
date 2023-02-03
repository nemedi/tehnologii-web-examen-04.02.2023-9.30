import { useState, useEffect } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'
import CompanyDetails from './CompanyDetails'

const store = new CompanyStore()

const CompanyList = () => {
	const [companies, setCompanies] = useState([])
	const [selected, setSelected] = useState(null)

	const select = (company) => {
		setSelected(company)
	}

	const cancel =  () => {
		setSelected(null)
	}

	useEffect(() => {
		setCompanies(store.getAll())

		store.emitter.addListener('UPDATE', () => {
			setCompanies([...store.getAll()])
		})
	}, [])

	if (selected){
		return <CompanyDetails item={selected} />
	}
	else{
		return (
		  <div>
			{
				companies.map((e, i) => 
					<Company item={e} key={i}  />
				)
			}
		  </div>
		)
	}
}

export default CompanyList
