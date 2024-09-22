import { UserEntity } from '@/api/domain/entities/@example/user-entity'

export interface CreateUserUseCaseInputDTO {
	name: string
	email: string
	password: string
	response_status_code: number
}

export interface CreateUserUseCaseOutputDTO {
	data: UserEntity
}
