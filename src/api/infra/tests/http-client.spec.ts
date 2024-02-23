import { describe, expect, it } from 'vitest'
import { InMemoryHttpClient } from '../gateways/http/in-memory/in-memory-http-client'

type SutTypes = {
	sut: InMemoryHttpClient
}

const request = {
	url: 'any_url',
	method: 'get',
	body: {
		name: 'any_name',
		email: 'any_email',
		password: 'any_password',
	},
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		id: 'any_id',
	},
}

const makeSut = (): SutTypes => {
	const sut = new InMemoryHttpClient()
	return {
		sut,
	}
}

describe('CookieClient Gateway', () => {
	it('should request to httpClient correctly', async () => {
		const { sut } = makeSut()

		await sut.execute(request)

		expect(sut.url).toBe('any_url')
		expect(sut.method).toBe('get')
		expect(sut.body).toEqual(request.body)
		expect(sut.headers).toEqual(request.headers)
		expect(sut.params).toEqual(request.params)
	})
})
