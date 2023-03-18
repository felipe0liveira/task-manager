import styles from './index.module.scss'

interface ItemProps {
	name: string
	status?: boolean
	onActionCheck?: () => void
	onActionTrash?: () => void
}

interface ListProps {
	items: ItemProps[]
	onChangeStaus: (i: number) => void
	onRemove: (i: number) => void
	onAdd: () => void
}

export const Item = ({
	name,
	status,
	onActionCheck,
	onActionTrash,
}: ItemProps) => {
	return (
		<div className={styles.Item}>
			<span>{name}</span>
			<div>
				<i onClick={onActionTrash} className='uil uil-trash hover-danger' />
				<i
					onClick={onActionCheck}
					className={`uil ${
						status ? 'uil-check-square hover-success' : 'uil-square-full'
					}`}
				/>
			</div>
		</div>
	)
}

export const List = ({ items, onChangeStaus, onRemove, onAdd }: ListProps) => {
	return (
		<section className={styles.List}>
			<div className={styles.Header}>
				<h1>Task Manager</h1>
				<i onClick={onAdd} className='uil uil-plus-square'></i>
			</div>

			{items?.map((item, i) => (
				<div>
					<Item
						key={i}
						{...item}
						onActionCheck={() => onChangeStaus(i)}
						onActionTrash={() => onRemove(i)}
					/>
				</div>
			))}
		</section>
	)
}
