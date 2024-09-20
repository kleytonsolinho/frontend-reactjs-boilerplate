import { AxiosHttpClient } from '../http/axios/axios-http-client'
import { IHttpClient } from '../http/http-client'
// import { FetchHttpClient } from '../http/fetch/fetch-http-client'

export function makeHttpClient(): IHttpClient {
	return new AxiosHttpClient()
	// return new FetchHttpClient()
}
