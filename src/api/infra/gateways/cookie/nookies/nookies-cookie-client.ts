import nookies, { parseCookies } from 'nookies'
import { ICookieClient } from '../cookie-client'

export class NookiesCookieClient implements ICookieClient {
	set(key: string, value: string, exp?: number, ctx?: any): void {
		nookies.set(ctx, key, value, {
			path: '/',
			sameSite: true,
			maxAge: exp || 2592000, // 30 days by default
		})
	}

	get(key: string, ctx?: any): any {
		const cookies = parseCookies(ctx)
		return cookies[key]
	}

	destroy(key: string, ctx?: any): void {
		nookies.destroy(ctx, key, {
			path: '/',
			sameSite: true,
		})
	}
}
