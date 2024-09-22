import {
	PostUserUseCaseInputDTO,
	PostUserUseCaseOutputDTO,
} from '@/api2/dtos/user-service-dto'
import { UserService } from '@/api2/services/user-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

type UsePostUserType = {
	onSuccess?: (data: PostUserUseCaseOutputDTO) => void
}

export function usePostUserService({ onSuccess }: UsePostUserType = {}) {
	const queryClient = useQueryClient()
	const { t } = useTranslation()

	return useMutation({
		mutationFn: (payload: PostUserUseCaseInputDTO) =>
			UserService.postUser(payload),
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
