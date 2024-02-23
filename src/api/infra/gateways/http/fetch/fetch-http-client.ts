import {
	HttpRequest,
	HttpResponse,
	HttpStatusCode,
	IHttpClient,
} from '../http-client'

export class FetchHttpClient implements IHttpClient {
	async execute(data: HttpRequest): Promise<HttpResponse> {
		try {
			const response = await fetch(data.url, {
				method: data.method,
				headers: data.headers,
				body: JSON.stringify(data.body),
			})

			const responseBody = await response.json()

			return {
				statusCode: response.status,
				body: responseBody,
			}
		} catch (error) {
			return {
				statusCode: HttpStatusCode.serverError,
				body: error,
			}
		}
	}
}
