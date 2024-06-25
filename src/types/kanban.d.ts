export type ID = string;

export interface Task {
	id: any
	name: String
	date: String
	estimated_budget?: any
	queryType: String
	pax: Number
	lead_feel: Number
	Status?: String
}
export interface Column {
	id: any
    sort_order:number
	stage: string
	group_leads: any[]
}