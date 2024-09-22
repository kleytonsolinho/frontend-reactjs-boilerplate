import { makeCreateUserUseCase } from '@/api/domain/usecases/factories/make-create-user-usecase'
import {
	PostUserUseCaseInputDTO,
	PostUserUseCaseOutputDTO,
} from '@/api/infra/dtos/@example/create-user-dto'
import { makeCookieClient } from '@/api/infra/gateways/factories/make-cookie-client'
import { TOKEN_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

const createUserUseCase = makeCreateUserUseCase({ URI: '/users' })
const cookie = makeCookieClient()

type UsePostUserType = {
	onSuccess?: (data: PostUserUseCaseOutputDTO) => void
}

export function usePostUserCleanArch({ onSuccess }: UsePostUserType = {}) {
	const queryClient = useQueryClient()
	const token = cookie.get(TOKEN_KEY)
	const { t } = useTranslation()

	return useMutation({
		mutationFn: (payload: PostUserUseCaseInputDTO) =>
			createUserUseCase.execute(payload, token),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['GET_ONE_USER_KEY'],
			})
			onSuccess && onSuccess(data)

			toast.success(t('success-http.createUserSuccess'))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})
}
