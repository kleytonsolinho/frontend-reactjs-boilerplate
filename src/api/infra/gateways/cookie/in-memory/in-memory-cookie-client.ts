import { ICookieClient } from '../cookie-client'

export class InMemoryCookieClient implements ICookieClient {
	cookies: Record<string, string> = {}

	set(key: string, value: string): void {
		this.cookies[key] = value
	}

	get(key: string): string {
		return this.cookies[key]
	}

	destroy(key: string): void {
		delete this.cookies[key]
	}
}
