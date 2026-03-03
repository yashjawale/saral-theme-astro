import { type ProjType } from '@/@types/Project'

interface FilterBtnProps {
	type: ProjType
	active: boolean
	handle: () => void
}

const FilterBtn: React.FC<FilterBtnProps> = ({ type, active, handle }) => {
	const enabled =
		'bg-primary text-white transition-fade duration-400 ease-in-out'
	const disabled = 'text-black dark:text-white dark:bg-white/20 bg-black/10'

	return (
		<button
			onClick={handle}
			className={`px-2 py-1 text-xs md:text-lg lg:text-lg cursor-pointer rounded-md ${active ? enabled : disabled}`}
		>
			{type.charAt(0).toUpperCase() + type.slice(1)}
		</button>
	)
}

export default FilterBtn
