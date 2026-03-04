export const ProjTypes = ['all', 'websites', 'apps', 'design'] as const

// cast projtype
export type ProjType = (typeof ProjTypes)[number]

export const StatusTypes = ['completed', 'in-progress', 'on-hold'] as const

export type StatusType = (typeof StatusTypes)[number]

// actual project type
export interface Project {
	title: string
	desc?: string
	url?: string
	repo?: string
	type: ProjType
	stack: string[]
	status: StatusType
}
