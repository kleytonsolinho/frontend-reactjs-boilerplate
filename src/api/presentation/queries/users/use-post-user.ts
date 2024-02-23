import { makeCreateUserUseCase } from '@/api/domain/usecases/factories/make-create-user-usecase'
import {
	CreateUserUseCaseInputDTO,
	CreateUserUseCaseOutputDTO,
} from '@/api/infra/dtos/@example/create-user-dto'
import { makeCookieClient } from '@/api/infra/gateways/factories/make-cookie-client'
import { TOKEN_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

const createUserUseCase = makeCreateUserUseCase({ URI: '/users' })
const cookie = makeCookieClient()

type UsePostUserType = {
	onSuccess?: (data: CreateUserUseCaseOutputDTO) => void
}

export function usePostUser({ onSuccess }: UsePostUserType = {}) {
	const queryClient = useQueryClient()
	const token = cookie.get(TOKEN_KEY)

	return useMutation({
		mutationFn: ({ email, name, password }: CreateUserUseCaseInputDTO) =>
			createUserUseCase.execute({ email, name, password }, token),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['GET_ONE_USER_KEY'],
			})
			onSuccess && onSuccess(data)

			toast.success('Usuário criado com sucesso!')
		},
	})
}
