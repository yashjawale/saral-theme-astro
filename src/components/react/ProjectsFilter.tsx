import { useState, useEffect } from 'react'
import { type ProjType, type Project } from '@/@types/Project'

import { ProjTypes } from '@/@types/Project'
import { Projects } from '@/data/projects'

// components
import ProjectCard from './ProjectCard'
import FilterBtn from './FilterBtn'

export default function ProjectsFilter() {
	const [selectedType, setSelectedType] = useState<ProjType>('all')
	const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

	// updateFilter
	const setFilter = (filter: ProjType | 'all') => {
		setSelectedType(filter)
	}

	useEffect(() => {
		if (selectedType === 'all') {
			setFilteredProjects(Projects)
		} else {
			const filtered = Projects.filter(
				(project) => project.type === selectedType
			)
			setFilteredProjects(filtered)
		}
	}, [selectedType])
	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-wrap gap-2">
				{ProjTypes.map((type) => (
					<FilterBtn
						type={type}
						handle={() => {
							setFilter(type)
						}}
						active={selectedType === type}
					/>
				))}
			</div>

			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
				{filteredProjects.length > 0 ? (
					filteredProjects.map((project) => (
						<ProjectCard project={project} key={project.title} />
					))
				) : (
					<p>No prjects in this category</p>
				)}
			</div>
		</div>
	)
}
