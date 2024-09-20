import {
	HttpClientError,
	HttpResponse,
	HttpStatusCode,
	IHttpClient,
} from '../http-client'

export class InMemoryHttpClient implements IHttpClient {
	public url?: string
	public method?: string
	public body?: any
	public headers?: any
	public params?: any
	public token?: string
	public response: HttpResponse = {
		statusCode: HttpStatusCode.ok,
	}

	async execute(data: any, token: string = ''): Promise<HttpResponse> {
		this.url = data.url
		this.method = data.method
		this.body = data.body
		this.headers = data.headers
		this.params = data.params
		this.token = token

		if (this.response.statusCode >= 400) {
			return {
				statusCode: this.response.statusCode,
				body: new HttpClientError(
					this.response.statusCode,
					'Error message',
					this.response.body
				),
			}
		}

		return this.response
	}
}
