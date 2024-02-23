import { UserEntity } from '@/api/domain/entities/@example/user-entity'

export interface CreateUserUseCaseInputDTO {
	name: string
	email: string
	password: string
}

export interface CreateUserUseCaseOutputDTO {
	data: UserEntity
}
