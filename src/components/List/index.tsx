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
				<i
					onClick={onActionTrash}
					className='uil uil-trash hover-text-danger'
				/>
				<i
					onClick={onActionCheck}
					className={`uil hover-text-success ${
						status ? 'uil-check-square text-success' : 'uil-square-full'
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
				<h1 style={{ marginBottom: items.length ? '15px' : 'none' }}>
					Task Manager
				</h1>
				<i
					onClick={onAdd}
					className='uil uil-plus-square hover-text-primary'
				></i>
			</div>

			<div className={styles.ListContent}>
				{items?.map((item, i) => (
					<div key={i}>
						<Item
							{...item}
							onActionCheck={() => onChangeStaus(i)}
							onActionTrash={() => onRemove(i)}
						/>
					</div>
				))}
			</div>
		</section>
	)
}
