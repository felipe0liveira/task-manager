import { useEffect, useState } from 'react'
import { List } from '../../components/List'
import styles from './index.module.scss'

const itemsList = []

const HomePage = () => {
	const [list, setList] = useState(itemsList)

	const handleToggleStatus = (i) => {
		let updatedList = [...list]
		updatedList[i].status = !list[i].status
		setList(updatedList)
	}

	const handleRemove = (i) => {
		const confirmMessage = `Are you sure that you want to remove this item from the list:\n"${list[i].name}"`
		if (confirm(confirmMessage)) setList(list.filter((_, b) => b != i))
	}

	const handleAddItem = () => {
		const newItem = prompt('Add a new Task item to your list.')

		if (newItem) {
			setList((p) => [...p, { name: newItem, status: false }])
		}
	}

	// useEffect(() => {
	// 	const storedList = localStorage.getItem('task-manager-list')
	// 	if (storedList) {
	// 		const sessionList = JSON.parse(storedList)

	// 		if ('length' in sessionList) {
	// 			setList(sessionList)
	// 		}
	// 	}

	// 	function handleBeforeUnload() {
	// 		localStorage.setItem('task-manager-list', JSON.stringify(list))
	// 	}

	// 	window.addEventListener('beforeunload', handleBeforeUnload)

	// 	return () => {
	// 		window.removeEventListener('beforeunload', handleBeforeUnload)
	// 	}
	// }, [list])

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
