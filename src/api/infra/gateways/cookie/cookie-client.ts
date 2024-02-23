export interface ISetCookie {
	set: (key: string, value: string) => void
}

export interface IGetCookie {
	get: (key: string) => string
}

export interface IDestroyCookie {
	destroy: (key: string) => void
}

export interface ICookieClient extends ISetCookie, IGetCookie, IDestroyCookie {}
