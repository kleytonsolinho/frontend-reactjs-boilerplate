import axios, { AxiosError } from 'axios'

import {
	HttpClientError,
	HttpRequest,
	HttpResponse,
	HttpStatusCode,
	IHttpClient,
} from '../http-client'
import { t } from 'i18next'

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
			const statusCode =
				axiosError.response?.status || HttpStatusCode.serverError
			const message = axiosError.message || t('error-http.UnexpectedError')

			return {
				statusCode,
				body: new HttpClientError(
					statusCode,
					message,
					axiosError.response?.data
				),
			}
		}
	}
}
