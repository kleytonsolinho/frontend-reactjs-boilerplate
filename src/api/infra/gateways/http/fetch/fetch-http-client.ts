import { t } from 'i18next'
import {
	HttpClientError,
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

			if (!response.ok) {
				throw new HttpClientError(response.status, 'Fetch error', responseBody)
			}

			return {
				statusCode: response.status,
				body: responseBody,
			}
		} catch (error) {
			const message =
				error instanceof Error ? error.message : t('error-http.UnexpectedError')
			return {
				statusCode: HttpStatusCode.serverError,
				body: new HttpClientError(HttpStatusCode.serverError, message, error),
			}
		}
	}
}
