import { type Project } from '@/@types/Project'

import ProjectLink from './ProjectLink'

interface Props {
	project: Project
}
export default function ProjectCard({ project }: Props) {
	return (
		<div className="w-full h-60 relative rounded-xl p-5 dark:bg-white/10 bg-black/10 text-foreground">
			<div className="flex flex-col h-full">
				{/* Tags */}
				<div className="flex gap-2 text-xs uppercase font-semibold">
					<span className="text-primary">{project.type}</span>
				</div>

				{/* Content */}
				<div className="mt-5 leading-6 relative mb-5 text-foreground dark:text-foreground-dark">
					<p className="font-semibold text-2xl">{project.title}</p>
					<p className="text-md mt-2">{project.desc}</p>
				</div>

				{/* Tech Stack */}
				<div className="flex text-xs gap-2 absolute bottom-5 mt-10">
					{project.stack.map((stack) => (
						<span className="px-2 py-1 rounded-tl-lg font-medium rounded-br-lg bg-primary text-white">
							{stack}
						</span>
					))}
				</div>

				<div className="flex flex-row gap-1 absolute top-5 right-4">
					{project.repo && <ProjectLink href={project.repo} icon="github" />}
					{project.url && <ProjectLink href={project.url} icon="link" />}
				</div>
			</div>
		</div>
	)
}
