import { UserAlreadyTakenError } from '@/api/domain/errors/user-already-taken-error'
import { CreateUserUseCaseInputDTO } from '@/api/infra/dtos/@example/create-user-dto'
import { InMemoryCookieClient } from '@/api/infra/gateways/cookie/in-memory/in-memory-cookie-client'
import { InMemoryHttpClient } from '@/api/infra/gateways/http/in-memory/in-memory-http-client'
import { describe, expect, it } from 'vitest'
import { CreateUserUseCase } from '../create-user-usecase'
import { UnexpectedError } from '@/api/domain/errors/unexpected-error'

type SutTypes = {
	sut: CreateUserUseCase
	httpClient: InMemoryHttpClient
	cookieClient: InMemoryCookieClient
}

const body = {
	name: 'any_name',
	email: 'any_email',
	password: 'any_password',
} as CreateUserUseCaseInputDTO

const makeSut = (): SutTypes => {
	const httpClient = new InMemoryHttpClient()
	const cookieClient = new InMemoryCookieClient()
	const sut = new CreateUserUseCase('any_url', httpClient)
	return {
		sut,
		httpClient,
		cookieClient,
	}
}

describe('CreateUserUseCase', () => {
	it('should call HttpClientGateway with correct values', async () => {
		const { sut, httpClient } = makeSut()

		await sut.execute(body)
		expect(httpClient.url).toBe('any_url')
		expect(httpClient.method).toBe('POST')
		expect(httpClient.body).toEqual(body)
		expect(httpClient.headers).toEqual({
			'Content-Type': 'application/json',
		})
	})

	it('should throw UserAlreadyTakenError if HttpClientGateway returns 400', async () => {
		const { sut, httpClient } = makeSut()

		httpClient.response.statusCode = 400
		httpClient.response.body = {
			error: {
				code: 400,
			},
		}
		await expect(() => sut.execute(body)).rejects.toBeInstanceOf(
			UserAlreadyTakenError
		)
	})

	it('should throw UnexpectedError if HttpClientGateway returns 500', async () => {
		const { sut, httpClient } = makeSut()
		httpClient.response.statusCode = 500
		httpClient.response.body = {
			error: {
				code: 500,
			},
		}

		await expect(() => sut.execute(body)).rejects.toBeInstanceOf(
			UnexpectedError
		)
	})

	it('should return body if HttpClientGateway returns 200', async () => {
		const { sut, httpClient } = makeSut()
		httpClient.response.statusCode = 200
		httpClient.response.body = {
			data: {
				id: 'any_id',
				name: 'any_name',
				email: 'any_email',
			},
		}
		const result = await sut.execute(body)

		expect(result).toEqual({
			data: {
				id: 'any_id',
				name: 'any_name',
				email: 'any_email',
			},
		})
	})

	it('should call CookieClient with correct values', async () => {
		const { sut, httpClient, cookieClient } = makeSut()
		cookieClient.set('token', 'any_token')
		const token = cookieClient.get('token')

		await sut.execute(body, token)
		expect(httpClient.headers).toEqual({
			'Content-Type': 'application/json',
			Authorization: `Bearer any_token`,
		})
	})
})
