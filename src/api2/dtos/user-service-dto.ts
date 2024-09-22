export interface PostUserUseCaseInputDTO {
	name: string
	email: string
	password: string
	response_status_code: number
}

export interface PostUserUseCaseOutputDTO {
	id: string
	name: string
	email: string
	password: string
	created_at: Date
	updated_at: Date
}
