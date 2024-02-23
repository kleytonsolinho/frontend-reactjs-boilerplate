import { makeHttpClient } from '@/api/infra/gateways/factories/make-http-client'
import { makeApiUrl } from '@/api/infra/gateways/factories/make-url'
import { CreateUserUseCase } from '../@example/create-user-usecase'

export const makeCreateUserUseCase = ({
	URI,
}: {
	URI: string
}): CreateUserUseCase => {
	return new CreateUserUseCase(makeApiUrl(URI), makeHttpClient())
}
