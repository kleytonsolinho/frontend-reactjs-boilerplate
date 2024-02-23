import axios, { AxiosError } from 'axios'

import {
	HttpRequest,
	HttpResponse,
	HttpStatusCode,
	IHttpClient,
} from '../http-client'

export class AxiosHttpClient implements IHttpClient {
	async execute(data: HttpRequest): Promise<HttpResponse> {
		try {
			const response = await axios.request({
				url: data.url,
				method: data.method,
				headers: data.headers,
				data: data.body,
				params: data.params,
			})

			return {
				statusCode: response.status,
				body: response.data,
			}
		} catch (error) {
			const axiosError = error as AxiosError
			return {
				statusCode: HttpStatusCode.serverError,
				body: axiosError,
			}
		}
	}
}
