import { AxiosHttpClient } from '../http/axios/axios-http-client'
import { IHttpClient } from '../http/http-client'

export function makeHttpClient(): IHttpClient {
	return new AxiosHttpClient()
}
