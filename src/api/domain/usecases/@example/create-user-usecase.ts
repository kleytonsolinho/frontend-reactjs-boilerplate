import {
	CreateUserUseCaseInputDTO,
	CreateUserUseCaseOutputDTO,
} from '@/api/infra/dtos/@example/create-user-dto'
import {
	HttpClientError,
	IHttpClient,
} from '@/api/infra/gateways/http/http-client'
import { UnexpectedError } from '../../errors/unexpected-error'
import { UserAlreadyTakenError } from '../../errors/user-already-taken-error'

export interface ICreateUserUseCase {
	execute: (
		data: CreateUserUseCaseInputDTO,
		token: string
	) => Promise<CreateUserUseCaseOutputDTO>
}

export class CreateUserUseCase implements ICreateUserUseCase {
	private readonly url: string
	private readonly httpClient: IHttpClient

	constructor(url: string, httpClient: IHttpClient) {
		this.url = url
		this.httpClient = httpClient
	}

	public async execute(
		data: CreateUserUseCaseInputDTO,
		token?: string
	): Promise<CreateUserUseCaseOutputDTO> {
		const httpResponse = await this.httpClient.execute({
			url: this.url,
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: token ? `Bearer ${token}` : undefined,
			},
		})

		if (httpResponse.body instanceof HttpClientError) {
			switch (httpResponse.body.statusCode) {
				case 400:
					throw new UserAlreadyTakenError()
				default:
					throw new UnexpectedError()
			}
		}

		return httpResponse.body
	}
}
