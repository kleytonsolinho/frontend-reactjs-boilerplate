import { toast } from 'sonner'
import { IUserService } from '../interfaces/user-service-interface'
import { AxiosError } from 'axios'
import { publicRequest } from '@/services/axios/api'

export const UserService: IUserService = {
	async postUser(payload) {
		try {
			const response = await publicRequest.post('/users', payload)
			return response.data
		} catch (error: unknown | AxiosError) {
			const responseError = error as AxiosError
			console.error('Ocorreu um erro:', responseError)
			if (responseError.response?.status === 401) {
				toast.error('Ocorreu um erro: Usuário ou senha inválidos')
			} else {
				toast.error(`Ocorreu um erro: ${responseError?.message}`)
			}
			throw error
		}
	},
}
