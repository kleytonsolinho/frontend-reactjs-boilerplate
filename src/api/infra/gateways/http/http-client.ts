export type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export enum HttpStatusCode {
	ok = 200,
	created = 201,
	noContent = 204,
	badRequest = 400,
	unauthorized = 401,
	forbidden = 403,
	methodNotAllowed = 405,
	notFound = 404,
	serverError = 500,
}

export interface HttpRequest {
	url: string
	method: HttpMethod
	headers?: any
	body?: any
	params?: any
}

export interface HttpResponse<R = any> {
	statusCode: HttpStatusCode
	body?: R
}

export interface IHttpClient<R = any> {
	execute: (data: HttpRequest) => Promise<HttpResponse<R>>
}
