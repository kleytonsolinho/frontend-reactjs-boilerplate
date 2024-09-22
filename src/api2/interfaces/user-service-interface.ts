import * as UserServiceDTO from '../dtos/user-service-dto'

export interface IUserService {
	postUser(
		payload: UserServiceDTO.PostUserUseCaseInputDTO
	): Promise<UserServiceDTO.PostUserUseCaseOutputDTO>
}
