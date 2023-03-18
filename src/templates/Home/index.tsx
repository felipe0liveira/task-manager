import { useState } from 'react'
import { Item, List } from '../../components/List'
import styles from './index.module.scss'

const itemsList = [
	{ name: 'Halga algo 1', status: false },
	{ name: 'Halga algo 2', status: false },
	{ name: 'Halga algo 3', status: false },
	{ name: 'Halga algo 4', status: false },
	{ name: 'Halga algo 5', status: false },
	{ name: 'Halga algo 6', status: false },
]

const HomePage = () => {
	const [list, setList] = useState(itemsList)

	const handleToggleStatus = (i) => {
		let updatedList = [...list]
		updatedList[i].status = !list[i].status
		setList(updatedList)
	}

	const handleRemove = (i) => {
		setList(list.filter((_, b) => b != i))
	}

	const handleAddItem = () => {
		const newItem = prompt('Add a new Task item to your list.')

		setList((p) => [...p, { name: newItem, status: false }])
	}

	return (
		<main className={styles.HomePage}>
			<List
				items={list}
				onChangeStaus={handleToggleStatus}
				onRemove={handleRemove}
				onAdd={handleAddItem}
			/>
		</main>
	)
}

export default HomePage
